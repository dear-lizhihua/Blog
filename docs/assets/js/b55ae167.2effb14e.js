(self.webpackChunk_site_blog=self.webpackChunk_site_blog||[]).push([[8024],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(b,a(a({ref:n},c),{},{components:t})):r.createElement(b,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3281:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(2122),i=t(9756),l=(t(7294),t(3905)),a=["components"],o={id:"debian_10_install_sqlite_3",title:"Debian 10 \u5b89\u88c5 SQLite 3"},s=void 0,u={unversionedId:"linux/debian_10_install_sqlite_3",id:"linux/debian_10_install_sqlite_3",isDocsHomePage:!1,title:"Debian 10 \u5b89\u88c5 SQLite 3",description:"\u5b89\u88c5 SQLite 3",source:"@site/docs/linux/debian_10_install_sqlite_3.md",sourceDirName:"linux",slug:"/linux/debian_10_install_sqlite_3",permalink:"/blog/docs/linux/debian_10_install_sqlite_3",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/linux/debian_10_install_sqlite_3.md",version:"current",frontMatter:{id:"debian_10_install_sqlite_3",title:"Debian 10 \u5b89\u88c5 SQLite 3"},sidebar:"docs",previous:{title:"Debian 10 \u5b89\u88c5 Node.js, npm, yarn",permalink:"/blog/docs/linux/debian_10_install_node_npm_yarn"},next:{title:"\u5b89\u88c5 zsh \u548c oh-my-zsh",permalink:"/blog/docs/linux/install_zsh"}},c=[{value:"\u5b89\u88c5 SQLite 3",id:"\u5b89\u88c5-sqlite-3",children:[]},{value:"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93",id:"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93",children:[]},{value:"\u6253\u5f00\u4e00\u4e2a\u6570\u636e\u5e93",id:"\u6253\u5f00\u4e00\u4e2a\u6570\u636e\u5e93",children:[]},{value:"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u8868",id:"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u8868",children:[]},{value:"\u63d2\u5165\u51e0\u6761\u6570\u636e",id:"\u63d2\u5165\u51e0\u6761\u6570\u636e",children:[]},{value:"\u9000\u51fa SQLite \u7ec8\u7aef",id:"\u9000\u51fa-sqlite-\u7ec8\u7aef",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u5b89\u88c5-sqlite-3"},"\u5b89\u88c5 SQLite 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ apt-get update\n$ apt-get install sqlite3 -y\n$ sqlite3 --version\n3.27.2 2019-02-25 16:06:06 bd49a8271d650fa89e446b42e513b595a717b9212c91dd384aab871fc1d0alt1\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93"},"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u6211\u4eec\u5728 Debian \u7ec8\u7aef\u7684\u6839\u76ee\u5f55 /root \u4e0b\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6ce8\u610f\u6b64\u6570\u636e\u5e93\u6587\u4ef6\u7684\u8def\u5f84\u662f /root/main.db\n$ sqlite3 main.db\n")),(0,l.kt)("p",null,"\u7136\u540e\u8fdb\u5165 SQLite \u7ec8\u7aef\uff0c\u8fd9\u65f6\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},".exit")," \u547d\u4ee4\u9000\u51fa\u7ec8\u7aef\u3002\n\u518d\u770b\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u591a\u4e86\u4e00\u4e2a main.db \u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ls -al\n-rw-r--r-- 1 root root    0 May 21 21:58 main.db\n")),(0,l.kt)("h3",{id:"\u6253\u5f00\u4e00\u4e2a\u6570\u636e\u5e93"},"\u6253\u5f00\u4e00\u4e2a\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sqlite3 // \u8fdb\u5165 SQLite \u7ec8\u7aef\u3002\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlite> ")," \u8868\u793a SQLite \u7ec8\u7aef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6253\u5f00\u4e00\u4e2a\u6570\u636e\u5e93\u6587\u4ef6\nsqlite> .open main.db\n# \u5c55\u793a\u5168\u90e8\u6570\u636e\u5e93\nsqlite> .databases\nmain: /root/main.db\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u8868"},"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE TABLE main.users(\n  ID   INT    PRIMARY KEY    NOT NULL,\n  NAME TEXT,\n  AGE  INT\n);\n\n# \u5c55\u793a\u5168\u90e8\u6570\u636e\u8868\nsqlite> .tables\nusers\n")),(0,l.kt)("h3",{id:"\u63d2\u5165\u51e0\u6761\u6570\u636e"},"\u63d2\u5165\u51e0\u6761\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sqlite> INSERT INTO users (ID, NAME, AGE)  \nVALUES (1, 'lizhihua', 18);\nsqlite> INSERT INTO users (ID, NAME, AGE)  \nVALUES (2, 'lizhihua2', 20);\n\n# \u5c55\u793a\u5168\u90e8\u6570\u636e\u8868\nsqlite> select * from users;\n1|lizhihua|18\n2|lizhihua2|20\n")),(0,l.kt)("h3",{id:"\u9000\u51fa-sqlite-\u7ec8\u7aef"},"\u9000\u51fa SQLite \u7ec8\u7aef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sqlite> .exit\n")))}d.isMDXComponent=!0}}]);