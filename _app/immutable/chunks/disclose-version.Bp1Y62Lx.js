import{Q as k,K as x,i as B,q as V,e as R,X as q,Y as F,Z as K,c as W,p as Z,a as $,B as G}from"./index-client.DElzHtsw.js";function O(e){console.warn("hydration_mismatch")}const ie=1,oe=2,se=4,ue=8,fe=16,ce=64,de=1,le=2,_e=4,he=8,Q=1,X=2,P="[",j="[!",H="]",A={},ve=Symbol(),z=["touchstart","touchmove","touchend"];let c=!1;function I(e){c=e}let i;function m(e){return i=e}function L(){if(i===null)throw O(),A;return i=i.nextSibling}function Ee(e){c&&(i=e)}function pe(){c&&L()}function me(){for(var e=0,t=i;;){if(t.nodeType===8){var n=t.data;if(n===H){if(e===0)return t;e-=1}else(n===P||n===j)&&(e+=1)}var o=t.nextSibling;t.remove(),t=o}}var D;function M(){if(D===void 0){D=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function y(){return document.createTextNode("")}function ye(e){if(!c)return e.firstChild;var t=i.firstChild;return t===null&&(t=i.appendChild(y())),m(t),t}function Te(e,t){if(!c){var n=e.firstChild;return n instanceof Comment&&n.data===""?n.nextSibling:n}return i}function ge(e,t=!1){if(!c)return e.nextSibling;var n=i.nextSibling,o=n.nodeType;if(t&&o!==3){var a=y();return n==null||n.before(a),m(a),a}return m(n),n}function J(e){e.textContent=""}const U=new Set,C=new Set;function ee(e,t,n,o){function a(r){if(o.capture||T.call(t,r),!r.cancelBubble)return n.call(this,r)}return e.startsWith("pointer")||e==="wheel"?V(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function we(e,t,n,o,a){var r={capture:o,passive:a},s=ee(e,t,n,r);(t===document.body||t===window||t===document)&&k(()=>{t.removeEventListener(e,s,r)})}function Se(e){for(var t=0;t<e.length;t++)U.add(e[t]);for(var n of C)n(e)}function T(e){var N;var t=this,n=t.ownerDocument,o=e.type,a=((N=e.composedPath)==null?void 0:N.call(e))||[],r=a[0]||e.target,s=0,_=e.__root;if(_){var l=a.indexOf(_);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var v=a.indexOf(t);if(v===-1)return;l<=v&&(s=l)}if(r=a[s]||e.target,r!==t){x(e,"currentTarget",{configurable:!0,get(){return r||n}});try{for(var E,u=[];r!==null;){var d=r.parentNode||r.host||null;try{var f=r["__"+o];if(f!==void 0&&!r.disabled)if(B(f)){var[g,...w]=f;g.apply(r,[e,...w])}else f.call(r,e)}catch(S){E?u.push(S):E=S}if(e.cancelBubble||d===t||d===null)break;r=d}if(E){for(let S of u)queueMicrotask(()=>{throw S});throw E}}finally{e.__root=t,r=t}}}function te(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function h(e,t){var n;(n=R).nodes??(n.nodes={start:e,end:t})}function Ie(e,t){var n=(t&Q)!==0,o=(t&X)!==0,a,r=!e.startsWith("<!>");return()=>{if(c)return h(i,null),i;a||(a=te(r?e:"<!>"+e),n||(a=a.firstChild));var s=o?document.importNode(a,!0):a.cloneNode(!0);if(n){var _=s.firstChild,l=s.lastChild;h(_,l)}else h(s,s);return s}}function Ae(){if(!c){var e=y();return h(e,e),e}var t=i;return t.nodeType!==3&&(t.before(t=y()),m(t)),h(t,t),t}function Ce(){if(c)return h(i,null),i;var e=document.createDocumentFragment(),t=document.createComment(""),n=y();return e.append(t,n),h(t,n),e}function be(e,t){if(c){R.nodes.end=i,L();return}e!==null&&e.before(t)}function Re(e,t){(e.__t??(e.__t=e.nodeValue))!==t&&(e.nodeValue=e.__t=t)}function ne(e,t){const n=t.anchor??t.target.appendChild(y());return Y(e,{...t,anchor:n})}function Le(e,t){t.intro=t.intro??!1;const n=t.target,o=c,a=i;try{for(var r=n.firstChild;r&&(r.nodeType!==8||r.data!==P);)r=r.nextSibling;if(!r)throw A;I(!0),m(r),L();const s=Y(e,{...t,anchor:r});if(i===null||i.nodeType!==8||i.data!==H)throw O(),A;return I(!1),s}catch(s){if(s===A)return t.recover===!1&&q(),M(),J(n),I(!1),ne(e,t);throw s}finally{I(o),m(a)}}const p=new Map;function Y(e,{target:t,anchor:n,props:o={},events:a,context:r,intro:s=!0}){M();var _=new Set,l=u=>{for(var d=0;d<u.length;d++){var f=u[d];if(!_.has(f)){_.add(f);var g=z.includes(f);t.addEventListener(f,T,{passive:g});var w=p.get(f);w===void 0?(document.addEventListener(f,T,{passive:g}),p.set(f,1)):p.set(f,w+1)}}};l(F(U)),C.add(l);var v=void 0,E=K(()=>(W(()=>{if(r){Z({});var u=G;u.c=r}a&&(o.$$events=a),c&&h(n,null),v=e(n,o)||{},c&&(R.nodes.end=i),r&&$()}),()=>{for(var u of _){t.removeEventListener(u,T);var d=p.get(u);--d===0?(document.removeEventListener(u,T),p.delete(u)):p.set(u,d)}C.delete(l),b.delete(v)}));return b.set(v,E),v}let b=new WeakMap;function Ne(e){const t=b.get(e);t==null||t()}const re="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{we as A,O as B,A as C,h as D,ie as E,te as F,Ce as G,j as H,Le as I,ne as J,Ne as K,Se as L,_e as P,ve as U,be as a,Re as b,ye as c,Ae as d,L as e,Te as f,me as g,c as h,m as i,I as j,i as k,H as l,oe as m,pe as n,ce as o,J as p,fe as q,Ee as r,ge as s,Ie as t,y as u,se as v,ue as w,de as x,le as y,he as z};