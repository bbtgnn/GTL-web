import{S as ae,i as ie,s as te,e as D,t as B,a as V,c as z,b as A,d as F,f as g,g as j,m as S,h as E,j as C,B as Z,q as w,p as $,o as k,l as re,n as _e,D as G,r as lt,w as H,x as W,y as R,A as K,k as x,$ as oe,a0 as Ie,a1 as X,a2 as se,_ as Q,u as ke,I as fe,a3 as ye,M as ve,G as q,J as ue,K as ce,L as de,a4 as be,a5 as rt,a6 as Ne,a7 as ct,a8 as Te,a9 as dt,aa as Ee,ab as nt,ac as Le,ad as Ve,ae as mt,W as _t,af as gt,ag as je,v as ot,z as st,Z as we,F as Ce,C as ht,E as bt}from"../chunks/index.2737b9f5.js";import{a as he,g as ge,s as at,n as pt}from"../chunks/index.browser.2c5b8c55.js";import{c as ne,S as kt,_ as yt,a as vt,D as Et}from"../chunks/Indicator.svelte_svelte_type_style_lang.7797e09c.js";import{a as Ae,f as wt,B as it,b as ft,U as Ct}from"../chunks/createFont.3cb653ff.js";import{F as Nt,a as St}from"../chunks/fontGenerator.42a3920a.js";import{h as Dt}from"../chunks/shapes.6c771488.js";function Ge(n,e,l){const t=n.slice();return t[6]=e[l],t}function zt(n){let e,l;return{c(){e=D("p"),l=B("No glyphs")},l(t){e=z(t,"P",{});var r=A(e);l=F(r,"No glyphs"),r.forEach(g)},m(t,r){E(t,e,r),C(e,l)},p:_e,i:_e,o:_e,d(t){t&&g(e)}}}function At(n){let e,l,t=n[2],r=[];for(let i=0;i<t.length;i+=1)r[i]=Be(Ge(n,t,i));const o=i=>w(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=G()},l(i){for(let a=0;a<r.length;a+=1)r[a].l(i);e=G()},m(i,a){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(i,a);E(i,e,a),l=!0},p(i,a){if(a&519){t=i[2];let s;for(s=0;s<t.length;s+=1){const f=Ge(i,t,s);r[s]?(r[s].p(f,a),k(r[s],1)):(r[s]=Be(f),r[s].c(),k(r[s],1),r[s].m(e.parentNode,e))}for(Z(),s=t.length;s<r.length;s+=1)o(s);$()}},i(i){if(!l){for(let a=0;a<t.length;a+=1)k(r[a]);l=!0}},o(i){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)w(r[a]);l=!1},d(i){lt(r,i),i&&g(e)}}}function Ue(n){let e,l,t=n[9].names.fontSubfamily.en+"",r,o,i,a;return i=new St({props:{canvasWidth:300,font:n[9],text:n[1]}}),{c(){e=D("div"),l=D("p"),r=B(t),o=V(),H(i.$$.fragment),this.h()},l(s){e=z(s,"DIV",{class:!0});var f=A(e);l=z(f,"P",{class:!0});var c=A(l);r=F(c,t),c.forEach(g),o=j(f),W(i.$$.fragment,f),f.forEach(g),this.h()},h(){S(l,"class","text-small font-mono text-slate-900 text-sm"),S(e,"class","space-y-2")},m(s,f){E(s,e,f),C(e,l),C(l,r),C(e,o),R(i,e,null),a=!0},p(s,f){(!a||f&512)&&t!==(t=s[9].names.fontSubfamily.en+"")&&x(r,t);const c={};f&512&&(c.font=s[9]),f&2&&(c.text=s[1]),i.$set(c)},i(s){a||(k(i.$$.fragment,s),a=!0)},o(s){w(i.$$.fragment,s),a=!1},d(s){s&&g(e),K(i)}}}function Pt(n){let e,l,t=n[9]&&Ue(n);return{c(){t&&t.c(),e=V()},l(r){t&&t.l(r),e=j(r)},m(r,o){t&&t.m(r,o),E(r,e,o),l=!0},p(r,o){r[9]?t?(t.p(r,o),o&512&&k(t,1)):(t=Ue(r),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Z(),w(t,1,1,()=>{t=null}),$())},i(r){l||(k(t),l=!0)},o(r){w(t),l=!1},d(r){t&&t.d(r),r&&g(e)}}}function Be(n){let e,l;return e=new Nt({props:{syntax:n[6],glyphs:[n[0]],$$slots:{default:[Pt,({font:t})=>({9:t}),({font:t})=>t?512:0]},$$scope:{ctx:n}}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,r){const o={};r&4&&(o.syntax=t[6]),r&1&&(o.glyphs=[t[0]]),r&1538&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function It(n){let e,l,t,r,o,i,a;const s=[At,zt],f=[];function c(d,_){return d[0]?0:1}return o=c(n),i=f[o]=s[o](n),{c(){e=D("div"),l=D("p"),t=B("Anteprima"),r=V(),i.c(),this.h()},l(d){e=z(d,"DIV",{class:!0});var _=A(e);l=z(_,"P",{class:!0});var m=A(l);t=F(m,"Anteprima"),m.forEach(g),r=j(_),i.l(_),_.forEach(g),this.h()},h(){S(l,"class","text-small font-mono text-slate-900 text-sm"),S(e,"class","space-y-8")},m(d,_){E(d,e,_),C(e,l),C(l,t),C(e,r),f[o].m(e,null),a=!0},p(d,[_]){let m=o;o=c(d),o===m?f[o].p(d,_):(Z(),w(f[m],1,1,()=>{f[m]=null}),$(),i=f[o],i?i.p(d,_):(i=f[o]=s[o](d),i.c()),k(i,1),i.m(e,null))},i(d){a||(k(i),a=!0)},o(d){w(i),a=!1},d(d){d&&g(e),f[o].d()}}}function Tt(n,e,l){let t,r,o;re(n,he,f=>l(3,t=f)),re(n,ge,f=>l(4,r=f)),re(n,at,f=>l(2,o=f));let i,a;function s(f){try{return String.fromCharCode(Ae(f.name))}catch(c){return console.log(c),""}}return n.$$.update=()=>{n.$$.dirty&24&&t&&l(0,i=r.find(f=>f.id===t)),n.$$.dirty&1&&i&&l(1,a=s(i))},[i,a,o,t,r]}class Lt extends ae{constructor(e){super(),ie(this,e,Tt,It,te,{})}}function Vt(n){let e=n[1],l,t,r=n[1]&&Se(n);return{c(){r&&r.c(),l=G()},l(o){r&&r.l(o),l=G()},m(o,i){r&&r.m(o,i),E(o,l,i),t=!0},p(o,i){o[1]?e?te(e,o[1])?(r.d(1),r=Se(o),e=o[1],r.c(),r.m(l.parentNode,l)):r.p(o,i):(r=Se(o),e=o[1],r.c(),r.m(l.parentNode,l)):e&&(r.d(1),r=null,e=o[1])},i(o){t||(k(r),t=!0)},o(o){w(r),t=!1},d(o){o&&g(l),r&&r.d(o)}}}function jt(n){let e=n[1],l,t=!1,r,o=n[1]&&De(n);return{c(){o&&o.c(),l=G()},l(i){o&&o.l(i),l=G()},m(i,a){o&&o.m(i,a),E(i,l,a),r=!0},p(i,a){i[1]?e?te(e,i[1])?(o.d(1),o=De(i),e=i[1],o.c(),t&&(t=!1,k(o)),o.m(l.parentNode,l)):(t&&(t=!1,k(o)),o.p(i,a)):(o=De(i),e=i[1],o.c(),k(o),o.m(l.parentNode,l)):e&&(t=!0,Z(),w(o,1,1,()=>{o=null,e=i[1],t=!1}),$())},i(i){r||(k(o),r=!0)},o(i){w(o),r=!1},d(i){i&&g(l),o&&o.d(i)}}}function Se(n){let e,l,t,r,o;const i=n[13].default,a=fe(i,n,n[12],null);let s=[n[7],{class:n[6]}],f={};for(let c=0;c<s.length;c+=1)f=X(f,s[c]);return{c(){e=D(n[1]),a&&a.c(),this.h()},l(c){e=z(c,(n[1]||"null").toUpperCase(),{class:!0});var d=A(e);a&&a.l(d),d.forEach(g),this.h()},h(){ye(n[1])(e,f)},m(c,d){E(c,e,d),a&&a.m(e,null),n[25](e),t=!0,r||(o=[ve(l=n[4].call(null,e,n[5])),q(e,"click",n[19]),q(e,"mouseenter",n[20]),q(e,"mouseleave",n[21]),q(e,"focusin",n[22]),q(e,"focusout",n[23])],r=!0)},p(c,d){a&&a.p&&(!t||d&4096)&&ue(a,i,c,c[12],t?de(i,c[12],d,null):ce(c[12]),null),ye(c[1])(e,f=be(s,[d&128&&c[7],(!t||d&64)&&{class:c[6]}])),l&&rt(l.update)&&d&32&&l.update.call(null,c[5])},i(c){t||(k(a,c),t=!0)},o(c){w(a,c),t=!1},d(c){c&&g(e),a&&a.d(c),n[25](null),r=!1,Ne(o)}}}function De(n){let e,l,t,r,o,i;const a=n[13].default,s=fe(a,n,n[12],null);let f=[n[7],{class:n[6]}],c={};for(let d=0;d<f.length;d+=1)c=X(c,f[d]);return{c(){e=D(n[1]),s&&s.c(),this.h()},l(d){e=z(d,(n[1]||"null").toUpperCase(),{class:!0});var _=A(e);s&&s.l(_),_.forEach(g),this.h()},h(){ye(n[1])(e,c)},m(d,_){E(d,e,_),s&&s.m(e,null),n[24](e),r=!0,o||(i=[ve(l=n[4].call(null,e,n[5])),q(e,"click",n[14]),q(e,"mouseenter",n[15]),q(e,"mouseleave",n[16]),q(e,"focusin",n[17]),q(e,"focusout",n[18])],o=!0)},p(d,_){n=d,s&&s.p&&(!r||_&4096)&&ue(s,a,n,n[12],r?de(a,n[12],_,null):ce(n[12]),null),ye(n[1])(e,c=be(f,[_&128&&n[7],(!r||_&64)&&{class:n[6]}])),l&&rt(l.update)&&_&32&&l.update.call(null,n[5])},i(d){r||(k(s,d),ct(()=>{r&&(t||(t=Te(e,n[2],n[3],!0)),t.run(1))}),r=!0)},o(d){w(s,d),t||(t=Te(e,n[2],n[3],!1)),t.run(0),r=!1},d(d){d&&g(e),s&&s.d(d),n[24](null),d&&t&&t.end(),o=!1,Ne(i)}}}function Gt(n){let e,l,t,r;const o=[jt,Vt],i=[];function a(s,f){return s[2]?0:1}return e=a(n),l=i[e]=o[e](n),{c(){l.c(),t=G()},l(s){l.l(s),t=G()},m(s,f){i[e].m(s,f),E(s,t,f),r=!0},p(s,[f]){let c=e;e=a(s),e===c?i[e].p(s,f):(Z(),w(i[c],1,1,()=>{i[c]=null}),$(),l=i[e],l?l.p(s,f):(l=i[e]=o[e](s),l.c()),k(l,1),l.m(t.parentNode,t))},i(s){r||(k(l),r=!0)},o(s){w(l),r=!1},d(s){i[e].d(s),s&&g(t)}}}function Ut(n,e,l){const t=["tag","color","rounded","border","shadow","transition","params","node","use","options"];let r=oe(e,t),{$$slots:o={},$$scope:i}=e;Ie("background",!0);let{tag:a="div"}=e,{color:s="default"}=e,{rounded:f=!1}=e,{border:c=!1}=e,{shadow:d=!1}=e,{transition:_=void 0}=e,{params:m={}}=e,{node:u=void 0}=e,{use:b=_e}=e,{options:p={}}=e;const N={gray:"bg-gray-50 dark:bg-gray-800",red:"bg-red-50 dark:bg-gray-800",yellow:"bg-yellow-50 dark:bg-gray-800 ",green:"bg-green-50 dark:bg-gray-800 ",indigo:"bg-indigo-50 dark:bg-gray-800 ",purple:"bg-purple-50 dark:bg-gray-800 ",pink:"bg-pink-50 dark:bg-gray-800 ",blue:"bg-blue-50 dark:bg-gray-800 ",light:"bg-gray-50 dark:bg-gray-700",dark:"bg-gray-50 dark:bg-gray-800",default:"bg-white dark:bg-gray-800",dropdown:"bg-white dark:bg-gray-700",navbar:"bg-white dark:bg-gray-900",navbarUl:"bg-gray-50 dark:bg-gray-800",form:"bg-gray-50 dark:bg-gray-700",primary:"bg-primary-50 dark:bg-gray-800 ",none:""},h={gray:"text-gray-800 dark:text-gray-300",red:"text-red-800 dark:text-red-400",yellow:"text-yellow-800 dark:text-yellow-300",green:"text-green-800 dark:text-green-400",indigo:"text-indigo-800 dark:text-indigo-400",purple:"text-purple-800 dark:text-purple-400",pink:"text-pink-800 dark:text-pink-400",blue:"text-blue-800 dark:text-blue-400",light:"text-gray-700 dark:text-gray-300",dark:"text-gray-700 dark:text-gray-300",default:"text-gray-500 dark:text-gray-400",dropdown:"text-gray-700 dark:text-gray-200",navbar:"text-gray-700 dark:text-gray-200",navbarUl:"text-gray-700 dark:text-gray-400",form:"text-gray-900 dark:text-white",primary:"text-primary-800 dark:text-primary-400",none:""},P={gray:"border-gray-300 dark:border-gray-800",red:"border-red-300 dark:border-red-800",yellow:"border-yellow-300 dark:border-yellow-800",green:"border-green-300 dark:border-green-800",indigo:"border-indigo-300 dark:border-indigo-800",purple:"border-purple-300 dark:border-purple-800",pink:"border-pink-300 dark:border-pink-800",blue:"border-blue-300 dark:border-blue-800",light:"border-gray-500",dark:"border-gray-500",default:"border-gray-200 dark:border-gray-700",dropdown:"border-gray-100 dark:border-gray-700",navbar:"border-gray-100 dark:border-gray-700",navbarUl:"border-gray-100 dark:border-gray-700",form:"border-gray-300 dark:border-gray-700",primary:"border-primary-500 dark:bg-primary-200 ",none:""};let U;function J(v){Q.call(this,n,v)}function I(v){Q.call(this,n,v)}function T(v){Q.call(this,n,v)}function O(v){Q.call(this,n,v)}function pe(v){Q.call(this,n,v)}function L(v){Q.call(this,n,v)}function M(v){Q.call(this,n,v)}function y(v){Q.call(this,n,v)}function Y(v){Q.call(this,n,v)}function le(v){Q.call(this,n,v)}function ee(v){ke[v?"unshift":"push"](()=>{u=v,l(0,u)})}function me(v){ke[v?"unshift":"push"](()=>{u=v,l(0,u)})}return n.$$set=v=>{l(29,e=X(X({},e),se(v))),l(7,r=oe(e,t)),"tag"in v&&l(1,a=v.tag),"color"in v&&l(8,s=v.color),"rounded"in v&&l(9,f=v.rounded),"border"in v&&l(10,c=v.border),"shadow"in v&&l(11,d=v.shadow),"transition"in v&&l(2,_=v.transition),"params"in v&&l(3,m=v.params),"node"in v&&l(0,u=v.node),"use"in v&&l(4,b=v.use),"options"in v&&l(5,p=v.options),"$$scope"in v&&l(12,i=v.$$scope)},n.$$.update=()=>{n.$$.dirty&256&&l(8,s=s??"default"),n.$$.dirty&256&&Ie("color",s),l(6,U=ne(N[s],h[s],f&&(s==="dropdown"?"rounded":"rounded-lg"),c&&"border",P[s],d&&"shadow-md",e.class))},e=se(e),[u,a,_,m,b,p,U,r,s,f,c,d,i,o,J,I,T,O,pe,L,M,y,Y,le,ee,me]}class Pe extends ae{constructor(e){super(),ie(this,e,Ut,Gt,te,{tag:1,color:8,rounded:9,border:10,shadow:11,transition:2,params:3,node:0,use:4,options:5})}}const Bt=n=>({svgSize:n&4}),Fe=n=>({svgSize:n[5][n[2]]}),Ft=n=>({svgSize:n&4}),Oe=n=>({svgSize:n[5][n[2]]});function Ot(n){let e,l,t,r,o,i,a=n[0]&&Me(n);const s=n[9].default,f=fe(s,n,n[8],Fe);let c=[{type:"button"},n[6],{class:n[4]},{"aria-label":t=n[1]??n[0]}],d={};for(let _=0;_<c.length;_+=1)d=X(d,c[_]);return{c(){e=D("button"),a&&a.c(),l=V(),f&&f.c(),this.h()},l(_){e=z(_,"BUTTON",{type:!0,class:!0,"aria-label":!0});var m=A(e);a&&a.l(m),l=j(m),f&&f.l(m),m.forEach(g),this.h()},h(){Ee(e,d)},m(_,m){E(_,e,m),a&&a.m(e,null),C(e,l),f&&f.m(e,null),e.autofocus&&e.focus(),r=!0,o||(i=q(e,"click",n[10]),o=!0)},p(_,m){_[0]?a?a.p(_,m):(a=Me(_),a.c(),a.m(e,l)):a&&(a.d(1),a=null),f&&f.p&&(!r||m&260)&&ue(f,s,_,_[8],r?de(s,_[8],m,Bt):ce(_[8]),Fe),Ee(e,d=be(c,[{type:"button"},m&64&&_[6],(!r||m&16)&&{class:_[4]},(!r||m&3&&t!==(t=_[1]??_[0]))&&{"aria-label":t}]))},i(_){r||(k(f,_),r=!0)},o(_){w(f,_),r=!1},d(_){_&&g(e),a&&a.d(),f&&f.d(_),o=!1,i()}}}function Mt(n){let e,l,t,r,o=n[0]&&qe(n);const i=n[9].default,a=fe(i,n,n[8],Oe);let s=[{href:n[3]},n[6],{class:n[4]},{"aria-label":t=n[1]??n[0]}],f={};for(let c=0;c<s.length;c+=1)f=X(f,s[c]);return{c(){e=D("a"),o&&o.c(),l=V(),a&&a.c(),this.h()},l(c){e=z(c,"A",{href:!0,class:!0,"aria-label":!0});var d=A(e);o&&o.l(d),l=j(d),a&&a.l(d),d.forEach(g),this.h()},h(){Ee(e,f)},m(c,d){E(c,e,d),o&&o.m(e,null),C(e,l),a&&a.m(e,null),r=!0},p(c,d){c[0]?o?o.p(c,d):(o=qe(c),o.c(),o.m(e,l)):o&&(o.d(1),o=null),a&&a.p&&(!r||d&260)&&ue(a,i,c,c[8],r?de(i,c[8],d,Ft):ce(c[8]),Oe),Ee(e,f=be(s,[(!r||d&8)&&{href:c[3]},d&64&&c[6],(!r||d&16)&&{class:c[4]},(!r||d&3&&t!==(t=c[1]??c[0]))&&{"aria-label":t}]))},i(c){r||(k(a,c),r=!0)},o(c){w(a,c),r=!1},d(c){c&&g(e),o&&o.d(),a&&a.d(c)}}}function Me(n){let e,l;return{c(){e=D("span"),l=B(n[0]),this.h()},l(t){e=z(t,"SPAN",{class:!0});var r=A(e);l=F(r,n[0]),r.forEach(g),this.h()},h(){S(e,"class","sr-only")},m(t,r){E(t,e,r),C(e,l)},p(t,r){r&1&&x(l,t[0])},d(t){t&&g(e)}}}function qe(n){let e,l;return{c(){e=D("span"),l=B(n[0]),this.h()},l(t){e=z(t,"SPAN",{class:!0});var r=A(e);l=F(r,n[0]),r.forEach(g),this.h()},h(){S(e,"class","sr-only")},m(t,r){E(t,e,r),C(e,l)},p(t,r){r&1&&x(l,t[0])},d(t){t&&g(e)}}}function qt(n){let e,l,t,r;const o=[Mt,Ot],i=[];function a(s,f){return s[3]?0:1}return e=a(n),l=i[e]=o[e](n),{c(){l.c(),t=G()},l(s){l.l(s),t=G()},m(s,f){i[e].m(s,f),E(s,t,f),r=!0},p(s,[f]){let c=e;e=a(s),e===c?i[e].p(s,f):(Z(),w(i[c],1,1,()=>{i[c]=null}),$(),l=i[e],l?l.p(s,f):(l=i[e]=o[e](s),l.c()),k(l,1),l.m(t.parentNode,t))},i(s){r||(k(l),r=!0)},o(s){w(l),r=!1},d(s){i[e].d(s),s&&g(t)}}}function Ht(n,e,l){const t=["color","name","ariaLabel","size","href"];let r=oe(e,t),{$$slots:o={},$$scope:i}=e;const a=dt("background");let{color:s="default"}=e,{name:f=void 0}=e,{ariaLabel:c=void 0}=e,{size:d="md"}=e,{href:_=void 0}=e;const m={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700",default:"focus:ring-gray-400 "},u={xs:"m-0.5 rounded focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let b;const p={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};function N(h){Q.call(this,n,h)}return n.$$set=h=>{l(14,e=X(X({},e),se(h))),l(6,r=oe(e,t)),"color"in h&&l(7,s=h.color),"name"in h&&l(0,f=h.name),"ariaLabel"in h&&l(1,c=h.ariaLabel),"size"in h&&l(2,d=h.size),"href"in h&&l(3,_=h.href),"$$scope"in h&&l(8,i=h.$$scope)},n.$$.update=()=>{l(4,b=ne("focus:outline-none whitespace-normal",u[d],m[s],s==="default"&&(a?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=se(e),[f,c,d,_,b,p,r,s,i,o,N]}class Wt extends ae{constructor(e){super(),ie(this,e,Ht,qt,te,{color:7,name:0,ariaLabel:1,size:2,href:3})}}function Rt(n){let e,l,t;return{c(){e=Le("svg"),l=Le("path"),this.h()},l(r){e=Ve(r,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var o=A(e);l=Ve(o,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),A(l).forEach(g),o.forEach(g),this.h()},h(){S(l,"fill-rule","evenodd"),S(l,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),S(l,"clip-rule","evenodd"),S(e,"class",t=n[4]),S(e,"fill","currentColor"),S(e,"viewBox","0 0 20 20"),S(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){E(r,e,o),C(e,l)},p(r,o){o&16&&t!==(t=r[4])&&S(e,"class",t)},d(r){r&&g(e)}}}function Kt(n){let e,l;const t=[{name:n[0]},n[1],{class:ne("ml-auto",n[2].class)}];let r={$$slots:{default:[Rt,({svgSize:o})=>({4:o}),({svgSize:o})=>o?16:0]},$$scope:{ctx:n}};for(let o=0;o<t.length;o+=1)r=X(r,t[o]);return e=new Wt({props:r}),e.$on("click",n[3]),{c(){H(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,i){R(e,o,i),l=!0},p(o,[i]){const a=i&7?be(t,[i&1&&{name:o[0]},i&2&&nt(o[1]),i&4&&{class:ne("ml-auto",o[2].class)}]):{};i&48&&(a.$$scope={dirty:i,ctx:o}),e.$set(a)},i(o){l||(k(e.$$.fragment,o),l=!0)},o(o){w(e.$$.fragment,o),l=!1},d(o){K(e,o)}}}function Qt(n,e,l){const t=["name"];let r=oe(e,t),{name:o="Close"}=e;function i(a){Q.call(this,n,a)}return n.$$set=a=>{l(2,e=X(X({},e),se(a))),l(1,r=oe(e,t)),"name"in a&&l(0,o=a.name)},e=se(e),[o,r,e,i]}class ut extends ae{constructor(e){super(),ie(this,e,Qt,Kt,te,{name:0})}}const Xt=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;function Jt(n){const e=Array.from(n.querySelectorAll(Xt));function l(t){if(!(t.key==="Tab"||t.keyCode===9))return;let o=e.indexOf(document.activeElement??n);o===-1&&t.shiftKey&&(o=0),o+=e.length+(t.shiftKey?-1:1),o%=e.length,e[o].focus(),t.preventDefault()}return document.addEventListener("keydown",l,!0),{destroy(){document.removeEventListener("keydown",l,!0)}}}const Yt=n=>({}),He=n=>({}),Zt=n=>({}),We=n=>({});function Re(n){let e,l,t,r,o,i,a,s,f,c;const d=[{rounded:!0},{shadow:!0},n[12],{class:n[5]}];let _={$$slots:{default:[rl]},$$scope:{ctx:n}};for(let m=0;m<d.length;m+=1)_=X(_,d[m]);return i=new Pe({props:_}),{c(){e=D("div"),t=V(),r=D("div"),o=D("div"),H(i.$$.fragment),this.h()},l(m){e=z(m,"DIV",{class:!0}),A(e).forEach(g),t=j(m),r=z(m,"DIV",{class:!0,tabindex:!0,"aria-modal":!0,role:!0});var u=A(r);o=z(u,"DIV",{class:!0});var b=A(o);W(i.$$.fragment,b),b.forEach(g),u.forEach(g),this.h()},h(){S(e,"class",l=ne("fixed inset-0 z-40",n[4])),S(o,"class",a="flex relative "+n[8][n[2]]+" w-full max-h-full"),S(r,"class",ne("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex",...n[7]())),S(r,"tabindex","-1"),S(r,"aria-modal","true"),S(r,"role","dialog")},m(m,u){E(m,e,u),E(m,t,u),E(m,r,u),C(r,o),R(i,o,null),s=!0,f||(c=[q(r,"keydown",n[11]),q(r,"wheel",gt(n[19]),{passive:!1}),ve(n[6].call(null,r)),ve(Jt.call(null,r)),q(r,"click",n[9])],f=!0)},p(m,u){(!s||u&16&&l!==(l=ne("fixed inset-0 z-40",m[4])))&&S(e,"class",l);const b=u&4128?be(d,[d[0],d[1],u&4096&&nt(m[12]),u&32&&{class:m[5]}]):{};u&2109450&&(b.$$scope={dirty:u,ctx:m}),i.$set(b),(!s||u&4&&a!==(a="flex relative "+m[8][m[2]]+" w-full max-h-full"))&&S(o,"class",a)},i(m){s||(k(i.$$.fragment,m),s=!0)},o(m){w(i.$$.fragment,m),s=!1},d(m){m&&g(e),m&&g(t),m&&g(r),K(i),f=!1,Ne(c)}}}function $t(n){let e,l;return e=new ut({props:{name:"Close modal",class:"absolute top-3 right-2.5",color:n[12].color}}),e.$on("click",n[10]),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,r){const o={};r&4096&&(o.color=t[12].color),e.$set(o)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function xt(n){let e,l;return e=new Pe({props:{color:n[12].color,class:"flex justify-between items-center p-4 rounded-t border-b",$$slots:{default:[tl]},$$scope:{ctx:n}}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,r){const o={};r&4096&&(o.color=t[12].color),r&2101258&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function el(n){let e,l,t;return{c(){e=D("h3"),l=B(n[1]),this.h()},l(r){e=z(r,"H3",{class:!0});var o=A(e);l=F(o,n[1]),o.forEach(g),this.h()},h(){S(e,"class",t="text-xl font-semibold "+(n[12].color?"":"text-gray-900 dark:text-white")+" p-0")},m(r,o){E(r,e,o),C(e,l)},p(r,o){o&2&&x(l,r[1]),o&4096&&t!==(t="text-xl font-semibold "+(r[12].color?"":"text-gray-900 dark:text-white")+" p-0")&&S(e,"class",t)},d(r){r&&g(e)}}}function Ke(n){let e,l;return e=new ut({props:{name:"Close modal",color:n[12].color}}),e.$on("click",n[10]),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,r){const o={};r&4096&&(o.color=t[12].color),e.$set(o)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function tl(n){let e,l,t;const r=n[18].header,o=fe(r,n,n[21],We),i=o||el(n);let a=!n[3]&&Ke(n);return{c(){i&&i.c(),e=V(),a&&a.c(),l=G()},l(s){i&&i.l(s),e=j(s),a&&a.l(s),l=G()},m(s,f){i&&i.m(s,f),E(s,e,f),a&&a.m(s,f),E(s,l,f),t=!0},p(s,f){o?o.p&&(!t||f&2097152)&&ue(o,r,s,s[21],t?de(r,s[21],f,Zt):ce(s[21]),We):i&&i.p&&(!t||f&4098)&&i.p(s,t?f:-1),s[3]?a&&(Z(),w(a,1,1,()=>{a=null}),$()):a?(a.p(s,f),f&8&&k(a,1)):(a=Ke(s),a.c(),k(a,1),a.m(l.parentNode,l))},i(s){t||(k(i,s),k(a),t=!0)},o(s){w(i,s),w(a),t=!1},d(s){i&&i.d(s),s&&g(e),a&&a.d(s),s&&g(l)}}}function Qe(n){let e,l;return e=new Pe({props:{color:n[12].color,class:"flex items-center p-6 space-x-2 rounded-b border-t",$$slots:{default:[ll]},$$scope:{ctx:n}}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,r){const o={};r&4096&&(o.color=t[12].color),r&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function ll(n){let e;const l=n[18].footer,t=fe(l,n,n[21],He);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,o){t&&t.m(r,o),e=!0},p(r,o){t&&t.p&&(!e||o&2097152)&&ue(t,l,r,r[21],e?de(l,r[21],o,Yt):ce(r[21]),He)},i(r){e||(k(t,r),e=!0)},o(r){w(t,r),e=!1},d(r){t&&t.d(r)}}}function rl(n){let e,l,t,r,o,i,a,s,f;const c=[xt,$t],d=[];function _(p,N){return p[13].header||p[1]?0:p[3]?-1:1}~(e=_(n))&&(l=d[e]=c[e](n));const m=n[18].default,u=fe(m,n,n[21],null);let b=n[13].footer&&Qe(n);return{c(){l&&l.c(),t=V(),r=D("div"),u&&u.c(),o=V(),b&&b.c(),i=G(),this.h()},l(p){l&&l.l(p),t=j(p),r=z(p,"DIV",{class:!0});var N=A(r);u&&u.l(N),N.forEach(g),o=j(p),b&&b.l(p),i=G(),this.h()},h(){S(r,"class","p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain")},m(p,N){~e&&d[e].m(p,N),E(p,t,N),E(p,r,N),u&&u.m(r,null),E(p,o,N),b&&b.m(p,N),E(p,i,N),a=!0,s||(f=[q(r,"keydown",je(n[11])),q(r,"wheel",je(n[20]),{passive:!0})],s=!0)},p(p,N){let h=e;e=_(p),e===h?~e&&d[e].p(p,N):(l&&(Z(),w(d[h],1,1,()=>{d[h]=null}),$()),~e?(l=d[e],l?l.p(p,N):(l=d[e]=c[e](p),l.c()),k(l,1),l.m(t.parentNode,t)):l=null),u&&u.p&&(!a||N&2097152)&&ue(u,m,p,p[21],a?de(m,p[21],N,null):ce(p[21]),null),p[13].footer?b?(b.p(p,N),N&8192&&k(b,1)):(b=Qe(p),b.c(),k(b,1),b.m(i.parentNode,i)):b&&(Z(),w(b,1,1,()=>{b=null}),$())},i(p){a||(k(l),k(u,p),k(b),a=!0)},o(p){w(l),w(u,p),w(b),a=!1},d(p){~e&&d[e].d(p),p&&g(t),p&&g(r),u&&u.d(p),p&&g(o),b&&b.d(p),p&&g(i),s=!1,Ne(f)}}}function nl(n){let e,l,t=n[0]&&Re(n);return{c(){t&&t.c(),e=G()},l(r){t&&t.l(r),e=G()},m(r,o){t&&t.m(r,o),E(r,e,o),l=!0},p(r,[o]){r[0]?t?(t.p(r,o),o&1&&k(t,1)):(t=Re(r),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Z(),w(t,1,1,()=>{t=null}),$())},i(r){l||(k(t),l=!0)},o(r){w(t),l=!1},d(r){t&&t.d(r),r&&g(e)}}}function ol(n,e,l){const t=["open","title","size","placement","autoclose","permanent","backdropClasses","defaultClass","outsideclose"];let r=oe(e,t),{$$slots:o={},$$scope:i}=e;const a=mt(o);let{open:s=!1}=e,{title:f=""}=e,{size:c="md"}=e,{placement:d="center"}=e,{autoclose:_=!1}=e,{permanent:m=!1}=e,{backdropClasses:u="bg-gray-900 bg-opacity-50 dark:bg-opacity-80"}=e,{defaultClass:b="relative flex flex-col mx-auto"}=e,{outsideclose:p=!1}=e;const N=_t();function h(y){const Y=document.createTreeWalker(y,NodeFilter.SHOW_ELEMENT);let le;for(;le=Y.nextNode();)if(le instanceof HTMLElement){const ee=le,[me,v]=O(ee);(me||v)&&(ee.tabIndex=0)}y.focus()}const P=()=>{switch(d){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},U={xs:"max-w-md",sm:"max-w-lg",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-7xl"},J=y=>{const Y=y.target;_&&(Y==null?void 0:Y.tagName)==="BUTTON"&&I(y),p&&Y===y.currentTarget&&I(y)},I=y=>{y.preventDefault(),l(0,s=!1)};let T;const O=y=>[y.scrollWidth>y.clientWidth&&["scroll","auto"].indexOf(getComputedStyle(y).overflowX)>=0,y.scrollHeight>y.clientHeight&&["scroll","auto"].indexOf(getComputedStyle(y).overflowY)>=0];function pe(y){if(y.key==="Escape"&&!m)return I(y)}function L(y){Q.call(this,n,y)}function M(y){Q.call(this,n,y)}return n.$$set=y=>{l(24,e=X(X({},e),se(y))),l(12,r=oe(e,t)),"open"in y&&l(0,s=y.open),"title"in y&&l(1,f=y.title),"size"in y&&l(2,c=y.size),"placement"in y&&l(14,d=y.placement),"autoclose"in y&&l(15,_=y.autoclose),"permanent"in y&&l(3,m=y.permanent),"backdropClasses"in y&&l(4,u=y.backdropClasses),"defaultClass"in y&&l(16,b=y.defaultClass),"outsideclose"in y&&l(17,p=y.outsideclose),"$$scope"in y&&l(21,i=y.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&N(s?"open":"hide"),l(5,T=ne(b,"w-full",e.class))},e=se(e),[s,f,c,m,u,T,h,P,U,J,I,pe,r,a,d,_,b,p,o,L,M,i]}class sl extends ae{constructor(e){super(),ie(this,e,ol,nl,te,{open:0,title:1,size:2,placement:14,autoclose:15,permanent:3,backdropClasses:4,defaultClass:16,outsideclose:17})}}function al(n){let e,l;return{c(){e=D("p"),l=B("Nessun glifo trovato")},l(t){e=z(t,"P",{});var r=A(e);l=F(r,"Nessun glifo trovato"),r.forEach(g)},m(t,r){E(t,e,r),C(e,l)},p:_e,d(t){t&&g(e)}}}function il(n){let e,l=n[2][0]+"",t,r,o=n[2][1]+"",i;return{c(){e=D("p"),t=B(l),r=B(" – "),i=B(o)},l(a){e=z(a,"P",{});var s=A(e);t=F(s,l),r=F(s," – "),i=F(s,o),s.forEach(g)},m(a,s){E(a,e,s),C(e,t),C(e,r),C(e,i)},p(a,s){s&4&&l!==(l=a[2][0]+"")&&x(t,l),s&4&&o!==(o=a[2][1]+"")&&x(i,o)},d(a){a&&g(e)}}}function fl(n){let e,l;return{c(){e=D("p"),l=B("Questo glifo è già aggiunto")},l(t){e=z(t,"P",{});var r=A(e);l=F(r,"Questo glifo è già aggiunto"),r.forEach(g)},m(t,r){E(t,e,r),C(e,l)},p:_e,d(t){t&&g(e)}}}function ul(n){let e;return{c(){e=B("+ Aggiungi glifo")},l(l){e=F(l,"+ Aggiungi glifo")},m(l,t){E(l,e,t)},d(l){l&&g(e)}}}function cl(n){let e,l,t,r,o,i,a,s,f;function c(m,u){return m[3]?fl:m[2]?il:al}let d=c(n),_=d(n);return i=new it({props:{disabled:!n[4],$$slots:{default:[ul]},$$scope:{ctx:n}}}),i.$on("click",n[5]),{c(){e=D("div"),l=D("input"),t=V(),r=D("div"),_.c(),o=V(),H(i.$$.fragment),this.h()},l(m){e=z(m,"DIV",{class:!0});var u=A(e);l=z(u,"INPUT",{class:!0,maxlength:!0,minlength:!0,size:!0}),t=j(u),r=z(u,"DIV",{class:!0});var b=A(r);_.l(b),b.forEach(g),o=j(u),W(i.$$.fragment,u),u.forEach(g),this.h()},h(){S(l,"class","border hover:border-blue-600 px-4"),S(l,"maxlength","1"),S(l,"minlength","1"),S(l,"size","1"),S(r,"class","grow bg-gray-100 flex items-center px-4"),S(e,"class","flex items-stretch gap-4 font-mono")},m(m,u){E(m,e,u),C(e,l),Ce(l,n[1]),C(e,t),C(e,r),_.m(r,null),C(e,o),R(i,e,null),a=!0,s||(f=q(l,"input",n[6]),s=!0)},p(m,u){u&2&&l.value!==m[1]&&Ce(l,m[1]),d===(d=c(m))&&_?_.p(m,u):(_.d(1),_=d(m),_&&(_.c(),_.m(r,null)));const b={};u&16&&(b.disabled=!m[4]),u&2048&&(b.$$scope={dirty:u,ctx:m}),i.$set(b)},i(m){a||(k(i.$$.fragment,m),a=!0)},o(m){w(i.$$.fragment,m),a=!1},d(m){m&&g(e),_.d(),K(i),s=!1,f()}}}function dl(n){let e,l,t;function r(i){n[7](i)}let o={outsideclose:!0,class:"!rounded-none-none !font-mono",title:"Aggiungi glifo",$$slots:{default:[cl]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.open=n[0]),e=new sl({props:o}),ke.push(()=>ot(e,"open",r)),{c(){H(e.$$.fragment)},l(i){W(e.$$.fragment,i)},m(i,a){R(e,i,a),t=!0},p(i,[a]){const s={};a&2078&&(s.$$scope={dirty:a,ctx:i}),!l&&a&1&&(l=!0,s.open=i[0],st(()=>l=!1)),e.$set(s)},i(i){t||(k(e.$$.fragment,i),t=!0)},o(i){w(e.$$.fragment,i),t=!1},d(i){K(e,i)}}}function ml(n,e,l){let t,r,o,i,a;re(n,he,u=>l(8,i=u)),re(n,ge,u=>l(9,a=u));let{open:s=!1}=e,f="";function c(u){return!!a.find(b=>b.name==(t==null?void 0:t[0]))}function d(){if(!t||r)return;const u={id:pt(5),name:t[0],structure:""};we(ge,a=[...a,u],a),we(he,i=u.id,i),l(1,f=""),l(0,s=!1)}function _(){f=this.value,l(1,f)}function m(u){s=u,l(0,s)}return n.$$set=u=>{"open"in u&&l(0,s=u.open)},n.$$.update=()=>{n.$$.dirty&2&&l(2,t=wt(f)),n.$$.dirty&4&&l(3,r=c()),n.$$.dirty&12&&l(4,o=t&&!r)},[s,f,t,r,o,d,_,m]}class _l extends ae{constructor(e){super(),ie(this,e,ml,dl,te,{open:0})}}function Xe(n,e,l){const t=n.slice();return t[11]=e[l],t[12]=e,t[13]=l,t}function ze(n){const e=n.slice(),l=ft(e[11].name);e[14]=l;const t=Ct[e[11].name];return e[15]=t,e}function Je(n,e,l){const t=n.slice();t[11]=e[l];const r=ft(t[11].name);return t[14]=r,t}function gl(n){let e;return{c(){e=B("+ Aggiungi glifo")},l(l){e=F(l,"+ Aggiungi glifo")},m(l,t){E(l,e,t)},d(l){l&&g(e)}}}function hl(n){let e,l;return e=new it({props:{$$slots:{default:[gl]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,r){const o={};r&262144&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function bl(n){let e;return{c(){e=B("Lista glifi")},l(l){e=F(l,"Lista glifi")},m(l,t){E(l,e,t)},d(l){l&&g(e)}}}function Ye(n){let e=n[14]+"",l;return{c(){l=B(e)},l(t){l=F(t,e)},m(t,r){E(t,l,r)},p(t,r){r&1&&e!==(e=t[14]+"")&&x(l,e)},d(t){t&&g(l)}}}function pl(n){let e,l,t,r=n[11].name+"",o,i,a=n[14]&&Ye(n);return{c(){a&&a.c(),e=V(),l=D("span"),t=B("– "),o=B(r),i=V(),this.h()},l(s){a&&a.l(s),e=j(s),l=z(s,"SPAN",{class:!0});var f=A(l);t=F(f,"– "),o=F(f,r),f.forEach(g),i=j(s),this.h()},h(){S(l,"class","opacity-25")},m(s,f){a&&a.m(s,f),E(s,e,f),E(s,l,f),C(l,t),C(l,o),E(s,i,f)},p(s,f){s[14]?a?a.p(s,f):(a=Ye(s),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),f&1&&r!==(r=s[11].name+"")&&x(o,r)},d(s){a&&a.d(s),s&&g(e),s&&g(l),s&&g(i)}}}function Ze(n,e){let l,t,r;return t=new vt({props:{selection:he,id:e[11].id,$$slots:{default:[pl]},$$scope:{ctx:e}}}),{key:n,first:null,c(){l=G(),H(t.$$.fragment),this.h()},l(o){l=G(),W(t.$$.fragment,o),this.h()},h(){this.first=l},m(o,i){E(o,l,i),R(t,o,i),r=!0},p(o,i){e=o;const a={};i&1&&(a.id=e[11].id),i&262145&&(a.$$scope={dirty:i,ctx:e}),t.$set(a)},i(o){r||(k(t.$$.fragment,o),r=!0)},o(o){w(t.$$.fragment,o),r=!1},d(o){o&&g(l),K(t,o)}}}function kl(n){let e=[],l=new Map,t,r,o=n[4](n[0]);const i=a=>a[11].id;for(let a=0;a<o.length;a+=1){let s=Je(n,o,a),f=i(s);l.set(f,e[a]=Ze(f,s))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=G()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);t=G()},m(a,s){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(a,s);E(a,t,s),r=!0},p(a,s){s&17&&(o=a[4](a[0]),Z(),e=ht(e,s,i,1,a,o,l,t.parentNode,bt,Ze,t,Je),$())},i(a){if(!r){for(let s=0;s<o.length;s+=1)k(e[s]);r=!0}},o(a){for(let s=0;s<e.length;s+=1)w(e[s]);r=!1},d(a){for(let s=0;s<e.length;s+=1)e[s].d(a);a&&g(t)}}}function $e(n){let e,l,t,r,o,i=n[11].name+"",a,s,f,c,d,_,m,u,b,p,N,h,P,U,J,I,T=n[14]&&xe(n),O=n[15]&&et(n);c=new Et({}),c.$on("delete",n[3]);function pe(){n[7].call(h,n[12],n[13])}return{c(){e=D("div"),l=D("div"),T&&T.c(),t=V(),r=D("div"),o=D("p"),a=B(i),s=V(),O&&O.c(),f=V(),H(c.$$.fragment),d=V(),_=D("hr"),m=V(),u=D("div"),b=D("p"),p=B("Struttura glifo"),N=V(),h=D("textarea"),P=V(),this.h()},l(L){e=z(L,"DIV",{class:!0});var M=A(e);l=z(M,"DIV",{class:!0});var y=A(l);T&&T.l(y),t=j(y),r=z(y,"DIV",{class:!0});var Y=A(r);o=z(Y,"P",{});var le=A(o);a=F(le,i),le.forEach(g),s=j(Y),O&&O.l(Y),Y.forEach(g),y.forEach(g),f=j(M),W(c.$$.fragment,M),M.forEach(g),d=j(L),_=z(L,"HR",{}),m=j(L),u=z(L,"DIV",{class:!0});var ee=A(u);b=z(ee,"P",{class:!0});var me=A(b);p=F(me,"Struttura glifo"),me.forEach(g),N=j(ee),h=z(ee,"TEXTAREA",{class:!0}),A(h).forEach(g),P=j(ee),ee.forEach(g),this.h()},h(){S(r,"class","text-gray-400"),S(l,"class","flex gap-4"),S(e,"class","shrink-0 flex justify-between items-center"),S(b,"class","text-small font-mono text-slate-900 mb-2 text-sm"),S(h,"class","h-0 grow p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4"),S(u,"class","grow flex flex-col items-stretch")},m(L,M){E(L,e,M),C(e,l),T&&T.m(l,null),C(l,t),C(l,r),C(r,o),C(o,a),C(r,s),O&&O.m(r,null),C(e,f),R(c,e,null),E(L,d,M),E(L,_,M),E(L,m,M),E(L,u,M),C(u,b),C(b,p),C(u,N),C(u,h),Ce(h,n[11].structure),C(u,P),U=!0,J||(I=q(h,"input",pe),J=!0)},p(L,M){n=L,n[14]?T?T.p(n,M):(T=xe(n),T.c(),T.m(l,t)):T&&(T.d(1),T=null),(!U||M&1)&&i!==(i=n[11].name+"")&&x(a,i),n[15]?O?O.p(n,M):(O=et(n),O.c(),O.m(r,null)):O&&(O.d(1),O=null),M&1&&Ce(h,n[11].structure)},i(L){U||(k(c.$$.fragment,L),U=!0)},o(L){w(c.$$.fragment,L),U=!1},d(L){L&&g(e),T&&T.d(),O&&O.d(),K(c),L&&g(d),L&&g(_),L&&g(m),L&&g(u),J=!1,I()}}}function xe(n){let e,l,t=n[14]+"",r;return{c(){e=D("div"),l=D("p"),r=B(t),this.h()},l(o){e=z(o,"DIV",{class:!0});var i=A(e);l=z(i,"P",{});var a=A(l);r=F(a,t),a.forEach(g),i.forEach(g),this.h()},h(){S(e,"class","w-12 h-12 flex items-center justify-center border-black text-xl border")},m(o,i){E(o,e,i),C(e,l),C(l,r)},p(o,i){i&1&&t!==(t=o[14]+"")&&x(r,t)},d(o){o&&g(e)}}}function et(n){let e,l=n[15]+"",t;return{c(){e=D("p"),t=B(l)},l(r){e=z(r,"P",{});var o=A(e);t=F(o,l),o.forEach(g)},m(r,o){E(r,e,o),C(e,t)},p(r,o){o&1&&l!==(l=r[15]+"")&&x(t,l)},d(r){r&&g(e)}}}function tt(n){let e,l,t=n[11].id==n[2]&&$e(ze(n));return{c(){t&&t.c(),e=G()},l(r){t&&t.l(r),e=G()},m(r,o){t&&t.m(r,o),E(r,e,o),l=!0},p(r,o){r[11].id==r[2]?t?(t.p(ze(r),o),o&5&&k(t,1)):(t=$e(ze(r)),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Z(),w(t,1,1,()=>{t=null}),$())},i(r){l||(k(t),l=!0)},o(r){w(t),l=!1},d(r){t&&t.d(r),r&&g(e)}}}function yl(n){let e,l,t,r,o,i,a,s,f,c,d,_;t=new kt({props:{$$slots:{items:[kl],listTitle:[bl],topArea:[hl]},$$scope:{ctx:n}}});let m=n[0],u=[];for(let h=0;h<m.length;h+=1)u[h]=tt(Xe(n,m,h));const b=h=>w(u[h],1,1,()=>{u[h]=null});s=new Lt({});function p(h){n[8](h)}let N={};return n[1]!==void 0&&(N.open=n[1]),c=new _l({props:N}),ke.push(()=>ot(c,"open",p)),{c(){e=D("div"),l=D("div"),H(t.$$.fragment),r=V(),o=D("div");for(let h=0;h<u.length;h+=1)u[h].c();i=V(),a=D("div"),H(s.$$.fragment),f=V(),H(c.$$.fragment),this.h()},l(h){e=z(h,"DIV",{class:!0});var P=A(e);l=z(P,"DIV",{class:!0});var U=A(l);W(t.$$.fragment,U),U.forEach(g),r=j(P),o=z(P,"DIV",{class:!0});var J=A(o);for(let T=0;T<u.length;T+=1)u[T].l(J);J.forEach(g),i=j(P),a=z(P,"DIV",{class:!0});var I=A(a);W(s.$$.fragment,I),I.forEach(g),P.forEach(g),f=j(h),W(c.$$.fragment,h),this.h()},h(){S(l,"class","shrink-0 flex items-stretch"),S(o,"class","p-8 space-y-8 grow flex flex-col items-stretch"),S(a,"class","p-8 border border-l-gray-300 overflow-y-scroll"),S(e,"class","flex flex-row flex-nowrap items-stretch overflow-hidden grow")},m(h,P){E(h,e,P),C(e,l),R(t,l,null),C(e,r),C(e,o);for(let U=0;U<u.length;U+=1)u[U]&&u[U].m(o,null);C(e,i),C(e,a),R(s,a,null),E(h,f,P),R(c,h,P),_=!0},p(h,[P]){const U={};if(P&262147&&(U.$$scope={dirty:P,ctx:h}),t.$set(U),P&13){m=h[0];let I;for(I=0;I<m.length;I+=1){const T=Xe(h,m,I);u[I]?(u[I].p(T,P),k(u[I],1)):(u[I]=tt(T),u[I].c(),k(u[I],1),u[I].m(o,null))}for(Z(),I=m.length;I<u.length;I+=1)b(I);$()}const J={};!d&&P&2&&(d=!0,J.open=h[1],st(()=>d=!1)),c.$set(J)},i(h){if(!_){k(t.$$.fragment,h);for(let P=0;P<m.length;P+=1)k(u[P]);k(s.$$.fragment,h),k(c.$$.fragment,h),_=!0}},o(h){w(t.$$.fragment,h),u=u.filter(Boolean);for(let P=0;P<u.length;P+=1)w(u[P]);w(s.$$.fragment,h),w(c.$$.fragment,h),_=!1},d(h){h&&g(e),K(t),lt(u,h),K(s),h&&g(f),K(c,h)}}}function vl(n,e){for(let l of n.rules)if(l.symbol==e)return l;throw new Error("missingSymbol")}function El(n,e,l){let t,r,o;re(n,ge,u=>l(0,t=u)),re(n,he,u=>l(2,r=u)),re(n,at,u=>l(5,o=u));function i(u){const b=[];for(const p of u){const N=p.structure.replace(/(\r\n|\n|\r)/gm,"");N&&b.push(...N.split(""))}return yt.uniq(b)}function a(u,b){const p=u.rules.map(N=>N.symbol);for(let N of b)p.includes(N)||u.rules.push(Dt(N));for(let N of p)if(!i(t).includes(N)){const h=vl(u,N),P=u.rules.indexOf(h);u.rules.splice(P,1)}}function s(){we(ge,t=t.filter(u=>u.id!=r),t),we(he,r=t[0].id,r)}function f(u){return u.sort((b,p)=>{const N=Ae(b.name),h=Ae(p.name);return N-h})}let c=!1;const d=()=>{l(1,c=!0)};function _(u,b){u[b].structure=this.value,ge.set(t)}function m(u){c=u,l(1,c)}return n.$$.update=()=>{if(n.$$.dirty&33){const u=i(t);for(let b of o)a(b,u)}},[t,c,r,s,f,o,d,_,m]}class Al extends ae{constructor(e){super(),ie(this,e,El,yl,te,{})}}export{Al as component};