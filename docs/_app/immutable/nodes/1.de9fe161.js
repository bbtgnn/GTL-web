import{S as x,i as S,s as j,e as u,t as h,a as k,c as d,b as v,d as b,f as m,g as q,h as f,j as E,k as $,n as g,l as y}from"../chunks/index.e0e2ab75.js";import{p as C}from"../chunks/stores.3aae8886.js";function H(l){var _;let a,t=l[0].status+"",r,o,n,p=((_=l[0].error)==null?void 0:_.message)+"",c;return{c(){a=u("h1"),r=h(t),o=k(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var s=v(a);r=b(s,t),s.forEach(m),o=q(e),n=d(e,"P",{});var i=v(n);c=b(i,p),i.forEach(m)},m(e,s){f(e,a,s),E(a,r),f(e,o,s),f(e,n,s),E(n,c)},p(e,[s]){var i;s&1&&t!==(t=e[0].status+"")&&$(r,t),s&1&&p!==(p=((i=e[0].error)==null?void 0:i.message)+"")&&$(c,p)},i:g,o:g,d(e){e&&m(a),e&&m(o),e&&m(n)}}}function P(l,a,t){let r;return y(l,C,o=>t(0,r=o)),[r]}class A extends x{constructor(a){super(),S(this,a,P,H,j,{})}}export{A as component};
