import{S as r,i as f,s as h,e as p,c,b as u,g as _,R as o,T as d,E as m,d as v}from"./index-95fb9bf0.js";import{n as g}from"./index.browser-85ea5a5b.js";function b(n){let e,a,s;return{c(){e=p("input"),this.h()},l(t){e=c(t,"INPUT",{type:!0,class:!0,id:!0,name:!0}),this.h()},h(){u(e,"type","text"),u(e,"class","p-2 bg-slate-200 font-mono hover:bg-slate-300 focus:ring-4"),u(e,"id",n[1]),u(e,"name",n[1])},m(t,i){_(t,e,i),o(e,n[0]),a||(s=d(e,"input",n[2]),a=!0)},p(t,[i]){i&2&&u(e,"id",t[1]),i&2&&u(e,"name",t[1]),i&1&&e.value!==t[0]&&o(e,t[0])},i:m,o:m,d(t){t&&v(e),a=!1,s()}}}function I(n,e,a){let{value:s}=e,{name:t=g(5)}=e;function i(){s=this.value,a(0,s)}return n.$$set=l=>{"value"in l&&a(0,s=l.value),"name"in l&&a(1,t=l.name)},[s,t,i]}class q extends r{constructor(e){super(),f(this,e,I,b,h,{value:0,name:1})}}export{q as I};