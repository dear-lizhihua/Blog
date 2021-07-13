(self.webpackChunk_site_blog=self.webpackChunk_site_blog||[]).push([[9897],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(n),m=i,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7682:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),a=["components"],o={id:"macos_install_git",title:"macOS \u5b89\u88c5 Git"},s=void 0,c={unversionedId:"linux/macos_install_git",id:"linux/macos_install_git",isDocsHomePage:!1,title:"macOS \u5b89\u88c5 Git",description:"\u5b89\u88c5 Git",source:"@site/docs/linux/macos_install_git.md",sourceDirName:"linux",slug:"/linux/macos_install_git",permalink:"/blog/docs/linux/macos_install_git",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/linux/macos_install_git.md",version:"current",frontMatter:{id:"macos_install_git",title:"macOS \u5b89\u88c5 Git"},sidebar:"docs",previous:{title:"macOS \u5b89\u88c5 nrm\uff0c\u901a\u8fc7 nrm \u7ba1\u7406 npm registry",permalink:"/blog/docs/linux/macos_install_nrm"},next:{title:"macOS \u5b89\u88c5 Rime \u8f93\u5165\u6cd5",permalink:"/blog/docs/linux/macos_install_rime"}},u=[{value:"\u5b89\u88c5 Git",id:"\u5b89\u88c5-git",children:[]},{value:"\u91cd\u65b0\u94fe\u63a5 Git",id:"\u91cd\u65b0\u94fe\u63a5-git",children:[]},{value:"\u5f7b\u5e95\u5378\u8f7d\u5728 /usr/local/git \u76ee\u5f55\u4e0b\u5b89\u88c5\u7684 Git",id:"\u5f7b\u5e95\u5378\u8f7d\u5728-usrlocalgit-\u76ee\u5f55\u4e0b\u5b89\u88c5\u7684-git",children:[]},{value:"\u9a8c\u8bc1 Git \u5b89\u88c5\u6210\u529f",id:"\u9a8c\u8bc1-git-\u5b89\u88c5\u6210\u529f",children:[]}],p={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u5b89\u88c5-git"},"\u5b89\u88c5 Git"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install git\n")),(0,l.kt)("h3",{id:"\u91cd\u65b0\u94fe\u63a5-git"},"\u91cd\u65b0\u94fe\u63a5 Git"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u63d0\u793a\u4f60\u5df2\u7ecf\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/git")," \u5b89\u88c5\u8fc7 Git\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew link git\nLinking /usr/local/Cellar/git/2.31.1...\nError: Could not symlink bin/git\nTarget /usr/local/bin/git\nalready exists. You may want to remove it:\n  rm '/usr/local/bin/git'\n\nTo force the link and overwrite all conflicting files:\n  brew link --overwrite git\n\nTo list all files that would be deleted:\n  brew link --overwrite --dry-run git\n")),(0,l.kt)("p",null,"\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/git")," \u76ee\u5f55\uff0c\u628a Git \u94fe\u63a5\u5230\u6700\u65b0\u7248\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ rm '/usr/local/bin/git'\n$ brew link --overwrite git\n")),(0,l.kt)("h3",{id:"\u5f7b\u5e95\u5378\u8f7d\u5728-usrlocalgit-\u76ee\u5f55\u4e0b\u5b89\u88c5\u7684-git"},"\u5f7b\u5e95\u5378\u8f7d\u5728 /usr/local/git \u76ee\u5f55\u4e0b\u5b89\u88c5\u7684 Git"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://superuser.com/questions/454694/removing-git-from-usr-bin"},"Removing git from /usr/bin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/brandonsimpson/54d9e085c9fde5e6ad3a"},"Re-installing Git on Mac OSX with Brew"))),(0,l.kt)("p",null,"\u5fd8\u4e86\u4e4b\u524d\u5728 /usr/local/git \u76ee\u5f55\u4e0b\u662f\u600e\u4e48\u5b89\u88c5\u7684 Git\uff0c\u6211\u4eec\u9700\u8981\u5220\u9664\u65e7\u7248\u672c\u7684 Git\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5220\u9664\u811a\u672c uninstall.sh\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ vi uninstall.sh\n\n# \u8f93\u5165\u5982\u4e0b\u5185\u5bb9\nif [ ! -r "/usr/local/git" ]; then\n  echo "Git doesn\'t appear to be installed via this installer.  Aborting"\n  exit 1\nfi\necho "This will uninstall git by removing /usr/local/git/**/*, /etc/paths.d/git, /etc/manpaths.d/git"\nprintf "Type \'yes\' if you sure you wish to continue: "\nread response\nif [ "$response" == "yes" ]; then\n  sudo rm -rf /usr/local/git/\n  sudo rm /etc/paths.d/git\n  sudo rm /etc/manpaths.d/git\n  pkgutil --packages | grep GitOSX.Installer | xargs -I {} sudo pkgutil --forget {}\n  echo "Uninstalled"\nelse\n  echo "Aborted"\n  exit 1\nfi\n\nexit 0\n')),(0,l.kt)("p",null,"\u6267\u884c\u5378\u8f7d\u811a\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh uninstall.sh\n")),(0,l.kt)("h3",{id:"\u9a8c\u8bc1-git-\u5b89\u88c5\u6210\u529f"},"\u9a8c\u8bc1 Git \u5b89\u88c5\u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ git --version\n")))}g.isMDXComponent=!0}}]);