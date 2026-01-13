import"../chunks/Dj_qTCJT.js";import{i as A}from"../chunks/UrZ5fqd2.js";import{p as T,o as L,d as q,f as u,t as I,a as r,b as J,h as s,c as l,g as c,n as i,r as v}from"../chunks/C-VLNsqj.js";import{s as k}from"../chunks/BDwsY6I3.js";import{b as V}from"../chunks/VXsCTCol.js";import{C as p}from"../chunks/Dw5q4ayE.js";import{C as f}from"../chunks/C0XXYJb4.js";import{P as Y}from"../chunks/CKY-ru2c.js";import{I as D,l as d}from"../chunks/Cm2VvG2T.js";var E=u('<div slot="right" class="result-panel svelte-1bguwvm"><div id="test-container-1" class="svelte-1bguwvm"><div class="test-box svelte-1bguwvm" id="box-1">#box-1</div></div></div>'),H=u('<div slot="right" class="result-panel svelte-1bguwvm"><div id="test-container-2" class="svelte-1bguwvm"><div class="test-box svelte-1bguwvm" id="box-2">#box-2</div></div></div>'),M=u('<div slot="right" class="result-panel svelte-1bguwvm"><div id="test-container-3" class="svelte-1bguwvm"><div class="test-box svelte-1bguwvm" id="box-3">#box-3</div></div></div>'),U=u(`<section class="doc-section svelte-1bguwvm"><h1 id="responsive-pointers" class="svelte-1bguwvm">Responsive pointers</h1> <p class="svelte-1bguwvm">You can configure how the free pointers (including arrows) behave when container sizes change.</p> <!> <p class="svelte-1bguwvm">Please note that this requires updating. When the window size changes, a 
    global automatic update is triggered. This behavior is controlled by 
    the <a class="svelte-1bguwvm">updateOnResize</a> global configuration option.</p> <p class="svelte-1bguwvm">If you need a straightforward way to update when another container resizes, 
    consider using the <code class="svelte-1bguwvm">ResizeObserver</code>, which is lesser-known but 
      widely compatible. Here's an example:</p> <!> <section class="doc-section svelte-1bguwvm"><h1 class="svelte-1bguwvm"><code class="svelte-1bguwvm">responsive: 'rotate'</code> example</h1> <!></section> <section class="doc-section svelte-1bguwvm"><h1 class="svelte-1bguwvm"><code class="svelte-1bguwvm">responsive: 'scale'</code> example</h1> <!> <h3 class="svelte-1bguwvm">Using <code class="svelte-1bguwvm">minScale</code> property</h3> <!></section></section>`);function Z(P,S){T(S,!1);const C=[{property:"responsive",default:"false",types:["false","'rotate'","'scale'","<strong>ReponsiveArrowOptions</strong>"],description:"Set the behavior of the arrow when it exceeds the limits of the container.",props:[{property:"type",types:["'rotate'","'scale'"],description:"In order to fit the container, should rotate the arrow or shrink?"},{property:"minScale",types:["number"],default:"0.25",description:"<strong>('scale' option only)</strong> If shrink, minScale (in scale terms where 1 is normal)"}]}];function g(e){d("arrow",{...e,fromAngle:"left bottom",fillColor:"#d55877",size:.9}),d("arrow",{...e}),d("arrow",{...e,fromAngle:"left top",size:.9}),d("arrow",{...e,fromAngle:"right top",fillColor:"#d55877"})}let a;L(()=>{const e={target:"#box-1",container:"#test-container-1",animate:"pulse",distance:20,size:.75,responsive:"rotate",fillColor:"#5896d5"};g(e),e.target="#box-2",e.container="#test-container-2",e.responsive="scale",g(e),e.target="#box-3",e.container="#test-container-3",e.responsive={type:"scale",minScale:.6},g(e),a=new ResizeObserver(D),a.observe(document.querySelector("#test-container-1")),a.observe(document.querySelector("#test-container-2")),a.observe(document.querySelector("#test-container-3"))}),q(()=>{a.disconnect()}),A();var m=U(),w=s(l(m),4);Y(w,{title:"create('arrow', { responsive: ... })",get pioOptionsList(){return C}});var b=s(w,2),z=s(l(b));i(),v(b);var $=s(b,4);p($,{language:"JavaScript",showLanguage:!1,noTop:!0,children:(e,n)=>{i();var t=c("new ResizeObserver(update).observe(containerElement)");r(e,t)},$$slots:{default:!0}});var h=s($,2),O=s(l(h),2);f(O,{$$slots:{left:(e,n)=>{p(e,{slot:"left",language:"JavaScript",showLanguage:!1,noTop:!0,children:(t,_)=>{i();var o=c();o.nodeValue=`const baseOptions = {
  target: '#box-1', 
  container: '#test-container-1',
  // ...
  responsive: 'rotate',
  fillColor: '#5896d5'
}

create('arrow', {
  ...baseOptions,
  fromAngle: 'left bottom',
  fillColor: '#d55877',
  size: 0.9
})

// The other three arrows...
create('arrow', { 
  ...baseOptions, 
  // ...
} 

// Your update logic...`,r(t,o)},$$slots:{default:!0}})},right:(e,n)=>{var t=E();r(e,t)}}}),v(h);var x=s(h,2),y=s(l(x),2);f(y,{$$slots:{left:(e,n)=>{p(e,{slot:"left",language:"JavaScript",showLanguage:!1,noTop:!0,children:(t,_)=>{i();var o=c();o.nodeValue=`const baseOptions = {
  target: '#box-2', 
  container: '#test-container-2',
  // ...
  responsive: 'scale',
  fillColor: '#5896d5'
}
// Rest of the previous example code`,r(t,o)},$$slots:{default:!0}})},right:(e,n)=>{var t=H();r(e,t)}}});var R=s(y,4);f(R,{$$slots:{left:(e,n)=>{p(e,{slot:"left",language:"JavaScript",showLanguage:!1,noTop:!0,children:(t,_)=>{i();var o=c();o.nodeValue=`const baseOptions = {
  target: '#box-3', 
  container: '#test-container-3',
  // ...
  responsive: {
    type: 'scale',
    minScale: 0.6
  },
  fillColor: '#5896d5'
}
// Rest of the previous example code`,r(t,o)},$$slots:{default:!0}})},right:(e,n)=>{var t=M();r(e,t)}}}),v(x),v(m),I(()=>k(z,"href",`${V??""}/config#configuring-global-options`)),r(P,m),J()}export{Z as component};
