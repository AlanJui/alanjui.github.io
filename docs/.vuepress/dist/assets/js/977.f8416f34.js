(window.webpackJsonp=window.webpackJsonp||[]).push([[977],{1547:function(a,s,e){"use strict";e.r(s);var n=e(10),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"執行完-pipenv-後-shell-prompt-怪怪的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#執行完-pipenv-後-shell-prompt-怪怪的"}},[a._v("#")]),a._v(" 執行完 pipenv 後 Shell Prompt 怪怪的")]),a._v(" "),e("p",[a._v("在我的 macOS 作業系統上，使用 ZSH 當成 Command Line 的操作介面時，天空是藍色的，以 pipenv 管理 Python 的虛擬環境時，一切運作正常。")]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/2018-10-18-Fig-01.png",alt:""}})]),a._v(" "),e("p",[a._v("但是這個看來賞心悅目的操作介面，在撰寫技術文件的時候，卻是個麻煩。因為在 Copy / Paste ，置入了文字編輯器後，呈現的系「亂碼二分之一」不忍卒睹的結果！  😿")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("  ~    11:16:51 \n   cd ~/workspace/Python/django_002\n\n  ~/workspace/Python/django_002     master      11:17:19 \n   pipenv shell\nLaunching subshell in virtual environment…\n . /Users/alanjui/.local/share/virtualenvs/django_002-Jo8xwSBw/bin/activate\n\n  ~/workspace/Python/django_002     master      11:17:44 \n    . /Users/alanjui/.local/share/virtualenvs/django_002-Jo8xwSBw/bin/activate\n\n   django_002-Jo8xwSBw   ~/workspace/Python/django_002     master      11:17:45 \n  \n")])])]),e("p",[a._v("天才的我，想說：「不然這樣好了！寫程式、做開發的時候，用這外觀看起來美美的 ZSH Shell；但在撰寫技術文件的時候，咱就改用成樸實的 Bash Shell 吧！」")]),a._v(" "),e("p",[a._v("唉呀！我真是太聰明了，這款小代誌，怎可能難倒咱家呢！")]),a._v(" "),e("p",[a._v("待 Bash Shell 的設定完成，開始啟用之後⋯⋯")]),a._v(" "),e("p",[a._v("悲劇了！！")]),a._v(" "),e("h2",{attrs:{id:"問題狀況"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#問題狀況"}},[a._v("#")]),a._v(" 問題狀況")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("進入 Django 專案的根目錄：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("alanjui@MBP-2018:~/workspace/Python/django_002 (master) \n$ \n")])])])]),a._v(" "),e("li",[e("p",[a._v("輸入指令："),e("code",[a._v("pipenv shell")]),a._v(" ，啟動 Django 專案所使用之 "),e("strong",[a._v("Python 虛擬環境")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("alanjui@MBP-2018:~/workspace/Python/django_002 (master) \n$ pipenv shell\nLaunching subshell in virtual environment…\nbash-5.0$  . /Users/alanjui/.local/share/virtualenvs/django_002-Jo8xwSBw/bin/activate\n(django_002) bash-5.0$ \n")])])])]),a._v(" "),e("li",[e("p",[a._v("Shell Prompt 顯示的格式，不再是原先的："),e("strong",[a._v("《使用者帳號》@《電腦名稱》")]),a._v("。")]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/2018-10-18-Fig-02.png",alt:""}})])])]),a._v(" "),e("h2",{attrs:{id:"問題解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#問題解析"}},[a._v("#")]),a._v(" 問題解析")]),a._v(" "),e("p",[a._v("masOS 作業系統的 Bash Shell ，其「預設設定檔」為： "),e("code",[a._v("~/.bash_profile")]),a._v("，不似 Linux 作業系統為： "),e("code",[a._v("~/.bashrc")]),a._v(" 。")]),a._v(" "),e("p",[a._v("但 "),e("strong",[a._v("pipenv shell")]),a._v(" 啟動後，會對 Prompt 顯示的設定做變更，其依據為： "),e("code",[a._v("~/.bashrc")]),a._v(" 檔內的設定 ，而不是 macOS 預設的 "),e("code",[a._v("~/.bash_profile")]),a._v(" 。")]),a._v(" "),e("p",[a._v("所以，新增個 "),e("code",[a._v("~/.bashrc")]),a._v(" 檔，使指令："),e("code",[a._v("source ~/.bashrc")]),a._v(" 的執行，如同直接執行："),e("code",[a._v("source ~/.bash_profile")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language-shell{2:2} line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if [ -f ~/.bash_profile ]; then\n    source ~/.bash_profile\nfi\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"排解方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排解方法"}},[a._v("#")]),a._v(" 排解方法")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("透過指令：exit，先關閉已啟動之 Python 虛擬環境。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("(django_002) bash-5.0$ exit\nexit\n\nalanjui@MBP-2018:~/workspace/Python/django_002 (master) \n$ \n")])])]),e("p",[e("img",{attrs:{src:"/img/2018-10-18-Fig-03.png",alt:""}})])]),a._v(" "),e("li",[e("p",[a._v("新增檔案： ~/.bashrc，檔內設定如下：")]),a._v(" "),e("p",[a._v("啟動編輯器：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ vim ~/.bashrc\n")])])]),e("p",[a._v("加入下述內容：")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -f ~/.bash_profile "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.bash_profile\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("回到 Django 專案目錄，透過指令：pipenv shell，重新啟動 Python 虛擬環境。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("alanjui@MBP-2018:~/workspace/Python/django_002 (master) \n$ pipenv shell\n")])])]),e("p",[e("img",{attrs:{src:"/img/2018-10-18-Fig-04.png",alt:""}})])])]),a._v(" "),e("h2",{attrs:{id:"參考文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#參考文件"}},[a._v("#")]),a._v(" 參考文件")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/pypa/pipenv/issues/844",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git PS1 error in pipenv shell #844"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://jamestw.logdown.com/posts/283485--bash-profile-bashrc-difference?source=post_page-----4834eaf73379----------------------",target:"_blank",rel:"noopener noreferrer"}},[a._v(".bash_profile 與 .bashrc 的差異"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);