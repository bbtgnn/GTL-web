import{S as x,i as k,s as y,e as $,t as w,c as v,a as b,h as E,d as h,b as _,g as p,F as S,E as q,G as I,k as A,m as C,H as D,I as F,J as G,q as H,o as J,K}from"../chunks/index-4836a415.js";import{b as u}from"../chunks/paths-396f020f.js";function d(n,s,r){const a=n.slice();return a[3]=s[r],a}function g(n){let s,r=n[3].text+"",a,i;return{c(){s=$("a"),a=w(r),this.h()},l(t){s=v(t,"A",{class:!0,href:!0});var f=b(s);a=E(f,r),f.forEach(h),this.h()},h(){_(s,"class","font-mono text-white px-3 py-1 bg-slate-700 hover:bg-slate-600"),_(s,"href",i=n[3].href)},m(t,f){p(t,s,f),S(s,a)},p:q,d(t){t&&h(s)}}}function L(n){let s,r,a,i=n[0],t=[];for(let e=0;e<i.length;e+=1)t[e]=g(d(n,i,e));const f=n[2].default,o=I(f,n,n[1],null);return{c(){s=$("div");for(let e=0;e<t.length;e+=1)t[e].c();r=A(),o&&o.c(),this.h()},l(e){s=v(e,"DIV",{class:!0});var c=b(s);for(let l=0;l<t.length;l+=1)t[l].l(c);c.forEach(h),r=C(e),o&&o.l(e),this.h()},h(){_(s,"class","flex flex-row flex-nowrap p-2 bg-slate-900 gap-2")},m(e,c){p(e,s,c);for(let l=0;l<t.length;l+=1)t[l].m(s,null);p(e,r,c),o&&o.m(e,c),a=!0},p(e,[c]){if(c&1){i=e[0];let l;for(l=0;l<i.length;l+=1){const m=d(e,i,l);t[l]?t[l].p(m,c):(t[l]=g(m),t[l].c(),t[l].m(s,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=i.length}o&&o.p&&(!a||c&2)&&D(o,f,e,e[1],a?G(f,e[1],c,null):F(e[1]),null)},i(e){a||(H(o,e),a=!0)},o(e){J(o,e),a=!1},d(e){e&&h(s),K(t,e),e&&h(r),o&&o.d(e)}}}function M(n,s,r){let{$$slots:a={},$$scope:i}=s;const t=[{href:`${u}/letters`,text:"Lettere"},{href:`${u}/syntax`,text:"Sintassi"},{href:`${u}/metrics`,text:"Metriche"},{href:`${u}/output`,text:"Output"}];return n.$$set=f=>{"$$scope"in f&&r(1,i=f.$$scope)},[t,i,a]}class j extends x{constructor(s){super(),k(this,s,M,L,y,{})}}export{j as default};