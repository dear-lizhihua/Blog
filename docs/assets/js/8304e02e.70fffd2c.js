(self.webpackChunk_site_blog=self.webpackChunk_site_blog||[]).push([[1060],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3844:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={id:"koa_prerequisites",title:"Koa \u51c6\u5907\u9636\u6bb5"},u=void 0,l={unversionedId:"core/server/koa_prerequisites",id:"core/server/koa_prerequisites",isDocsHomePage:!1,title:"Koa \u51c6\u5907\u9636\u6bb5",description:"\u91cd\u8981\u58f0\u660e",source:"@site/docs/core/server/koa_prerequisites.md",sourceDirName:"core/server",slug:"/core/server/koa_prerequisites",permalink:"/blog/docs/core/server/koa_prerequisites",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/core/server/koa_prerequisites.md",version:"current",frontMatter:{id:"koa_prerequisites",title:"Koa \u51c6\u5907\u9636\u6bb5"}},s=[{value:"\u91cd\u8981\u58f0\u660e",id:"\u91cd\u8981\u58f0\u660e",children:[]},{value:"\u8bbe\u7f6e\u9879\u76ee",id:"\u8bbe\u7f6e\u9879\u76ee",children:[]},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",children:[]}],p={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u91cd\u8981\u58f0\u660e"},"\u91cd\u8981\u58f0\u660e"),(0,i.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u662f ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/server/how_to_build_a_hello_world_application_with_koa"},"\u4f7f\u7528 Koa \u6784\u5efa\u4e00\u4e2a hello world \u5e94\u7528\u7a0b\u5e8f")," \u7684\u7b80\u7565\u7248\u672c\uff0c\u4e3b\u8981\u7528\u4e8e\u521d\u59cb\u5316\u9879\u76ee\u3002"),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u9879\u76ee"},"\u8bbe\u7f6e\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir koa-project && cd koa-project\n$ npm init -y\n$ npm install koa@2\n")),(0,i.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"))}f.isMDXComponent=!0}}]);