import{s as b,e as T,c as G,l as h,i as S,r as d,u as I,n as y,f as k,B,o as w,p as C,k as z}from"./scheduler.C-FasNJY.js";import{S as v,i as x,b as E,d as N,e as O,m as R,t as U,a as q,f as A}from"./index.kvxrQ0J1.js";import{n as F,g as M}from"./index.browser.CB3wmJJP.js";import{a as P}from"./createFont.C8QtLuR4.js";function j(s){let e,t,r;return{c(){e=T("input"),this.h()},l(i){e=G(i,"INPUT",{type:!0,class:!0,id:!0,name:!0}),this.h()},h(){h(e,"type","text"),h(e,"class","p-2 bg-slate-200 font-mono hover:bg-slate-300 focus:ring-4"),h(e,"id",s[1]),h(e,"name",s[1])},m(i,u){S(i,e,u),d(e,s[0]),s[5](e),t||(r=I(e,"input",s[4]),t=!0)},p(i,[u]){u&2&&h(e,"id",i[1]),u&2&&h(e,"name",i[1]),u&1&&e.value!==i[0]&&d(e,i[0])},i:y,o:y,d(i){i&&k(e),s[5](null),t=!1,r()}}}function D(s,e,t){let{value:r}=e,{name:i=F(5)}=e,{grow:u=!1}=e,n;B(()=>{if(!u||!n)return;const l=n.parentElement;if(!l)return;const g=new ResizeObserver(a=>{const f=a[0];if(!f)return;const{width:m}=f.contentRect;t(2,n.style.width=`${m}px`,n)});return g.observe(l),()=>{g.disconnect()}});function o(){r=this.value,t(0,r)}function c(l){w[l?"unshift":"push"](()=>{n=l,t(2,n)})}return s.$$set=l=>{"value"in l&&t(0,r=l.value),"name"in l&&t(1,i=l.name),"grow"in l&&t(3,u=l.grow)},[r,i,n,u,o,c]}class H extends v{constructor(e){super(),x(this,e,D,j,b,{value:0,name:1,grow:3})}}function J(s){let e,t,r;function i(n){s[4](n)}let u={name:s[1],grow:!0};return s[0]!==void 0&&(u.value=s[0]),e=new H({props:u}),w.push(()=>E(e,"value",i)),{c(){N(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,o){R(e,n,o),r=!0},p(n,[o]){const c={};o&2&&(c.name=n[1]),!t&&o&1&&(t=!0,c.value=n[0],C(()=>t=!1)),e.$set(c)},i(n){r||(U(e.$$.fragment,n),r=!0)},o(n){q(e.$$.fragment,n),r=!1},d(n){A(e,n)}}}function K(s,e){let t=s;for(let r of e)t=t.replace(r,"");return t}function L(s,e,t){let r;z(s,M,a=>t(5,r=a));let{text:i=""}=e,{glyphs:u=[]}=e,{validText:n=""}=e,{name:o="previewText"}=e;function c(a){if(a.length>1)throw new Error("char must be a single character");for(let f of r)try{if(P(f.name)===a.charCodeAt(0))return f}catch(m){console.log(m,f.name)}}function l(a){let f=[],m=[];for(let p of a){const _=c(p);_?f.push(_):m.push(p)}return{found:[...new Set(f)],missing:m}}function g(a){i=a,t(0,i)}return s.$$set=a=>{"text"in a&&t(0,i=a.text),"glyphs"in a&&t(2,u=a.glyphs),"validText"in a&&t(3,n=a.validText),"name"in a&&t(1,o=a.name)},s.$$.update=()=>{if(s.$$.dirty&1){const a=l(i);t(2,u=a.found),t(3,n=K(i,a.missing))}},[i,o,u,n,g]}class Y extends v{constructor(e){super(),x(this,e,L,J,b,{text:0,glyphs:2,validText:3,name:1})}}export{Y as G,H as I};