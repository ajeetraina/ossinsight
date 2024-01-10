"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Data Preparation for Analytics",description:"In this section, we will explain step by step how we process the massive data archived by GH Archive which up to 4.7 billion rows.",image:"./thumbnail.png",date:new Date("2022-03-01T00:00:00.000Z"),authors:["hooopo"],tags:["tidbcloud"]},i=void 0,l={permalink:"/blog/how-it-works",editUrl:"https://github.com/pingcap/ossinsight/edit/main/web/blog/how-it-works/index.md",source:"@site/blog/how-it-works/index.md",title:"Data Preparation for Analytics",description:"In this section, we will explain step by step how we process the massive data archived by GH Archive which up to 4.7 billion rows.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"tidbcloud",permalink:"/blog/tags/tidbcloud"}],readingTime:4.545,hasTruncateMarker:!0,authors:[{name:"hooopo",title:"Engineer of TiDB Community",url:"https://twitter.com/hooopo",imageURL:"https://github.com/hooopo.png",key:"hooopo"}],frontMatter:{title:"Data Preparation for Analytics",description:"In this section, we will explain step by step how we process the massive data archived by GH Archive which up to 4.7 billion rows.",image:"./thumbnail.png",date:"2022-03-01T00:00:00.000Z",authors:["hooopo"],tags:["tidbcloud"]},prevItem:{title:"[Outdated] Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",permalink:"/blog/try-it-yourself"}},c={image:r(5637).Z,authorsImageUrls:[void 0]},s=[{value:"Data",id:"data",level:2}],p={toc:s};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data"},"Data"),(0,o.kt)("p",null,"All the data we use here on this website sources from ",(0,o.kt)("a",{parentName:"p",href:"https://www.gharchive.org/"},"GH Archive"),", a non-profit project that records and archives all GitHub events data since 2011. The total data volume archived by GH Archive can be up to 4 billion rows. We download the ",(0,o.kt)("inlineCode",{parentName:"p"},"json file")," on GH Archive and convert it into csv format via Script, and finally load it into the TiDB cluster in parallel through ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/tidb-lightning-overview"},"TiDB-Lightning"),"."),(0,o.kt)("p",null,"In this section, we will explain step by step how we conduct this process. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare the data in csv format for TiDB Lighting.")))}h.isMDXComponent=!0},5637:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/thumbnail-752c3cd65859107ad3e58f0e85955bbc.png"}}]);