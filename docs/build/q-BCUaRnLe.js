import{u as Z,m as $,n as st,o as lt,p as ct,r as ut,s as dt,h as U,t as _t,k as z,l as f,v as mt,b as pt,S as vt,q as N,w as ft}from"./q-rN_hsXYx.js";import{t as yt,k as tt,m as H,r as et,n as ot,l as nt,o as W,q as ht,v as St,w as Et,x as I,y as R,z as Ct,A as wt,B as gt,E as Lt,d as Rt,C as bt,e as qt,D as Pt,R as At,f as Dt,h as It,i as Tt,j as kt}from"./q-Py5lhuYr.js";import{_ as s}from"./q-uemlvruI.js";const Ot=":root{view-transition-name:none}";const b=()=>s(()=>import("./q-H0sLJiVW.js"),[]),K=()=>s(()=>import("./q-Dxq3KPg3.js"),[]),J=[["/",[b,()=>s(()=>import("./q-Dusw0sEJ.js"),[])]],["404.html",[b,()=>s(()=>import("./q-CXy38ijO.js"),[])]],["blog/",[b,()=>s(()=>import("./q-C1aY2BfD.js"),[])]],["privacy/",[b,K,()=>s(()=>import("./q-CnY3moEz.js"),[])]],["terms/",[b,K,()=>s(()=>import("./q-BWDjzUaa.js"),[])]],["blog/[slug]/",[b,()=>s(()=>import("./q-CTrDRV0G.js"),[])]]],B=[["/",()=>s(()=>import("./q-DM8Swlf6.js"),[])]];const X=!0;const Vt=async(y,n)=>{const[h,E,a,C]=Z(),{type:l="link",forceReload:m=y===void 0,replaceState:p=!1,scroll:w=!0}=typeof n=="object"?n:{forceReload:n},c=a.value.dest,o=y===void 0?c:yt(y,C.url);if(!tt(o,c)){location.href=o.href;return}if(!m&&H(o,c)){l==="link"&&o.href!==location.href&&history.pushState(null,"",o),et(l,o,new URL(location.href),ot()),l==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:l,dest:o,forceReload:m,replaceState:p,scroll:w},nt(o,$()),W(J,B,X,o.pathname),h.value=void 0,C.isNavigating=!0,new Promise(g=>{E.r=g})},xt=({track:y})=>{const[n,h,E,a,C,l,m,p,w,c,o]=Z();async function g(){var F;const[d,q]=y(()=>[c.value,n.value]),rt=st(""),P=o.url,_=q?"form":d.type,at=d.replaceState;let r,A,j=null,T;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let k=W(J,B,X,r.pathname);T=$();const O=A=await nt(r,T,{action:q,clearCache:!0});if(!O){c.untrackedValue={type:_,dest:r};return}const V=O.href,x=new URL(V,r);ht(x,r)||(r=x,k=W(J,B,X,r.pathname));try{j=await k}catch{window.location.href=V;return}}if(j){const[k,O,V,x]=j,D=V,it=D[D.length-1];o.prevUrl=P,o.url=r,o.params={...O},c.untrackedValue={type:_,dest:r};const L=St(A,o,D,rt);h.headings=it.headings,h.menu=x,E.value=lt(D),a.links=L.links,a.meta=L.meta,a.styles=L.styles,a.scripts=L.scripts,a.title=L.title,a.frontmatter=L.frontmatter;{w.viewTransition!==!1&&(document.__q_view_transition__=!0);let Y;_==="popstate"&&(Y=ot()),(d.scroll&&(!d.forceReload||!H(r,P))&&(_==="link"||_==="popstate")||_==="form"&&!H(r,P))&&(document.__q_scroll_restore__=()=>et(_,r,P,Y));const G=A==null?void 0:A.loaders,t=window;if(G&&Object.assign(m,G),Et.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),l(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const i=history.pushState,v=history.replaceState,S=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||R(document.documentElement),e);history.pushState=(e,u,M)=>(e=S(e),i.call(history,e,u,M)),history.replaceState=(e,u,M)=>(e=S(e),v.call(history,e,u,M))}document.body.addEventListener("click",i=>{if(i.defaultPrevented)return;const v=i.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const S=v.getAttribute("href"),e=new URL(location.href),u=new URL(S,e);if(tt(u,e)&&H(u,e)){if(i.preventDefault(),!u.hash&&!u.href.endsWith("#")){u.href!==e.href&&history.pushState(null,"",u),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),I({...R(document.documentElement),x:0,y:0}),location.reload();return}l(v.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const i=R(document.documentElement);I(i)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const i=R(document.documentElement);I(i),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(F=t._qCityBootstrap)==null||F.remove(),t._qCityBootstrap=void 0,Ct.resolve()}if(_!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const i=R(document.documentElement);I(i)}wt(window,_,P,r,at),ct(T).then(()=>{var S;gt(T).setAttribute("q:route",k);const v=R(document.documentElement);I(v),t._qCityScrollEnabled=!0,o.isNavigating=!1,(S=p.r)==null||S.call(p)})}}}g()},Ut=y=>{ut(N(()=>s(()=>Promise.resolve().then(()=>Q),void 0),"s_RPDJAz33WLA"));const n=Lt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=dt("url");if(!h)throw new Error("Missing Qwik URL Env Data");const E=new URL(h),a=U({url:E,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},l=_t(U(n.response.loaders,{deep:!1})),m=z({type:"initial",dest:E,forceReload:!1,replaceState:!1,scroll:!0}),p=U(Rt),w=U({headings:void 0,menu:void 0}),c=z(),o=n.response.action,g=o?n.response.loaders[o]:void 0,d=z(g?{id:o,data:n.response.formData,output:{result:g,status:n.response.status}}:void 0),q=N(()=>s(()=>Promise.resolve().then(()=>Q),void 0),"s_fX0bDjeJa0E",[d,C,m,a]);return f(bt,w),f(qt,c),f(Pt,p),f(At,a),f(Dt,q),f(It,l),f(Tt,d),f(kt,m),mt(N(()=>s(()=>Promise.resolve().then(()=>Q),void 0),"s_02wMImzEAbk",[d,w,c,p,n,q,l,C,y,m,a])),pt(vt,null,3,"qY_0")},Q=Object.freeze(Object.defineProperty({__proto__:null,_hW:ft,s_02wMImzEAbk:xt,s_RPDJAz33WLA:Ot,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:Vt},Symbol.toStringTag,{value:"Module"}));export{ft as _hW,xt as s_02wMImzEAbk,Ot as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,Vt as s_fX0bDjeJa0E};