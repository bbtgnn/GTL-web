import{S as C,i as F,s as P,e as b,t as j,k as $,c as v,a as k,h as x,m as V,d,b as y,L as G,g as A,F as g,M as O,j as Q,w as X,x as z,y as H,N,O as J,q as T,o as q,B as K,P as W,p as Y,Q as Z,R as ee,T as te,U as le,V as se,n as ae}from"../chunks/index-4836a415.js";import{g as I}from"../chunks/index-3ea4535f.js";import{n as ne}from"../chunks/index.browser-85ea5a5b.js";import{I as ie}from"../chunks/inputText-47b36108.js";import"../chunks/index-29b3c992.js";function R(n,t,l){const s=n.slice();return s[8]=t[l],s[10]=l,s}function S(n,t){let l,s=t[8].name+"",a,p,o,h;function m(){return t[5](t[8])}return{key:n,first:null,c(){l=b("div"),a=j(s),p=$(),this.h()},l(u){l=v(u,"DIV",{class:!0});var e=k(l);a=x(e,s),p=V(e),e.forEach(d),this.h()},h(){y(l,"class","px-3 py-1"),G(l,"bg-slate-300",t[10]!=t[0]),G(l,"bg-slate-400",t[10]==t[0]),this.first=l},m(u,e){A(u,l,e),g(l,a),g(l,p),o||(h=O(l,"click",m),o=!0)},p(u,e){t=u,e&2&&s!==(s=t[8].name+"")&&Q(a,s),e&3&&G(l,"bg-slate-300",t[10]!=t[0]),e&3&&G(l,"bg-slate-400",t[10]==t[0])},d(u){u&&d(l),o=!1,h()}}}function U(n){let t,l,s,a,p,o,h;function m(e){n[6](e)}let u={};return n[1][n[0]].name!==void 0&&(u.value=n[1][n[0]].name),t=new ie({props:u}),te.push(()=>le(t,"value",m)),{c(){X(t.$$.fragment),s=$(),a=b("textarea"),this.h()},l(e){z(t.$$.fragment,e),s=V(e),a=v(e,"TEXTAREA",{class:!0}),k(a).forEach(d),this.h()},h(){y(a,"class","flex-grow h-80 p-2 bg-slate-200 font-mono")},m(e,r){H(t,e,r),A(e,s,r),A(e,a,r),N(a,n[1][n[0]].structure),p=!0,o||(h=O(a,"input",n[7]),o=!0)},p(e,r){const w={};!l&&r&3&&(l=!0,w.value=e[1][e[0]].name,J(()=>l=!1)),t.$set(w),r&3&&N(a,e[1][e[0]].structure)},i(e){p||(T(t.$$.fragment,e),p=!0)},o(e){q(t.$$.fragment,e),p=!1},d(e){K(t,e),e&&d(s),e&&d(a),o=!1,h()}}}function oe(n){let t,l,s,a,p,o=[],h=new Map,m,u,e,r,w,E=n[1];const B=i=>i[8].name;for(let i=0;i<E.length;i+=1){let c=R(n,E,i),_=B(c);h.set(_,o[i]=S(_,c))}let f=n[0]!==null&&U(n);return{c(){t=b("div"),l=b("div"),s=b("button"),a=j("+ Add Glyph"),p=$();for(let i=0;i<o.length;i+=1)o[i].c();m=$(),u=b("div"),f&&f.c(),this.h()},l(i){t=v(i,"DIV",{class:!0});var c=k(t);l=v(c,"DIV",{class:!0});var _=k(l);s=v(_,"BUTTON",{class:!0});var L=k(s);a=x(L,"+ Add Glyph"),L.forEach(d),p=V(_);for(let D=0;D<o.length;D+=1)o[D].l(_);_.forEach(d),m=V(c),u=v(c,"DIV",{class:!0});var M=k(u);f&&f.l(M),M.forEach(d),c.forEach(d),this.h()},h(){y(s,"class","flex bg-slate-200 mb-4 p-3 hover:bg-slate-300"),y(l,"class","flex basis-60 flex-col flex-nowrap gap-2 p-4 bg-slate-100"),y(u,"class","flex-grow p-4 flex flex-col flex-nowrap gap-4"),y(t,"class","flex flex-row flex-nowrap items-stretch")},m(i,c){A(i,t,c),g(t,l),g(l,s),g(s,a),g(l,p);for(let _=0;_<o.length;_+=1)o[_].m(l,null);g(t,m),g(t,u),f&&f.m(u,null),e=!0,r||(w=O(s,"click",n[4]),r=!0)},p(i,[c]){c&11&&(E=i[1],o=W(o,c,B,1,i,E,h,l,se,S,null,R)),i[0]!==null?f?(f.p(i,c),c&1&&T(f,1)):(f=U(i),f.c(),T(f,1),f.m(u,null)):f&&(ae(),q(f,1,1,()=>{f=null}),Y())},i(i){e||(T(f),e=!0)},o(i){q(f),e=!1},d(i){i&&d(t);for(let c=0;c<o.length;c+=1)o[c].d();f&&f.d(),r=!1,w()}}}function re(n,t,l){let s;Z(n,I,r=>l(1,s=r));let a;s.length||p();function p(){const r={name:ne(5),structure:""};ee(I,s=[...s,r],s),l(0,a=s.length-1)}function o(r){l(0,a=s.indexOf(r))}const h=()=>{p()},m=r=>{o(r)};function u(r){n.$$.not_equal(s[a].name,r)&&(s[a].name=r,I.set(s))}function e(){s[a].structure=this.value,I.set(s)}return n.$$.update=()=>{n.$$.dirty&1&&(a||l(0,a=0))},[a,s,p,o,h,m,u,e]}class he extends C{constructor(t){super(),F(this,t,re,oe,P,{})}}export{he as default};