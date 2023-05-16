"use strict";(self.webpackChunkk_3_s_website=self.webpackChunkk_3_s_website||[]).push([[413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,g=p["".concat(i,".").concat(h)]||p[h]||m[h]||s;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={title:"Release Notes - v0.13.0",description:"Release notes for v.0.13.0",slug:"release-notes-v0.13",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},o="Release Notes - v0.13.0",l={permalink:"/blog/release-notes-v0.13",source:"@site/blog/2023-03-09-release-notes-0.13.md",title:"Release Notes - v0.13.0",description:"Release notes for v.0.13.0",date:"2023-03-09T00:00:00.000Z",formattedDate:"March 9, 2023",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:.935,hasTruncateMarker:!0,authors:[{name:"The s3gw team"}],frontMatter:{title:"Release Notes - v0.13.0",description:"Release notes for v.0.13.0",slug:"release-notes-v0.13",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},nextItem:{title:"Release Notes - v0.12.0",permalink:"/blog/release-notes-v0.12"}},i={authorsImageUrls:[void 0]},u=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This release contains a few new features in the backend an in the UI, including\nobject locking."),(0,r.kt)("p",null,"This release is meant for testing and feedback gathering. It is not recommended\nfor production use."),(0,r.kt)("p",null,"Should a bug be found and not expected to be related to the list below, one\nshould feel encouraged to file an issue in our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw/issues/new/choose"},"GitHub repository"),"."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SFS: Add object locking retention modes.\nAdd the ability to set the default bucket retention configuration for both\nGOVERNANCE/COMPLIANCE modes\nAdd the ability to set an explicit retention mode on object's versions"),(0,r.kt)("li",{parentName:"ul"},"UI: Add support for object locking"),(0,r.kt)("li",{parentName:"ul"},"UI: Improve the object browser navigation bar")),(0,r.kt)("h2",{id:"fixes"},"Fixes"),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On-disk format for the metadata store changed")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,"No known issues"),(0,r.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Release v0.12.0 by @m-ildefons in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/347"},"https://github.com/aquarist-labs/s3gw/pull/347")),(0,r.kt)("li",{parentName:"ul"},"ci: on-disk format checker and release tests by @m-ildefons in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/348"},"https://github.com/aquarist-labs/s3gw/pull/348")),(0,r.kt)("li",{parentName:"ul"},"ci: fix s3test runner script by @m-ildefons in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/353"},"https://github.com/aquarist-labs/s3gw/pull/353")),(0,r.kt)("li",{parentName:"ul"},"ci: s3tests runner log from container by @m-ildefons in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/356"},"https://github.com/aquarist-labs/s3gw/pull/356"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw/compare/v0.12.0...v0.13.0"},"https://github.com/aquarist-labs/s3gw/compare/v0.12.0...v0.13.0")))}m.isMDXComponent=!0}}]);