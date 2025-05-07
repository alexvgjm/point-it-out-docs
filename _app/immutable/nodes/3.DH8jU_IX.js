import{a as o,t as s,d as c}from"../chunks/disclose-version.DjlcKni_.js";import{i as I}from"../chunks/legacy.BQXG6iyP.js";import{p as L,o as N,b as V,f as B,a as J,s as a,c as l,n as i,r as d}from"../chunks/index-client.C_AGn1Ij.js";import{s as M}from"../chunks/general.svelte.B65VZ__f.js";import{C as u}from"../chunks/Code.DUo6Pgyj.js";import{C as g}from"../chunks/ColumnsContainer.DbzHa6Fa.js";import{P as W}from"../chunks/PropertiesTable.Cw4P0USA.js";import{l as y,h as j}from"../chunks/pointitout.DUsfHl7q.js";import{b as z}from"../chunks/paths.eRSBGY6g.js";import{I as F}from"../chunks/InfoBox.D6dvsujv.js";var H=s('<div slot="right" class="result-panel"><div class="test-box" id="box-1">#box-1</div></div>'),U=s('<div slot="right" class="result-panel"><div class="test-box" id="box-2">#box-2</div></div>'),Y=s('<div slot="left"><!> <!></div>'),q=s('<div slot="right" class="result-panel"><div class="test-box" id="example">#example</div></div>'),E=s("Do not mix <code>animate</code> option and custom animations.",1),G=s(`<section class="doc-section"><h1 id="animate">Pointer animations</h1> <p>As of version 0.1.14, Point it out includes some basic, ready-to-use animations.</p> <p>Some pointers (currently all) support an <code>animate</code> option.
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
  one of the reasons for its existence.</p></section>`,1);function ne(P,T){L(T,!1),N(()=>{y("rect",{target:"#box-1",container:"main",animate:{name:"pulse",duration:.75}}),y("rect",{target:"#example",container:"main",className:"my-spinny-pointer"}),y("arrow",{target:"#box-2",container:"main",animate:"pulse",distance:30,fromAngle:"right top"})}),V(j);const C=[{property:"name",types:["'pulse'"],description:"Only 'pulse' available. There will be more in future releases."},{property:"duration",types:["number"],default:"1",description:"Duration of an animation cycle. The higher this number, the lower the speed."},{property:"direction",types:["'normal'","'alternate'"],default:"'alternate'",description:"If should play forward or alternate forward and backward."},{property:"repeat",types:["number","'infinite'"],default:"'infinite'",description:"Number of repetitions or 'infinite'"}];I();var $=G(),h=B($),b=a(l(h),6);g(b,{$$slots:{left:(t,r)=>{u(t,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(e,m)=>{i();var n=c();n.nodeValue=`create('rect', {
    target: '#box-1', 
    container: 'main',
    animate: {
        name: 'pulse',
        duration: 0.75
    }
})`,o(e,n)},$$slots:{default:!0}})},right:(t,r)=>{var e=H();o(t,e)}}});var w=a(b,2);g(w,{$$slots:{left:(t,r)=>{u(t,{slot:"left",language:"TypeScript",showLanguage:!1,noTop:!0,children:(e,m)=>{i();var n=c();n.nodeValue=`create('arrow', {
    target: '#box-2', 
    container: 'main',
    distance: 30,
    fromAngle: 'right top',
    animate: 'pulse',
})`,o(e,n)},$$slots:{default:!0}})},right:(t,r)=>{var e=U();o(t,e)}}});var k=a(w,4);W(k,{title:"AnimationOptions",pioOptionsList:C}),i(4),d(h);var x=a(h,2),f=a(l(x),4),_=a(l(f)),A=l(_);M(A,"href",`${z??""}/create#common-params`),d(_),i(),d(f);var S=a(f,2);g(S,{margin:"2.5rem",$$slots:{left:(t,r)=>{var e=Y(),m=l(e);u(m,{language:"JavaScript",noTop:!0,children:(v,D)=>{i();var p=c();p.nodeValue=`create('rect', {
  target: '#example', 
  container: 'main',
  className: 'rainbow-spinny-pointer'
})`,o(v,p)},$$slots:{default:!0}});var n=a(m,2);u(n,{language:"CSS",children:(v,D)=>{i();var p=c();p.nodeValue=`.rainbow-spinny-pointer {
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
}`,o(v,p)},$$slots:{default:!0}}),d(e),o(t,e)},right:(t,r)=>{var e=q();o(t,e)}}});var O=a(S,2);F(O,{title:"",children:(t,r)=>{i();var e=E();i(2),o(t,e)},$$slots:{default:!0}}),i(8),d(x),o(P,$),J()}export{ne as component};
