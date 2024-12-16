import{a as s,t as d,d as i}from"../chunks/disclose-version.DjlcKni_.js";import{i as Z}from"../chunks/legacy.BQXG6iyP.js";import{p as q,o as J,b as K,s as o,f as Q,a as X,c as l,n as a,r as p}from"../chunks/index-client.C_AGn1Ij.js";import{C as c}from"../chunks/Code.DUo6Pgyj.js";import{C as g}from"../chunks/ColumnsContainer.DbzHa6Fa.js";import{P as f}from"../chunks/PropertiesTable.Cw4P0USA.js";import{Y as u,Z as tt}from"../chunks/pointitout.Jpb47ULF.js";import{e as et}from"../chunks/public.CSbpTb0O.js";import{I}from"../chunks/InfoBox.D6dvsujv.js";import{b as y}from"../chunks/paths.CXGXOoeF.js";var ot=d('<div slot="right" class="result-panel"><div class="test-box" id="box-1">#box-1</div></div>'),rt=d('<div slot="right" class="result-panel"><div class="test-box" id="box-2">#box-2</div></div>'),st=d('<div slot="right" class="result-panel"><div class="test-box" id="box-3">#box-3</div></div>'),nt=d('<div slot="right" class="result-panel"><div class="test-box" id="box-1b">#box-1b</div></div>'),it=d('<div slot="right" class="result-panel"><div class="test-box" id="box-2b">#box-2b</div></div>'),at=d('<div slot="right" class="result-panel"><div class="test-box" id="box-3b">#box-3b</div></div>'),lt=d(`<h1 id="creating-pointers">Creating pointers</h1> <section class="doc-section"><p>In Point it out, we call "pointer" to created and absolutely positioned elements via the
    create() function.</p> <!> <section class="doc-section"><h2 id="common-params">Common params and options for all pointers</h2> <!></section> <section class="doc-section"><h2>Common params and options for all SVG pointers</h2> <!> <!></section></section> <section class="doc-section"><h1 id="rect">Rect</h1> <p>The first and most basic pointer. In addition to the options described above, this pointer has
    the following specific options:</p> <!> <section class="doc-section"><h2>Examples</h2> <p style="margin-bottom: 2rem;">Notice the use of "container" option to create the SVG inside the &lt;main&gt; element instead
      body, avoiding issues with the scrollable main.</p> <!> <!> <!></section></section> <section class="doc-section"><h1 id="arrow">Arrow</h1> <p>In addition to the common options for all pointers and SVG described above, 
    this pointer has the following specific options:</p> <!> <!> <section class="doc-section"><h2>Examples</h2> <p style="margin-bottom: 2rem;">Notice the use of "container" option to create the SVG inside the &lt;main&gt; element instead
      body, avoiding issues with the scrollable main.</p> <!> <!> <!></section></section> <section class="doc-section"><h1 id="pointer-references">Pointer references</h1> <p>The create function returns a reference to a Pointer instance, an object with some useful
    methods to manipulate it. Also contains a reference to the target element and the created raw
    HTMLElement.</p> <!></section>`,1);function $t(H,R){q(R,!1);const{PUBLIC_VERSION:j}=et,z=[{property:"pointerType",types:["PointerType"],description:`A string that actually (${j}) can only 
        be <strong>'rect'</strong> or <strong>'arrow'</strong>.`},{property:"options",types:["<strong>CreateOptions</strong>"],description:`An object whose properties depend on  
        pointerType. Only the common ones for all pointers are described below.`,props:[{property:"target",types:["HTMLElement","string"],description:`The element to point out. Can be a direct reference 
                (HTMLElement) or any kind of CSS selector (string).`},{property:"container",default:"document.body",types:["HTMLElement","string"],description:"Container where append the pointer. A reference or CSS selector string. NOTE: The container <strong>should have the position property set to a value different to the default static.</strong>"},{property:"className",default:"undefined",types:["string","string[]"],description:"Class/classes to add to the new pointer element."},{property:"zIndex",default:"9999",types:["number"],description:"The z-index style property for the new created element"}]}],M=[{property:"strokeWidth",default:"4",types:["number"],description:"Stroke (the outline line) width in pixels."},{property:"strokeColor",default:"'darkorange'",types:["string"],description:"Stroke (the outline line) color. A SVG/CSS valid color string i.e <strong>'#aa23c8'</strong> or <strong>'rgba(211, 17, 32, 0.5)'</strong>."},{property:"fillColor",default:"'orange' ('none' in rects)",types:["string"],description:"SVG fill color (to fill the shape). A SVG/CSS valid color string i.e <strong>'#aa23c8'</strong> or <strong>'rgba(211, 17, 32, 0.5)'</strong>."}],B=[{property:"round",default:"0",types:["number","string","<strong>object</strong>"],description:"Round borders as number (pixel), a string with any valid SVG value (i.e '20%') or an object with rx and ry properties explained below.",props:[{property:"rx",default:"0",types:["number","string"],description:"Round applied to horizontal axis."},{property:"ry",default:"0",types:["number","string"],description:"Round applied to vertical axis."}]},{property:"padding",default:"0",types:["number","<strong>object</strong>"],description:"How separated (in pixels) from the target content is the rect. Can be negative. By default (0 padding) the rect surrounds perfectly the target's bounding rect.",props:[{property:"x",default:"0",types:["number"],description:"Horizontal gap (left and right)"},{property:"y",default:"0",types:["number"],description:"Vertical gap (top and bottom)"}]},{property:"animate",default:"false",types:["false","'pulse'","AnimationOptions"],description:`<a href="${y}/animations">See animations</a>`}],N=[{property:"fromAngle",default:"'bottom-right'",types:["number","'top'","'bottom'","'bottom-right'","'right'","'bottom-left'","'left'","'top-left'","'top-right'"],description:"From which direction the arrow points to the target (clockwise angle in degrees if number is given)"},{property:"distance",default:"0",types:["number"],description:"Distance in pixels between the arrow and the center of the target"},{property:"animate",default:"false",types:["false","'pulse'","AnimationOptions"],description:`<a href="${y}/animations">See animations</a>`},{property:"responsive",default:"false",types:["false","'rotate'","'scale'","ReponsiveArrowOptions"],description:`<a href="${y}/responsiveness#responsive-arrows">See responsive arrows</a>`}];J(async()=>{u("rect",{target:"#box-1",container:"main",padding:8,animate:"pulse"}),u("rect",{target:"#box-2",container:"main",strokeWidth:8,strokeColor:"#68c"}),u("rect",{target:"#box-3",container:"main",strokeColor:"#f8c",round:"30%",padding:12}),u("arrow",{target:"#box-1b",container:"main",responsive:{}}),u("arrow",{target:"#box-2b",container:"main",strokeWidth:8,strokeColor:"#46a",fillColor:"#8bf",fromAngle:150,animate:"pulse"}),u("arrow",{target:"#box-3b",container:"main",fillColor:"#7f7",fromAngle:"top-right",distance:50})}),K(tt),Z();var x=lt(),m=o(Q(x),2),w=o(l(m),2);c(w,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(e,n)=>{a();var t=i();t.nodeValue=`import { create } from 'pointitout' 

create('rect', { target: '#target-css-selector' })`,s(e,t)},$$slots:{default:!0}});var v=o(w,2),W=o(l(v),2);f(W,{title:"create ( pointerType, <span id='options-in-title'>options</span> )",pioOptionsList:z}),p(v);var _=o(v,2),S=o(l(_),2);f(S,{title:"SVGOptions",pioOptionsList:M});var D=o(S,2);I(D,{title:"",children:(e,n)=>{a();var t=i(`TIP: You can access the created SVG, so you can actually modify 
      any of its styles by CSS properties, but be careful with those properties 
      that alter the size, since Point it out will not recalculate an appropriate 
      container size for it.`);s(e,t)},$$slots:{default:!0}}),p(_),p(m);var b=o(m,2),C=o(l(b),4);f(C,{title:"create ( <strong>'rect'</strong>, options )",pioOptionsList:B});var P=o(C,2),T=o(l(P),4);g(T,{$$slots:{left:(e,n)=>{c(e,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(t,h)=>{a();var r=i();r.nodeValue=`create('rect', {
    target: '#box-1', 
    container: 'main',
    padding: 8,
    animate: 'pulse'
})`,s(t,r)},$$slots:{default:!0}})},right:(e,n)=>{var t=ot();s(e,t)}}});var V=o(T,2);g(V,{even:!0,$$slots:{left:(e,n)=>{c(e,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(t,h)=>{a();var r=i();r.nodeValue=`create('rect', {
    target: '#box-2', 
    container: 'main',
    strokeWidth: 8,
    strokeColor: '#68c'
})`,s(t,r)},$$slots:{default:!0}})},right:(e,n)=>{var t=rt();s(e,t)}}});var Y=o(V,2);g(Y,{$$slots:{left:(e,n)=>{c(e,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(t,h)=>{a();var r=i();r.nodeValue=`create('rect', {
    target: '#box-3', 
    container: 'main',
    strokeColor: '#f8c',
    round: '30%',
    padding: 12
})`,s(t,r)},$$slots:{default:!0}})},right:(e,n)=>{var t=st();s(e,t)}}}),p(P),p(b);var $=o(b,2),k=o(l($),4);f(k,{title:"create ( <strong>'arrow'</strong>, options )",pioOptionsList:N});var L=o(k,2);I(L,{title:"",children:(e,n)=>{a();var t=i("Recently added and working on it. Very few configuration options yet.");s(e,t)},$$slots:{default:!0}});var A=o(L,2),O=o(l(A),4);g(O,{$$slots:{left:(e,n)=>{c(e,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(t,h)=>{a();var r=i();r.nodeValue=`// Default: bottom-right orange 
// arrow without stroke
create('arrow', {
    target: '#box-1b', 
    container: 'main'
})`,s(t,r)},$$slots:{default:!0}})},right:(e,n)=>{var t=nt();s(e,t)}}});var E=o(O,2);g(E,{even:!0,$$slots:{left:(e,n)=>{c(e,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(t,h)=>{a();var r=i();r.nodeValue=`create('arrow', {
    target: '#box-2b', 
    container: 'main',
    strokeWidth: 8,
    strokeColor: '#46a',
    fillColor: '#8bf',
    fromAngle: 150,
    animate: 'pulse'
})`,s(t,r)},$$slots:{default:!0}})},right:(e,n)=>{var t=it();s(e,t)}}});var U=o(E,2);g(U,{even:!0,$$slots:{left:(e,n)=>{c(e,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(t,h)=>{a();var r=i();r.nodeValue=`create('arrow', {
    target: '#box-3b', 
    container: 'main',
    fillColor: '#7f7',
    fromAngle: 'top-right',
    distance: 50
})`,s(t,r)},$$slots:{default:!0}})},right:(e,n)=>{var t=at();s(e,t)}}}),p(A),p($);var G=o($,2),F=o(l(G),4);c(F,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(e,n)=>{a();var t=i();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// You can access to the target element and the raw 
// created HTMLElement from this object if you need
console.log(pointer.target) 
console.log(pointer.htmlElement)

// Some pointers method. See next sections.
pointer.update() // Update the pointer
pointer.destroy() // Destroy the pointer`,s(e,t)},$$slots:{default:!0}}),p(G),s(H,x),X()}export{$t as component};
