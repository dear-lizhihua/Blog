(self.webpackChunk_site_blog=self.webpackChunk_site_blog||[]).push([[7955],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5109:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),c=["components"],l={id:"http_client",title:"\u6d4f\u89c8\u5668\u626e\u6f14\u7684\u89d2\u8272\uff1aHTTP \u5ba2\u6237\u7aef"},a=void 0,u={unversionedId:"core/http/http_client",id:"core/http/http_client",isDocsHomePage:!1,title:"\u6d4f\u89c8\u5668\u626e\u6f14\u7684\u89d2\u8272\uff1aHTTP \u5ba2\u6237\u7aef",description:"\u5c06\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a\uff0c\u6700\u7ec8\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587",source:"@site/docs/core/http/client.md",sourceDirName:"core/http",slug:"/core/http/http_client",permalink:"/blog/docs/core/http/http_client",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/core/http/client.md",version:"current",frontMatter:{id:"http_client",title:"\u6d4f\u89c8\u5668\u626e\u6f14\u7684\u89d2\u8272\uff1aHTTP \u5ba2\u6237\u7aef"},sidebar:"docs",previous:{title:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Nest \u5e94\u7528\u7a0b\u5e8f",permalink:"/blog/docs/cloud/how_to_create_a_nest_application"},next:{title:"\u7406\u89e3 packages",permalink:"/blog/docs/core/packages/index"}},p=[{value:"\u5c06\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a\uff0c\u6700\u7ec8\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587",id:"\u5c06\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a\uff0c\u6700\u7ec8\u8f6c\u5316\u4e3a-http-\u8bf7\u6c42\u62a5\u6587",children:[{value:"\u6d4f\u89c8\u5668\u5c06\u4e09\u79cd\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a",id:"\u6d4f\u89c8\u5668\u5c06\u4e09\u79cd\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a",children:[]},{value:"\u6d4f\u89c8\u5668\u5c06\u4ea4\u4e92\u884c\u4e3a\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587",id:"\u6d4f\u89c8\u5668\u5c06\u4ea4\u4e92\u884c\u4e3a\u8f6c\u5316\u4e3a-http-\u8bf7\u6c42\u62a5\u6587",children:[]}]},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",children:[]}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5c06\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a\uff0c\u6700\u7ec8\u8f6c\u5316\u4e3a-http-\u8bf7\u6c42\u62a5\u6587"},"\u5c06\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a\uff0c\u6700\u7ec8\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587"),(0,i.kt)("p",null,"\u4e00\u822c\u5230\u7f51\u7edc\u901a\u4fe1\u662f\u501f\u52a9 HTTP \u534f\u8bae\u6765\u901a\u4fe1\u7684\uff0c\u4f46\u662f\u666e\u901a\u7528\u6237\u751a\u81f3\u6211\u4eec\u7814\u53d1\u672c\u8eab\uff0c\u4e5f\u4e0d\u53ef\u80fd\u624b\u52a8\u53bb\u751f\u6210 HTTP \u62a5\u6587\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\u7684\u7528\u6237\uff0c\u53ea\u4f1a\u9f20\u6807\u548c\u952e\u76d8\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u4ee3\u7406(proxy)\u5de5\u5177\uff0c\u6765\u628a\u7528\u6237\u4ea4\u4e92\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587\uff0c\u90a3\u4e48\u6d4f\u89c8\u5668\u5e94\u8fd0\u800c\u751f\u4e86\u3002"),(0,i.kt)("h3",{id:"\u6d4f\u89c8\u5668\u5c06\u4e09\u79cd\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a"},"\u6d4f\u89c8\u5668\u5c06\u4e09\u79cd\u7528\u6237\u4ea4\u4e92\u8f6c\u4e3a\u4ea4\u4e92\u884c\u4e3a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8df3\u8f6c\u9875\u9762\u884c\u4e3a\uff1a\u5728\u7528\u6237\u7684\u70b9\u51fb\u4e00\u4e2a\u8d85\u94fe\u63a5\u540e\uff0c\u8df3\u8f6c\u5230\u6b64\u8d85\u94fe\u63a5\u5bf9\u5e94\u7684\u9875\u9762\u4e0a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6253\u5f00\u9875\u9762\u884c\u4e3a\uff1a\u5728\u7528\u6237\u7684\u70b9\u51fb\u4e00\u4e2a\u8d85\u94fe\u63a5\u540e\uff0c\u6253\u5f00\u6b64\u8d85\u94fe\u63a5\u5bf9\u5e94\u7684\u9875\u9762\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u811a\u672c\u884c\u4e3a\uff1a\u4e5f\u53ef\u4ee5\u628a\u7528\u6237\u7684\u63d0\u4ea4\u8868\u5355\u6216\u5176\u4ed6\u4ea4\u4e92\uff0c\u8f6c\u5316\u4e3a\u4e00\u4e9b\u6570\u636e\u3002")),(0,i.kt)("h3",{id:"\u6d4f\u89c8\u5668\u5c06\u4ea4\u4e92\u884c\u4e3a\u8f6c\u5316\u4e3a-http-\u8bf7\u6c42\u62a5\u6587"},"\u6d4f\u89c8\u5668\u5c06\u4ea4\u4e92\u884c\u4e3a\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587"),(0,i.kt)("p",null,"\u4e0a\u9762\u63d0\u5230\u7684\u4e09\u79cd\u4ea4\u4e92\uff0c\u4f1a\u88ab\u8f6c\u4e3a\u4e09\u79cd\u884c\u4e3a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u8df3\u8f6c\u540e\u7684\u9875\u9762\uff0c\u6b64 URL \u4f1a\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587\uff0c\u6765\u83b7\u53d6\u6b64 URL \u5bf9\u5e94\u7684\u8d44\u6e90\uff0c\u6b64\u8d44\u6e90\u7531\u6d4f\u89c8\u5668\u76f4\u63a5\u5904\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u6253\u5f00\u540e\u7684\u9875\u9762\uff0c\u6b64 URL \u4f1a\u8f6c\u5316\u4e3a HTTP \u8bf7\u6c42\u62a5\u6587\uff0c\u6765\u83b7\u53d6\u6b64 URL \u5bf9\u5e94\u7684\u8d44\u6e90\uff0c\u6b64\u8d44\u6e90\u7531\u6d4f\u89c8\u5668\u76f4\u63a5\u5904\u7406\u3002\u548c\u4e0a\u9762\u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7\u4e00\u4e2a\u662f\u65b0\u7a97\u53e3\u6216\u65b0\u6807\u7b7e\u9875\u9762\u6253\u5f00"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u4e0a\u9762\u8f6c\u5316\u7684\u7528\u6237\u6570\u636e\uff0c\u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42\u62a5\u6587\uff0c\u6765\u83b7\u53d6\u6b64 URL \u5bf9\u5e94\u7684\u8d44\u6e90\uff0c\u6b64\u8d44\u6e90\u7531\u811a\u672c\u6765\u5904\u7406\uff0c\u800c\u975e\u4e0a\u9762\u4e24\u79cd\u7531\u6d4f\u89c8\u5668\u76f4\u63a5\u5904\u7406\u3002")),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\u4e09\u79cd\u4ea4\u4e92\u6700\u7ec8\u90fd\u4f1a\u4ea7\u751f HTTP \u8bf7\u6c42\u62a5\u6587\u3002"),(0,i.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u662f\u4e00\u4e2a\u5e2e\u52a9\u4f7f\u7528\u8005\u751f\u6210 HTTP \u62a5\u6587\u7684 HTTP \u5ba2\u6237\u7aef\u3002"))}f.isMDXComponent=!0}}]);