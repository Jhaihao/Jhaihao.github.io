(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{354:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"一、设置必备设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、设置必备设置"}},[s._v("#")]),s._v(" 一、设置必备设置")]),s._v(" "),t("h2",{attrs:{id:"鼠标不会动的话，需要设置："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#鼠标不会动的话，需要设置："}},[s._v("#")]),s._v(" 鼠标不会动的话，需要设置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79gy1fztj3hb035j30p20d2goo.jpg",alt:"image-20190203205421821"}})]),s._v(" "),t("h2",{attrs:{id:"网络连接设置："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络连接设置："}},[s._v("#")]),s._v(" 网络连接设置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79gy1fzungnruzkj30ik0djwfo.jpg",alt:"image-20190204201057032"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tNc79gy1fzunik7ggxj30ik0djabk.jpg",alt:"image-20190204201248933"}})]),s._v(" "),t("p",[t("code",[s._v("ssh -p 9701 root@127.0.0.1")])]),s._v(" "),t("p",[s._v("然后在终端中可以这样连接")]),s._v(" "),t("h1",{attrs:{id:"二、安装lnmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、安装lnmp"}},[s._v("#")]),s._v(" 二、安装lnmp")]),s._v(" "),t("p",[s._v("参考连接：https://my.oschina.net/silents/blog/1616103")]),s._v(" "),t("p",[s._v("在虚拟机安装好centos7.2 后")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果ifconfig 报错的话 。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n")])])]),t("p",[s._v("更新系统")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y update\n")])])]),t("h2",{attrs:{id:"安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装nginx")]),s._v(" "),t("p",[s._v("使用yum安装nginx的最新源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum localinstall http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n")])])]),t("p",[s._v("检查nginx源是否安装成功")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum repolist enabled "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx*"')]),s._v("\n")])])]),t("p",[s._v("安装nginx")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx  \n")])])]),t("p",[s._v("启动nginx")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start\n")])])]),t("p",[s._v("设置nginx服务器开机自启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx.service\n")])])]),t("p",[s._v("检查开机自动是否设置成功")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl list-dependencies "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])])]),t("p",[t("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79gy1fzrdi0crb8j30do01ldft.jpg",alt:"image-20190202000936072"}})]),s._v(" "),t("p",[s._v("检查nginx")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79gy1fzrdikw0jfj30k208g3zm.jpg",alt:"image-20190202001009266"}})]),s._v(" "),t("h2",{attrs:{id:"安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),t("p",[s._v("安装5.7.x的mysql源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y localinstall  http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm\n\n")])])]),t("p",[s._v("检查mysql源是否安装成功")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum repolist enabled "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql.*-community.*"')]),s._v("\n\n")])])]),t("p",[s._v("源设置成功之后, 继续安装mysql 并启动, 加入开机自启动服务,并在命令行验证")]),s._v(" "),t("p",[s._v("安装mysql")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum -y install mysql-community-server install mysql-community-devel    \n\n")])])]),t("p",[s._v("启动mysql")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("service mysqld start\n")])])]),t("p",[s._v("检查mysql启动是否正常")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("service mysqld status 或者 ps -ef | grep mysql\n")])])]),t("p",[s._v("设置mysqld服务开机自启动")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl enable mysqld.service\n")])])]),t("p",[s._v("检查mysqld开机自启动是否设置成功")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl list-dependencies | grep mysqld\n")])])]),t("p",[s._v("查看mysql的随机密码")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("grep 'temporary password' /var/log/mysqld.log\n")])])]),t("p",[s._v("使用查询得到的随机密码在终端登录")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql -u root -p  \n")])])]),t("p",[s._v("更改密码(mysql文档规定,密码必须包括大小写字母数字加特殊符号>8位)")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY '你要设置的密码';\n")])])]),t("p",[s._v("退出mysql客户端,用刚才修改的密码登录确保密码修改成功")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql -uroot -pxxxxx\n")])])]),t("p",[s._v("###使用本地工具连接虚拟机的mysql")]),s._v(" "),t("p",[s._v("参考连接：https://blog.csdn.net/EI__Nino/article/details/25069391")]),s._v(" "),t("p",[s._v("如果你想连接你的mysql的时候发生这个错误：")]),s._v(" "),t("p",[s._v("ERROR 1130: Host '192.168.1.3' is not allowed to connect to this MySQL server")]),s._v(" "),t("p",[s._v("注意：一个要在网络设置哪里配转发的端口")]),s._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1。 改表法。可能是你的帐号不允许从远程登陆，只能在localhost。这个时候只要在localhost的那台电脑，登入mysql后，更改 \"mysql\" 数据库里的 \"user\" 表里的 \"host\" 项，从\"localhost\"改称\"%\"\nmysql -u root -pvmwaremysql>use mysql;\nmysql>update user set host = '%' where user = 'root';\nmysql>select host, user from user;\n\n2. 授权法。例如，你想myuser使用mypassword从任何主机连接到mysql服务器的话。\n推荐这种：\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'mypassword' WITH GRANT OPTION;\nmysql>flush privileges;  这句一定要加上！！！\n")])])]),t("p",[t("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tNc79gy1fzupib3j96j30ht09yq3r.jpg",alt:"image-20190204212146612"}})]),s._v(" "),t("h2",{attrs:{id:"安装php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装php"}},[s._v("#")]),s._v(" 安装php")]),s._v(" "),t("p",[s._v("安装最新的php72的源并,安装对应的扩展支持")]),s._v(" "),t("p",[s._v("安装php72的源")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm\n")])])]),t("p",[s._v("检查源是否安装成功")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('yum repolist enabled | grep "webtatic*"\n')])])]),t("p",[s._v("安装php71和对应的扩展")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum -y install php72w php72w-fpm\n\nyum -y install php72w-mbstring php72w-common php72w-gd php72w-mcrypt\n\nyum -y install php72w-mysql php72w-xml php72w-cli php72w-devel\n\nyum -y install php72w-pecl-memcached php72w-pecl-redis php72w-opcache\n")])])]),t("p",[s._v("验证php7.1.x和扩展是否安装成功")]),s._v(" "),t("p",[s._v("验证php是否安装成功")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("php -v \n")])])]),t("p",[s._v("验证对应的扩展是否安装成功")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("php -m\n")])])]),t("p",[s._v("设置php-fpm并检测php-fpm的运行状态")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("启动php-fpm\n\n service php-fpm start\n\n 检查启动是否成功\n\n service php-fpm status\n\n 设置开机自启动\n\n systemctl enable php-fpm.service\n\n 检查开机自启动是否设置成功\n\n systemctl list-dependencies | grep php-fpm\n\n ps -ef | grep php-fpm\n")])])]),t("p",[s._v("修改php-fpm 配置")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim /etc/php-fpm.d/www.conf\nuser = nginx\ngroup = nginx\n")])])]),t("p",[s._v("重启php-fpm")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("service php-fpm restart\n")])])]),t("p",[s._v("让nginx 支持php 修改nginx配置")]),s._v(" "),t("p",[s._v("nginx标准配置")]),s._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404.")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect server error pages to the static page /50x.html  ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_pass")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_index")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_param")]),s._v("  SCRIPT_FILENAME  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("        fastcgi_params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("重启nginx服务器,查看配置是否成功")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("service nginx stop && service nginx start 或 nginx -s reload\n")])])]),t("p",[s._v("ngxinx 配置的")]),s._v(" "),t("p",[s._v("https://blog.csdn.net/h330531987/article/details/80645973")]),s._v(" "),t("h2",{attrs:{id:"安装redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装redis"}},[s._v("#")]),s._v(" 安装redis")]),s._v(" "),t("p",[s._v("参考链接: https://www.cnblogs.com/eczhou/p/5588375.html")]),s._v(" "),t("p",[s._v("1、安装Redis")]),s._v(" "),t("p",[s._v("1.1 如果没有安装wget，安装wget")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install wget  \n")])])]),t("p",[s._v("1.2 在"),t("a",{attrs:{href:"http://redis.io/download",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://redis.io/download"),t("OutboundLink")],1),s._v("页面查看redis版本，并下载安装")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wget http://download.redis.io/releases/redis-3.2.0.tar.gz\n")])])]),t("p",[s._v("1.3 解压，并进入解压目录进行编译。编译成功后会在redis-3.2.0目录下生成相关文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ tar xzf redis-3.2.0.tar.gz\n$ cd redis-3.2.0\n$ make\n")])])]),t("p",[s._v("如果make时没有发现gcc，那么安装gcc")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install gcc gcc-c++ kernel-devel  \n")])])]),t("p",[s._v("再次make，如果出现如下错误")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('zmalloc.h:50:31: error: jemalloc/jemalloc.h: No such file or directory\nzmalloc.h:55:2: error: #error "Newer version of jemalloc required"\n')])])]),t("p",[s._v("则使用如下命令进行make")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("make MALLOC=libc\n")])])]),t("p",[s._v("1.4 在文件夹redis-3.2.0下启动redis服务，输入如下命令后回车。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("./src/redis-server redis.conf &\n")])])]),t("p",[s._v("1.4 检测")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#检测后台进程是否存在\nps -ef |grep redis\n\n#检测6379端口是否在监听\nnetstat -lntp | grep 6379\n\n#使用`redis-cli`客户端检测连接是否正常\n./src/redis-cli\n127.0.0.1:6379> keys *\n(empty list or set)\n127.0.0.1:6379> set key "hello world"\nOK\n127.0.0.1:6379> get key\n"hello world"\n')])])]),t("p",[s._v("1.5 停止服务")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#使用客户端\n./src/redis-cli shutdown\n#因为Redis可以妥善处理SIGTERM信号，所以直接kill -9也是可以的\nkill -9 PID\n")])])]),t("h3",{attrs:{id:"安装redis扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装redis扩展"}},[s._v("#")]),s._v(" 安装redis扩展")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum -y install php72w-pecl-memcached php72w-pecl-redis php72w-opcache\n")])])]),t("p",[s._v("如果phpinfo看到了 redis 就是开启成功如果没有")]),s._v(" "),t("p",[s._v("参考:https://www.cnblogs.com/eczhou/p/5588375.html   下半部分的安装redis扩展")]),s._v(" "),t("h1",{attrs:{id:"三、virtualbox共享本机文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、virtualbox共享本机文件夹"}},[s._v("#")]),s._v(" 三、VirtualBox共享本机文件夹")]),s._v(" "),t("p",[s._v("VirtualBox中的Centos安装增强功能包VBoxLinuxAdditions和共享本机文件夹")]),s._v(" "),t("h2",{attrs:{id:"_1-安装需要的环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装需要的环境"}},[s._v("#")]),s._v(" 1.安装需要的环境")]),s._v(" "),t("p",[s._v("(一定要先安装gcc和gcc-c++，再安装下面两个kernel，否则kernel无法完全编译)")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('yum update\nyum install gcc\nyum install gcc-c++\nyum install make\nyum install kernel-headers\nyum install kernel-devel\nyum groupinstall "Development Tools"\n\n\n')])])]),t("h2",{attrs:{id:"_2-重启系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-重启系统"}},[s._v("#")]),s._v(" 2.重启系统")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("reboot\n\n")])])]),t("h2",{attrs:{id:"_3-挂载并安装-vboxguestadditions-iso"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-挂载并安装-vboxguestadditions-iso"}},[s._v("#")]),s._v(" 3.挂载并安装 VBoxGuestAdditions.iso")]),s._v(" "),t("p",[s._v("需要加载VBoxGuestAdditions，virtualbox安装目录里面会有VBoxGuestAdditions.iso，")]),s._v(" "),t("p",[s._v("或者到http://download.virtualbox.org/virtualbox下载对应版本的增强包")]),s._v(" "),t("p",[s._v("接着虚拟机选择分配光盘为VBoxGuestAdditions.iso")]),s._v(" "),t("p",[s._v("新增目录")]),s._v(" "),t("p",[t("code",[s._v("mkdir /home/website")]),s._v("\n挂载到CD/DVD虚拟光驱\n"),t("code",[s._v("mount -t auto /dev/cdrom /home/website")])]),s._v(" "),t("p",[s._v("(这里的cdrom是cd的，有时是dvd1，具体有什么光驱到 /dev目录下查看)")]),s._v(" "),t("p",[s._v("转到目录\n"),t("code",[s._v("cd /home/website")]),s._v(" "),t("code",[s._v("ll")]),s._v("\n此时看到列表中有VBoxLinuxAdditions.run说明挂载成功")]),s._v(" "),t("p",[t("code",[s._v("sh ./VBoxLinuxAdditions.run")])]),s._v(" "),t("p",[s._v("等待安装完成")]),s._v(" "),t("p",[s._v("(如果安装结果提示内核错误，尝试 使用"),t("code",[s._v("yum update kernel")]),s._v("更新内核,需要"),t("code",[s._v("reboot")]),s._v("后安装VBoxLinuxAdditions)")]),s._v(" "),t("p",[s._v("最后 重启以使 GuestAddition 生效")]),s._v(" "),t("p",[t("code",[s._v("reboot")])]),s._v(" "),t("h2",{attrs:{id:"_4-共享文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-共享文件夹"}},[s._v("#")]),s._v(" 4.共享文件夹")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79gy1fzupxqdg32j309n06wdg3.jpg",alt:"image-20190204213635733"}})]),s._v(" "),t("p",[s._v("挂载")]),s._v(" "),t("p",[t("code",[s._v("mount -t vboxsf wb /home/website")])]),s._v(" "),t("p",[s._v("切换目录并查看")]),s._v(" "),t("p",[t("code",[s._v("cd /home/website")])]),s._v(" "),t("p",[t("code",[s._v("ll")])]),s._v(" "),t("p",[s._v("如果成功则可以看到本机的文件")]),s._v(" "),t("p",[s._v("实现 开机自动挂载")]),s._v(" "),t("p",[t("code",[s._v("vi ~/.bashrc")])]),s._v(" "),t("p",[s._v("添加一行")]),s._v(" "),t("p",[t("code",[s._v("mount -t vboxsf wb /home/website")])]),s._v(" "),t("p",[s._v("保存退出")]),s._v(" "),t("h2",{attrs:{id:"_5-共享文件权限问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-共享文件权限问题"}},[s._v("#")]),s._v(" 5.共享文件权限问题")]),s._v(" "),t("p",[s._v("用网站访问文件的时候 肯定会 404 或者 403 或者其实没权限的问题出现的")]),s._v(" "),t("p",[s._v("问题：临时和永久关闭Selinux")]),s._v(" "),t("p",[s._v("如果共享文件，如果报403 可能是权限问题 ，")]),s._v(" "),t("p",[s._v("解决：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("临时关闭：\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# getenforce")]),s._v("\nEnforcing\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setenforce 0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# getenforce")]),s._v("\nPermissive\n永久关闭：\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/sysconfig/selinux")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SELINUX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enforcing 改为 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SELINUX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled\n\n")])])]),t("p",[s._v("如果还是不行，就再执行以下命令")]),s._v(" "),t("p",[s._v("解决方法也很简单，只需要将当期登录用户加入到vboxsf组就行了。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /usr/share/nginx/html  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改文件夹权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:vboxsf /usr/share/nginx/html  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改文件夹用户组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG vboxsf "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("   \n\n")])])]),t("h1",{attrs:{id:"常用命令："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令："}},[s._v("#")]),s._v(" 常用命令：")]),s._v(" "),t("p",[s._v("ln -s /usr/share/nginx/html html  软连接制作  在当前页面指向")])])}),[],!1,null,null,null);a.default=r.exports}}]);