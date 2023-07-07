import{w as d}from"./index.f8913915.js";import{X as S}from"./index.7a7808ca.js";var u={};function v(e){return e==="local"?localStorage:sessionStorage}function g(e,s,t){return console.warn(`writable() has been deprecated. Please use persisted() instead.

change:

import { writable } from 'svelte-local-storage-store'

to:

import { persisted } from 'svelte-local-storage-store'`),h(e,s,t)}function h(e,s,t){const a=(t==null?void 0:t.serializer)??JSON,f=(t==null?void 0:t.storage)??"local",l=typeof window<"u"&&typeof document<"u";function p(o,i){l&&v(f).setItem(o,a.stringify(i))}if(!u[e]){const o=d(s,r=>{const n=l?v(f).getItem(e):null;if(n&&r(a.parse(n)),l){const w=c=>{c.key===e&&r(c.newValue?a.parse(c.newValue):null)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)}}),{subscribe:i,set:m}=o;u[e]={set(r){p(e,r),m(r)},update(r){const n=r(S(o));p(e,n),m(n)},subscribe:i}}return u[e]}const b={kind:"directory",name:"root",value:[]},I=g("syntaxes",[]),V=g("glyphs",[]),_=g("metrics",{baseline:1,height:5}),z=d(""),E=d("Hello World!");h("svgs",b);let L=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((s,t)=>(t&=63,t<36?s+=t.toString(36):t<62?s+=(t-26).toString(36).toUpperCase():t>62?s+="-":s+="_",s),"");export{z as a,V as g,_ as m,L as n,E as p,I as s};
