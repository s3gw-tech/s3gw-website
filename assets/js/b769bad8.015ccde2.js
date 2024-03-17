"use strict";(self.webpackChunkk_3_s_website=self.webpackChunkk_3_s_website||[]).push([[5270],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>h});var n=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=u(a),c=l,h=p["".concat(o,".").concat(c)]||p[c]||m[c]||r;return a?n.createElement(h,i(i({ref:t},g),{},{components:a})):n.createElement(h,i({ref:t},g))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5637:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(8168),l=(a(6540),a(5680));const r={title:"Release Notes - v0.5.0",description:"Release notes for v.0.5.0",slug:"release-notes-v0.5",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},i="Release Notes - v0.5.0",s={permalink:"/blog/release-notes-v0.5",source:"@site/blog/2022-09-15-release-notes-0.5.md",title:"Release Notes - v0.5.0",description:"Release notes for v.0.5.0",date:"2022-09-15T00:00:00.000Z",formattedDate:"September 15, 2022",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:1.65,hasTruncateMarker:!0,authors:[{name:"The s3gw team"}],frontMatter:{title:"Release Notes - v0.5.0",description:"Release notes for v.0.5.0",slug:"release-notes-v0.5",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - v0.6.0",permalink:"/blog/release-notes-v0.6"},nextItem:{title:"Release Notes - v0.4.0",permalink:"/blog/release-notes-v0.4"}},o={authorsImageUrls:[void 0]},u=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],g={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"This release add a few small fixes to the last release, especially in the UI.\nIn addition to that, testing and other development processes have improved quite\na bit."),(0,l.yg)("p",null,"This release is meant for testing and feedback gathering. It is not\nrecommended for production use."),(0,l.yg)("p",null,"Should a bug be found and not expected to be related to the list below, one\nshould feel encouraged to file an issue in our ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw"},"github\nrepository"),"."),(0,l.yg)("h2",{id:"features"},"Features"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"UI: Add Dashboard widget framework. aquarist-labs/s3gw#91"),(0,l.yg)("li",{parentName:"ul"},"UI: Add ",(0,l.yg)("inlineCode",{parentName:"li"},"Total users")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"Total buckets")," Dashboard widgets."),(0,l.yg)("li",{parentName:"ul"},"Chart: The variables ",(0,l.yg)("inlineCode",{parentName:"li"},"hostnameNoTLS"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"ui.hostname")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"ui.hostnameNoTLS"),"\nhas been added to configure the hostnames of the S3GW and S3GW-UI."),(0,l.yg)("li",{parentName:"ul"},"Chart: Defaulted ",(0,l.yg)("inlineCode",{parentName:"li"},"ui.enabled")," to ",(0,l.yg)("inlineCode",{parentName:"li"},"true"),"."),(0,l.yg)("li",{parentName:"ul"},"S3GW:  Added columns in the sqlite buckets table: zone_group & quota")),(0,l.yg)("h2",{id:"fixes"},"Fixes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"S3GW: Fixed the admin API request: get-bucket-info where the client was\nreceiving an empty response. aquarist-labs/s3gw#87"),(0,l.yg)("li",{parentName:"ul"},"UI: Mark the user/bucket quota settings in the user form as non-functional\nbecause the feature is not properly supported by the S3GW.\naquarist-labs/s3gw#106"),(0,l.yg)("li",{parentName:"ul"},"Chart: Rename the ",(0,l.yg)("inlineCode",{parentName:"li"},"access_key")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"secret_key")," variable names according\nthe Helm Chart best practices guide to ",(0,l.yg)("inlineCode",{parentName:"li"},"accessKey")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"secretKey"),"."),(0,l.yg)("li",{parentName:"ul"},"Chart: Rename the ",(0,l.yg)("inlineCode",{parentName:"li"},"enableIngress")," variable to ",(0,l.yg)("inlineCode",{parentName:"li"},"ingress.enabled"),"."),(0,l.yg)("li",{parentName:"ul"},"Chart: Relocate the variables ",(0,l.yg)("inlineCode",{parentName:"li"},"imageRegistry_ui"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"imageName_ui"),",\n",(0,l.yg)("inlineCode",{parentName:"li"},"imageTag_ui")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"imagePullPolicy_ui")," to ",(0,l.yg)("inlineCode",{parentName:"li"},"ui.imageRegistry"),",\n",(0,l.yg)("inlineCode",{parentName:"li"},"ui.imageName"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"ui.imageTag")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"ui.imagePullPolicy"))),(0,l.yg)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"None")),(0,l.yg)("h2",{id:"known-issues"},"Known Issues"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Multipart uploads don't work")),(0,l.yg)("h2",{id:"whats-changed"},"What's Changed"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"docs: update k3s-setup section by @torchiaf in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/93"},"https://github.com/aquarist-labs/s3gw/pull/93")),(0,l.yg)("li",{parentName:"ul"},"ci: pass credentials to s3gw-tools workflow by @m-ildefons in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/101"},"https://github.com/aquarist-labs/s3gw/pull/101")),(0,l.yg)("li",{parentName:"ul"},"ci: use secret inherittance by @m-ildefons in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/102"},"https://github.com/aquarist-labs/s3gw/pull/102")),(0,l.yg)("li",{parentName:"ul"},"Adds templates for issues & PR by @jhmarina in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/97"},"https://github.com/aquarist-labs/s3gw/pull/97")),(0,l.yg)("li",{parentName:"ul"},"Updates PR template by @jhmarina in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/104"},"https://github.com/aquarist-labs/s3gw/pull/104")),(0,l.yg)("li",{parentName:"ul"},"ci: release workflow by @m-ildefons in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/105"},"https://github.com/aquarist-labs/s3gw/pull/105")),(0,l.yg)("li",{parentName:"ul"},"ci: create github release by @m-ildefons in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/109"},"https://github.com/aquarist-labs/s3gw/pull/109")),(0,l.yg)("li",{parentName:"ul"},"release: v0.5.0 by @m-ildefons in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/111"},"https://github.com/aquarist-labs/s3gw/pull/111")),(0,l.yg)("li",{parentName:"ul"},"ci: release workflow: use github token by @m-ildefons in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/112"},"https://github.com/aquarist-labs/s3gw/pull/112"))),(0,l.yg)("h2",{id:"new-contributors"},"New Contributors"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"@torchiaf made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/93"},"https://github.com/aquarist-labs/s3gw/pull/93"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw/compare/v0.4.0...v0.5.0"},"https://github.com/aquarist-labs/s3gw/compare/v0.4.0...v0.5.0")))}m.isMDXComponent=!0}}]);