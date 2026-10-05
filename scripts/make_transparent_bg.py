#!/usr/bin/env python3
"""Remove baked-in checkerboard (fake transparency) and solid light background."""
from __future__ import annotations

import argparse
from collections import deque

import numpy as np
from PIL import Image, ImageFilter


def make_transparent(src: str, dst: str) -> None:
    img = Image.open(src).convert("RGBA")
    arr = np.array(img)
    h, w = arr.shape[:2]
    r = arr[:, :, 0].astype(np.int16)
    g = arr[:, :, 1].astype(np.int16)
    b = arr[:, :, 2].astype(np.int16)
    a = arr[:, :, 3]

    maxdiff = np.maximum(
        np.maximum(np.abs(r - g), np.abs(g - b)), np.abs(r - b)
    )
    luma = (r.astype(np.int32) + g + b) // 3

    is_dark = (luma <= 90) & (a > 0)
    is_color = (maxdiff >= 18) & (a > 0)
    core = is_dark | is_color

    core_img = Image.fromarray((core.astype(np.uint8) * 255), mode="L")
    sealed = np.array(core_img.filter(ImageFilter.MaxFilter(5))) > 0
    sealed = (
        np.array(
            Image.fromarray((sealed.astype(np.uint8) * 255), "L").filter(
                ImageFilter.MaxFilter(3)
            )
        )
        > 0
    )

    is_grayish = maxdiff <= 12
    already_t = a == 0
    can_flood = (already_t | (is_grayish & (luma >= 175) & (a > 0))) & (~sealed)

    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    def seed(y: int, x: int) -> None:
        if 0 <= y < h and 0 <= x < w and not visited[y, x] and can_flood[y, x]:
            visited[y, x] = True
            q.append((y, x))

    for x in range(w):
        seed(0, x)
        seed(h - 1, x)
    for y in range(h):
        seed(y, 0)
        seed(y, w - 1)

    gray = is_grayish & (luma >= 188) & (luma <= 200) & (a == 255) & (~sealed)
    ys, xs = np.where(gray | (already_t & ~sealed))
    for y, x in zip(ys.tolist(), xs.tolist()):
        seed(y, x)

    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while q:
        y, x = q.popleft()
        for dy, dx in dirs:
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and can_flood[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

    overhang = sealed & (~core) & is_grayish & (luma >= 175) & (a > 0) & (~visited)
    neigh = np.zeros((h, w), dtype=bool)
    neigh[1:, :] |= visited[:-1, :]
    neigh[:-1, :] |= visited[1:, :]
    neigh[:, 1:] |= visited[:, :-1]
    neigh[:, :-1] |= visited[:, 1:]
    neigh[1:, 1:] |= visited[:-1, :-1]
    neigh[1:, :-1] |= visited[:-1, 1:]
    neigh[:-1, 1:] |= visited[1:, :-1]
    neigh[:-1, :-1] |= visited[1:, 1:]
    visited |= overhang & neigh

    can2 = (already_t | (is_grayish & (luma >= 175) & (a > 0))) & (~core)
    q = deque(zip(*np.where(visited)))
    while q:
        y, x = q.popleft()
        for dy, dx in dirs:
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and can2[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

    remain_gray = (~visited) & is_grayish & (luma >= 188) & (luma <= 200) & (a > 0) & (~is_color)
    ng = np.zeros((h, w), dtype=bool)
    ng[1:, :] |= visited[:-1, :]
    ng[:-1, :] |= visited[1:, :]
    ng[:, 1:] |= visited[:, :-1]
    ng[:, :-1] |= visited[:, 1:]
    visited |= remain_gray & ng
    color_n = np.zeros((h, w), dtype=bool)
    color_n[1:, :] |= is_color[:-1, :]
    color_n[:-1, :] |= is_color[1:, :]
    color_n[:, 1:] |= is_color[:, :-1]
    color_n[:, :-1] |= is_color[:, 1:]
    visited |= remain_gray & (~color_n)

    for _ in range(8):
        neigh_c = np.zeros((h, w), dtype=np.uint8)
        neigh_c[1:, :] += visited[:-1, :]
        neigh_c[:-1, :] += visited[1:, :]
        neigh_c[:, 1:] += visited[:, :-1]
        neigh_c[:, :-1] += visited[:, 1:]
        cand = (~visited) & (~is_color) & is_grayish & (a > 0) & (luma >= 80) & (neigh_c >= 3)
        if cand.sum() == 0:
            break
        visited |= cand

    out = arr.copy()
    out[visited] = [0, 0, 0, 0]
    Image.fromarray(out, "RGBA").save(dst, optimize=True)


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("src")
    p.add_argument("dst")
    args = p.parse_args()
    make_transparent(args.src, args.dst)


if __name__ == "__main__":
    main()
