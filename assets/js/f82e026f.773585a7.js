"use strict";(self.webpackChunkk_3_s_website=self.webpackChunkk_3_s_website||[]).push([[7768],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||g[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const o={},i="Release Notes - v0.21.0",s={permalink:"/blog/2023/08/31/release-notes-0.21",source:"@site/blog/2023-08-31-release-notes-0.21.md",title:"Release Notes - v0.21.0",description:"This release contains significant improvements and new bug fixes. Notably,",date:"2023-08-31T00:00:00.000Z",formattedDate:"August 31, 2023",tags:[],readingTime:.74,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Release Notes - v0.20.0",permalink:"/blog/2023/08/31/release-notes-0.20"},nextItem:{title:"Release Notes - v0.22.0",permalink:"/blog/2023/08/31/release-notes-0.22"}},l={authorsImageUrls:[]},u=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Known Issues",id:"known-issues",level:2}],c={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This release contains significant improvements and new bug fixes. Notably,\nthis release brings server-side encryption support, conditional copy object,\nimprovement in profiling."),(0,a.yg)("p",null,"This release is meant for testing and feedback gathering. It is not recommended\nfor production use."),(0,a.yg)("p",null,"Should a bug be found and not expected to be related with known issues, one\nshould feel encouraged to file an issue in our\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw/issues/new/choose"},"Github repository"),"."),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"rgw/sfs: Add server-side encryption support"),(0,a.yg)("li",{parentName:"ul"},"rgw/sfs: Conditional copy object"),(0,a.yg)("li",{parentName:"ul"},"ui : Make use of the UI REST API to prevent CORS issues")),(0,a.yg)("h2",{id:"fixes"},"Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"rgw/sfs: Improve sqlite connection handling"),(0,a.yg)("li",{parentName:"ul"},"rgw/sfs: Fix missing multipart etag"),(0,a.yg)("li",{parentName:"ul"},"rgw/sfs: Fix etag and mtime not being sent with copy object response"),(0,a.yg)("li",{parentName:"ul"},"rgw/sfs: Increase build error reporting"),(0,a.yg)("li",{parentName:"ul"},"rgw/sfs: Improve profiling (sqlite, garbage collection)"),(0,a.yg)("li",{parentName:"ul"},"ui: Prevent switching bucket retention mode from Compliance to Governance")),(0,a.yg)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,a.yg)("h2",{id:"known-issues"},"Known Issues"))}g.isMDXComponent=!0}}]);