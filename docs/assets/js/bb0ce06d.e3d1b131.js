(self.webpackChunk_site_blog=self.webpackChunk_site_blog||[]).push([[4144],{3905:function(e,o,t){"use strict";t.d(o,{Zo:function(){return d},kt:function(){return p}});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},d=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},g={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=r,h=u["".concat(c,".").concat(p)]||u[p]||g[p]||a;return t?n.createElement(h,i(i({ref:o},d),{},{components:t})):n.createElement(h,i({ref:o},d))}));function p(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4823:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],s={id:"understanding_the_google_cloud_network_edge",title:"\u540d\u79f0\u65e0\u5173\u7d27\u8981\uff0c\u91cd\u8981\u7684\u662f\u7406\u89e3\u8c37\u6b4c\u4e91\u7f51\u7edc\u8fb9\u7f18"},c=void 0,l={unversionedId:"cloud/understanding_the_google_cloud_network_edge",id:"cloud/understanding_the_google_cloud_network_edge",isDocsHomePage:!1,title:"\u540d\u79f0\u65e0\u5173\u7d27\u8981\uff0c\u91cd\u8981\u7684\u662f\u7406\u89e3\u8c37\u6b4c\u4e91\u7f51\u7edc\u8fb9\u7f18",description:"\u539f\u6587\uff1aWhat\u2019s in a name? Understanding the Google Cloud network \u201cedge\u201d",source:"@site/docs/cloud/understanding_the_google_cloud_network_edge.md",sourceDirName:"cloud",slug:"/cloud/understanding_the_google_cloud_network_edge",permalink:"/blog/docs/cloud/understanding_the_google_cloud_network_edge",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cloud/understanding_the_google_cloud_network_edge.md",version:"current",frontMatter:{id:"understanding_the_google_cloud_network_edge",title:"\u540d\u79f0\u65e0\u5173\u7d27\u8981\uff0c\u91cd\u8981\u7684\u662f\u7406\u89e3\u8c37\u6b4c\u4e91\u7f51\u7edc\u8fb9\u7f18"},sidebar:"docs",previous:{title:"\u8c37\u6b4c\u4e91\u57f9\u8bad - Cloud IAM \u81ea\u5b9a\u4e49\u89d2\u8272\uff08\u82f1\u6587\uff09",permalink:"/blog/docs/cloud/google_cloud_training_cloud_iam_custom_roles_en"},next:{title:"\u9009\u8d2d\u4e00\u4e2a\u4e91\u8ba1\u7b97\u670d\u52a1",permalink:"/blog/docs/cloud/how_to_buy_a_cloud_computing_service"}},d=[{value:"GCP regions and zones",id:"gcp-regions-and-zones",children:[]},{value:"Edge POPs",id:"edge-pops",children:[]},{value:"Cloud CDN",id:"cloud-cdn",children:[]},{value:"Cloud Interconnect POPs",id:"cloud-interconnect-pops",children:[]},{value:"Edge nodes, or Google Global Cache",id:"edge-nodes-or-google-global-cache",children:[]},{value:"Region extensions",id:"region-extensions",children:[]},{value:"To the edge and back",id:"to-the-edge-and-back",children:[]}],g={toc:d};function u(e){var o=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u539f\u6587\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/what-is-load-balancing"},"What\u2019s in a name? Understanding the Google Cloud network \u201cedge\u201d"))),(0,a.kt)("p",null,"\u201c\u8fb9\u7f18(edge)\u201d\u8fd9\u4e2a\u540d\u79f0\u662f\u7ea6\u5b9a\u4fd7\u6210\u7684\uff0c\u7406\u89e3\u5176\u672c\u8d28\u66f4\u4e3a\u91cd\u8981\u3002"),(0,a.kt)("p",null,"Google ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/gcp/google-a-leader-in-gartner-cips-mq"},"\u81f4\u529b\u4e8e\u5efa\u8bbe\u57fa\u7840\u67b6\u6784"),"\uff0c\u65e0\u8bba\u4f60\u5728\u4e16\u754c\u4e0a\u7684\u4f55\u5904\uff0c\u90fd\u53ef\u4ee5\u4f7f\u4f60\u4f53\u9a8c\u73b0\u4ee3\u5316\u548c\u8fd0\u884c\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff08\u8bd1\u8005\u6ce8\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/"},"\u5de5\u4f5c\u8d1f\u8f7d\u662f\u5728 Kubernetes \u4e0a\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f"),"\uff09\uff0c\u5e76\u4e0e\u66f4\u591a\u7528\u6237\u5efa\u7acb\u8054\u7cfb\u3002\u6211\u4eec\u5e7f\u6cdb\u7684\u5168\u7403 ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/about/locations/#network"},"\u7f51\u7edc")," \u662f\u6b64\u57fa\u7840\u67b6\u6784\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u53ef\u4ee5\u4e3a Google Cloud \u5ba2\u6237\u63d0\u4f9b\u4e00\u6d41\u7684\u8fde\u63a5\uff1b\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://peering.google.com/#/"},"\u8fb9\u7f18\u7f51\u7edc(edge network)")," \u53ef\u4ee5\u4f7f\u4f60\u4e0e\u4e92\u8054\u7f51\u670d\u52a1\u63d0\u4f9b\u5546(ISP)\u548c\u7ec8\u7aef\u5ba2\u6237\u5efa\u7acb\u8054\u7cfb\u3002"),(0,a.kt)("p",null,"When it comes to choosing how you connect to Google Cloud, we provide a variety of flexible options that optimize performance and cost. But when it comes to the Google network edge, what constitutes an edge point\\? Depending on your requirements and connectivity preferences, your organization may view different demarcation points in our network as the \u201cedge,\u201d each of which performs traffic handoffs in their own way. For example, a telco customer might consider the edge to be where Google Global Caches ","(","GGC",")"," are located, rather than an edge point of presence ","(","POP",")"," where peering occurs."),(0,a.kt)("p",null,"In this blog post, we describe the various network points of presence within our edge, how they connect to Google Cloud, and how traffic handoffs occur. Armed with this information, you can make a more informed decision about how best to connect to Google Cloud."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/gweb-cloudblog-publish/images/cloud_network_diagram.max-2800x2800.jpg"},(0,a.kt)("img",{parentName:"a",src:"https://storage.googleapis.com/gweb-cloudblog-publish/images/cloud_network_diagram.max-1600x1600.jpg",alt:"cloud network diagram.jpg"})),(0,a.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/gweb-cloudblog-publish/images/cloud_network_diagram.max-2800x2800.jpg"})),(0,a.kt)("h3",{id:"gcp-regions-and-zones"},"GCP regions and zones"),(0,a.kt)("p",null,"The first thing to think about when considering your edge options is where your workloads run in Google Cloud. Google Cloud hosts compute resources in multiple locations worldwide, which comprise different ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones"},"regions and zones"),". A region includes data centers in a specific geographical location where you can host your resources. Regions have three or more zones. For example, the us-west1 region denotes a region on the west coast of the United States that has three zones: us-west1-a, us-west1-b, and us-west1-c."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/gweb-cloudblog-publish/images/gcp_regions_and_zones.max-2800x2800.jpg"},(0,a.kt)("img",{parentName:"a",src:"https://storage.googleapis.com/gweb-cloudblog-publish/images/gcp_regions_and_zones.max-1000x1000.jpg",alt:"gcp regions and zones.jpg"})),(0,a.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/gweb-cloudblog-publish/images/gcp_regions_and_zones.max-2800x2800.jpg"})),(0,a.kt)("h3",{id:"edge-pops"},"Edge POPs"),(0,a.kt)("p",null,"Our ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/edge-locations"},"edge POPs")," are where we ",(0,a.kt)("a",{parentName:"p",href:"https://peering.google.com/#/infrastructure"},"connect Google's network to the Internet via peering"),". We're present on over ",(0,a.kt)("a",{parentName:"p",href:"https://www.peeringdb.com/net/433"},"180 internet exchanges and at over 160 interconnection facilities")," around the world. Google operates a large, global meshed network that connects our edge POPs to our data centers. By operating an extensive global network of interconnection points, we can bring Google traffic closer to our peers, thereby reducing their costs, latency, and providing end users with a better experience."),(0,a.kt)("p",null,"Google directly interconnects with all major Internet Service Providers ","(","ISPs",")"," and the vast majority of traffic from Google's network to our customers is transmitted via direct interconnections with the client's ISP."),(0,a.kt)("h3",{id:"cloud-cdn"},"Cloud CDN"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/cdn"},"Cloud CDN")," ","(","Content Delivery Network",")"," uses Google's globally distributed edge POPs to cache Cloud content close to end users. Cloud CDN relies on infrastructure at edge POPs that Google uses to cache content associated with its own web properties that serve billions of users. This approach brings Cloud content closer to customers and end users, and connects individual POPs into as many networks as possible. This reduces latency and ensures that we have capacity for large traffic spikes ","(","for example, for streaming media events or holiday sales",")","."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/gweb-cloudblog-publish/images/cloud_cdn_locations.max-2800x2800.jpg"},(0,a.kt)("img",{parentName:"a",src:"https://storage.googleapis.com/gweb-cloudblog-publish/images/cloud_cdn_locations.max-1000x1000.jpg",alt:"cloud cdn locations.jpg"})),(0,a.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/gweb-cloudblog-publish/images/cloud_cdn_locations.max-2800x2800.jpg"})),(0,a.kt)("h3",{id:"cloud-interconnect-pops"},"Cloud Interconnect POPs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"},"Dedicated Interconnect")," provides direct physical connections between your on-premises network and Google's network. Dedicated Interconnect enables you to efficiently transfer large amounts of data between networks. For Dedicated Interconnect, your network must physically meet Google's network in a supported colocation facility, also known as an Interconnect connection location. This facility is where a vendor, the colocation facility provider, provisions a circuit between your network and a Google point of presence. You may also use ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview"},"Partner Interconnect")," to connect to Google through a supported service provider. Today, you can provision an Interconnect to Google Cloud in these ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/network-connectivity/docs/interconnect/concepts/choosing-colocation-facilities"},"95+ locations"),"."),(0,a.kt)("h3",{id:"edge-nodes-or-google-global-cache"},"Edge nodes, or Google Global Cache"),(0,a.kt)("p",null,"Our edge nodes represent the tier of Google's infrastructure closest to Google\u2019s users, operating from over ",(0,a.kt)("a",{parentName:"p",href:"https://peering.google.com/#/infrastructure"},"1,300 cities in more than 200 countries and territories"),". With our edge nodes, network operators and ISPs host Google-supplied caches inside their network. Static content that's popular with the host's user base ","(","such as YouTube and Google Play",")"," is temporarily cached on these edge nodes, thus allowing users to retrieve this content from much closer to their location. This creates a better experience for users and reduces the host\u2019s overall network capacity requirements."),(0,a.kt)("h3",{id:"region-extensions"},"Region extensions"),(0,a.kt)("p",null,"For certain specialized workloads, such as ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/bare-metal"},"Bare Metal Solution"),", Google hosts servers in colocation facilities close to GCP regions to provide low latency ","(","typically \\<2ms",")"," connectivity to workloads running on Google Cloud. These facilities are referred to as region extensions."),(0,a.kt)("h3",{id:"to-the-edge-and-back"},"To the edge and back"),(0,a.kt)("p",null,"An edge is in the eye of the beholder. Despite this already vast investment in infrastructure, network, and partnership, we believe that the journey towards the edge has just begun. As Google Cloud expands in reach and capabilities, the landscape of applications is evolving again, with traits such as critical reliability, ultra low latency, embedded AI, as well as tight integration and interoperability with 5G networks and beyond. We are looking forward to driving the future evolution of network edge as well as edge cloud capabilities. Stay tuned as we continue to roll out new edge sites, capabilities, and services."),(0,a.kt)("p",null,"We hope this post clarifies Google\u2019s network edge offerings, and how they help connect your applications running in Google Cloud to your end users. For more about Google Cloud\u2019s networking capabilities, check out these ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/tutorials#networking"},"Google Cloud networking tutorials and solutions"),"."))}u.isMDXComponent=!0}}]);