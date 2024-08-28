import{f as D,c as a,s as e,a as n,t as l,d as c,n as i,r}from"../chunks/disclose-version.mesN2nRT.js";import{p as Z,o as q,b as E,a as G}from"../chunks/index-client.DNihTn1J.js";import{s as K}from"../chunks/general.svelte.nVSAAccE.js";import{i as Q}from"../chunks/lifecycle.Bdlee1Yc.js";import{C as m}from"../chunks/Code.CHKhiNxC.js";import{C as b}from"../chunks/ColumnsContainer.DpwG1fmv.js";import{P as R}from"../chunks/PropertiesTable.CripjIJj.js";import{Y as _,Z as X}from"../chunks/pointitout.BJiq1jUH.js";import{b as ee}from"../chunks/paths.mhD1lz4a.js";import{I as te}from"../chunks/InfoBox.SFwgA1Xq.js";var oe=l('<div slot="right" class="result-panel"><div class="test-box" id="box-1">#box-1</div></div>'),ae=l('<div slot="right" class="result-panel"><div class="test-box" id="box-2">#box-2</div></div>'),re=l('<div slot="left"><!> <!></div>'),ie=l('<div slot="right" class="result-panel"><div class="test-box" id="example">#example</div></div>'),ne=l("Do not mix <code>animate</code> option and custom animations.",1),se=l(`<section class="doc-section"><h1 id="animate">Pointer animations</h1> <p>As of version 0.1.14, Point it out includes some basic, ready-to-use animations.</p> <p>Some pointers (currently all) support an <code>animate</code> option.
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
  one of the reasons for its existence.</p></section>`,1);function ge(I,L){Z(L,!1),q(()=>{_("rect",{target:"#box-1",container:"main",animate:{name:"pulse",duration:.75}}),_("rect",{target:"#example",container:"main",className:"my-spinny-pointer"}),_("arrow",{target:"#box-2",container:"main",animate:"pulse",distance:30,fromAngle:"top-right"})}),E(X);const N=[{property:"name",types:["'pulse'"],description:"Only 'pulse' available. There will be more in future releases."},{property:"duration",types:["number"],default:"1",description:"Duration of an animation cycle. The higher this number, the lower the speed."},{property:"direction",types:["'normal'","'alternate'"],default:"'alternate'",description:"If should play forward or alternate forward and backward."},{property:"repeat",types:["number","'infinite'"],default:"'infinite'",description:"Number of repetitions or 'infinite'"}];Q();var w=se(),h=D(w),V=a(h),B=e(e(V,!0)),f=e(e(B,!0)),J=e(a(f));e(e(J,!0)),i(),r(f);var x=e(e(f,!0));b(x,{$$slots:{left:(o,p)=>{m(o,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(t,u)=>{i();var s=c();s.nodeValue=`create('rect', {
    target: '#box-1', 
    container: 'main',
    animate: {
        name: 'pulse',
        duration: 0.75
    }
})`,n(t,s)},$$slots:{default:!0},$$legacy:!0})},right:(o,p)=>{var t=oe();a(t),r(t),n(o,t)}},$$legacy:!0});var S=e(e(x,!0));b(S,{$$slots:{left:(o,p)=>{m(o,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(t,u)=>{i();var s=c();s.nodeValue=`create('arrow', {
    target: '#box-2', 
    container: 'main',
    distance: 30,
    fromAngle: 'top-right',
    animate: 'pulse',
})`,n(t,s)},$$slots:{default:!0},$$legacy:!0})},right:(o,p)=>{var t=ae();a(t),r(t),n(o,t)}},$$legacy:!0});var v=e(e(S,!0));e(a(v)),i(),r(v);var P=e(e(v,!0));R(P,{title:"AnimationOptions",pioOptionsList:N,$$legacy:!0});var M=e(e(P,!0));e(e(M,!0)),r(h);var T=e(e(h,!0)),W=a(T),Y=e(e(W,!0)),$=e(e(Y,!0)),C=e(a($)),j=a(C);K(j,"href",`${ee??""}/create#common-params`),r(C),i(),r($);var k=e(e($,!0));b(k,{margin:"2.5rem",$$slots:{left:(o,p)=>{var t=re(),u=a(t);m(u,{language:"JavaScript",noTop:!0,children:(y,U)=>{i();var d=c();d.nodeValue=`create('rect', {
  target: '#example', 
  container: 'main',
  className: 'rainbow-spinny-pointer'
})`,n(y,d)},$$slots:{default:!0},$$legacy:!0});var s=e(e(u,!0));m(s,{language:"CSS",children:(y,U)=>{i();var d=c();d.nodeValue=`.rainbow-spinny-pointer {
  animation: 2s infinite rainbow-spin;
}

@keyframes rainbow-spin {
  0% { 
    transform: rotate(0deg);
    filter: hue-rotate(0);
  }
  100% { 
    transform: rotate(360deg); 
    filter: hue-rotate(360deg);
  }
}`,n(y,d)},$$slots:{default:!0},$$legacy:!0}),r(t),n(o,t)},right:(o,p)=>{var t=ie();a(t),r(t),n(o,t)}},$$legacy:!0});var A=e(e(k,!0));te(A,{title:"",children:(o,p)=>{i();var t=ne();e(D(t,!0)),i(),n(o,t)},$$slots:{default:!0},$$legacy:!0});var z=e(e(A,!0)),g=e(e(z,!0)),F=e(a(g));e(e(F,!0)),i(),r(g);var H=e(e(g,!0)),O=e(e(H,!0));e(a(O)),i(),r(O),r(T),n(I,w),G()}export{ge as component};
