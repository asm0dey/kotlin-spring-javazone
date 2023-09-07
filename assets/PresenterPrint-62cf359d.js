import{d as _,u as d,a as p,c as m,b as h,e as n,f as t,t as a,g as s,F as u,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-9af7b4ac.js";import{N as P}from"./NoteDisplay-2115e40a.js";const V={class:"m-4"},j={class:"mb-10"},z={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},B={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:g(s(N))},[t("div",V,[t("div",j,[t("h1",z,a(s(m).title),1),t("div",L,a(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",T,[t("div",B,a(e==null?void 0:e.no)+"/"+a(s(x)),1),y(" "+a(e==null?void 0:e.title)+" ",1),D])]),b(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",H)):k("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/runner/work/kotlin-spring-javazone/kotlin-spring-javazone/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
