function N(){}const nt=t=>t;function L(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function T(t){return t()}function it(){return Object.create(null)}function B(t){t.forEach(T)}function I(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function st(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ot(t){return Object.keys(t).length===0}function j(t,...e){if(t==null){for(const r of e)r(void 0);return N}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t){let e;return j(t,n=>e=n)(),e}function ut(t,e,n){t.$$.on_destroy.push(j(e,n))}function at(t,e,n,r){if(t){const i=A(t,e,n,r);return t[0](i)}}function A(t,e,n,r){return t[1]&&r?L(n.ctx.slice(),t[1](r(e))):n.ctx}function ft(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],c=Math.max(e.dirty.length,i.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function _t(t,e,n,r,i,l){if(i){const c=A(e,n,r,l);t.p(c,i)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function mt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function pt(t){const e={};for(const n in t)e[n]=!0;return e}function yt(t,e,n){return t.set(n),e}function bt(t){return t&&I(t.destroy)?t.destroy:N}let y=!1;function gt(){y=!0}function xt(){y=!1}function M(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function H(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:M(1,i,q=>e[n[q]].claim_order,u))-1;r[s]=n[a]+1;const k=a+1;n[k]=s,i=Math.max(k,i)}const l=[],c=[];let o=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function R(t,e){t.appendChild(e)}function z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=C("style");return e.textContent="/* empty */",F(z(t),e),e.sheet}function F(t,e){return R(t.head||t,e),e.sheet}function U(t,e){if(y){for(H(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function kt(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function Nt(){return v(" ")}function jt(){return v("")}function At(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ct(t){return function(e){return e.preventDefault(),t.call(this,e)}}function St(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const G=["width","height"];function J(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&G.indexOf(r)===-1?t[r]=e[r]:S(t,r,e[r])}function K(t,e){Object.keys(e).forEach(n=>{Q(t,n,e[n])})}function Q(t,e,n){const r=e.toLowerCase();r in t?t[r]=typeof t[r]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:S(t,e,n)}function Dt(t){return/-/.test(t)?K:J}function Ot(t){return t.dataset.svelteH}function Pt(t){return t===""?null:+t}function qt(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,r,i=!1){V(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,i||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,e,n,r){return D(t,i=>i.nodeName===e,i=>{const l=[];for(let c=0;c<i.attributes.length;c++){const o=i.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>i.removeAttribute(c))},()=>r(e))}function Lt(t,e,n){return O(t,e,n,C)}function Tt(t,e,n){return O(t,e,n,W)}function X(t,e){return D(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>v(e),!0)}function Bt(t){return X(t," ")}function It(t,e){e=""+e,t.data!==e&&(t.data=e)}function Mt(t,e){t.value=e??""}function Ht(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Rt(t,e,n){for(let r=0;r<t.options.length;r+=1){const i=t.options[r];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function zt(t){const e=t.querySelector(":checked");return e&&e.__value}function Ft(t,e,n){t.classList.toggle(e,!!n)}function Y(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Ut(t,e){return new t(e)}let p;function b(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Wt(t){d().$$.on_mount.push(t)}function Gt(t){d().$$.after_update.push(t)}function Jt(t){d().$$.on_destroy.push(t)}function Kt(){const t=d();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=Y(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Qt(t,e){return d().$$.context.set(t,e),e}function Vt(t){return d().$$.context.get(t)}function Xt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const h=[],E=[];let _=[];const x=[],P=Promise.resolve();let w=!1;function Z(){w||(w=!0,P.then(tt))}function Yt(){return Z(),P}function $(t){_.push(t)}function Zt(t){x.push(t)}const g=new Set;let f=0;function tt(){if(f!==0)return;const t=p;do{try{for(;f<h.length;){const e=h[f];f++,b(e),et(e.$$)}}catch(e){throw h.length=0,f=0,e}for(b(null),h.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(h.length);for(;x.length;)x.pop()();w=!1,g.clear(),b(t)}function et(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function $t(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{T as $,B as A,Wt as B,bt as C,rt as D,d as E,b as F,tt as G,Ot as H,lt as I,Gt as J,Ht as K,Ut as L,Yt as M,nt as N,Kt as O,Ft as P,yt as Q,Xt as R,z as S,wt as T,I as U,$ as V,Y as W,it as X,ot as Y,$t as Z,p as _,Nt as a,h as a0,Z as a1,gt as a2,xt as a3,mt as a4,Qt as a5,L as a6,ht as a7,Dt as a8,Vt as a9,J as aa,W as ab,Tt as ac,pt as ad,Ct as ae,St as af,j as ag,Rt as ah,zt as ai,st as aj,Jt as ak,qt as b,Lt as c,X as d,C as e,kt as f,Bt as g,U as h,vt as i,It as j,ut as k,S as l,Et as m,N as n,E as o,Zt as p,jt as q,Mt as r,ct as s,v as t,At as u,Pt as v,at as w,_t as x,dt as y,ft as z};
