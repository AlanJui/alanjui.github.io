(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{477:function(a,t,s){"use strict";s.r(t);var r=s(11),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"在-ubuntu-18-04-使用-vagrant-box-for-libvirt-建置-vm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-ubuntu-18-04-使用-vagrant-box-for-libvirt-建置-vm"}},[a._v("#")]),a._v(" 在 Ubuntu 18.04 使用 Vagrant Box for Libvirt 建置 VM")]),a._v(" "),s("p",[a._v("在 Ubuntu 作業系統，可使用 virt-manager 管理符合 Libvirt API 規格之「虛擬機器（VM：Virtual Machine）」。")]),a._v(" "),s("p",[a._v("VM 之建置作業，採用 Vagrant Box 建置 VM 可降低不少時間。但 Vagrant Box 預設之 VM 執行環境為：VirtualBox。 若不熟悉這些「眉角」，每當執行 "),s("strong",[a._v("vagrant up")]),a._v(" 指令後，總會在終端機看到 VM 無法正常啟動的錯誤訊息。")]),a._v(" "),s("p",[a._v("本文件用於指引：在 Ubuntu 18.04 作業系統，如何正確安裝 Vagrant Box for Libvirt ；及正常啟動 VM。")]),a._v(" "),s("h2",{attrs:{id:"安裝-vagrant-軟體套件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-軟體套件"}},[a._v("#")]),a._v(" 安裝 Vagrant 軟體套件")]),a._v(" "),s("p",[a._v("以下為：Vagrant 2.2.6 安裝作業。")]),a._v(" "),s("p",[a._v("作業之程序步驟為：")]),a._v(" "),s("ul",[s("li",[a._v("先在 Client 端電腦（作業系統：macOS），透過 Web Brower 下載安裝檔案；")]),a._v(" "),s("li",[a._v("再於 Server 端電腦（作業系統：Ubuntu 18.04）進行 Vagrant 安裝。")])]),a._v(" "),s("h3",{attrs:{id:"_1-在-client-端下載安裝檔案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-在-client-端下載安裝檔案"}},[a._v("#")]),a._v(" （1）在 Client 端下載安裝檔案")]),a._v(" "),s("p",[a._v("在 Mac 電腦，啟動 Web Browser 後，至 Vagrant 官網下載安裝檔案（.deb）。")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("https://www.vagrantup.com/downloads.html")])])]),a._v(" "),s("h3",{attrs:{id:"_2-在-server-端進行安裝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-server-端進行安裝"}},[a._v("#")]),a._v(" （2）在 Server 端進行安裝")]),a._v(" "),s("p",[a._v("在 Client 端電腦啟動「終端機」，透過 ssh 登入伺服器。然後將先前已下載之 Vagrant 安裝檔案，複製到 Server 端的硬碟。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("$ ssh web_admin@192.168.66.10\n$ cd ~/_tmp\n$ scp alanjui@192.168.66.100:~/Downloads/vagrant_2.2.6_x86_64.deb .\n")])])]),s("h3",{attrs:{id:"_3-透過-dpkg-安裝-vagrant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-透過-dpkg-安裝-vagrant"}},[a._v("#")]),a._v(" （3）透過 dpkg 安裝 Vagrant")]),a._v(" "),s("p",[a._v("使用 dpkg 執行檔案格式為 .deb 之安裝作業。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("$ sudo dpkg -i vagrant_2.2.6_x86_64.deb\n選取了原先未選的套件 vagrant。\n（讀取資料庫 ... 目前共安裝了 359404 個檔案和目錄。）\n準備解開 vagrant_2.2.6_x86_64.deb ...\n解開 vagrant (1:2.2.6) 中...\n設定 vagrant (1:2.2.6) ...\n")])])]),s("h3",{attrs:{id:"_4-驗證安裝結果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-驗證安裝結果"}},[a._v("#")]),a._v(" （4）驗證安裝結果")]),a._v(" "),s("p",[a._v("執行以下指令，確認 Vagrant 已完成安裝，且可正常運作。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("$ vagrant --version\nVagrant 2.2.6\n")])])]),s("h2",{attrs:{id:"安裝-vagrant-box-for-libvirt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-box-for-libvirt"}},[a._v("#")]),a._v(" 安裝 Vagrant Box for Libvirt")]),a._v(" "),s("p",[a._v("以下安裝之 Vagrant Box for Libvirt 為 Ubuntu 18.04.3 Desktop 版本。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ vagrant box "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" peru/ubuntu-18.04-desktop-amd64 --provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("libvirt\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p ~/workspace/vagrant-libvirt/ubuntu-1804 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),a._v("\n\n$ vagrant init peru/ubuntu-18.04-desktop-amd64 --box-version "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20190901.01")]),a._v("\n\n$ vagrant up\nBringing machine "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'default'")]),a._v(" up with "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'libvirt'")]),a._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Checking "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" box "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'peru/ubuntu-18.04-desktop-amd64'")]),a._v(" is up to date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Uploading base box image as volume into libvirt storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Creating image "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("snapshot of base box volume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Creating domain with the following settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Name:              ubuntu-1804_default\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Domain type:       kvm\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Cpus:              "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Feature:           acpi\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Feature:           apic\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Feature:           pae\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Memory:            2048M\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Management MAC:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Loader:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Nvram:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Base box:          peru/ubuntu-18.04-desktop-amd64\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Storage pool:      default\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Image:             /var/lib/libvirt/images/ubuntu-1804_default.img "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("50G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Volume Cache:      default\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Kernel:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Initrd:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Graphics Type:     spice\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Graphics Port:     -1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Graphics IP:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Base box:          peru/ubuntu-18.04-desktop-amd64\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Storage pool:      default\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Image:             /var/lib/libvirt/images/ubuntu-1804_default.img "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("50G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Volume Cache:      default\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Kernel:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Initrd:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Graphics Type:     spice\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Graphics Port:     -1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Graphics IP:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Graphics Password: Not defined\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Video Type:        qxl\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Video VRAM:        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9216")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Sound Type:    ich6\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- Keymap:            en-us\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- TPM Path:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- INPUT:             "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mouse, "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bus")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ps2\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- CHANNEL:             "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("unix, "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- CHANNEL:             "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("target_type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("virtio, "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("target_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("org.qemu.guest_agent.0\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- CHANNEL:             "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("spicevmc, "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- CHANNEL:             "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("target_type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("virtio, "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("target_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com.redhat.spice.0\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default:  -- RNG device model:  random\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Creating shared folders metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Starting domain.\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" domain to get an IP address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" SSH to become available"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n    default:\n    default: Vagrant insecure key detected. Vagrant will automatically replace\n    default: this with a newly generated keypair "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" better security.\n    default:\n    default: Inserting generated public key within guest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n    default: Removing insecure key from the guest "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" it's present"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n    default: Key inserted"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" Disconnecting and reconnecting using new SSH key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" default: Configuring and enabling network interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n$ vagrant status\nCurrent machine states:\n\ndefault                   running "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("libvirt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nThe Libvirt domain is running. To stop this machine, you can run\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("vagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" To destroy the machine, you can run "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("vagrant destroy"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" \n\n$ vagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v("\nWelcome to Ubuntu "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("18.04")]),a._v(".3 LTS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("GNU/Linux "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.15")]),a._v(".0-58-generic x86_64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    * Documentation:  https://help.ubuntu.com\n    * Management:     https://landscape.canonical.com\n    * Support:        https://ubuntu.com/advantage\n\n\n    * Canonical Livepatch is available "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" installation.\n    - Reduce system reboots and improve kernel security. Activate at:\n        https://ubuntu.com/livepatch\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" packages can be updated.\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" updates are security updates.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br"),s("span",{staticClass:"line-number"},[a._v("60")]),s("br"),s("span",{staticClass:"line-number"},[a._v("61")]),s("br"),s("span",{staticClass:"line-number"},[a._v("62")]),s("br"),s("span",{staticClass:"line-number"},[a._v("63")]),s("br"),s("span",{staticClass:"line-number"},[a._v("64")]),s("br"),s("span",{staticClass:"line-number"},[a._v("65")]),s("br"),s("span",{staticClass:"line-number"},[a._v("66")]),s("br"),s("span",{staticClass:"line-number"},[a._v("67")]),s("br"),s("span",{staticClass:"line-number"},[a._v("68")]),s("br"),s("span",{staticClass:"line-number"},[a._v("69")]),s("br"),s("span",{staticClass:"line-number"},[a._v("70")]),s("br"),s("span",{staticClass:"line-number"},[a._v("71")]),s("br"),s("span",{staticClass:"line-number"},[a._v("72")]),s("br"),s("span",{staticClass:"line-number"},[a._v("73")]),s("br"),s("span",{staticClass:"line-number"},[a._v("74")]),s("br"),s("span",{staticClass:"line-number"},[a._v("75")]),s("br"),s("span",{staticClass:"line-number"},[a._v("76")]),s("br"),s("span",{staticClass:"line-number"},[a._v("77")]),s("br"),s("span",{staticClass:"line-number"},[a._v("78")]),s("br"),s("span",{staticClass:"line-number"},[a._v("79")]),s("br"),s("span",{staticClass:"line-number"},[a._v("80")]),s("br"),s("span",{staticClass:"line-number"},[a._v("81")]),s("br"),s("span",{staticClass:"line-number"},[a._v("82")]),s("br"),s("span",{staticClass:"line-number"},[a._v("83")]),s("br"),s("span",{staticClass:"line-number"},[a._v("84")]),s("br"),s("span",{staticClass:"line-number"},[a._v("85")]),s("br"),s("span",{staticClass:"line-number"},[a._v("86")]),s("br"),s("span",{staticClass:"line-number"},[a._v("87")]),s("br")])]),s("h2",{attrs:{id:"參考文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#參考文件"}},[a._v("#")]),a._v(" 參考文件")]),a._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.linuxtechi.com/install-configure-kvm-ubuntu-18-04-server/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[a._v("How to Install and Configure KVM on Ubuntu 18.04 LTS Server")]),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.cumulusnetworks.com/cumulus-vx/Development-Environments/Vagrant-and-Libvirt-with-KVM-or-QEMU/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[a._v("Vagrant and Libvirt with KVM or QEMU")]),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://computingforgeeks.com/using-vagrant-with-libvirt-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[a._v("How to Use Vagrant with Libvirt on Linux")]),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=e.exports}}]);