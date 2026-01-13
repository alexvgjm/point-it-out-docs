import"../chunks/Dj_qTCJT.js";import{i as I}from"../chunks/UrZ5fqd2.js";import{p as L,o as N,d as V,f as s,e as B,t as J,a as o,b as M,g as c,h as a,c as l,n,r as d}from"../chunks/C-VLNsqj.js";import{s as W}from"../chunks/BDwsY6I3.js";import{C as u}from"../chunks/Dw5q4ayE.js";import{C as g}from"../chunks/C0XXYJb4.js";import{P as j}from"../chunks/CKY-ru2c.js";import{l as y,h as z}from"../chunks/Cm2VvG2T.js";import{b as F}from"../chunks/VXsCTCol.js";import{I as H}from"../chunks/DJJij3Z-.js";var U=s('<div slot="right" class="result-panel"><div class="test-box" id="box-1">#box-1</div></div>'),Y=s('<div slot="right" class="result-panel"><div class="test-box" id="box-2">#box-2</div></div>'),q=s('<div slot="left"><!> <!></div>'),E=s('<div slot="right" class="result-panel"><div class="test-box" id="example">#example</div></div>'),G=s("Do not mix <code>animate</code> option and custom animations.",1),K=s(`<section class="doc-section"><h1 id="animate">Pointer animations</h1> <p>As of version 0.1.14, Point it out includes some basic, ready-to-use animations.</p> <p>Some pointers (currently all) support an <code>animate</code> option.
    At the moment, there is only
    one basic animation available for rects and arrows: <code>'pulse'</code>.</p> <!> <!> <p>The animate option can be a string with the name of one known animation or an <code>AnimationOptions</code> object</p> <!> <h2>Why so few options?</h2> <p>The goal is not to create a full-fledged animation system, but rather to 
    provide some basic, ready-to-use animations. If you want to implement 
    more complex custom animations, read the section below.</p></section> <section class="doc-section"><h1 id="custom-animations">Custom animations</h1> <p>To facilitate customization, pointers are not WebComponents and do not hide any of the
    properties they use. They are simple HTML elements in your site or web app.</p> <p>You can use the <code><a>className</a></code> option to add a custom class to a pointer, or do anything else you want with the pointer reference,
    such as assigning an ID. This way, you can write your own CSS animations.</p> <!> <!> <h2>Unsafe CSS properties</h2> <p>Some CSS properties of pointers can be overridden during
    updates. Specifically, you should be aware of 
    the <code>left</code> and <code>top</code> properties,
    which are used to position the pointer over the target.</p> <p>On the other hand, most styling properties are set when the pointer is
  created and are applied inline using the style attribute on the pointer 
  element or its child elements. Fortunately, animation properties take 
  precedence and override inline styles.</p> <p>Besides animations, if you need to modify some styles via CSS instead of 
  using the options, you will need to replace the inline styles 
  via JavaScript or use the infamous <code>!important</code> keyword. Don't
  be afraid to use it, this is one of the legitimate uses of that keyword and
  one of the reasons for its existence.</p></section>`,1);function re(P,T){L(T,!1),N(()=>{y("rect",{target:"#box-1",container:"main",animate:{name:"pulse",duration:.75}}),y("rect",{target:"#example",container:"main",className:"my-spinny-pointer"}),y("arrow",{target:"#box-2",container:"main",animate:"pulse",distance:30,fromAngle:"right top"})}),V(z);const C=[{property:"name",types:["'pulse'"],description:"Only 'pulse' available. There will be more in future releases."},{property:"duration",types:["number"],default:"1",description:"Duration of an animation cycle. The higher this number, the lower the speed."},{property:"direction",types:["'normal'","'alternate'"],default:"'alternate'",description:"If should play forward or alternate forward and backward."},{property:"repeat",types:["number","'infinite'"],default:"'infinite'",description:"Number of repetitions or 'infinite'"}];I();var b=K(),h=B(b),$=a(l(h),6);g($,{$$slots:{left:(t,r)=>{u(t,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(e,m)=>{n();var i=c();i.nodeValue=`create('rect', {
    target: '#box-1', 
    container: 'main',
    animate: {
        name: 'pulse',
        duration: 0.75
    }
})`,o(e,i)},$$slots:{default:!0}})},right:(t,r)=>{var e=U();o(t,e)}}});var w=a($,2);g(w,{$$slots:{left:(t,r)=>{u(t,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(e,m)=>{n();var i=c();i.nodeValue=`create('arrow', {
    target: '#box-2', 
    container: 'main',
    distance: 30,
    fromAngle: 'right top',
    animate: 'pulse',
})`,o(e,i)},$$slots:{default:!0}})},right:(t,r)=>{var e=Y();o(t,e)}}});var k=a(w,4);j(k,{title:"AnimationOptions",get pioOptionsList(){return C}}),n(4),d(h);var x=a(h,2),f=a(l(x),4),_=a(l(f)),A=l(_);d(_),n(),d(f);var S=a(f,2);g(S,{margin:"2.5rem",$$slots:{left:(t,r)=>{var e=q(),m=l(e);u(m,{language:"JavaScript",noTop:!0,children:(v,D)=>{n();var p=c();p.nodeValue=`create('rect', {
  target: '#example', 
  container: 'main',
  className: 'rainbow-spinny-pointer'
})`,o(v,p)},$$slots:{default:!0}});var i=a(m,2);u(i,{language:"CSS",children:(v,D)=>{n();var p=c();p.nodeValue=`.rainbow-spinny-pointer {
  animation: 2s infinite rainbow-spin;
}\r
\r
@keyframes rainbow-spin {
  0% { 
    transform: rotate(0deg);
    filter: hue-rotate(0);
  }
  100% { 
    transform: rotate(360deg); 
    filter: hue-rotate(360deg);
  }
}`,o(v,p)},$$slots:{default:!0}}),d(e),o(t,e)},right:(t,r)=>{var e=E();o(t,e)}}});var O=a(S,2);H(O,{title:"",children:(t,r)=>{n();var e=G();n(2),o(t,e)},$$slots:{default:!0}}),n(8),d(x),J(()=>W(A,"href",`${F??""}/create#common-params`)),o(P,b),M()}export{re as component};
