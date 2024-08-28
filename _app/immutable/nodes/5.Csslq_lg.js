import{f as lt,s as t,c as s,a,t as p,d as c,n as l,r as i}from"../chunks/disclose-version.mesN2nRT.js";import{p as pt,o as ct,b as dt,a as ut}from"../chunks/index-client.DNihTn1J.js";import{i as gt}from"../chunks/lifecycle.Bdlee1Yc.js";import{C as d}from"../chunks/Code.CHKhiNxC.js";import{C as u}from"../chunks/ColumnsContainer.DpwG1fmv.js";import{P as f}from"../chunks/PropertiesTable.CripjIJj.js";import{Y as g,Z as ht}from"../chunks/pointitout.BJiq1jUH.js";import{e as ft}from"../chunks/public.c2EWCnBI.js";import{I as G}from"../chunks/InfoBox.SFwgA1Xq.js";import{b as I}from"../chunks/paths.mhD1lz4a.js";var mt=p(`TIP: You can access the created SVG, so you can actually modify 
      any of its styles by CSS properties, but be careful with those properties 
      that alter the size, since Point it out will not recalculate an appropriate 
      container size for it.`,1),$t=p('<div slot="right" class="result-panel"><div class="test-box" id="box-1">#box-1</div></div>'),vt=p('<div slot="right" class="result-panel"><div class="test-box" id="box-2">#box-2</div></div>'),yt=p('<div slot="right" class="result-panel"><div class="test-box" id="box-3">#box-3</div></div>'),bt=p("Recently added and working on it. Very few configuration options yet.",1),xt=p('<div slot="right" class="result-panel"><div class="test-box" id="box-1b">#box-1b</div></div>'),_t=p('<div slot="right" class="result-panel"><div class="test-box" id="box-2b">#box-2b</div></div>'),wt=p('<div slot="right" class="result-panel"><div class="test-box" id="box-3b">#box-3b</div></div>'),St=p(`<h1 id="creating-pointers">Creating pointers</h1> <section class="doc-section"><p>In Point it out, we call "pointer" to created and absolutely positioned elements via the
    create() function.</p> <!> <section class="doc-section"><h2 id="common-params">Common params and options for all pointers</h2> <!></section> <section class="doc-section"><h2>Common params and options for all SVG pointers</h2> <!> <!></section></section> <section class="doc-section"><h1 id="rect">Rect</h1> <p>The first and most basic pointer. In addition to the options described above, this pointer has
    the following specific options:</p> <!> <section class="doc-section"><h2>Examples</h2> <p style="margin-bottom: 2rem;">Notice the use of "container" option to create the SVG inside the &lt;main&gt; element instead
      body, avoiding issues with the scrollable main.</p> <!> <!> <!></section></section> <section class="doc-section"><h1 id="arrow">Arrow</h1> <p>In addition to the common options for all pointers and SVG described above, 
    this pointer has the following specific options:</p> <!> <!> <section class="doc-section"><h2>Examples</h2> <p style="margin-bottom: 2rem;">Notice the use of "container" option to create the SVG inside the &lt;main&gt; element instead
      body, avoiding issues with the scrollable main.</p> <!> <!> <!></section></section> <section class="doc-section"><h1 id="pointer-references">Pointer references</h1> <p>The create function returns a reference to a Pointer instance, an object with some useful
    methods to manipulate it. Also contains a reference to the target element and the created raw
    HTMLElement.</p> <!></section>`,1);function It(H,j){pt(j,!1);const{PUBLIC_VERSION:z}=ft,M=[{property:"pointerType",types:["PointerType"],description:`A string that actually (${z}) can only 
        be <strong>'rect'</strong> or <strong>'arrow'</strong>.`},{property:"options",types:["<strong>CreateOptions</strong>"],description:`An object whose properties depend on  
        pointerType. Only the common ones for all pointers are described below.`,props:[{property:"target",types:["HTMLElement","string"],description:`The element to point out. Can be a direct reference 
                (HTMLElement) or any kind of CSS selector (string).`},{property:"container",default:"document.body",types:["HTMLElement","string"],description:"Container where append the pointer. A reference or CSS selector string. NOTE: The container <strong>should have the position property set to a value different to the default static.</strong>"},{property:"className",default:"undefined",types:["string","string[]"],description:"Class/classes to add to the new pointer element."},{property:"zIndex",default:"9999",types:["number"],description:"The z-index style property for the new created element"}]}],R=[{property:"strokeWidth",default:"4",types:["number"],description:"Stroke (the outline line) width in pixels."},{property:"strokeColor",default:"'darkorange'",types:["string"],description:"Stroke (the outline line) color. A SVG/CSS valid color string i.e <strong>'#aa23c8'</strong> or <strong>'rgba(211, 17, 32, 0.5)'</strong>."},{property:"fillColor",default:"'orange' ('none' in rects)",types:["string"],description:"SVG fill color (to fill the shape). A SVG/CSS valid color string i.e <strong>'#aa23c8'</strong> or <strong>'rgba(211, 17, 32, 0.5)'</strong>."}],B=[{property:"round",default:"0",types:["number","string","<strong>object</strong>"],description:"Round borders as number (pixel), a string with any valid SVG value (i.e '20%') or an object with rx and ry properties explained below.",props:[{property:"rx",default:"0",types:["number","string"],description:"Round applied to horizontal axis."},{property:"ry",default:"0",types:["number","string"],description:"Round applied to vertical axis."}]},{property:"padding",default:"0",types:["number","<strong>object</strong>"],description:"How separated (in pixels) from the target content is the rect. Can be negative. By default (0 padding) the rect surrounds perfectly the target's bounding rect.",props:[{property:"x",default:"0",types:["number"],description:"Horizontal gap (left and right)"},{property:"y",default:"0",types:["number"],description:"Vertical gap (top and bottom)"}]},{property:"animate",default:"false",types:["false","'pulse'","AnimationOptions"],description:`<a href="${I}/animations">See animations</a>`}],N=[{property:"fromAngle",default:"'bottom-right'",types:["number","'top'","'bottom'","'bottom-right'","'right'","'bottom-left'","'left'","'top-left'","'top-right'"],description:"From which direction the arrow points to the target (clockwise angle in degrees if number is given)"},{property:"distance",default:"0",types:["number"],description:"Distance in pixels between the arrow and the center of the target"},{property:"animate",default:"false",types:["false","'pulse'","AnimationOptions"],description:`<a href="${I}/animations">See animations</a>`}];ct(async()=>{g("rect",{target:"#box-1",container:"main",padding:8,animate:"pulse"}),g("rect",{target:"#box-2",container:"main",strokeWidth:8,strokeColor:"#68c"}),g("rect",{target:"#box-3",container:"main",strokeColor:"#f8c",round:"30%",padding:12}),g("arrow",{target:"#box-1b",container:"main"}),g("arrow",{target:"#box-2b",container:"main",strokeWidth:8,strokeColor:"#46a",fillColor:"#8bf",fromAngle:150,animate:"pulse"}),g("arrow",{target:"#box-3b",container:"main",fillColor:"#7f7",fromAngle:"top-right",distance:50})}),dt(ht),gt();var b=St(),W=lt(b),m=t(t(W,!0)),D=s(m),x=t(t(D,!0));d(x,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,n)=>{l();var e=c();e.nodeValue=`import { create } from 'pointitout' 

create('rect', { target: '#target-css-selector' })`,a(o,e)},$$slots:{default:!0},$$legacy:!0});var $=t(t(x,!0)),Y=s($),U=t(t(Y,!0));f(U,{title:"create ( pointerType, <span id='options-in-title'>options</span> )",pioOptionsList:M,$$legacy:!0}),i($);var _=t(t($,!0)),F=s(_),w=t(t(F,!0));f(w,{title:"SVGOptions",pioOptionsList:R,$$legacy:!0});var Z=t(t(w,!0));G(Z,{title:"",children:(o,n)=>{l();var e=mt();a(o,e)},$$slots:{default:!0},$$legacy:!0}),i(_),i(m);var v=t(t(m,!0)),q=s(v),J=t(t(q,!0)),S=t(t(J,!0));f(S,{title:"create ( <strong>'rect'</strong>, options )",pioOptionsList:B,$$legacy:!0});var C=t(t(S,!0)),K=s(C),Q=t(t(K,!0)),P=t(t(Q,!0));u(P,{$$slots:{left:(o,n)=>{d(o,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(e,h)=>{l();var r=c();r.nodeValue=`create('rect', {
    target: '#box-1', 
    container: 'main',
    padding: 8,
    animate: 'pulse'
})`,a(e,r)},$$slots:{default:!0},$$legacy:!0})},right:(o,n)=>{var e=$t();s(e),i(e),a(o,e)}},$$legacy:!0});var T=t(t(P,!0));u(T,{even:!0,$$slots:{left:(o,n)=>{d(o,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(e,h)=>{l();var r=c();r.nodeValue=`create('rect', {
    target: '#box-2', 
    container: 'main',
    strokeWidth: 8,
    strokeColor: '#68c'
})`,a(e,r)},$$slots:{default:!0},$$legacy:!0})},right:(o,n)=>{var e=vt();s(e),i(e),a(o,e)}},$$legacy:!0});var X=t(t(T,!0));u(X,{$$slots:{left:(o,n)=>{d(o,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(e,h)=>{l();var r=c();r.nodeValue=`create('rect', {
    target: '#box-3', 
    container: 'main',
    strokeColor: '#f8c',
    round: '30%',
    padding: 12
})`,a(e,r)},$$slots:{default:!0},$$legacy:!0})},right:(o,n)=>{var e=yt();s(e),i(e),a(o,e)}},$$legacy:!0}),i(C),i(v);var y=t(t(v,!0)),tt=s(y),et=t(t(tt,!0)),V=t(t(et,!0));f(V,{title:"create ( <strong>'arrow'</strong>, options )",pioOptionsList:N,$$legacy:!0});var k=t(t(V,!0));G(k,{title:"",children:(o,n)=>{l();var e=bt();a(o,e)},$$slots:{default:!0},$$legacy:!0});var L=t(t(k,!0)),ot=s(L),rt=t(t(ot,!0)),A=t(t(rt,!0));u(A,{$$slots:{left:(o,n)=>{d(o,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(e,h)=>{l();var r=c();r.nodeValue=`// Default: bottom-right orange 
// arrow without stroke
create('arrow', {
    target: '#box-1b', 
    container: 'main'
})`,a(e,r)},$$slots:{default:!0},$$legacy:!0})},right:(o,n)=>{var e=xt();s(e),i(e),a(o,e)}},$$legacy:!0});var O=t(t(A,!0));u(O,{even:!0,$$slots:{left:(o,n)=>{d(o,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(e,h)=>{l();var r=c();r.nodeValue=`create('arrow', {
    target: '#box-2b', 
    container: 'main',
    strokeWidth: 8,
    strokeColor: '#46a',
    fillColor: '#8bf',
    fromAngle: 150,
    animate: 'pulse'
})`,a(e,r)},$$slots:{default:!0},$$legacy:!0})},right:(o,n)=>{var e=_t();s(e),i(e),a(o,e)}},$$legacy:!0});var at=t(t(O,!0));u(at,{even:!0,$$slots:{left:(o,n)=>{d(o,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(e,h)=>{l();var r=c();r.nodeValue=`create('arrow', {
    target: '#box-3b', 
    container: 'main',
    fillColor: '#7f7',
    fromAngle: 'top-right',
    distance: 50
})`,a(e,r)},$$slots:{default:!0},$$legacy:!0})},right:(o,n)=>{var e=wt();s(e),i(e),a(o,e)}},$$legacy:!0}),i(L),i(y);var E=t(t(y,!0)),nt=s(E),st=t(t(nt,!0)),it=t(t(st,!0));d(it,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,n)=>{l();var e=c();e.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// You can access to the target element and the raw 
// created HTMLElement from this object if you need
console.log(pointer.target) 
console.log(pointer.htmlElement)

// Some pointers method. See next sections.
pointer.update() // Update the pointer
pointer.destroy() // Destroy the pointer`,a(o,e)},$$slots:{default:!0},$$legacy:!0}),i(E),a(H,b),ut()}export{It as component};
