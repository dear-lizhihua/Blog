(self.webpackChunk_site_blog=self.webpackChunk_site_blog||[]).push([[485],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||s;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,o=new Array(s);o[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1380:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(2122),l=t(9756),s=(t(7294),t(3905)),o=["components"],a={id:"install_zsh",title:"\u5b89\u88c5 zsh \u548c oh-my-zsh"},i=void 0,c={unversionedId:"linux/install_zsh",id:"linux/install_zsh",isDocsHomePage:!1,title:"\u5b89\u88c5 zsh \u548c oh-my-zsh",description:"\u53c2\u8003",source:"@site/docs/linux/install_zsh.md",sourceDirName:"linux",slug:"/linux/install_zsh",permalink:"/blog/docs/linux/install_zsh",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/linux/install_zsh.md",version:"current",frontMatter:{id:"install_zsh",title:"\u5b89\u88c5 zsh \u548c oh-my-zsh"},sidebar:"docs",previous:{title:"Debian 10 \u5b89\u88c5 SQLite 3",permalink:"/blog/docs/linux/debian_10_install_sqlite_3"},next:{title:"\u4f7f\u7528 SSH \u8fde\u63a5\u5230\u8fdc\u7a0b\u670d\u52a1",permalink:"/blog/docs/linux/use_ssh_to_connect_a_remote_server"}},u=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]},{value:"\u5b89\u88c5 zsh",id:"\u5b89\u88c5-zsh",children:[]},{value:"\u7ee7\u7eed\u5b89\u88c5 oh-my-zsh",id:"\u7ee7\u7eed\u5b89\u88c5-oh-my-zsh",children:[]},{value:"\u4fee\u6539\u9ed8\u8ba4 shell",id:"\u4fee\u6539\u9ed8\u8ba4-shell",children:[]}],h={toc:u};function p(e){var n=e.components,t=(0,l.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://xiaozhou.net/learn-the-command-line-iterm-and-zsh-2017-06-23.html"},"\u7a0b\u5e8f\u5458\u5185\u529f\u7cfb\u5217 - iTerm \u4e0e Zsh \u7bc7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://forums.centos.org/viewtopic.php?t=73864"},"CentOS 8.0.1905 - 'chsh' : command not found"))),(0,s.kt)("h3",{id:"\u5b89\u88c5-zsh"},"\u5b89\u88c5 zsh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"// CentOS \u5b89\u88c5\n$ yum -y install zsh\n\n// macOS \u5b89\u88c5\n$ brew install zsh\n\n// \u68c0\u67e5\u5b89\u88c5\u7ed3\u679c\n$ cat /etc/shells =>\n/bin/sh\n/bin/bash\n/usr/bin/sh\n/usr/bin/bash\n/usr/bin/zsh\n/bin/zsh\n")),(0,s.kt)("h3",{id:"\u7ee7\u7eed\u5b89\u88c5-oh-my-zsh"},"\u7ee7\u7eed\u5b89\u88c5 oh-my-zsh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'// \u4f7f\u7528\u811a\u672c\u5feb\u901f\u5b89\u88c5\n// curl \u65b9\u5f0f\n$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n// wget \u65b9\u5f0f\n$ sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"\n')),(0,s.kt)("h3",{id:"\u4fee\u6539\u9ed8\u8ba4-shell"},"\u4fee\u6539\u9ed8\u8ba4 shell"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ chsh -s /bin/zsh\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/blog/docs/linux/docker_install_centos"},"\u901a\u8fc7 Docker \u5b89\u88c5 CentOS 8")," \u4f1a\u62a5\u9519 chsh: command not found\uff0c\u9700\u8981\u5b89\u88c5 util-linux-user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ dnf install util-linux-user\n")),(0,s.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u518d\u6b21\u8fd0\u884c chsh -s /bin/zsh \u547d\u4ee4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ chsh -s /bin/zsh =>\nChanging shell for root.\nShell changed.\n")),(0,s.kt)("p",null,"\u9000\u51fa\u7ec8\u7aef\uff0c\u91cd\u65b0\u8fdb\u5165\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528 zsh"))}p.isMDXComponent=!0}}]);