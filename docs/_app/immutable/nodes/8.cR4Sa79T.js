import{s as f,e as m,c as v,b as g,f as d,l as o,i as _,C as y,n as c}from"../chunks/scheduler.C-FasNJY.js";import{S as C,i as w}from"../chunks/index.kvxrQ0J1.js";import{p as l,s as S}from"../chunks/shapes.Cxd8_1CM.js";function $(a){let t,n,s;return{c(){t=m("canvas"),this.h()},l(e){t=v(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),g(t).forEach(d),this.h()},h(){o(t,"id","myCanvas"),o(t,"width","200"),o(t,"height","200"),o(t,"class","svelte-ev9zhu")},m(e,r){_(e,t,r),n||(s=y(a[0].call(null,t)),n=!0)},p:c,i:c,o:c,d(e){e&&d(t),n=!1,s()}}}function P(a,t,n){let s=!1;function e(i){l.setup(i.id),n(1,s=!0)}async function r(){const i="/mende_03.svg",h=new l.Rectangle(0,0,150,150),u=await S(h,i);for(const p of u)p.strokeWidth=2,p.strokeColor=new l.Color("red")}return a.$$.update=()=>{a.$$.dirty&2&&s&&r()},[e,s]}class R extends C{constructor(t){super(),w(this,t,P,$,f,{})}}export{R as component};