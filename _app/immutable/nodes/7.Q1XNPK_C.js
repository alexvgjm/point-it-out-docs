import{a as r,t as f,d as n}from"../chunks/disclose-version.DjlcKni_.js";import{i as A}from"../chunks/legacy.BQXG6iyP.js";import{p as T,o as L,b as q,a as J,s,c,n as i,r as p}from"../chunks/index-client.C_AGn1Ij.js";import{s as k}from"../chunks/general.svelte.B65VZ__f.js";import{b as I}from"../chunks/paths.CXGXOoeF.js";import{C as v}from"../chunks/Code.DUo6Pgyj.js";import{C as x}from"../chunks/ColumnsContainer.DbzHa6Fa.js";import{P as V}from"../chunks/PropertiesTable.Cw4P0USA.js";import{S as Y,Y as d}from"../chunks/pointitout.Jpb47ULF.js";var D=f('<div slot="right" class="result-panel svelte-1lwrfx5"><div id="test-container-1" class="svelte-1lwrfx5"><div class="test-box svelte-1lwrfx5" id="box-1">#box-1</div></div></div>'),E=f('<div slot="right" class="result-panel svelte-1lwrfx5"><div id="test-container-2" class="svelte-1lwrfx5"><div class="test-box svelte-1lwrfx5" id="box-2">#box-2</div></div></div>'),H=f('<div slot="right" class="result-panel svelte-1lwrfx5"><div id="test-container-3" class="svelte-1lwrfx5"><div class="test-box svelte-1lwrfx5" id="box-3">#box-3</div></div></div>'),M=f(`<section class="doc-section svelte-1lwrfx5"><h1 id="responsive-arrows" class="svelte-1lwrfx5">Responsive arrows</h1> <p class="svelte-1lwrfx5">You can configure how the arrows behave when container sizes change.</p> <!> <p class="svelte-1lwrfx5">Please note that this requires updating. When the window size changes, a 
    global automatic update is triggered. This behavior is controlled by 
    the <a class="svelte-1lwrfx5">updateOnResize</a> global configuration option.</p> <p class="svelte-1lwrfx5">If you need a straightforward way to update when another container resizes, 
    consider using the <code class="svelte-1lwrfx5">ResizeObserver</code>, which is lesser-known but 
      widely compatible. Here's an example:</p> <!> <section class="doc-section svelte-1lwrfx5"><h1 class="svelte-1lwrfx5"><code class="svelte-1lwrfx5">responsive: 'rotate'</code> example</h1> <!></section> <section class="doc-section svelte-1lwrfx5"><h1 class="svelte-1lwrfx5"><code class="svelte-1lwrfx5">responsive: 'scale'</code> example</h1> <!> <h3 class="svelte-1lwrfx5">Using <code class="svelte-1lwrfx5">minScale</code> property</h3> <!></section></section>`);function X(S,P){T(P,!1);const C=[{property:"responsive",default:"false",types:["false","'rotate'","'scale'","<strong>ReponsiveArrowOptions</strong>"],description:"Set the behavior of the arrow when it exceeds the limits of the container.",props:[{property:"type",types:["'rotate'","'scale'"],description:"In order to fit the container, should rotate the arrow or shrink?"},{property:"minScale",types:["number"],default:"0.25",description:"<strong>('scale' option only)</strong> If shrink, minScale (in scale terms where 1 is normal)"}]}];function h(e){d("arrow",{...e,fromAngle:"bottom-left",fillColor:"#d55877",size:.9}),d("arrow",{...e}),d("arrow",{...e,fromAngle:"top-left",size:.9}),d("arrow",{...e,fromAngle:"top-right",fillColor:"#d55877"})}let l;L(()=>{const e={target:"#box-1",container:"#test-container-1",animate:"pulse",distance:20,size:.75,responsive:"rotate",fillColor:"#5896d5"};h(e),e.target="#box-2",e.container="#test-container-2",e.responsive="scale",h(e),e.target="#box-3",e.container="#test-container-3",e.responsive={type:"scale",minScale:.6},h(e),l=new ResizeObserver(Y),l.observe(document.querySelector("#test-container-1")),l.observe(document.querySelector("#test-container-2")),l.observe(document.querySelector("#test-container-3"))}),q(()=>{l.disconnect()}),A();var u=M(),m=s(c(u),4);V(m,{title:"create('arrow', { responsive: ... })",pioOptionsList:C});var w=s(m,2),z=s(c(w));k(z,"href",`${I??""}/config#configuring-global-options`),i(),p(w);var b=s(w,4);v(b,{language:"JavaScript",showLanguage:!1,noTop:!0,children:(e,a)=>{i();var t=n("new ResizeObserver(update).observe(containerElement)");r(e,t)},$$slots:{default:!0}});var g=s(b,2),O=s(c(g),2);x(O,{$$slots:{left:(e,a)=>{v(e,{slot:"left",language:"JavaScript",showLanguage:!1,noTop:!0,children:(t,_)=>{i();var o=n();o.nodeValue=`const baseOptions = {
  target: '#box-1', 
  container: '#test-container-1',
  // ...
  responsive: 'rotate',
  fillColor: '#5896d5'
}

create('arrow', {
  ...baseOptions,
  fromAngle: 'bottom-left',
  fillColor: '#d55877',
  size: 0.9
})

// The other three arrows...
create('arrow', { 
  ...baseOptions, 
  // ...
} 

// Your update logic...`,r(t,o)},$$slots:{default:!0}})},right:(e,a)=>{var t=D();r(e,t)}}}),p(g);var $=s(g,2),y=s(c($),2);x(y,{$$slots:{left:(e,a)=>{v(e,{slot:"left",language:"JavaScript",showLanguage:!1,noTop:!0,children:(t,_)=>{i();var o=n();o.nodeValue=`const baseOptions = {
  target: '#box-2', 
  container: '#test-container-2',
  // ...
  responsive: 'scale',
  fillColor: '#5896d5'
}
// Rest of the previous example code`,r(t,o)},$$slots:{default:!0}})},right:(e,a)=>{var t=E();r(e,t)}}});var R=s(y,4);x(R,{$$slots:{left:(e,a)=>{v(e,{slot:"left",language:"JavaScript",showLanguage:!1,noTop:!0,children:(t,_)=>{i();var o=n();o.nodeValue=`const baseOptions = {
  target: '#box-3', 
  container: '#test-container-3',
  // ...
  responsive: {
    type: 'scale',
    minScale: 0.6
  },
  fillColor: '#5896d5'
}
// Rest of the previous example code`,r(t,o)},$$slots:{default:!0}})},right:(e,a)=>{var t=H();r(e,t)}}}),p($),p(u),r(S,u),J()}export{X as component};
