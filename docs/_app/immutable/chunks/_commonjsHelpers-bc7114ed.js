var l=(e=>(e.NW="NW",e.SW="SW",e.NE="NE",e.SE="SE",e))(l||{});const g=Object.values(l);var a=(e=>(e.Fixed="fixed",e.Choice="choice",e.Range="range",e))(a||{}),o=(e=>(e.Number="number",e.Orientation="orientation",e.Boolean="boolean",e.String="string",e))(o||{}),s=(e=>(e.Void="void",e.Rectangle="rectangle",e.Ellipse="ellipse",e.Quarter="quarter",e.SVG="svg",e))(s||{});function u(e){return e[Math.floor(e.length*Math.random())]}function n(e){return{kind:o.Number,value:{kind:a.Fixed,data:e}}}function d(e){return{kind:o.Orientation,value:{kind:a.Fixed,data:e}}}function c(e){return{kind:o.Boolean,value:{kind:a.Fixed,data:e}}}function f(e){return{kind:o.String,value:{kind:a.Fixed,data:e}}}const m={scale_x:n(1),scale_y:n(1),rotation:n(0)},x={scale_x:n(1),scale_y:n(1),rotation:n(0),squaring:n(.56),negative:c(!1)},y={scale_x:n(1),scale_y:n(1),rotation:n(0),squaring:n(.56),orientation:d("NE"),negative:c(!1)},b={scale_x:n(1),scale_y:n(1),rotation:n(0),path:f("")},h={};function v(e){return{symbol:e,shape:{kind:s.Void,props:{}}}}function k(e,r,t){return{name:e,id:r,rules:t.map(i=>v(i))}}function w(e){if(e.value.kind==a.Fixed)return e.value.data;if(e.value.kind==a.Range){const{min:r,max:t}=e.value.data;return r+Math.random()*(t-r)}else{if(e.value.kind==a.Choice)return u(e.value.data.options);throw new Error("WrongValueKind")}}function E(e){if(e.value.kind==a.Fixed)return e.value.data;if(e.value.kind==a.Choice)return u(e.value.data.options);throw new Error("WrongValueKind")}function P(e){if(e.value.kind==a.Fixed)return e.value.data;if(e.value.kind==a.Choice)return u(e.value.data.options);throw new Error("WrongValueKind")}function F(e){if(e.value.kind==a.Fixed)return e.value.data;if(e.value.kind==a.Choice)return u(e.value.data.options);throw new Error("WrongValueKind")}var _=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function q(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}),r}function j(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}export{l as O,s as S,a as V,P as a,E as b,w as c,F as d,j as e,_ as f,q as g,x as h,v as i,k as j,g as o,y as q,m as r,b as s,h as v};