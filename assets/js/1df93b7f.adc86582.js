"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3237],{19401:(e,t,n)=>{n.d(t,{T:()=>h});var r=n(87462),a=n(67294),l=n(89747),o=n(76743),i=n(61802),c=n(85214),s=n(81284),m=n(81719);const d=(0,m.ZP)(c.Z)({position:"relative",padding:0}),u=(0,m.ZP)(s.ZP)({position:"absolute",width:"100%",paddingLeft:0,transition:"all .5s ease",opacity:.4,"&.item-enter":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&.item-enter-active":{opacity:.4,transform:"none"},"&.item-exit":{opacity:.4,transform:"none"},"&.item-exit-active":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&:hover":{opacity:1}});function p(e,t){let{maxLength:n,itemHeight:c,getKey:s,children:m,...p}=e;const[h,E]=(0,a.useState)([]),g=(0,a.useCallback)((e=>{E((t=>t.length===n?[e].concat(t.slice(0,n-1)):[e].concat(t)))}),[n]);return(0,a.useEffect)((()=>{const e={add:g};(0,i.nf)(t)&&("function"==typeof t?t(e):t.current=e)}),[]),a.createElement(l.Z,(0,r.Z)({component:d},p,{sx:{height:c*n}}),h.map(((e,t)=>a.createElement(o.Z,{key:s(e),timeout:500,classNames:"item"},a.createElement(u,{sx:{top:t*c,height:c}},m(e))))))}const h=(0,a.forwardRef)(p)},41109:(e,t,n)=>{n.d(t,{C:()=>w});var r=n(67294),a=n(26432),l=n(19604),o=n(61953),i=n(36336),c=n(1890),s=n(91655),m=n(18661),d=n(62348),u=n(61084),p=n(6971),h=n(47135),E=n(61802);const g={cop:"distributed",batchCop:"distributed",tikv:"row",tiflash:"column"},f=e=>{if(!e)return e;for(const[t,n]of Object.entries(g))e=e.replace(new RegExp(t,"g"),n);return e},v=e=>{let{sql:t,query:n,params:g,open:v,onClose:b}=e;const[Z,w]=(0,r.useState)(null),{data:y,error:k}=(0,p.WV)(`${Z??"undefined"}/${n}`,g,!1,v&&!!Z&&(0,E.nf)(g)),x=(0,a.Z)(((e,t)=>{w(t)}));return r.createElement(r.Fragment,null,r.createElement(c.Z,{open:v,maxWidth:"xl",fullWidth:!0,onClose:b},r.createElement(i.Z,null,r.createElement(d.Z,{value:Z,onChange:x},r.createElement(m.Z,{value:null,label:"SQL"}),r.createElement(m.Z,{value:"explain",label:"EXPLAIN"})),r.createElement("br",null),Z?(0,E.nf)(k)?r.createElement(l.Z,{severity:"error"},"Request failed $",(0,h.e$)(k)):(0,E.Rw)(y)?r.createElement(o.Z,{sx:{pt:.5}},r.createElement(s.Z,{width:"80%"}),r.createElement(s.Z,{width:"50%"}),r.createElement(s.Z,{width:"70%"})):r.createElement(o.Z,{sx:{overflowX:"scroll",color:"rgb(248, 248, 242)",backgroundColor:"rgb(40, 42, 54)",borderRadius:2,py:2},mb:2},r.createElement(o.Z,{display:"table",fontFamily:"monospace",fontSize:16,lineHeight:1,sx:{borderSpacing:"16px 0"}},r.createElement(o.Z,{display:"table-header-group"},r.createElement(o.Z,{display:"table-row"},y.fields.map((e=>r.createElement(o.Z,{key:e.name,display:"table-cell"},e.name))))),r.createElement(o.Z,{display:"table-footer-group"},y.data.map(((e,t)=>r.createElement(o.Z,{key:t,display:"table-row"},y.fields.map((t=>r.createElement(o.Z,{key:f(t.name),display:"table-cell",whiteSpace:"pre"},f(e[t.name])))))))))):r.createElement(u.Z,{className:"language-sql"},t))))};var b=n(54225),Z=n(96214);function w(e){const[t,n]=(0,r.useState)(!1),l=(0,a.Z)((()=>{n(!1)})),o=(0,a.Z)((()=>{n(!0)}));return{dialog:r.createElement(v,{query:(null==e?void 0:e.query)??"",sql:null==e?void 0:e.sql,params:null==e?void 0:e.params,open:(0,E.nf)(e)&&t,onClose:l}),button:r.createElement(b.Z,{size:"small",onClick:o,endIcon:r.createElement(Z.Z,null),disabled:(0,E.Rw)(e)},"SHOW SQL"),show:t}}},77249:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(54364),l=n(26613),o=n(61953);const i=e=>e.toFixed(1).replace(/[.,]0$/,""),c=r.createElement(a.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),s=r.createElement(l.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),m="#E30C34",d="#52FF52",u=e=>{let{val:t,suffix:n,reverse:a=!1}=e;return t>0?r.createElement("span",{className:"diff",style:{color:a?m:d}},a?s:c,r.createElement(o.Z,{component:"span",fontSize:14},i(t),n)):t<0?r.createElement("span",{className:"diff",style:{color:a?d:m}},a?c:s,r.createElement(o.Z,{component:"span",fontSize:14},i(-t),n)):r.createElement("span",{className:"diff",style:{color:"gray"}})}},69050:(e,t,n)=>{n.d(t,{V:()=>h,Z:()=>p});var r=n(77249),a=n(39960),l=n(9566),o=n(67294),i=n(16550),c=n(61953),s=n(29630),m=n(9144),d=n(44731),u=n(91655);function p(e){let{variant:t="clickable",name:n,repos:u,collectionRepos:p}=e;const h=(0,i.k6)(),g=(0,o.useCallback)((()=>{h.push(`/collections/${(0,l.o)(n)}`)}),[n]);return o.createElement(E,{onClick:g,className:t},o.createElement(s.Z,{variant:"body1",fontSize:16},n),o.createElement(s.Z,{variant:"body2",color:"#7C7C7C",mt:2,mb:2},u," repositories"),p.map((e=>o.createElement(m.Z,{key:e.repo_id,direction:"row",mt:1,alignItems:"center"},o.createElement(c.Z,{maxWidth:48,minWidth:48},e.rank,o.createElement(r.Z,{val:e.rank_changes})),o.createElement(c.Z,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.createElement(a.Z,{href:`/analyze/${e.repo_name}`,target:"_blank"},o.createElement(m.Z,{direction:"row",alignItems:"center"},o.createElement(c.Z,{component:"span",display:"inline-flex",bgcolor:"lightgrey",borderRadius:"24px",padding:"0px",alignItems:"center",justifyContent:"center",sx:{verticalAlign:"text-bottom"},mr:1},o.createElement(d.Z,{src:`https://github.com/${e.repo_name.split("/")[0]}.png`})),o.createElement(c.Z,{component:"span",whiteSpace:"nowrap",ml:1},e.repo_name))))))),"link"===t?o.createElement(c.Z,{mt:2,fontSize:14},o.createElement(a.Z,{href:`/collections/${(0,l.o)(n)}`,target:"_blank"},"> See All")):o.createElement(a.Z,{href:`/collections/${(0,l.o)(n)}`,target:"_blank",hidden:!0},"> See All"))}function h(){return o.createElement(c.Z,{border:"2px dashed #3c3c3c",p:2,borderRadius:1,sx:{"&:not(:first-of-type)":{ml:2}}},o.createElement(u.Z,{width:150}),o.createElement(u.Z,{width:160,sx:{mt:2}}),o.createElement(u.Z,{width:120,sx:{my:2}}),[0,1,2].map((e=>o.createElement(m.Z,{key:e,direction:"row"},o.createElement(u.Z,{width:48}),o.createElement(u.Z,{width:36,height:36,variant:"circular",sx:{mx:1}}),o.createElement(u.Z,{width:120})))))}const E=(0,n(81719).ZP)(c.Z)((e=>{let{theme:t}=e;return{border:"2px dashed #3c3c3c",padding:t.spacing(2),borderRadius:t.spacing(1),"&:not(:first-of-type)":{marginLeft:t.spacing(2)},"&.clickable":{cursor:"pointer",transition:"box-shadow .2s ease, transform .2s ease","&:hover":{boxShadow:t.shadows[16],transform:"translateY(-1px) scale(1.02)"}}}}))},15848:(e,t,n)=>{n.d(t,{Z:()=>i,h:()=>c});var r=n(67294),a=n(70131),l=n(95487),o=n(10981);function i(e){let{children:t}=e;const n=(0,l.Z)(),{inView:i,ref:c}=(0,a.YD)({fallbackInView:!0}),s=n&&i;let m;return m="function"==typeof t?t(s):r.createElement(o.Z.Provider,{value:{inView:s}},t),r.createElement("div",{ref:c},m)}function c(e){const t=t=>r.createElement(i,null,r.createElement(e,t));return t.displayName="InViewContainerHOC",t}},79411:(e,t,n)=>{n.d(t,{k:()=>p});var r=n(87462),a=n(67294),l=n(55343),o=n(58316),i=n(49669),c=n(26432),s=n(53442),m=n(31538),d=n(92770);function u(e){return(0,d.HD)(e)?"":e.title}function p(e,t,n,d,p){void 0===d&&(d={}),void 0===p&&(p={});const[h,E]=(0,a.useState)(t),g=(0,i.Z)()??"fatal-id",f=(0,c.Z)((e=>{E(e.target.value)}));return{select:(0,a.useMemo)((()=>a.createElement(l.Z,(0,r.Z)({variant:"standard"},d),n&&a.createElement(o.Z,{id:`selector-${g}-label`},n),a.createElement(s.Z,(0,r.Z)({id:`selector-${g}`,size:"small",value:h,onChange:f,label:n,native:!1,autoWidth:!0,renderValue:u},p),e.map((e=>a.createElement(m.Z,{key:e.key,value:e},e.title)))))),[e,h,g]),value:""===h?null:h}}},14454:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(6971),a=n(67294),l=n(61802);function o(){const{data:e,loading:t,error:n}=(0,r.WV)("recent-hot-collections",{},!1);return{data:(0,a.useMemo)((()=>{if((0,l.Rw)(e))return;const t=[];for(const r of e.data){var n;r.id===(null==(n=t[t.length-1])?void 0:n.id)?t[t.length-1].collectionRepos.push({repo_id:r.repo_id,repo_name:r.repo_name,last_2nd_month_rank:r.last_2nd_month_rank,last_month_rank:r.last_month_rank,rank:r.rank,rank_changes:r.rank_changes}):t.push({id:r.id,name:r.name,repos:r.repos,visits:r.visits,collectionRepos:[{repo_id:r.repo_id,repo_name:r.repo_name,last_2nd_month_rank:r.last_2nd_month_rank,last_month_rank:r.last_month_rank,rank:r.rank,rank_changes:r.rank_changes}]})}return{...e,fields:e.fields,data:t}}),[e]),loading:t,error:n}}},80627:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ct});var r=n(67294),a=n(88242),l=n(33457),o=n(61953),i=n(81719);const c={xs:"column",md:"row"},s=(0,i.ZP)(o.Z)((e=>{let{theme:t}=e;return{paddingLeft:t.spacing(4),paddingRight:t.spacing(4),flex:1,[t.breakpoints.down("md")]:{width:"100%",padding:t.spacing(1)}}})),m=(0,i.ZP)(s)((e=>{let{theme:t}=e;return{textAlign:"right",[t.breakpoints.down("md")]:{textAlign:"left"}}}));var d=n(87151),u=n(87462),p=n(29167),h=n(41556),E=n(29630);const g={h1:(0,h.j)("fontSize",28,48,64),h2:(0,h.j)("fontSize",24,36,48),h2plus:(0,h.j)("fontSize",28,48,64),subtitle:(0,h.j)("fontSize",14,18,24),body:(0,h.j)("fontSize",12,16,20)},f={heading:(0,h.j)("textAlign","center",void 0,void 0)},v=e=>r.createElement(E.Z,(0,u.Z)({},e,{variant:"h1",sx:(0,p.R)(g.h1,f.heading,e.sx)})),b=e=>r.createElement(E.Z,(0,u.Z)({},e,{variant:"h2",sx:(0,p.R)(g.h2,f.heading,e.sx)})),Z=e=>r.createElement(E.Z,(0,u.Z)({},e,{component:"span",display:"inline",variant:"inherit"})),w=e=>r.createElement(E.Z,(0,u.Z)({},e,{component:"div",variant:"subtitle2",sx:[{color:"#C4C4C4"},g.subtitle,f.heading]})),y=e=>r.createElement(E.Z,(0,u.Z)({},e,{variant:"body2",sx:(0,p.R)([{color:"#C4C4C4"},(0,h.j)("mt",2,4,6),g.body],e.sx)}));var k=n(62097),x=n(61225);const C=()=>{const e=(0,k.Z)(),t=(0,x.Z)(e.breakpoints.down("md"));return r.createElement(r.Fragment,null,r.createElement(o.Z,{mt:4,display:"flex",justifyContent:["center","center","flex-end"],sx:{"> *":{flex:1,maxWidth:450,mx:"unset"}}},r.createElement(d.ZP,{align:"left",size:t?void 0:"large",contrast:!0})),r.createElement(E.Z,{variant:"body2",mt:1,color:"#7c7c7c",sx:f.heading},"Deep insight into developers and repos on GitHub",r.createElement("br",null),"about stars, pull requests, issues, pushes, comments, reviews..."))};var S=n(47051),_=n(70131),R=n(6971),z=n(95487);const P=(0,i.ZP)(S.Z)({color:"#E30C34",marginLeft:4,marginRight:4}),L=e=>{let{fontSize:t=24}=e;const n=(0,z.Z)(),{inView:a,ref:l}=(0,_.YD)(),o=(0,R.Ox)(a&&n);return r.createElement("div",{style:{display:"inline"},ref:l},r.createElement(P,{value:o,hasComma:!0,duration:200,size:t}))},F=()=>{const e=(0,k.Z)(),t=(0,x.Z)(e.breakpoints.down("md")),n=(0,x.Z)(e.breakpoints.down("lg"));return r.createElement(w,null,"SELECT insights FROM",r.createElement(L,{fontSize:t?14:n?18:24}),"GitHub events")},A=(0,i.ZP)("img")((e=>{let{theme:t}=e;return{verticalAlign:"text-bottom",marginLeft:t.spacing(1)}})),I=()=>r.createElement(y,{sx:f.heading},r.createElement("a",{href:"https://www.pingcap.com/tidb-serverless/?utm_source=ossinsight&utm_medium=referral",target:"_blank",rel:"noreferrer"},r.createElement(A,{src:"/img/tidb-cloud-logo-o.png",height:20,alt:"TiDB"})));var T=n(2525);const B=()=>r.createElement(v,null,"Open Source Software",r.createElement("br",null),r.createElement(Z,{sx:{color:"#FFE895"}},r.createElement(T.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),"\xa0Insight")),H=()=>r.createElement(m,null,r.createElement(F,null),r.createElement(B,null),r.createElement(C,null),r.createElement(I,null));var M=n(24039),W=n(15848),$=n(85529),O=n(19401),V=n(61802);const N=e=>e.id;function q(e){let{show:t}=e;const n=(0,r.useRef)(null),a=(0,r.useRef)(),l=(0,r.useRef)([[],0]),o=(0,R.ve)("events-increment-list",{},!1,t,"unique");(0,r.useEffect)((()=>{(0,V.nf)(o.data)&&(l.current=[o.data.data,0])}),[o.data]);const i=(0,r.useCallback)((()=>{clearInterval(a.current),a.current=setInterval((()=>{const[e,t]=l.current;var r;t<e.length&&(e[t].id=`${e[t].id}-${Date.now()}`,null==(r=n.current)||r.add(e[t]),l.current[1]++)}),500)}),[]),c=(0,r.useCallback)((()=>{clearInterval(a.current)}),[]);return(0,r.useEffect)((()=>(t&&i(),c)),[t]),r.createElement(O.T,{ref:n,maxLength:7,itemHeight:24,getKey:N,onMouseEnter:c,onMouseLeave:i},D)}const j=(0,i.ZP)("span")({fontSize:12,lineHeight:"12px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"});function D(e){return r.createElement(j,null,function(e){const t=r.createElement("a",{href:`https://github.com/${e.actor_login}`,rel:"noopener"},e.actor_login);switch(e.type){case"PushEvent":return r.createElement(r.Fragment,null,r.createElement($.Mfv,{size:12})," ",t," pushed to");case"CreateEvent":return r.createElement(r.Fragment,null,r.createElement($.H0r,{size:12})," ",t," created");case"PullRequestEvent":{const n=r.createElement("a",{href:G(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return"closed"===e.action?e.pr_merged?r.createElement(r.Fragment,null,r.createElement($.Rvi,{size:12})," ",t," merged PR ",n," in"):r.createElement(r.Fragment,null,r.createElement($.BRS,{size:12})," ",t," closed PR ",n," in"):r.createElement(r.Fragment,null,r.createElement($.UWO,{size:12})," ",t," ",e.action," PR ",n," in")}case"WatchEvent":return r.createElement(r.Fragment,null,r.createElement($.qNz,{size:12})," ",t," starred");case"ForkEvent":return r.createElement(r.Fragment,null,r.createElement($.jcu,{size:12})," ",t," forked");case"IssuesEvent":{const n=r.createElement("a",{href:J(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return"closed"===e.action?r.createElement(r.Fragment,null,r.createElement($.GFI,{size:12})," ",t," closed ",n," in"):r.createElement(r.Fragment,null,r.createElement($.hEv,{size:12})," ",t," ",e.action," ",n," in")}case"PullRequestReviewCommentEvent":{const n=r.createElement("a",{href:G(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return r.createElement(r.Fragment,null,r.createElement($.qtd,{size:12})," ",t," commented review PR ",n," in")}case"PullRequestReviewEvent":{const n=r.createElement("a",{href:G(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return r.createElement(r.Fragment,null,r.createElement($.fg9,{size:12})," ",t," review PR ",n," in")}case"IssueCommentEvent":{const n=r.createElement("a",{href:J(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return r.createElement(r.Fragment,null,r.createElement($.qtd,{size:12})," ",t," commented issue ",n," in")}case"CommitCommentEvent":return r.createElement(r.Fragment,null,r.createElement($.qtd,{size:12})," ",t," commented commit in");case"ReleaseEvent":return r.createElement(r.Fragment,null,r.createElement($.lO_,{size:12})," ",t," released in");case"DeleteEvent":return r.createElement(r.Fragment,null,r.createElement($.Vlp,{size:12})," ",t," deleted");case"GollumEvent":return r.createElement(r.Fragment,null,t," updated wiki in");case"GistEvent":return r.createElement(r.Fragment,null,r.createElement($.xBm,{size:12})," ",t," ",e.action," gist");case"MemberEvent":return r.createElement(r.Fragment,null,r.createElement($.TqF,{size:12})," ",t," ",e.action," member in");case"PublicEvent":case"DownloadEvent":case"TeamAddEvent":case"FollowEvent":case"ForkApplyEvent":case"Event":return r.createElement("span",null,e.type)}}(e),"\xa0",function(e){if(e.repo_name)return r.createElement("a",{href:`https://github.com/${e.repo_name}`,target:"_blank",rel:"noopener noreferrer"},e.repo_name)}(e))}function G(e){return`https://github.com/${e.repo_name}/pull/${e.number}`}function J(e){return`https://github.com/${e.repo_name}/issues/${e.number}`}var Q=n(60338),U=n(52483),Y=n(74118),K=n(50982),X=n(21832),ee=n(11905),te=n(39488);const ne=e=>{let{show:t}=e;const n=(0,te.s)(t),a=(0,k.Z)(),l=(0,x.Z)(a.breakpoints.down("sm")),i=(0,r.useRef)(null);return(0,r.useLayoutEffect)((()=>{var e;null==(e=i.current)||e.resize({width:"auto"})}),[l]),r.createElement(o.Z,{width:l?"100%":"61.8%"},r.createElement(Q.zU,{init:{height:l?160:120,renderer:"canvas"},ref:i},r.createElement(ee.Z,null,r.createElement(X.r,{containLabel:!0,top:0,bottom:8,left:0,right:0}),r.createElement(U.Z.Category.X,{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}}),r.createElement(U.Z.Value.Y,{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,align:"right",fontSize:12,showMinLabel:!0,showMaxLabel:!1,hideOverlap:!0},splitLine:{show:!1},position:"left",interval:100}),r.createElement(Y.Q,{datasetId:"original",silent:!0,color:"#F77C00",encode:{x:"latest_timestamp",y:"cnt"},barMaxWidth:12})),r.createElement(K.q,{id:"original",source:n})))};var re=n(88784),ae=n(54225),le=n(68346);const oe=(0,i.ZP)("p")({fontSize:"14px",color:"#C4C4C4",fontWeight:"bold",marginBottom:"8px",marginTop:"16px"}),ie=(0,i.ZP)("strong")({color:"#47D9A1"}),ce=()=>r.createElement(s,{sx:[{flex:.618},g.h1]},r.createElement(oe,{sx:{mt:0}},"Events per 5 seconds"),r.createElement(W.Z,null,(e=>r.createElement(ne,{show:e}))),r.createElement(oe,null,"What is happening on GitHub ",r.createElement(ie,null,"NOW!"),"\xa0",r.createElement(re.Z,{title:"Random pick from all realtime events"},r.createElement(M.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}))),r.createElement(W.Z,null,(e=>r.createElement(q,{show:e}))),r.createElement(o.Z,{fontSize:12,mt:3},r.createElement(ae.Z,{sx:{fontSize:12,fontWeight:"regular",verticalAlign:"baseline",textDecoration:"underline",color:"#7c7c7c"},component:le.Z,href:"/blog/why-we-choose-tidb-to-support-ossinsight"},"\ud83e\udd16\ufe0f How do we create this real-time effect?")));var se=n(44373),me=n(9144);function de(){return r.createElement(l.Z,{pt:4},r.createElement(me.Z,{divider:r.createElement(se.Z,{orientation:"vertical",flexItem:!0}),direction:c},r.createElement(H,null),r.createElement(ce,null)))}var ue=n(14454),pe=n(26432);var he=n(21596),Ee=n(93412),ge=n(69050);function fe(){const{data:e}=(0,ue.I)(),t=(0,r.useRef)(0);return r.createElement(be,{version:++t.current},null==e?void 0:e.data.slice(0,10).map((e=>{let{id:t,name:n,repos:a,collectionRepos:l}=e;return r.createElement(ge.Z,{key:t,variant:"link",name:n,repos:a,collectionRepos:l})})),(0,V.Rw)(e)?r.createElement(ve,null):void 0)}const ve=()=>r.createElement(r.Fragment,null,r.createElement(ge.V,null),r.createElement(ge.V,null),r.createElement(ge.V,null)),be=e=>{let{version:t,children:n}=e;const{ref:a,scrollable:l,scroll:i,recompute:c}=function(e){let{direction:t="x"}=e;const[n,a]=(0,r.useState)(null),[l,o]=(0,r.useState)(!1),i=(0,pe.Z)((e=>{a(e)})),c=(0,r.useCallback)((()=>{if(!n)return void o(!1);let e,r,a;"x"===t?(e=n.getBoundingClientRect().width,r=n.scrollWidth,a=n.scrollLeft):(e=n.getBoundingClientRect().height,r=n.scrollHeight,a=n.scrollTop),r===e?o(!1):a<1?o("forward"):Math.abs(a+e-r)<1?o("backward"):o(!0)}),[n,t]);return(0,r.useEffect)((()=>{if(n)return n.addEventListener("scroll",c),window.addEventListener("resize",c),c(),()=>{n.removeEventListener("scroll",c),window.removeEventListener("resize",c)}}),[n,t,c]),{ref:i,scroll:(0,r.useCallback)((function(e){if(void 0===e&&(e=100),!n)return;const{width:r,height:a}=n.getBoundingClientRect();n.scrollBy({["x"===t?"left":"top"]:e*("x"===t?r:a),behavior:"smooth"})}),[n]),scrollable:l,recompute:c}}({direction:"x"});return(0,r.useEffect)((()=>{c()}),[t]),r.createElement(o.Z,{position:"relative"},r.createElement(Ze,{type:"backward",onClick:()=>i(-.6),show:(0,V.N6)(l)&&"forward"!==l}),r.createElement(Ze,{type:"forward",onClick:()=>i(.6),show:(0,V.N6)(l)&&"backward"!==l}),r.createElement(me.Z,{direction:"row",overflow:"auto",ref:a},n))},Ze=e=>{let{type:t,onClick:n,show:a}=e;return r.createElement(o.Z,{sx:{transition:"opacity .2s ease",cursor:"pointer",opacity:a?1:0,pointerEvents:a?void 0:"none",zIndex:1},position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"24px",top:0,left:"backward"===t?0:void 0,right:"forward"===t?0:void 0,onClick:n,bgcolor:"#2c2c2c",border:"2px dashed #3c3c3c",fontSize:36},"forward"===t?r.createElement(he.Z,{fontSize:"inherit"}):r.createElement(Ee.Z,{fontSize:"inherit"}))};function we(){return r.createElement(l.Z,{darker:!0,maxWidth:!1},r.createElement(b,{sx:{fontSize:24}},"\ud83d\udcd6 Hot Collections"),r.createElement(y,{sx:{mb:4,mt:2,fontSize:14}},"Insights about the monthly and historical rankings and trends in technical fields with curated repository lists."),r.createElement(fe,null))}const ye=JSON.parse('{"f":[{"name":"period","description":"Trending time period.","replaces":"${period}","default":"past_24_hours","enums":["past_24_hours","past_week","past_month","past_3_months"]},{"name":"language","description":"Primary language","replaces":"${language}","default":"All","enums":["All","JavaScript","Java","Python","PHP","C++","C#","TypeScript","Shell","C","Ruby","Rust","Go","Kotlin","HCL","PowerShell","CMake","Groovy","PLpgSQL","TSQL","Dart","Swift","HTML","CSS","Elixir","Haskell","Solidity","Assembly","R","Scala","Julia","Lua","Clojure","Erlang","Common Lisp","Emacs Lisp","OCaml","MATLAB","Objective-C","Perl","Fortran"]}]}');var ke=n(79411),xe=n(53442),Ce=n(31538);function Se(e){let{options:t,value:n,onSelect:a}=e;const l=(0,r.useRef)(),i=(0,r.useRef)(t.map((()=>null))),[c,s]=(0,r.useState)(t.length);(0,r.useEffect)((()=>{i.current=t.map((()=>null))}),[t]);const m=(0,pe.Z)((()=>{if((0,V.Rw)(l.current))return;const e=l.current.clientWidth;let t=0;for(const n of i.current){if(!n)break;if(n.clientWidth+n.offsetLeft>=e)break;t+=1}s(t)}));(0,r.useLayoutEffect)((()=>{if(!(0,V.Rw)(l.current)){if(m(),"undefined"!=typeof ResizeObserver){const e=new ResizeObserver((()=>{m()}));return e.observe(l.current),()=>{l.current&&e.unobserve(l.current),e.disconnect()}}return window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}}}),[m]);const d=(0,r.useCallback)((e=>{a(e.target.value)}),[a]),u=(0,r.useMemo)((()=>{var e;return(null==(e=t.slice(c).find((e=>{let{key:t}=e;return t===n})))?void 0:e.key)??""}),[t,c,n]);return r.createElement(o.Z,{flex:1,position:"relative",maxWidth:"100%",overflow:"hidden"},r.createElement(me.Z,{direction:"row",position:"relative",width:"100%",alignContent:"center"},r.createElement(o.Z,{position:"absolute",left:0,top:0,width:"calc(100% - 120px)"},r.createElement(me.Z,{ref:l,component:"ol",direction:"row",visibility:"hidden",position:"absolute",left:0,top:0,width:"100%",p:0,m:0,sx:{pointerEvents:"none",listStyle:"none"}},t.map(((e,t)=>{let{key:l,label:o}=e;return r.createElement(_e,{ref:e=>{i.current[t]=e},key:l,value:l,label:o,selected:n===l,onClick:a})})))),r.createElement(o.Z,null,r.createElement(me.Z,{component:"ol",direction:"row",alignItems:"center",p:0,m:0,height:"100%",sx:{listStyle:"none"}},t.slice(0,c).map((e=>{let{key:t,label:l,icon:o}=e;return r.createElement(_e,{key:t,value:t,label:l,icon:o,selected:n===t,onClick:a})})))),t.length>c?r.createElement(xe.Z,{label:"Other",displayEmpty:!0,size:"small",value:u,onChange:d,sx:{fontSize:14,ml:c>0?2:0,".MuiSelect-select":{pb:0,pl:1},color:u?"primary.main":void 0,border:"1px solid transparent",borderColor:u?"primary.main":void 0,borderRadius:.75},variant:"standard",disableUnderline:!0,renderValue:e=>{var n;return(null==(n=t.find((t=>{let{key:n}=t;return n===e})))?void 0:n.label)??"Others"}},t.slice(c).map((e=>{let{key:t,label:n}=e;return r.createElement(Ce.Z,{key:t,value:t},n)}))):void 0))}const _e=(0,r.forwardRef)((function(e,t){let{value:n,label:a,icon:l,selected:i=!1,onClick:c}=e;const s=(0,r.useCallback)((()=>{null==c||c(n)}),[c,n]);return r.createElement(o.Z,{ref:t,component:"li",onClick:s,display:"flex",alignItems:"center",justifyContent:"center",border:"transparent 1px solid",borderRadius:.75,fontSize:14,lineHeight:"1",sx:{transition:"all .2s ease","&:not(:first-of-type)":{ml:2},px:1,py:.5,userSelect:"none",cursor:i?void 0:"pointer",borderColor:i?"primary.main":void 0,color:i?"primary.main":void 0}},l,(0,V.N6)(l)&&r.createElement(o.Z,{mx:.5}),a)}));var Re,ze,Pe=n(9566);const Le=ye.f,Fe=(null==(Re=Le.find((e=>"period"===e.name)))?void 0:Re.enums)??[],Ae=(null==(ze=Le.find((e=>"language"===e.name)))?void 0:ze.enums)??[],Ie=Fe.map((e=>{return{key:e,title:(t=e,(0,Pe.o)(t).replace(/^\w/g,(e=>e.toUpperCase())).replace(/-/g," "))};var t})),Te=Ae.map((e=>({key:e,label:e})));$.Rg1,$.r7p,$.jcu,$.Mfv,$.Rvi;var Be=n(39960),He=n(21448),Me=n(34573),We=n(90244),$e=n(93978),Oe=n(69417),Ve=n(5605),Ne=n(39807),qe=n(91655),je=n(44731),De=n(86777),Ge=n(16550),Je=n(41109);const Qe=JSON.parse('{"JavaScript":"#f1e05a","Java":"#b07219","Python":"#3572A5","PHP":"#4F5D95","C++":"#f34b7d","C#":"#178600","Typescript":"#3178c6","Shell":"#89e051","C":"#555555","Ruby":"#701516","Rust":"#dea584","Go":"#00ADD8","Kotlin":"#A97BFF","HCL":"#ccc","PowerShell":"#012456","CMake":"#DA3434","Groovy":"#4298b8","PLpgSQL":"#336790","TSQL":"#e38c00","Dart":"#00B4AB","Swift":"#F05138","HTML":"#e34c26","CSS":"#563d7c","Elixir":"#6e4a7e","Haskell":"#5e5086","Solidity":"#AA6746","Assembly":"#6E4C13","R":"#198CE7","Scala":"#c22d40","Julia":"#a270ba","Lua":"#000080","Clojure":"#db5855","Erlang":"#B83998","Common Lisp":"#3fb68b","Emacs Lisp":"#c065db","OCaml":"#3be133","MATLAB":"#e16737","Objective-C":"#438eff","Perl":"#0298c3","Fortran":"#4d41b1"}');for(const st in Qe)Qe[st.toLowerCase()]=Qe[st];function Ue(){const{select:e,value:t}=(0,ke.k)(Ie,Ie[0],"",{variant:"standard"},{disableUnderline:!0,sx:{font:"inherit",color:"primary.main",lineHeight:"inherit",".MuiSelect-select":{pb:0}}}),{select:n,value:a}=function(){const[e,t]=(0,r.useState)(Te[0].key);return{select:r.createElement(Se,{value:e,onSelect:t,options:Te}),value:e}}(),{data:l,loading:i}=function(e,t,n){const{data:a,loading:l,error:o}=(0,R.WV)("trending-repos",{language:e,period:t},!1);return{data:(0,r.useMemo)((()=>{if(!(0,V.Rw)(a))return{...a,data:a.data.slice().sort(((e,t)=>(t[n]??0)-e[n]??0)).map((e=>{var t,n;return{...e,contributor_logins:null==(t=e.contributor_logins)?void 0:t.split(","),collection_names:null==(n=e.collection_names)?void 0:n.split(",")}}))}}),[a,n]),loading:l,error:o}}(a,t.key,"total_score"),{dialog:c,button:s}=(0,Je.C)(l),{page:m,rowsPerPage:d,list:u,handleChangePage:p,handleChangeRowsPerPage:h}=function(e,t){const[n,a]=(0,r.useState)(0),[l,o]=(0,r.useState)(20);(0,r.useEffect)((()=>{a(0)}),t);const i=(0,r.useCallback)(((e,t)=>{a(t)}),[a]),c=(0,r.useCallback)((e=>{o(parseInt(e.target.value,10)),a(0)}),[a,o]),s=(0,r.useMemo)((()=>{if(!(0,V.Rw)(e))return e.data.slice(n*l,(n+1)*l)}),[e,n,l]);return{page:n,rowsPerPage:l,handleChangePage:i,handleChangeRowsPerPage:c,list:s}}(l,[t.key,a]);return r.createElement(o.Z,null,r.createElement(me.Z,{direction:"row",justifyContent:"start",alignItems:"center",flexWrap:"wrap"},e,r.createElement(o.Z,{mx:.5}),r.createElement("span",null,"Language\xa0:\xa0\xa0\xa0"),n,s),r.createElement(Me.Z,{sx:{".MuiTablePagination-spacer":{display:"none"},".MuiToolbar-root":{padding:0,"& > p":{margin:"0 !important"}}},size:"small",rowsPerPageOptions:[20,50,100],component:"div",count:(null==l?void 0:l.data.length)??0,rowsPerPage:d,page:m,onPageChange:p,onRowsPerPageChange:h}),r.createElement(Ye,{data:u,loading:i,rowsPerPage:d,page:m}),r.createElement(E.Z,{variant:"body2"},r.createElement(Be.Z,{href:"/blog/why-we-choose-tidb-to-support-ossinsight",target:"_blank"},"\ud83e\udd16\ufe0f How do we display these rankings?")),c)}const Ye=e=>{let{data:t,loading:n,page:a,rowsPerPage:l}=e;const o=(0,Ge.k6)();return r.createElement(De.Z,null,r.createElement(We.Z,{className:"clearTable"},r.createElement($e.Z,null,r.createElement(Oe.Z,null,r.createElement(Ve.Z,{variant:"head"},"Rank"),r.createElement(Ve.Z,{variant:"head"},"Repository"),r.createElement(Ve.Z,{variant:"head"},"Stars"),r.createElement(Ve.Z,{variant:"head"},"Forks"),r.createElement(Ve.Z,{variant:"head"},"Pushes"),r.createElement(Ve.Z,{variant:"head"},"PRs"),r.createElement(Ve.Z,{variant:"head"},"Top Contributors"))),r.createElement(Ne.Z,{sx:e=>({".MuiTableRow-root:nth-of-type(odd)":{}})},(0,V.nf)(t)?rt(t,a*l,o):at())))},Ke=(0,i.ZP)("span")({fontSize:18,fontWeight:"bold"}),Xe=(0,i.ZP)("p")({fontSize:14,color:"#adadad",margin:0,marginTop:8,maxWidth:600}),et=(0,i.ZP)("div")({fontSize:14,color:"#7d7d7d",margin:0,marginTop:8,maxWidth:600,display:"inline-flex",alignItems:"center"}),tt=(0,i.ZP)("span")({display:"inline-block",width:6,height:6,borderRadius:"50%",marginRight:4,verticalAlign:"middle"}),nt=(0,i.ZP)("a")({marginLeft:4,color:"#7c7c7c"}),rt=(e,t,n)=>e.map(((e,a)=>{var l;return r.createElement(Oe.Z,{key:e.repo_id},r.createElement(Ve.Z,{component:"th"},"#",a+1+t),r.createElement(Ve.Z,null,r.createElement(Ke,null,r.createElement(Be.Z,{href:`/analyze/${e.repo_name}`,target:"_blank"},e.repo_name),r.createElement(nt,{href:`https://github.com/${e.repo_name}`,target:"_blank"},r.createElement($.Pfi,{size:16,verticalAlign:"middle"}))),lt(e.collection_names,n),r.createElement(Xe,null,e.description),e.language&&r.createElement(et,null,r.createElement(tt,{sx:{backgroundColor:Qe[null==(l=e.language)?void 0:l.toLowerCase()]??"#d1d1d1"}}),e.language)),r.createElement(Ve.Z,null,e.stars??0),r.createElement(Ve.Z,null,e.forks??0),r.createElement(Ve.Z,null,e.pushes??0),r.createElement(Ve.Z,null,e.pull_requests??0),r.createElement(Ve.Z,null,ot(e.contributor_logins)))})),at=()=>[0,1,2,3,4,5].map(((e,t)=>r.createElement(Oe.Z,{key:e},r.createElement(Ve.Z,{component:"th"},r.createElement(qe.Z,{sx:{display:"inline-block",width:16}})),r.createElement(Ve.Z,null,r.createElement(qe.Z,{sx:{display:"inline-block",width:32}})),r.createElement(Ve.Z,null,r.createElement(qe.Z,{sx:{display:"inline-block",width:32}})),r.createElement(Ve.Z,null,r.createElement(qe.Z,{sx:{display:"inline-block",width:32}})),r.createElement(Ve.Z,null,r.createElement(qe.Z,{sx:{display:"inline-block",width:32}})),r.createElement(Ve.Z,null,r.createElement(qe.Z,{sx:{display:"inline-block",width:32}})),r.createElement(Ve.Z,null,r.createElement(qe.Z,{variant:"circular",sx:{display:"inline-block",width:16,height:16}}),r.createElement(qe.Z,{variant:"circular",sx:{display:"inline-block",width:16,height:16,ml:1}}))))),lt=(e,t)=>r.createElement(me.Z,{direction:"row",gap:1,display:"inline-flex",ml:1},null==e?void 0:e.map((e=>r.createElement(He.Z,{key:e,size:"small",label:e,onClick:()=>t.push(`/collections/${(0,Pe.o)(e)}`)})))),ot=e=>r.createElement(me.Z,{direction:"row",gap:1},null==e?void 0:e.map((e=>r.createElement(Be.Z,{key:e,href:`/analyze/${e}`,target:"_blank"},r.createElement(je.Z,{sx:{width:22,height:22},src:`https://github.com/${e}.png`})))));function it(){return r.createElement(l.Z,{id:"trending-repos",maxWidth:!1},r.createElement("a",{href:"#trending-repos"},r.createElement(b,{sx:{fontSize:24,mb:2,color:"white"}},"\ud83d\udd25 Trending Repos")),r.createElement(y,{sx:{mb:4,mt:2,fontSize:14}},"We ranked all repositories with score. ",r.createElement("b",null,"Total Score = Stars score + Forks score + Base score"),". See ",r.createElement(Be.Z,{href:"https://github.com/pingcap/ossinsight/issues/778",target:"_blank"},"details"),"."),r.createElement(Ue,null))}(0,i.ZP)(o.Z)((e=>{let{theme:t}=e;return{flex:1,padding:t.spacing(4),borderRadius:t.spacing(.75),border:"1px solid rgba(124, 124, 124, 0.3)",minHeight:204}})),(0,i.ZP)("ul")((e=>{let{theme:t}=e;return{padding:0,margin:0,listStyle:"none"}})),(0,i.ZP)((e=>r.createElement(me.Z,(0,u.Z)({},e,{component:"li"}))))((e=>{let{theme:t}=e;return{margin:0,paddingTop:t.spacing(.5),paddingBottom:t.spacing(.5),paddingLeft:t.spacing(1),paddingRight:t.spacing(1)}}));function ct(){return r.createElement(a.Z,{description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",dark:!0,image:"/img/screenshots/homepage.png"},r.createElement(de,null),r.createElement(it,null),r.createElement(we,null))}},8106:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86010),l=n(95999),o=n(25108);const i={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function c(e){let{code:t,className:n}=e;const[c,s]=(0,r.useState)(!1),m=(0,r.useRef)(void 0),d=(0,r.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(o.error),s(!0),m.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(m.current)),[]),r.createElement("button",{type:"button","aria-label":c?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,i.copyButton,c&&i.copyButtonCopied),onClick:d},r.createElement("span",{className:i.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:i.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:i.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87462),a=n(5018),l=n(67294),o=n(61802),i=n(61953);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:m,footer:d=!0,...u}=e;return(0,l.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),l.createElement(a.Z,(0,r.Z)({},u,{customFooter:d,header:n,sideWidth:s,side:s&&(0,o.nf)(m)?l.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},l.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},l.createElement(m,null))):void 0}),l.createElement("div",{hidden:!0,style:{height:72}}),l.createElement("div",{style:{paddingLeft:s,paddingRight:s}},l.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},29167:(e,t,n)=>{function r(){const e=[];for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const a of n)a&&(a instanceof Array?a.forEach((t=>{"boolean"!=typeof t&&e.push(t)})):e.push(a));return e}n.d(t,{R:()=>r})}}]);