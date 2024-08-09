import{f as W,s as e,c as s,a as r,t as d,d as p,n as l,r as a}from"../chunks/disclose-version.DWBJy-Vp.js";import{p as D,o as U,b as Y,a as q}from"../chunks/index-client.BhkDjp_U.js";import{i as F}from"../chunks/lifecycle.D5ftlZwq.js";import{C as c}from"../chunks/Code.DhCHQ6XF.js";import{C as h}from"../chunks/ColumnsContainer.CzNjV8sm.js";import{P as C}from"../chunks/PropertiesTable.ct6ZQQXX.js";import{S as m,$ as J}from"../chunks/pointitout.cvIz-Vdu.js";import{e as K}from"../chunks/public.CDwZT0LN.js";var Q=d('<div slot="right" class="result-panel"><div class="test-box" id="box-1">#box-1</div></div>'),X=d('<div slot="right" class="result-panel"><div class="test-box" id="box-2">#box-2</div></div>'),Z=d('<div slot="right" class="result-panel"><div class="test-box" id="box-3">#box-3</div></div>'),ee=d(`<h1 id="creating-pointers">Creating pointers</h1> <section class="doc-section"><p>In Point it out, we call "pointer" to created and absolutely positioned elements via the
    create() function.</p> <!> <section class="doc-section"><h2>Common params and options for all pointers</h2> <!></section></section> <section class="doc-section"><h1 id="rect">Rect</h1> <p>The first and most basic pointer. In addition to the options described above, this pointer has
    the following specific options:</p> <!> <section class="doc-section"><h2>Examples</h2> <p style="margin-bottom: 2rem;">Notice the use of "container" option to create the SVG inside the &lt;main&gt; element instead
      body, avoiding issues with the scrollable main.</p> <!> <!> <!></section></section> <section class="doc-section"><h1 id="pointer-references">Pointer references</h1> <p>The create function returns a reference to a Pointer instance, an object with some useful
    methods to manipulate it. Also contains a reference to the target element and the created raw
    HTMLElement.</p> <!></section>`,1);function le(S,P){D(P,!1);const{PUBLIC_VERSION:L}=K,k=[{property:"pointerType",types:["PointerType"],description:`A string that actually (${L}) can only 
        be <strong>'rect'</strong>, but <strong>'arrow'</strong> and <strong>'image'</strong> will be included soon.`},{property:"options",types:["<strong>CreateOptions</strong>"],description:`An object whose properties depend on  
        pointerType. Only the common ones for all pointers are described below.`,props:[{property:"target",types:["HTMLElement","string"],description:`The element to point out. Can be a direct reference 
                (HTMLElement) or any kind of CSS selector (string).`},{property:"container",default:"document.body",types:["HTMLElement","string"],description:"Container where append the pointer. A reference or CSS selector string. NOTE: The container <strong>should have the position property set to a value different to the default static.</strong>"},{property:"className",default:"undefined",types:["string","string[]"],description:"Class/classes to add to the new pointer element."},{property:"zIndex",default:"9999",types:["number"],description:"The z-index style property for the new created element"}]}],V=[{property:"strokeWidth",default:"4",types:["number"],description:"Stroke width in pixels."},{property:"strokeColor",default:"'orange'",types:["string"],description:"Stroke color. A SVG/CSS valid color string i.e <strong>'#aa23c8'</strong> or <strong>'rgba(211, 17, 32, 0.5)'</strong>."},{property:"round",default:"0",types:["number","string","<strong>object</strong>"],description:"Round borders as number (pixel), a string with any valid SVG value (i.e '20%') or an object with rx and ry properties explained below.",props:[{property:"rx",default:"0",types:["number","string"],description:"Round applied to horizontal axis."},{property:"ry",default:"0",types:["number","string"],description:"Round applied to vertical axis."}]},{property:"padding",default:"0",types:["number","<strong>object</strong>"],description:"How separated (in pixels) from the target content is the rect. Can be negative. By default (0 padding) the rect surrounds perfectly the target's bounding rect.",props:[{property:"x",default:"0",types:["number"],description:"Horizontal gap (left and right)"},{property:"y",default:"0",types:["number"],description:"Vertical gap (top and bottom)"}]}];U(()=>{m("rect",{target:"#box-1",container:"main",padding:8}),m("rect",{target:"#box-2",container:"main",strokeWidth:8,strokeColor:"#68c"}),m("rect",{target:"#box-3",container:"main",strokeColor:"#f8c",round:"30%",padding:12})}),Y(J),F();var f=ee(),E=W(f),u=e(e(E,!0)),A=s(u),y=e(e(A,!0));c(y,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,i)=>{l();var t=p();t.nodeValue=`import { create } from 'pointitout' 

create('rect', { target: '#target-css-selector' })`,r(o,t)},$$slots:{default:!0},$$legacy:!0});var $=e(e(y,!0)),H=s($),M=e(e(H,!0));C(M,{title:"create ( pointerType, <span id='options-in-title'>options</span> )",pioOptionsList:k,$$legacy:!0}),a($),a(u);var g=e(e(u,!0)),O=s(g),j=e(e(O,!0)),v=e(e(j,!0));C(v,{title:"create ( <strong>'rect'</strong>, options )",pioOptionsList:V,$$legacy:!0});var b=e(e(v,!0)),I=s(b),R=e(e(I,!0)),x=e(e(R,!0));h(x,{$$slots:{left:(o,i)=>{c(o,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(t,T)=>{l();var n=p();n.nodeValue=`create('rect', {
    target: '#box-1', 
    container: 'main',
    padding: 8
})`,r(t,n)},$$slots:{default:!0},$$legacy:!0})},right:(o,i)=>{var t=Q();s(t),a(t),r(o,t)}},$$legacy:!0});var _=e(e(x,!0));h(_,{even:!0,$$slots:{left:(o,i)=>{c(o,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(t,T)=>{l();var n=p();n.nodeValue=`create('rect', {
    target: '#box-2', 
    container: 'main',
    strokeWidth: 8,
    strokeColor: '#68c'
})`,r(t,n)},$$slots:{default:!0},$$legacy:!0})},right:(o,i)=>{var t=X();s(t),a(t),r(o,t)}},$$legacy:!0});var z=e(e(_,!0));h(z,{$$slots:{left:(o,i)=>{c(o,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(t,T)=>{l();var n=p();n.nodeValue=`create('rect', {
    target: '#box-3', 
    container: 'main',
    strokeColor: '#f8c',
    round: '30%',
    padding: 12
})`,r(t,n)},$$slots:{default:!0},$$legacy:!0})},right:(o,i)=>{var t=Z();s(t),a(t),r(o,t)}},$$legacy:!0}),a(b),a(g);var w=e(e(g,!0)),B=s(w),N=e(e(B,!0)),G=e(e(N,!0));c(G,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,i)=>{l();var t=p();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// You can access to the target element and the raw 
// created HTMLElement from this object if you need
console.log(pointer.target) 
console.log(pointer.htmlElement) // or some methods. More of this later. 

pointer.destroy() // Destroy the pointer`,r(o,t)},$$slots:{default:!0},$$legacy:!0}),a(w),r(S,f),q()}export{le as component};
