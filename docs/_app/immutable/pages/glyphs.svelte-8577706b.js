import{S as ne,i as se,s as ae,l as x,g as d,q as $,e as k,t as V,k as w,w as q,c as y,a as E,h as B,d as p,m as S,x as P,b as G,M as g,y as R,P as U,Q as ie,R as re,o as b,B as L,p as C,O as oe,K as W,T as z,n as H,U as fe,V as ue,W as ce,X as _e,j as pe}from"../chunks/index-643b3d06.js";import{g as N,s as j}from"../chunks/index-87f617dd.js";import{n as me}from"../chunks/index.browser-85ea5a5b.js";import{S as he,I as de,a as $e}from"../chunks/sidebarTile-2c366239.js";import{B as ge}from"../chunks/button-fea341c8.js";import"../chunks/index-56f024cf.js";function F(o,e,n){const t=o.slice();return t[5]=e[n],t[6]=e,t[7]=n,t}function J(o,e,n){const t=o.slice();return t[5]=e[n],t}function ve(o){let e;return{c(){e=V("+ Aggiungi glifo")},l(n){e=B(n,"+ Aggiungi glifo")},m(n,t){d(n,e,t)},d(n){n&&p(e)}}}function be(o){let e,n;return e=new ge({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),e.$on("click",o[2]),{c(){q(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function ke(o){let e;return{c(){e=V("Lista glifi")},l(n){e=B(n,"Lista glifi")},m(n,t){d(n,e,t)},d(n){n&&p(e)}}}function ye(o){let e=o[5].name+"",n,t;return{c(){n=V(e),t=w()},l(l){n=B(l,e),t=S(l)},m(l,a){d(l,n,a),d(l,t,a)},p(l,a){a&2&&e!==(e=l[5].name+"")&&pe(n,e)},d(l){l&&p(n),l&&p(t)}}}function Y(o,e){let n,t,l;return t=new $e({props:{selection:j,id:e[5].id,$$slots:{default:[ye]},$$scope:{ctx:e}}}),{key:o,first:null,c(){n=x(),q(t.$$.fragment),this.h()},l(a){n=x(),P(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,c){d(a,n,c),R(t,a,c),l=!0},p(a,c){e=a;const s={};c&2&&(s.id=e[5].id),c&1026&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(a){l||($(t.$$.fragment,a),l=!0)},o(a){b(t.$$.fragment,a),l=!1},d(a){a&&p(n),L(t,a)}}}function we(o){let e=[],n=new Map,t,l,a=o[1];const c=s=>s[5].id;for(let s=0;s<a.length;s+=1){let i=J(o,a,s),r=c(i);n.set(r,e[s]=Y(r,i))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=x()},l(s){for(let i=0;i<e.length;i+=1)e[i].l(s);t=x()},m(s,i){for(let r=0;r<e.length;r+=1)e[r].m(s,i);d(s,t,i),l=!0},p(s,i){i&2&&(a=s[1],H(),e=fe(e,i,c,1,s,a,n,t.parentNode,ue,Y,t,J),C())},i(s){if(!l){for(let i=0;i<a.length;i+=1)$(e[i]);l=!0}},o(s){for(let i=0;i<e.length;i+=1)b(e[i]);l=!1},d(s){for(let i=0;i<e.length;i+=1)e[i].d(s);s&&p(t)}}}function Z(o){let e,n,t,l,a,c,s,i,r,f,m,_,T,v,M,D,X,K;function te(u){o[3](u,o[5])}let O={};o[5].name!==void 0&&(O.value=o[5].name),a=new de({props:O}),ce.push(()=>_e(a,"value",te));function le(){o[4].call(v,o[6],o[7])}return{c(){e=k("div"),n=k("p"),t=V("Nome glifo"),l=w(),q(a.$$.fragment),s=w(),i=k("hr"),r=w(),f=k("div"),m=k("p"),_=V("Struttura glifo"),T=w(),v=k("textarea"),M=w(),this.h()},l(u){e=y(u,"DIV",{});var h=E(e);n=y(h,"P",{class:!0});var A=E(n);t=B(A,"Nome glifo"),A.forEach(p),l=S(h),P(a.$$.fragment,h),h.forEach(p),s=S(u),i=y(u,"HR",{}),r=S(u),f=y(u,"DIV",{});var I=E(f);m=y(I,"P",{class:!0});var Q=E(m);_=B(Q,"Struttura glifo"),Q.forEach(p),T=S(I),v=y(I,"TEXTAREA",{class:!0}),E(v).forEach(p),M=S(I),I.forEach(p),this.h()},h(){G(n,"class","text-small font-mono text-slate-900 mb-2 text-sm"),G(m,"class","text-small font-mono text-slate-900 mb-2 text-sm"),G(v,"class","h-80 p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4")},m(u,h){d(u,e,h),g(e,n),g(n,t),g(e,l),R(a,e,null),d(u,s,h),d(u,i,h),d(u,r,h),d(u,f,h),g(f,m),g(m,_),g(f,T),g(f,v),U(v,o[5].structure),g(f,M),D=!0,X||(K=ie(v,"input",le),X=!0)},p(u,h){o=u;const A={};!c&&h&2&&(c=!0,A.value=o[5].name,re(()=>c=!1)),a.$set(A),h&2&&U(v,o[5].structure)},i(u){D||($(a.$$.fragment,u),D=!0)},o(u){b(a.$$.fragment,u),D=!1},d(u){u&&p(e),L(a),u&&p(s),u&&p(i),u&&p(r),u&&p(f),X=!1,K()}}}function ee(o){let e,n,t=o[5].id==o[0]&&Z(o);return{c(){t&&t.c(),e=x()},l(l){t&&t.l(l),e=x()},m(l,a){t&&t.m(l,a),d(l,e,a),n=!0},p(l,a){l[5].id==l[0]?t?(t.p(l,a),a&3&&$(t,1)):(t=Z(l),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(H(),b(t,1,1,()=>{t=null}),C())},i(l){n||($(t),n=!0)},o(l){b(t),n=!1},d(l){t&&t.d(l),l&&p(e)}}}function Ee(o){let e,n,t,l,a;n=new he({props:{$$slots:{items:[we],listTitle:[ke],topArea:[be]},$$scope:{ctx:o}}});let c=o[1],s=[];for(let r=0;r<c.length;r+=1)s[r]=ee(F(o,c,r));const i=r=>b(s[r],1,1,()=>{s[r]=null});return{c(){e=k("div"),q(n.$$.fragment),t=w(),l=k("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=y(r,"DIV",{class:!0});var f=E(e);P(n.$$.fragment,f),t=S(f),l=y(f,"DIV",{class:!0});var m=E(l);for(let _=0;_<s.length;_+=1)s[_].l(m);m.forEach(p),f.forEach(p),this.h()},h(){G(l,"class","p-8 space-y-8"),G(e,"class","h-full flex flex-row flex-nowrap items-stretch")},m(r,f){d(r,e,f),R(n,e,null),g(e,t),g(e,l);for(let m=0;m<s.length;m+=1)s[m].m(l,null);a=!0},p(r,[f]){const m={};if(f&1026&&(m.$$scope={dirty:f,ctx:r}),n.$set(m),f&3){c=r[1];let _;for(_=0;_<c.length;_+=1){const T=F(r,c,_);s[_]?(s[_].p(T,f),$(s[_],1)):(s[_]=ee(T),s[_].c(),$(s[_],1),s[_].m(l,null))}for(H(),_=c.length;_<s.length;_+=1)i(_);C()}},i(r){if(!a){$(n.$$.fragment,r);for(let f=0;f<c.length;f+=1)$(s[f]);a=!0}},o(r){b(n.$$.fragment,r),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)b(s[f]);a=!1},d(r){r&&p(e),L(n),oe(s,r)}}}function Se(o,e,n){let t,l;W(o,j,i=>n(0,t=i)),W(o,N,i=>n(1,l=i)),l.length||a();function a(){const i={id:me(5),name:"[aggiungi nome]",structure:""};z(N,l=[...l,i],l),z(j,t=i.id,t)}function c(i,r){o.$$.not_equal(r.name,i)&&(r.name=i,N.set(l))}function s(i,r){i[r].structure=this.value,N.set(l)}return[t,l,a,c,s]}class Be extends ne{constructor(e){super(),se(this,e,Se,Ee,ae,{})}}export{Be as default};