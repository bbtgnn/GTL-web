import{S as V,i as j,s as z,e as E,c as L,b as P,f as p,m as S,h,o as m,p as A,q as _,r as C,l as K,u as M,v as N,w as $,a as b,x as v,g as k,y,j as I,z as U,A as q,B as F,t as G,d as H,n as J}from"../chunks/index.c8313fb2.js";import{m as w}from"../chunks/index.browser.3f8e3725.js";import{I as O}from"../chunks/inputNumber.afe6a331.js";import{L as Q}from"../chunks/label.a11a713e.js";function B(l,n,r){const a=l.slice();return a[3]=n[r],a[4]=n,a[5]=r,a}function R(l){let n=l[3]+"",r;return{c(){r=G(n)},l(a){r=H(a,n)},m(a,e){h(a,r,e)},p:J,d(a){a&&p(r)}}}function D(l){let n,r,a,e,c,t,o;r=new Q({props:{target:l[3],$$slots:{default:[R]},$$scope:{ctx:l}}});function s(i){l[2](i,l[3])}let f={name:l[3]};return l[0][l[3]]!==void 0&&(f.value=l[0][l[3]]),e=new O({props:f}),M.push(()=>N(e,"value",s)),{c(){n=E("div"),$(r.$$.fragment),a=b(),$(e.$$.fragment),t=b(),this.h()},l(i){n=L(i,"DIV",{class:!0});var u=P(n);v(r.$$.fragment,u),a=k(u),v(e.$$.fragment,u),t=k(u),u.forEach(p),this.h()},h(){S(n,"class","flex flex-col")},m(i,u){h(i,n,u),y(r,n,null),I(n,a),y(e,n,null),I(n,t),o=!0},p(i,u){l=i;const g={};u&64&&(g.$$scope={dirty:u,ctx:l}),r.$set(g);const d={};!c&&u&3&&(c=!0,d.value=l[0][l[3]],U(()=>c=!1)),e.$set(d)},i(i){o||(m(r.$$.fragment,i),m(e.$$.fragment,i),o=!0)},o(i){_(r.$$.fragment,i),_(e.$$.fragment,i),o=!1},d(i){i&&p(n),q(r),q(e)}}}function T(l){let n,r,a=l[1],e=[];for(let t=0;t<a.length;t+=1)e[t]=D(B(l,a,t));const c=t=>_(e[t],1,1,()=>{e[t]=null});return{c(){n=E("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){n=L(t,"DIV",{class:!0});var o=P(n);for(let s=0;s<e.length;s+=1)e[s].l(o);o.forEach(p),this.h()},h(){S(n,"class","p-8 space-y-8")},m(t,o){h(t,n,o);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,null);r=!0},p(t,[o]){if(o&3){a=t[1];let s;for(s=0;s<a.length;s+=1){const f=B(t,a,s);e[s]?(e[s].p(f,o),m(e[s],1)):(e[s]=D(f),e[s].c(),m(e[s],1),e[s].m(n,null))}for(F(),s=a.length;s<e.length;s+=1)c(s);A()}},i(t){if(!r){for(let o=0;o<a.length;o+=1)m(e[o]);r=!0}},o(t){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)_(e[o]);r=!1},d(t){t&&p(n),C(e,t)}}}function W(l,n,r){let a;K(l,w,t=>r(0,a=t));const e=["UPM","baseline","height"];function c(t,o){l.$$.not_equal(a[o],t)&&(a[o]=t,w.set(a))}return[a,e,c]}class ee extends V{constructor(n){super(),j(this,n,W,T,z,{})}}export{ee as component};
