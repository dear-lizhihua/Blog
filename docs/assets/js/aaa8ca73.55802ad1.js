(self.webpackChunk_site_blog=self.webpackChunk_site_blog||[]).push([[9024],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1662:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={id:"how_to_select_a_npm_library",title:"\u9009\u62e9\u4e00\u4e2a npm library"},s=void 0,c={unversionedId:"extension/node_js/how_to_select_a_npm_library",id:"extension/node_js/how_to_select_a_npm_library",isDocsHomePage:!1,title:"\u9009\u62e9\u4e00\u4e2a npm library",description:"\u91cd\u8981\u58f0\u660e",source:"@site/docs/extension/node_js/how_to_select_a_library.md",sourceDirName:"extension/node_js",slug:"/extension/node_js/how_to_select_a_npm_library",permalink:"/blog/docs/extension/node_js/how_to_select_a_npm_library",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/extension/node_js/how_to_select_a_library.md",version:"current",frontMatter:{id:"how_to_select_a_npm_library",title:"\u9009\u62e9\u4e00\u4e2a npm library"}},p=[{value:"\u91cd\u8981\u58f0\u660e",id:"\u91cd\u8981\u58f0\u660e",children:[]},{value:"cookies, localStorage, sessionStorage, db",id:"cookies-localstorage-sessionstorage-db",children:[{value:"brownies",id:"brownies",children:[]},{value:"js-cookie",id:"js-cookie",children:[]},{value:"localForage",id:"localforage",children:[]}]},{value:"parse http request",id:"parse-http-request",children:[{value:"koa-body",id:"koa-body",children:[]},{value:"koa-bodyparser",id:"koa-bodyparser",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u91cd\u8981\u58f0\u660e"},"\u91cd\u8981\u58f0\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u7bc7\u6587\u7ae0\u7528\u4e8e\u6e05\u7406\u6536\u85cf\u5939\u4e2d\u7684\u5b58\u8d27"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u4eba\u4ec5\u7528\u4e8e\u5f00\u53d1\u4e00\u822c\u7684\u9700\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u4eba\u6ca1\u6709\u5728\u7279\u522b\u590d\u6742\u573a\u666f\u4e0b\u4f7f\u7528\u8fc7\uff0c\u5efa\u8bae\u8c28\u614e\u4f7f\u7528")),(0,a.kt)("h2",{id:"cookies-localstorage-sessionstorage-db"},"cookies, localStorage, sessionStorage, db"),(0,a.kt)("h3",{id:"brownies"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/franciscop/brownies"},"brownies")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 cookies, localStorage, sessionStorage, db \u56db\u79cd"),(0,a.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5f0f\u8bfb\u5199\uff0c\u5185\u90e8\u4f7f\u7528 Proxy \u4ee3\u7406\u3002")),(0,a.kt)("h3",{id:"js-cookie"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/js-cookie/js-cookie"},"js-cookie")),(0,a.kt)("p",null,"\u4f20\u7edf\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"localforage"},(0,a.kt)("a",{parentName:"h3",href:"http://localforage.github.io/localForage/"},"localForage")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Promise")),(0,a.kt)("h2",{id:"parse-http-request"},"parse http request"),(0,a.kt)("h3",{id:"koa-body"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/koajs/koa-body"},"koa-body")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5904\u7406\u5982\u4e0b request\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"multipart/form-data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"application/x-www-urlencoded")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"application/json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"application/json-patch+json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"application/vnd.api+json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"application/csp-report")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"text/xml")))),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5411 Koa \u6216 Node \u6253\u8865\u4e01\u7684\u9009\u9879"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u4e0a\u4f20"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"body, field, file")," \u5927\u5c0f\u9650\u5236")),(0,a.kt)("h3",{id:"koa-bodyparser"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/koajs/bodyparser"},"koa-bodyparser")))}d.isMDXComponent=!0}}]);