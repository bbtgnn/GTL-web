import{w as g}from"./index.778a0a3d.js";import{O as v}from"./index.e0e2ab75.js";var u={};function h(e){return e==="local"?localStorage:sessionStorage}function d(e,s,t){return console.warn(`writable() has been deprecated. Please use persisted() instead.

change:

import { writable } from 'svelte-local-storage-store'

to:

import { persisted } from 'svelte-local-storage-store'`),S(e,s,t)}function S(e,s,t){const a=(t==null?void 0:t.serializer)??JSON,f=(t==null?void 0:t.storage)??"local",l=typeof window<"u"&&typeof document<"u";function p(o,i){l&&h(f).setItem(o,a.stringify(i))}if(!u[e]){const o=g(s,r=>{const n=l?h(f).getItem(e):null;if(n&&r(a.parse(n)),l){const m=c=>{c.key===e&&r(c.newValue?a.parse(c.newValue):null)};return window.addEventListener("storage",m),()=>window.removeEventListener("storage",m)}}),{subscribe:i,set:w}=o;u[e]={set(r){p(e,r),w(r)},update(r){const n=r(v(o));p(e,n),w(n)},subscribe:i}}return u[e]}const V=d("syntaxes",[]),_=d("glyphs",[]),z=d("metrics",{baseline:1,height:5}),E=g(""),I=g("Hello World!");let L=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((s,t)=>(t&=63,t<36?s+=t.toString(36):t<62?s+=(t-26).toString(36).toUpperCase():t>62?s+="-":s+="_",s),"");export{E as a,_ as g,z as m,L as n,I as p,V as s};
