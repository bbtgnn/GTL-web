import{S as x,i as ee,s as te,e as P,t as U,c as K,a as O,h as H,d as $,g as w,L as y,j as ge,b as D,a6 as Ye,a7 as Se,O as Ie,R as he,a8 as Ze,E as ie,a9 as xe,a3 as et,aa as tt,U as F,V as z,w as E,x as S,y as I,P as G,q as h,o as v,B as V,k as T,m as R,n as j,p as M,l as J,T as Ue,K as oe,Q as Ve}from"../chunks/index-80687ddf.js";import{w as He}from"../chunks/index-f5484668.js";import{V as ne,S as X,v as nt,j as lt,k as at,l as rt,m as it,c as st,n as ut}from"../chunks/shapes-f7969361.js";import{n as _e,a as ce,g as ot}from"../chunks/index.browser-29f140db.js";import{S as ft,_ as pt,a as ct}from"../chunks/sidebarTile-bda6544f.js";import{I as $e,F as _t,a as dt,B as mt}from"../chunks/fontGenerator-c1ce1bcd.js";import{I as de}from"../chunks/inputNumber-9bba2a06.js";import{L as Y}from"../chunks/label-7dc56e86.js";import{G as gt}from"../chunks/glyphsField-0c5c9544.js";function qe(a,e,n){const t=a.slice();return t[6]=e[n],t}function De(a,e){let n,t=e[6].label+"",r,i;return{key:a,first:null,c(){n=P("option"),r=U(t),this.h()},l(l){n=K(l,"OPTION",{});var s=O(n);r=H(s,t),s.forEach($),this.h()},h(){n.__value=i=e[6].value,n.value=n.__value,this.first=n},m(l,s){w(l,n,s),y(n,r)},p(l,s){e=l,s&2&&t!==(t=e[6].label+"")&&ge(r,t),s&2&&i!==(i=e[6].value)&&(n.__value=i,n.value=n.__value)},d(l){l&&$(n)}}}function ht(a){let e,n=[],t=new Map,r,i,l=a[1];const s=u=>u[6].label;for(let u=0;u<l.length;u+=1){let f=qe(a,l,u),c=s(f);t.set(c,n[u]=De(c,f))}return{c(){e=P("select");for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){e=K(u,"SELECT",{class:!0,name:!0,id:!0});var f=O(e);for(let c=0;c<n.length;c+=1)n[c].l(f);f.forEach($),this.h()},h(){D(e,"class","block h-10 bg-slate-200 font-mono rounded-none"),D(e,"name",a[2]),D(e,"id",a[2]),a[0]===void 0&&Ye(()=>a[4].call(e))},m(u,f){w(u,e,f);for(let c=0;c<n.length;c+=1)n[c].m(e,null);Se(e,a[0]),r||(i=[Ie(e,"change",a[4]),Ie(e,"change",a[3])],r=!0)},p(u,[f]){f&2&&(l=u[1],n=he(n,f,s,1,u,l,t,e,Ze,De,null,qe)),f&4&&D(e,"name",u[2]),f&4&&D(e,"id",u[2]),f&3&&Se(e,u[0])},i:ie,o:ie,d(u){u&&$(e);for(let f=0;f<n.length;f+=1)n[f].d();r=!1,xe(i)}}}function $t(a,e,n){let{options:t}=e,{value:r}=e,{name:i=_e(5)}=e;const l=et();function s(){l("changed",r)}function u(){r=tt(this),n(0,r),n(1,t)}return a.$$set=f=>{"options"in f&&n(1,t=f.options),"value"in f&&n(0,r=f.value),"name"in f&&n(2,i=f.name)},[r,t,i,s,u]}class se extends x{constructor(e){super(),ee(this,e,$t,ht,te,{options:1,value:0,name:2})}}function vt(a){let e,n,t;function r(l){a[5](l)}let i={};return a[0]!==void 0&&(i.value=a[0]),e=new $e({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,[s]){const u={};!n&&s&1&&(n=!0,u.value=l[0],G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function bt(a,e,n){let{value:t=[]}=e,{parseNumbers:r=!1}=e,{parseBooleans:i=!1}=e,{separator:l=";"}=e,s="";f();function u(){const d=s.split(l).map(_=>_.trim()).filter(_=>_);!r&&!i?n(1,t=[...d]):r?n(1,t=[...d.map(_=>parseFloat(_)).filter(_=>!isNaN(_))]):i&&n(1,t=[...d.map(_=>_=="true"?!0:_=="false"?!1:null).filter(_=>_!==null)])}function f(){t.length&&n(0,s=t.join(`${l} `))}function c(d){s=d,n(0,s)}return a.$$set=d=>{"value"in d&&n(1,t=d.value),"parseNumbers"in d&&n(2,r=d.parseNumbers),"parseBooleans"in d&&n(3,i=d.parseBooleans),"separator"in d&&n(4,l=d.separator)},a.$$.update=()=>{a.$$.dirty&1&&u()},[s,t,r,i,l,c]}class pe extends x{constructor(e){super(),ee(this,e,bt,vt,te,{value:1,parseNumbers:2,parseBooleans:3,separator:4})}}function Ne(a){let e,n,t,r,i,l,s,u;function f(o){a[6](o)}let c={options:a[3]};a[1]!==void 0&&(c.value=a[1]),n=new se({props:c}),F.push(()=>z(n,"value",f)),n.$on("changed",a[2]);const d=[yt,kt],_=[];function m(o,g){return o[0].value.kind=="fixed"?0:o[0].value.kind=="choice"?1:-1}return~(l=m(a))&&(s=_[l]=d[l](a)),{c(){e=P("div"),E(n.$$.fragment),r=T(),i=P("div"),s&&s.c(),this.h()},l(o){e=K(o,"DIV",{class:!0});var g=O(e);S(n.$$.fragment,g),r=R(g),i=K(g,"DIV",{class:!0});var b=O(i);s&&s.l(b),b.forEach($),g.forEach($),this.h()},h(){D(i,"class","flex flex-row space-x-2"),D(e,"class","flex flex-row space-x-4")},m(o,g){w(o,e,g),I(n,e,null),y(e,r),y(e,i),~l&&_[l].m(i,null),u=!0},p(o,g){const b={};!t&&g&2&&(t=!0,b.value=o[1],G(()=>t=!1)),n.$set(b);let p=l;l=m(o),l===p?~l&&_[l].p(o,g):(s&&(j(),v(_[p],1,1,()=>{_[p]=null}),M()),~l?(s=_[l],s?s.p(o,g):(s=_[l]=d[l](o),s.c()),h(s,1),s.m(i,null)):s=null)},i(o){u||(h(n.$$.fragment,o),h(s),u=!0)},o(o){v(n.$$.fragment,o),v(s),u=!1},d(o){o&&$(e),V(n),~l&&_[l].d()}}}function kt(a){let e,n,t;function r(l){a[8](l)}let i={parseBooleans:!0};return a[0].value.data.options!==void 0&&(i.value=a[0].value.data.options),e=new pe({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data.options,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function yt(a){let e,n,t;function r(l){a[7](l)}let i={options:a[4]};return a[0].value.data!==void 0&&(i.value=a[0].value.data),e=new se({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function wt(a){let e,n,t=a[0]&&Ne(a);return{c(){t&&t.c(),e=J()},l(r){t&&t.l(r),e=J()},m(r,i){t&&t.m(r,i),w(r,e,i),n=!0},p(r,[i]){r[0]?t?(t.p(r,i),i&1&&h(t,1)):(t=Ne(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(j(),v(t,1,1,()=>{t=null}),M())},i(r){n||(h(t),n=!0)},o(r){v(t),n=!1},d(r){t&&t.d(r),r&&$(e)}}}function Et(a,e,n){let{prop:t}=e,{defaults:r={fixed:!1,choice:{options:[!1,!0]}}}=e,i;t&&(i=t.value.kind,i!=t.value.kind&&l(i));function l(m){n(0,t.value.kind=m,t),n(0,t.value.data=r[m],t)}function s(m){const o=m.detail;l(o)}const u=[{label:"fixed",value:ne.Fixed},{label:"choice",value:ne.Choice}],f=[{label:"true",value:!0},{label:"false",value:!1}];function c(m){i=m,n(1,i)}function d(m){a.$$.not_equal(t.value.data,m)&&(t.value.data=m,n(0,t))}function _(m){a.$$.not_equal(t.value.data.options,m)&&(t.value.data.options=m,n(0,t))}return a.$$set=m=>{"prop"in m&&n(0,t=m.prop),"defaults"in m&&n(5,r=m.defaults)},[t,i,s,u,f,r,c,d,_]}class St extends x{constructor(e){super(),ee(this,e,Et,wt,te,{prop:0,defaults:5})}}function Pe(a){let e,n,t,r,i,l,s,u;function f(o){a[5](o)}let c={options:a[3]};a[1]!==void 0&&(c.value=a[1]),n=new se({props:c}),F.push(()=>z(n,"value",f)),n.$on("changed",a[2]);const d=[qt,Vt,It],_=[];function m(o,g){return o[0].value.kind=="fixed"?0:o[0].value.kind=="range"?1:o[0].value.kind=="choice"?2:-1}return~(l=m(a))&&(s=_[l]=d[l](a)),{c(){e=P("div"),E(n.$$.fragment),r=T(),i=P("div"),s&&s.c(),this.h()},l(o){e=K(o,"DIV",{class:!0});var g=O(e);S(n.$$.fragment,g),r=R(g),i=K(g,"DIV",{class:!0});var b=O(i);s&&s.l(b),b.forEach($),g.forEach($),this.h()},h(){D(i,"class","flex flex-row space-x-2"),D(e,"class","flex flex-row space-x-4")},m(o,g){w(o,e,g),I(n,e,null),y(e,r),y(e,i),~l&&_[l].m(i,null),u=!0},p(o,g){const b={};!t&&g&2&&(t=!0,b.value=o[1],G(()=>t=!1)),n.$set(b);let p=l;l=m(o),l===p?~l&&_[l].p(o,g):(s&&(j(),v(_[p],1,1,()=>{_[p]=null}),M()),~l?(s=_[l],s?s.p(o,g):(s=_[l]=d[l](o),s.c()),h(s,1),s.m(i,null)):s=null)},i(o){u||(h(n.$$.fragment,o),h(s),u=!0)},o(o){v(n.$$.fragment,o),v(s),u=!1},d(o){o&&$(e),V(n),~l&&_[l].d()}}}function It(a){let e,n,t;function r(l){a[9](l)}let i={parseNumbers:!0};return a[0].value.data.options!==void 0&&(i.value=a[0].value.data.options),e=new pe({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data.options,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function Vt(a){let e,n,t,r,i,l,s,u,f,c,d,_,m;function o(k){a[7](k)}let g={name:"min"};a[0].value.data.min!==void 0&&(g.value=a[0].value.data.min),t=new de({props:g}),F.push(()=>z(t,"value",o)),l=new Y({props:{target:"min",$$slots:{default:[Dt]},$$scope:{ctx:a}}});function b(k){a[8](k)}let p={name:"max"};return a[0].value.data.max!==void 0&&(p.value=a[0].value.data.max),f=new de({props:p}),F.push(()=>z(f,"value",b)),_=new Y({props:{target:"max",$$slots:{default:[Nt]},$$scope:{ctx:a}}}),{c(){e=P("div"),n=P("div"),E(t.$$.fragment),i=T(),E(l.$$.fragment),s=T(),u=P("div"),E(f.$$.fragment),d=T(),E(_.$$.fragment),this.h()},l(k){e=K(k,"DIV",{class:!0});var N=O(e);n=K(N,"DIV",{class:!0});var A=O(n);S(t.$$.fragment,A),i=R(A),S(l.$$.fragment,A),A.forEach($),s=R(N),u=K(N,"DIV",{class:!0});var C=O(u);S(f.$$.fragment,C),d=R(C),S(_.$$.fragment,C),C.forEach($),N.forEach($),this.h()},h(){D(n,"class","flex flex-row flex-nowrap items-center space-x-2"),D(u,"class","flex flex-row flex-nowrap items-center space-x-2"),D(e,"class","space-y-2")},m(k,N){w(k,e,N),y(e,n),I(t,n,null),y(n,i),I(l,n,null),y(e,s),y(e,u),I(f,u,null),y(u,d),I(_,u,null),m=!0},p(k,N){const A={};!r&&N&1&&(r=!0,A.value=k[0].value.data.min,G(()=>r=!1)),t.$set(A);const C={};N&2048&&(C.$$scope={dirty:N,ctx:k}),l.$set(C);const Z={};!c&&N&1&&(c=!0,Z.value=k[0].value.data.max,G(()=>c=!1)),f.$set(Z);const ue={};N&2048&&(ue.$$scope={dirty:N,ctx:k}),_.$set(ue)},i(k){m||(h(t.$$.fragment,k),h(l.$$.fragment,k),h(f.$$.fragment,k),h(_.$$.fragment,k),m=!0)},o(k){v(t.$$.fragment,k),v(l.$$.fragment,k),v(f.$$.fragment,k),v(_.$$.fragment,k),m=!1},d(k){k&&$(e),V(t),V(l),V(f),V(_)}}}function qt(a){let e,n,t;function r(l){a[6](l)}let i={};return a[0].value.data!==void 0&&(i.value=a[0].value.data),e=new de({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function Dt(a){let e;return{c(){e=U("min")},l(n){e=H(n,"min")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Nt(a){let e;return{c(){e=U("max")},l(n){e=H(n,"max")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Pt(a){let e,n,t=a[0]&&Pe(a);return{c(){t&&t.c(),e=J()},l(r){t&&t.l(r),e=J()},m(r,i){t&&t.m(r,i),w(r,e,i),n=!0},p(r,[i]){r[0]?t?(t.p(r,i),i&1&&h(t,1)):(t=Pe(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(j(),v(t,1,1,()=>{t=null}),M())},i(r){n||(h(t),n=!0)},o(r){v(t),n=!1},d(r){t&&t.d(r),r&&$(e)}}}function Kt(a,e,n){let{prop:t}=e,{defaults:r={fixed:1,choice:{options:[1,2]},range:{min:1,max:2}}}=e,i;t&&(i=t.value.kind,i!=t.value.kind&&l(i));function l(o){n(0,t.value.kind=o,t),n(0,t.value.data=r[o],t)}function s(o){const g=o.detail;l(g)}const u=[{label:"fixed",value:ne.Fixed},{label:"choice",value:ne.Choice},{label:"range",value:ne.Range}];function f(o){i=o,n(1,i)}function c(o){a.$$.not_equal(t.value.data,o)&&(t.value.data=o,n(0,t))}function d(o){a.$$.not_equal(t.value.data.min,o)&&(t.value.data.min=o,n(0,t))}function _(o){a.$$.not_equal(t.value.data.max,o)&&(t.value.data.max=o,n(0,t))}function m(o){a.$$.not_equal(t.value.data.options,o)&&(t.value.data.options=o,n(0,t))}return a.$$set=o=>{"prop"in o&&n(0,t=o.prop),"defaults"in o&&n(4,r=o.defaults)},[t,i,s,u,r,f,c,d,_,m]}class fe extends x{constructor(e){super(),ee(this,e,Kt,Pt,te,{prop:0,defaults:4})}}function Ke(a){let e,n,t,r,i,l,s,u;function f(o){a[6](o)}let c={options:a[3]};a[1]!==void 0&&(c.value=a[1]),n=new se({props:c}),F.push(()=>z(n,"value",f)),n.$on("changed",a[2]);const d=[Tt,Ot],_=[];function m(o,g){return o[0].value.kind=="fixed"?0:o[0].value.kind=="choice"?1:-1}return~(l=m(a))&&(s=_[l]=d[l](a)),{c(){e=P("div"),E(n.$$.fragment),r=T(),i=P("div"),s&&s.c(),this.h()},l(o){e=K(o,"DIV",{class:!0});var g=O(e);S(n.$$.fragment,g),r=R(g),i=K(g,"DIV",{class:!0});var b=O(i);s&&s.l(b),b.forEach($),g.forEach($),this.h()},h(){D(i,"class","flex flex-row space-x-2"),D(e,"class","flex flex-row space-x-4")},m(o,g){w(o,e,g),I(n,e,null),y(e,r),y(e,i),~l&&_[l].m(i,null),u=!0},p(o,g){const b={};!t&&g&2&&(t=!0,b.value=o[1],G(()=>t=!1)),n.$set(b);let p=l;l=m(o),l===p?~l&&_[l].p(o,g):(s&&(j(),v(_[p],1,1,()=>{_[p]=null}),M()),~l?(s=_[l],s?s.p(o,g):(s=_[l]=d[l](o),s.c()),h(s,1),s.m(i,null)):s=null)},i(o){u||(h(n.$$.fragment,o),h(s),u=!0)},o(o){v(n.$$.fragment,o),v(s),u=!1},d(o){o&&$(e),V(n),~l&&_[l].d()}}}function Ot(a){let e,n,t;function r(l){a[8](l)}let i={};return a[0].value.data.options!==void 0&&(i.value=a[0].value.data.options),e=new pe({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data.options,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function Tt(a){let e,n,t;function r(l){a[7](l)}let i={options:a[4]};return a[0].value.data!==void 0&&(i.value=a[0].value.data),e=new se({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function Rt(a){let e,n,t=a[0]&&Ke(a);return{c(){t&&t.c(),e=J()},l(r){t&&t.l(r),e=J()},m(r,i){t&&t.m(r,i),w(r,e,i),n=!0},p(r,[i]){r[0]?t?(t.p(r,i),i&1&&h(t,1)):(t=Ke(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(j(),v(t,1,1,()=>{t=null}),M())},i(r){n||(h(t),n=!0)},o(r){v(t),n=!1},d(r){t&&t.d(r),r&&$(e)}}}function Bt(a,e,n){let{prop:t}=e,{defaults:r={fixed:"NE",choice:{options:["NE","NW"]}}}=e,i;t&&(i=t.value.kind,i!=t.value.kind&&l(i));function l(m){n(0,t.value.kind=m,t),n(0,t.value.data=r[m],t)}function s(m){const o=m.detail;l(o)}const u=[{label:"fixed",value:ne.Fixed},{label:"choice",value:ne.Choice}],f=[{label:"NW",value:"NW"},{label:"NE",value:"NE"},{label:"SW",value:"SW"},{label:"SE",value:"SE"}];function c(m){i=m,n(1,i)}function d(m){a.$$.not_equal(t.value.data,m)&&(t.value.data=m,n(0,t))}function _(m){a.$$.not_equal(t.value.data.options,m)&&(t.value.data.options=m,n(0,t))}return a.$$set=m=>{"prop"in m&&n(0,t=m.prop),"defaults"in m&&n(5,r=m.defaults)},[t,i,s,u,f,r,c,d,_]}class Ft extends x{constructor(e){super(),ee(this,e,Bt,Rt,te,{prop:0,defaults:5})}}function Oe(a){let e,n,t,r,i,l,s,u;function f(o){a[5](o)}let c={options:a[3]};a[1]!==void 0&&(c.value=a[1]),n=new se({props:c}),F.push(()=>z(n,"value",f)),n.$on("changed",a[2]);const d=[Gt,zt],_=[];function m(o,g){return o[0].value.kind=="fixed"?0:o[0].value.kind=="choice"?1:-1}return~(l=m(a))&&(s=_[l]=d[l](a)),{c(){e=P("div"),E(n.$$.fragment),r=T(),i=P("div"),s&&s.c(),this.h()},l(o){e=K(o,"DIV",{class:!0});var g=O(e);S(n.$$.fragment,g),r=R(g),i=K(g,"DIV",{class:!0});var b=O(i);s&&s.l(b),b.forEach($),g.forEach($),this.h()},h(){D(i,"class","flex flex-row space-x-2"),D(e,"class","flex flex-row space-x-4")},m(o,g){w(o,e,g),I(n,e,null),y(e,r),y(e,i),~l&&_[l].m(i,null),u=!0},p(o,g){const b={};!t&&g&2&&(t=!0,b.value=o[1],G(()=>t=!1)),n.$set(b);let p=l;l=m(o),l===p?~l&&_[l].p(o,g):(s&&(j(),v(_[p],1,1,()=>{_[p]=null}),M()),~l?(s=_[l],s?s.p(o,g):(s=_[l]=d[l](o),s.c()),h(s,1),s.m(i,null)):s=null)},i(o){u||(h(n.$$.fragment,o),h(s),u=!0)},o(o){v(n.$$.fragment,o),v(s),u=!1},d(o){o&&$(e),V(n),~l&&_[l].d()}}}function zt(a){let e,n,t;function r(l){a[7](l)}let i={parseNumbers:!0};return a[0].value.data.options!==void 0&&(i.value=a[0].value.data.options),e=new pe({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data.options,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function Gt(a){let e,n,t;function r(l){a[6](l)}let i={};return a[0].value.data!==void 0&&(i.value=a[0].value.data),e=new $e({props:i}),F.push(()=>z(e,"value",r)),{c(){E(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,s){const u={};!n&&s&1&&(n=!0,u.value=l[0].value.data,G(()=>n=!1)),e.$set(u)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function At(a){let e,n,t=a[0]&&Oe(a);return{c(){t&&t.c(),e=J()},l(r){t&&t.l(r),e=J()},m(r,i){t&&t.m(r,i),w(r,e,i),n=!0},p(r,[i]){r[0]?t?(t.p(r,i),i&1&&h(t,1)):(t=Oe(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(j(),v(t,1,1,()=>{t=null}),M())},i(r){n||(h(t),n=!0)},o(r){v(t),n=!1},d(r){t&&t.d(r),r&&$(e)}}}function Ct(a,e,n){let{prop:t}=e,{defaults:r={fixed:"",choice:{options:[]}}}=e,i;t&&(i=t.value.kind,i!=t.value.kind&&l(i));function l(_){n(0,t.value.kind=_,t),n(0,t.value.data=r[_],t)}function s(_){const m=_.detail;l(m)}const u=[{label:"fixed",value:ne.Fixed},{label:"choice",value:ne.Choice}];function f(_){i=_,n(1,i)}function c(_){a.$$.not_equal(t.value.data,_)&&(t.value.data=_,n(0,t))}function d(_){a.$$.not_equal(t.value.data.options,_)&&(t.value.data.options=_,n(0,t))}return a.$$set=_=>{"prop"in _&&n(0,t=_.prop),"defaults"in _&&n(4,r=_.defaults)},[t,i,s,u,r,f,c,d]}class Lt extends x{constructor(e){super(),ee(this,e,Ct,At,te,{prop:0,defaults:4})}}function Qt(a){let e;return{c(){e=U("Forma")},l(n){e=H(n,"Forma")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Te(a){let e,n,t,r,i,l,s,u,f,c,d,_,m,o,g,b,p,k,N,A,C,Z;t=new Y({props:{target:"scale_x",$$slots:{default:[Wt]},$$scope:{ctx:a}}});function ue(q){a[7](q)}let ve={};a[0].shape.props.scale_x!==void 0&&(ve.prop=a[0].shape.props.scale_x),i=new fe({props:ve}),F.push(()=>z(i,"prop",ue)),f=new Y({props:{target:"scale_y",$$slots:{default:[jt]},$$scope:{ctx:a}}});function Je(q){a[8](q)}let be={};a[0].shape.props.scale_y!==void 0&&(be.prop=a[0].shape.props.scale_y),d=new fe({props:be}),F.push(()=>z(d,"prop",Je)),g=new Y({props:{target:"rotation",$$slots:{default:[Mt]},$$scope:{ctx:a}}});function Xe(q){a[9](q)}let ke={defaults:a[4]};a[0].shape.props.rotation!==void 0&&(ke.prop=a[0].shape.props.rotation),p=new fe({props:ke}),F.push(()=>z(p,"prop",Xe));let L=(a[0].shape.kind==X.Quarter||a[0].shape.kind==X.Ellipse)&&Re(a),Q=a[0].shape.kind==X.Quarter&&Be(a),W=a[0].shape.kind==X.SVG&&Fe(a);return{c(){e=P("div"),n=P("div"),E(t.$$.fragment),r=T(),E(i.$$.fragment),s=T(),u=P("div"),E(f.$$.fragment),c=T(),E(d.$$.fragment),m=T(),o=P("div"),E(g.$$.fragment),b=T(),E(p.$$.fragment),N=T(),L&&L.c(),A=T(),Q&&Q.c(),C=T(),W&&W.c(),this.h()},l(q){e=K(q,"DIV",{class:!0});var B=O(e);n=K(B,"DIV",{class:!0});var le=O(n);S(t.$$.fragment,le),r=R(le),S(i.$$.fragment,le),le.forEach($),s=R(B),u=K(B,"DIV",{class:!0});var ae=O(u);S(f.$$.fragment,ae),c=R(ae),S(d.$$.fragment,ae),ae.forEach($),m=R(B),o=K(B,"DIV",{class:!0});var re=O(o);S(g.$$.fragment,re),b=R(re),S(p.$$.fragment,re),re.forEach($),N=R(B),L&&L.l(B),A=R(B),Q&&Q.l(B),C=R(B),W&&W.l(B),B.forEach($),this.h()},h(){D(n,"class","block"),D(u,"class","block"),D(o,"class","block"),D(e,"class","space-y-4 pl-8")},m(q,B){w(q,e,B),y(e,n),I(t,n,null),y(n,r),I(i,n,null),y(e,s),y(e,u),I(f,u,null),y(u,c),I(d,u,null),y(e,m),y(e,o),I(g,o,null),y(o,b),I(p,o,null),y(e,N),L&&L.m(e,null),y(e,A),Q&&Q.m(e,null),y(e,C),W&&W.m(e,null),Z=!0},p(q,B){const le={};B&16384&&(le.$$scope={dirty:B,ctx:q}),t.$set(le);const ae={};!l&&B&1&&(l=!0,ae.prop=q[0].shape.props.scale_x,G(()=>l=!1)),i.$set(ae);const re={};B&16384&&(re.$$scope={dirty:B,ctx:q}),f.$set(re);const ye={};!_&&B&1&&(_=!0,ye.prop=q[0].shape.props.scale_y,G(()=>_=!1)),d.$set(ye);const we={};B&16384&&(we.$$scope={dirty:B,ctx:q}),g.$set(we);const Ee={};!k&&B&1&&(k=!0,Ee.prop=q[0].shape.props.rotation,G(()=>k=!1)),p.$set(Ee),q[0].shape.kind==X.Quarter||q[0].shape.kind==X.Ellipse?L?(L.p(q,B),B&1&&h(L,1)):(L=Re(q),L.c(),h(L,1),L.m(e,A)):L&&(j(),v(L,1,1,()=>{L=null}),M()),q[0].shape.kind==X.Quarter?Q?(Q.p(q,B),B&1&&h(Q,1)):(Q=Be(q),Q.c(),h(Q,1),Q.m(e,C)):Q&&(j(),v(Q,1,1,()=>{Q=null}),M()),q[0].shape.kind==X.SVG?W?(W.p(q,B),B&1&&h(W,1)):(W=Fe(q),W.c(),h(W,1),W.m(e,null)):W&&(j(),v(W,1,1,()=>{W=null}),M())},i(q){Z||(h(t.$$.fragment,q),h(i.$$.fragment,q),h(f.$$.fragment,q),h(d.$$.fragment,q),h(g.$$.fragment,q),h(p.$$.fragment,q),h(L),h(Q),h(W),Z=!0)},o(q){v(t.$$.fragment,q),v(i.$$.fragment,q),v(f.$$.fragment,q),v(d.$$.fragment,q),v(g.$$.fragment,q),v(p.$$.fragment,q),v(L),v(Q),v(W),Z=!1},d(q){q&&$(e),V(t),V(i),V(f),V(d),V(g),V(p),L&&L.d(),Q&&Q.d(),W&&W.d()}}}function Wt(a){let e;return{c(){e=U("Scala orizzontale")},l(n){e=H(n,"Scala orizzontale")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function jt(a){let e;return{c(){e=U("Scala verticale")},l(n){e=H(n,"Scala verticale")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Mt(a){let e;return{c(){e=U("Rotazione")},l(n){e=H(n,"Rotazione")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Re(a){let e,n,t,r,i,l,s,u,f,c,d,_;n=new Y({props:{target:"squaring",$$slots:{default:[Ut]},$$scope:{ctx:a}}});function m(p){a[10](p)}let o={defaults:a[5]};a[0].shape.props.squaring!==void 0&&(o.prop=a[0].shape.props.squaring),r=new fe({props:o}),F.push(()=>z(r,"prop",m)),u=new Y({props:{target:"negative",$$slots:{default:[Ht]},$$scope:{ctx:a}}});function g(p){a[11](p)}let b={};return a[0].shape.props.negative!==void 0&&(b.prop=a[0].shape.props.negative),c=new St({props:b}),F.push(()=>z(c,"prop",g)),{c(){e=P("div"),E(n.$$.fragment),t=T(),E(r.$$.fragment),l=T(),s=P("div"),E(u.$$.fragment),f=T(),E(c.$$.fragment),this.h()},l(p){e=K(p,"DIV",{class:!0});var k=O(e);S(n.$$.fragment,k),t=R(k),S(r.$$.fragment,k),k.forEach($),l=R(p),s=K(p,"DIV",{class:!0});var N=O(s);S(u.$$.fragment,N),f=R(N),S(c.$$.fragment,N),N.forEach($),this.h()},h(){D(e,"class","block"),D(s,"class","block")},m(p,k){w(p,e,k),I(n,e,null),y(e,t),I(r,e,null),w(p,l,k),w(p,s,k),I(u,s,null),y(s,f),I(c,s,null),_=!0},p(p,k){const N={};k&16384&&(N.$$scope={dirty:k,ctx:p}),n.$set(N);const A={};!i&&k&1&&(i=!0,A.prop=p[0].shape.props.squaring,G(()=>i=!1)),r.$set(A);const C={};k&16384&&(C.$$scope={dirty:k,ctx:p}),u.$set(C);const Z={};!d&&k&1&&(d=!0,Z.prop=p[0].shape.props.negative,G(()=>d=!1)),c.$set(Z)},i(p){_||(h(n.$$.fragment,p),h(r.$$.fragment,p),h(u.$$.fragment,p),h(c.$$.fragment,p),_=!0)},o(p){v(n.$$.fragment,p),v(r.$$.fragment,p),v(u.$$.fragment,p),v(c.$$.fragment,p),_=!1},d(p){p&&$(e),V(n),V(r),p&&$(l),p&&$(s),V(u),V(c)}}}function Ut(a){let e;return{c(){e=U("Squadratura")},l(n){e=H(n,"Squadratura")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Ht(a){let e;return{c(){e=U("Negativo")},l(n){e=H(n,"Negativo")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Be(a){let e,n,t,r,i,l;n=new Y({props:{target:"orientamento",$$slots:{default:[Jt]},$$scope:{ctx:a}}});function s(f){a[12](f)}let u={};return a[0].shape.props.orientation!==void 0&&(u.prop=a[0].shape.props.orientation),r=new Ft({props:u}),F.push(()=>z(r,"prop",s)),{c(){e=P("div"),E(n.$$.fragment),t=T(),E(r.$$.fragment),this.h()},l(f){e=K(f,"DIV",{class:!0});var c=O(e);S(n.$$.fragment,c),t=R(c),S(r.$$.fragment,c),c.forEach($),this.h()},h(){D(e,"class","block")},m(f,c){w(f,e,c),I(n,e,null),y(e,t),I(r,e,null),l=!0},p(f,c){const d={};c&16384&&(d.$$scope={dirty:c,ctx:f}),n.$set(d);const _={};!i&&c&1&&(i=!0,_.prop=f[0].shape.props.orientation,G(()=>i=!1)),r.$set(_)},i(f){l||(h(n.$$.fragment,f),h(r.$$.fragment,f),l=!0)},o(f){v(n.$$.fragment,f),v(r.$$.fragment,f),l=!1},d(f){f&&$(e),V(n),V(r)}}}function Jt(a){let e;return{c(){e=U("Orientamento")},l(n){e=H(n,"Orientamento")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Fe(a){let e,n,t,r,i,l;n=new Y({props:{target:"",$$slots:{default:[Xt]},$$scope:{ctx:a}}});function s(f){a[13](f)}let u={};return a[0].shape.props.path!==void 0&&(u.prop=a[0].shape.props.path),r=new Lt({props:u}),F.push(()=>z(r,"prop",s)),{c(){e=P("div"),E(n.$$.fragment),t=T(),E(r.$$.fragment),this.h()},l(f){e=K(f,"DIV",{class:!0});var c=O(e);S(n.$$.fragment,c),t=R(c),S(r.$$.fragment,c),c.forEach($),this.h()},h(){D(e,"class","block")},m(f,c){w(f,e,c),I(n,e,null),y(e,t),I(r,e,null),l=!0},p(f,c){const d={};c&16384&&(d.$$scope={dirty:c,ctx:f}),n.$set(d);const _={};!i&&c&1&&(i=!0,_.prop=f[0].shape.props.path,G(()=>i=!1)),r.$set(_)},i(f){l||(h(n.$$.fragment,f),h(r.$$.fragment,f),l=!0)},o(f){v(n.$$.fragment,f),v(r.$$.fragment,f),l=!1},d(f){f&&$(e),V(n),V(r)}}}function Xt(a){let e;return{c(){e=U("SVG Path")},l(n){e=H(n,"SVG Path")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Yt(a){let e,n,t=a[0].symbol+"",r,i,l,s,u,f,c,d,_,m;u=new Y({props:{target:"shape",$$slots:{default:[Qt]},$$scope:{ctx:a}}});function o(p){a[6](p)}let g={options:a[3]};a[1]!==void 0&&(g.value=a[1]),c=new se({props:g}),F.push(()=>z(c,"value",o)),c.$on("changed",a[2]);let b=a[0].shape.kind!=X.Void&&Te(a);return{c(){e=P("div"),n=P("div"),r=U(t),i=T(),l=P("div"),s=P("div"),E(u.$$.fragment),f=T(),E(c.$$.fragment),_=T(),b&&b.c(),this.h()},l(p){e=K(p,"DIV",{class:!0});var k=O(e);n=K(k,"DIV",{class:!0});var N=O(n);r=H(N,t),N.forEach($),i=R(k),l=K(k,"DIV",{class:!0});var A=O(l);s=K(A,"DIV",{class:!0});var C=O(s);S(u.$$.fragment,C),f=R(C),S(c.$$.fragment,C),C.forEach($),_=R(A),b&&b.l(A),A.forEach($),k.forEach($),this.h()},h(){D(n,"class","text-xl p-4 bg-slate-800 text-white font-mono"),D(s,"class","space-y-1"),D(l,"class","space-y-8 px-0 pt-4"),D(e,"class","flex flex-col flex-nowrap")},m(p,k){w(p,e,k),y(e,n),y(n,r),y(e,i),y(e,l),y(l,s),I(u,s,null),y(s,f),I(c,s,null),y(l,_),b&&b.m(l,null),m=!0},p(p,[k]){(!m||k&1)&&t!==(t=p[0].symbol+"")&&ge(r,t);const N={};k&16384&&(N.$$scope={dirty:k,ctx:p}),u.$set(N);const A={};!d&&k&2&&(d=!0,A.value=p[1],G(()=>d=!1)),c.$set(A),p[0].shape.kind!=X.Void?b?(b.p(p,k),k&1&&h(b,1)):(b=Te(p),b.c(),h(b,1),b.m(l,null)):b&&(j(),v(b,1,1,()=>{b=null}),M())},i(p){m||(h(u.$$.fragment,p),h(c.$$.fragment,p),h(b),m=!0)},o(p){v(u.$$.fragment,p),v(c.$$.fragment,p),v(b),m=!1},d(p){p&&$(e),V(u),V(c),b&&b.d()}}}function Zt(a,e,n){let{rule:t}=e,r=t.shape.kind;r!=t.shape.kind&&i();function i(){const p={void:nt,rectangle:lt,ellipse:at,quarter:rt,svg:it};n(0,t.shape.props=p[r],t),n(0,t.shape.kind=r,t)}const l=[{label:"rectangle",value:X.Rectangle},{label:"ellipse",value:X.Ellipse},{label:"quarter",value:X.Quarter},{label:"void",value:X.Void},{label:"svg",value:X.SVG}],s={fixed:0,choice:{options:[0,45]},range:{min:0,max:90}},u={fixed:.56,choice:{options:[0,.56,1]},range:{min:0,max:1}};function f(p){r=p,n(1,r)}function c(p){a.$$.not_equal(t.shape.props.scale_x,p)&&(t.shape.props.scale_x=p,n(0,t))}function d(p){a.$$.not_equal(t.shape.props.scale_y,p)&&(t.shape.props.scale_y=p,n(0,t))}function _(p){a.$$.not_equal(t.shape.props.rotation,p)&&(t.shape.props.rotation=p,n(0,t))}function m(p){a.$$.not_equal(t.shape.props.squaring,p)&&(t.shape.props.squaring=p,n(0,t))}function o(p){a.$$.not_equal(t.shape.props.negative,p)&&(t.shape.props.negative=p,n(0,t))}function g(p){a.$$.not_equal(t.shape.props.orientation,p)&&(t.shape.props.orientation=p,n(0,t))}function b(p){a.$$.not_equal(t.shape.props.path,p)&&(t.shape.props.path=p,n(0,t))}return a.$$set=p=>{"rule"in p&&n(0,t=p.rule)},[t,r,i,l,s,u,f,c,d,_,m,o,g,b]}class xt extends x{constructor(e){super(),ee(this,e,Zt,Yt,te,{rule:0})}}function ze(a,e,n){const t=a.slice();return t[2]=e[n],t[3]=e,t[4]=n,t}function en(a){let e,n;return{c(){e=P("p"),n=U("Inizia a disegnare un glifo per modificare la sintassi!"),this.h()},l(t){e=K(t,"P",{class:!0});var r=O(e);n=H(r,"Inizia a disegnare un glifo per modificare la sintassi!"),r.forEach($),this.h()},h(){D(e,"class","font-mono w-full border-2 border-slate-200 text-slate-300 p-12")},m(t,r){w(t,e,r),y(e,n)},p:ie,i:ie,o:ie,d(t){t&&$(e)}}}function tn(a){let e=[],n=new Map,t,r,i=a[0].rules;const l=s=>s[2].symbol;for(let s=0;s<i.length;s+=1){let u=ze(a,i,s),f=l(u);n.set(f,e[s]=Ge(f,u))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=J()},l(s){for(let u=0;u<e.length;u+=1)e[u].l(s);t=J()},m(s,u){for(let f=0;f<e.length;f+=1)e[f].m(s,u);w(s,t,u),r=!0},p(s,u){u&1&&(i=s[0].rules,j(),e=he(e,u,l,1,s,i,n,t.parentNode,Ue,Ge,t,ze),M())},i(s){if(!r){for(let u=0;u<i.length;u+=1)h(e[u]);r=!0}},o(s){for(let u=0;u<e.length;u+=1)v(e[u]);r=!1},d(s){for(let u=0;u<e.length;u+=1)e[u].d(s);s&&$(t)}}}function Ge(a,e){let n,t,r,i;function l(u){e[1](u,e[2],e[3],e[4])}let s={};return e[2]!==void 0&&(s.rule=e[2]),t=new xt({props:s}),F.push(()=>z(t,"rule",l)),{key:a,first:null,c(){n=J(),E(t.$$.fragment),this.h()},l(u){n=J(),S(t.$$.fragment,u),this.h()},h(){this.first=n},m(u,f){w(u,n,f),I(t,u,f),i=!0},p(u,f){e=u;const c={};!r&&f&1&&(r=!0,c.rule=e[2],G(()=>r=!1)),t.$set(c)},i(u){i||(h(t.$$.fragment,u),i=!0)},o(u){v(t.$$.fragment,u),i=!1},d(u){u&&$(n),V(t,u)}}}function nn(a){let e,n,t,r,i,l,s;const u=[tn,en],f=[];function c(d,_){return d[0].rules.length?0:1}return i=c(a),l=f[i]=u[i](a),{c(){e=P("p"),n=U("Regole sintassi"),t=T(),r=P("div"),l.c(),this.h()},l(d){e=K(d,"P",{class:!0});var _=O(e);n=H(_,"Regole sintassi"),_.forEach($),t=R(d),r=K(d,"DIV",{class:!0});var m=O(r);l.l(m),m.forEach($),this.h()},h(){D(e,"class","text-small font-mono text-slate-900 mb-2 text-sm"),D(r,"class","block space-y-12")},m(d,_){w(d,e,_),y(e,n),w(d,t,_),w(d,r,_),f[i].m(r,null),s=!0},p(d,[_]){let m=i;i=c(d),i===m?f[i].p(d,_):(j(),v(f[m],1,1,()=>{f[m]=null}),M(),l=f[i],l?l.p(d,_):(l=f[i]=u[i](d),l.c()),h(l,1),l.m(r,null))},i(d){s||(h(l),s=!0)},o(d){v(l),s=!1},d(d){d&&$(e),d&&$(t),d&&$(r),f[i].d()}}}function ln(a,e,n){let{syntax:t}=e;function r(i,l,s,u){s[u]=i,n(0,t)}return a.$$set=i=>{"syntax"in i&&n(0,t=i.syntax)},[t,r]}class an extends x{constructor(e){super(),ee(this,e,ln,nn,te,{syntax:0})}}function rn(a){let e;return{c(){e=U("Preview text")},l(n){e=H(n,"Preview text")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function Ae(a){let e,n;return e=new _t({props:{syntax:a[0],glyphs:a[1],$$slots:{default:[sn,({font:t})=>({5:t}),({font:t})=>t?32:0]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const i={};r&1&&(i.syntax=t[0]),r&2&&(i.glyphs=t[1]),r&100&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ce(a){let e,n;return e=new dt({props:{font:a[5],text:a[2]}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const i={};r&32&&(i.font=t[5]),r&4&&(i.text=t[2]),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function sn(a){let e,n,t=a[5]&&Ce(a);return{c(){t&&t.c(),e=J()},l(r){t&&t.l(r),e=J()},m(r,i){t&&t.m(r,i),w(r,e,i),n=!0},p(r,i){r[5]?t?(t.p(r,i),i&32&&h(t,1)):(t=Ce(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(j(),v(t,1,1,()=>{t=null}),M())},i(r){n||(h(t),n=!0)},o(r){v(t),n=!1},d(r){t&&t.d(r),r&&$(e)}}}function un(a){let e,n,t,r,i,l,s,u,f;t=new Y({props:{target:"previewText",$$slots:{default:[rn]},$$scope:{ctx:a}}});function c(o){a[3](o)}function d(o){a[4](o)}let _={name:"previewText"};a[2]!==void 0&&(_.text=a[2]),a[1]!==void 0&&(_.glyphs=a[1]),i=new gt({props:_}),F.push(()=>z(i,"text",c)),F.push(()=>z(i,"glyphs",d));let m=a[1].length&&a[0]&&Ae(a);return{c(){e=P("div"),n=P("div"),E(t.$$.fragment),r=T(),E(i.$$.fragment),u=T(),m&&m.c(),this.h()},l(o){e=K(o,"DIV",{class:!0});var g=O(e);n=K(g,"DIV",{class:!0});var b=O(n);S(t.$$.fragment,b),r=R(b),S(i.$$.fragment,b),b.forEach($),u=R(g),m&&m.l(g),g.forEach($),this.h()},h(){D(n,"class","space-y-2 overflow-x-hidden shrink-0 sticky top-0 border-b border-b-gray-200 bg-white"),D(e,"class","space-y-8")},m(o,g){w(o,e,g),y(e,n),I(t,n,null),y(n,r),I(i,n,null),y(e,u),m&&m.m(e,null),f=!0},p(o,[g]){const b={};g&64&&(b.$$scope={dirty:g,ctx:o}),t.$set(b);const p={};!l&&g&4&&(l=!0,p.text=o[2],G(()=>l=!1)),!s&&g&2&&(s=!0,p.glyphs=o[1],G(()=>s=!1)),i.$set(p),o[1].length&&o[0]?m?(m.p(o,g),g&3&&h(m,1)):(m=Ae(o),m.c(),h(m,1),m.m(e,null)):m&&(j(),v(m,1,1,()=>{m=null}),M())},i(o){f||(h(t.$$.fragment,o),h(i.$$.fragment,o),h(m),f=!0)},o(o){v(t.$$.fragment,o),v(i.$$.fragment,o),v(m),f=!1},d(o){o&&$(e),V(t),V(i),m&&m.d()}}}const Le=He("hello");function on(a,e,n){let t,r=ie;oe(a,Le,f=>n(2,t=f)),a.$$.on_destroy.push(()=>r());let{syntax:i}=e,l=[];function s(f){t=f,Le.set(t)}function u(f){l=f,n(1,l)}return a.$$set=f=>{"syntax"in f&&n(0,i=f.syntax)},[i,l,t,s,u]}class fn extends x{constructor(e){super(),ee(this,e,on,un,te,{syntax:0})}}function Qe(a,e,n){const t=a.slice();return t[10]=e[n],t}function pn(a){let e;return{c(){e=U("+ Aggiungi stile")},l(n){e=H(n,"+ Aggiungi stile")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function cn(a){let e,n;return e=new mt({props:{$$slots:{default:[pn]},$$scope:{ctx:a}}}),e.$on("click",a[3]),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const i={};r&8192&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function _n(a){let e;return{c(){e=U("Lista stili")},l(n){e=H(n,"Lista stili")},m(n,t){w(n,e,t)},d(n){n&&$(e)}}}function dn(a){let e=a[10].name+"",n,t;return{c(){n=U(e),t=T()},l(r){n=H(r,e),t=R(r)},m(r,i){w(r,n,i),w(r,t,i)},p(r,i){i&2&&e!==(e=r[10].name+"")&&ge(n,e)},d(r){r&&$(n),r&&$(t)}}}function We(a,e){let n,t,r;return t=new ct({props:{selection:me,id:e[10].id,$$slots:{default:[dn]},$$scope:{ctx:e}}}),{key:a,first:null,c(){n=J(),E(t.$$.fragment),this.h()},l(i){n=J(),S(t.$$.fragment,i),this.h()},h(){this.first=n},m(i,l){w(i,n,l),I(t,i,l),r=!0},p(i,l){e=i;const s={};l&2&&(s.id=e[10].id),l&8194&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(i){r||(h(t.$$.fragment,i),r=!0)},o(i){v(t.$$.fragment,i),r=!1},d(i){i&&$(n),V(t,i)}}}function mn(a){let e=[],n=new Map,t,r,i=a[1];const l=s=>s[10].id;for(let s=0;s<i.length;s+=1){let u=Qe(a,i,s),f=l(u);n.set(f,e[s]=We(f,u))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=J()},l(s){for(let u=0;u<e.length;u+=1)e[u].l(s);t=J()},m(s,u){for(let f=0;f<e.length;f+=1)e[f].m(s,u);w(s,t,u),r=!0},p(s,u){u&2&&(i=s[1],j(),e=he(e,u,l,1,s,i,n,t.parentNode,Ue,We,t,Qe),M())},i(s){if(!r){for(let u=0;u<i.length;u+=1)h(e[u]);r=!0}},o(s){for(let u=0;u<e.length;u+=1)v(e[u]);r=!1},d(s){for(let u=0;u<e.length;u+=1)e[u].d(s);s&&$(t)}}}function je(a){let e,n,t,r,i,l,s,u,f,c,d,_;function m(p){a[5](p)}let o={name:"styleName"};a[0].name!==void 0&&(o.value=a[0].name),i=new $e({props:o}),F.push(()=>z(i,"value",m));function g(p){a[6](p)}let b={};return a[1][a[2]]!==void 0&&(b.syntax=a[1][a[2]]),c=new an({props:b}),F.push(()=>z(c,"syntax",g)),{c(){e=P("div"),n=P("p"),t=U("Nome stile"),r=T(),E(i.$$.fragment),s=T(),u=P("hr"),f=T(),E(c.$$.fragment),this.h()},l(p){e=K(p,"DIV",{class:!0});var k=O(e);n=K(k,"P",{class:!0});var N=O(n);t=H(N,"Nome stile"),N.forEach($),r=R(k),S(i.$$.fragment,k),k.forEach($),s=R(p),u=K(p,"HR",{}),f=R(p),S(c.$$.fragment,p),this.h()},h(){D(n,"class","text-small font-mono text-slate-900 mb-2 text-sm"),D(e,"class","flex flex-col mb-8")},m(p,k){w(p,e,k),y(e,n),y(n,t),y(e,r),I(i,e,null),w(p,s,k),w(p,u,k),w(p,f,k),I(c,p,k),_=!0},p(p,k){const N={};!l&&k&1&&(l=!0,N.value=p[0].name,G(()=>l=!1)),i.$set(N);const A={};!d&&k&6&&(d=!0,A.syntax=p[1][p[2]],G(()=>d=!1)),c.$set(A)},i(p){_||(h(i.$$.fragment,p),h(c.$$.fragment,p),_=!0)},o(p){v(i.$$.fragment,p),v(c.$$.fragment,p),_=!1},d(p){p&&$(e),V(i),p&&$(s),p&&$(u),p&&$(f),V(c,p)}}}function Me(a){let e,n;return e=new fn({props:{syntax:a[0]}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const i={};r&1&&(i.syntax=t[0]),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function gn(a){let e,n,t,r,i,l,s;n=new ft({props:{$$slots:{items:[mn],listTitle:[_n],topArea:[cn]},$$scope:{ctx:a}}});let u=a[0]&&a[2]!==void 0&&je(a),f=a[0]&&Me(a);return{c(){e=P("div"),E(n.$$.fragment),t=T(),r=P("div"),u&&u.c(),i=T(),l=P("div"),f&&f.c(),this.h()},l(c){e=K(c,"DIV",{class:!0});var d=O(e);S(n.$$.fragment,d),t=R(d),r=K(d,"DIV",{class:!0});var _=O(r);u&&u.l(_),_.forEach($),i=R(d),l=K(d,"DIV",{class:!0});var m=O(l);f&&f.l(m),m.forEach($),d.forEach($),this.h()},h(){D(r,"class","p-8 space-y-8 overflow-y-auto"),D(l,"class","p-8 border border-l-gray-300 overflow-y-scroll"),D(e,"class","h-full flex flex-row flex-nowrap items-stretch")},m(c,d){w(c,e,d),I(n,e,null),y(e,t),y(e,r),u&&u.m(r,null),y(e,i),y(e,l),f&&f.m(l,null),s=!0},p(c,[d]){const _={};d&8194&&(_.$$scope={dirty:d,ctx:c}),n.$set(_),c[0]&&c[2]!==void 0?u?(u.p(c,d),d&5&&h(u,1)):(u=je(c),u.c(),h(u,1),u.m(r,null)):u&&(j(),v(u,1,1,()=>{u=null}),M()),c[0]?f?(f.p(c,d),d&1&&h(f,1)):(f=Me(c),f.c(),h(f,1),f.m(l,null)):f&&(j(),v(f,1,1,()=>{f=null}),M())},i(c){s||(h(n.$$.fragment,c),h(u),h(f),s=!0)},o(c){v(n.$$.fragment,c),v(u),v(f),s=!1},d(c){c&&$(e),V(n),u&&u.d(),f&&f.d()}}}const me=He("");function hn(a,e){for(let n of a.rules)if(n.symbol==e)return n;throw new Error("missingSymbol")}function $n(a,e,n){let t,r,i=ie,l;oe(a,ce,o=>n(1,t=o)),oe(a,me,o=>n(4,r=o)),oe(a,ot,o=>n(7,l=o)),a.$$.on_destroy.push(()=>i());for(let o of t){const g=o.rules.map(b=>b.symbol);for(let b of s(l))g.includes(b)||o.rules.push(st(b));for(let b of g)if(!s(l).includes(b)){const p=hn(o,b),k=o.rules.indexOf(p);o.rules.splice(k,1)}}function s(o){const g=[];for(const b of o){const p=b.structure.replace(/(\r\n|\n|\r)/gm,"");p&&g.push(...p.split(""))}return pt.uniq(g)}function u(o=null){const g=ut(o||_e(5),_e(5),s(l));Ve(ce,t=[...t,g],t),Ve(me,r=g.id,r)}function f(){u()}t.length||u("Regular");let c,d;function _(o){a.$$.not_equal(c.name,o)&&(c.name=o,n(0,c),n(1,t),n(4,r))}function m(o){a.$$.not_equal(t[d],o)&&(t[d]=o,ce.set(t))}return a.$$.update=()=>{a.$$.dirty&18&&n(0,c=t.find(o=>o.id==r)),a.$$.dirty&3&&c&&n(2,d=t.indexOf(c))},[c,t,d,f,r,_,m]}class qn extends x{constructor(e){super(),ee(this,e,$n,gn,te,{})}}export{me as currentSyntaxId,qn as default};