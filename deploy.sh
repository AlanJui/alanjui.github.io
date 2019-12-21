#!/bin/sh

# (1) Build
yarn build

# (2) Commit to Local Site
git add -f docs/.vuepress/dist && git commit -m "Update commit"

# (3) Publish to GitHub Repo
git subtree push --prefix docs/.vuepress/dist origin gh-pages