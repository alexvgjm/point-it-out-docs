import{c as r,s as e,a as i,t as f,r as s,b as P,f as U,d as w,n as h}from"../chunks/disclose-version.DWBJy-Vp.js";import{a as A,d as L,s as W}from"../chunks/general.svelte.CJ9df1OJ.js";import{b as q}from"../chunks/paths.B1cZJfcy.js";import{C as b}from"../chunks/Code.DhCHQ6XF.js";import{t as C}from"../chunks/index-client.BhkDjp_U.js";import{i as T}from"../chunks/if.CJmXaxSy.js";import{p as V}from"../chunks/props.D1D6J4En.js";var H=f('<div class="info-box__title"> </div>'),M=f('<div class="info-box svelte-ki5phx"><!> <!></div>');function O(v,n){let a=V(n,"title");var p=M(),c=r(p);T(c,a,d=>{var o=H(),m=r(o);s(o),C(()=>P(m,a())),i(d,o)});var u=e(e(c,!0));A(u,L(n),{}),s(p),i(v,p)}var R=f(`Pointers are stored in a Set with no guaranteed order. If you need to update pointers in a
    specific order, store its references and update manually via its update method.`,1),j=f(`<section class="doc-section"><h1 id="update-all">Update all pointers</h1> <p>If the layout of your web or app changes, absolutely positioned pointers might keep the original
    first calculated position and not follow target elements to their new position. Make sure to
    call this function afterward to recalculate pointers positions over targets.</p> <!> <!> <section class="doc-section"><h2>Why is there no automatic update?</h2> <p>Since the factors that could cause target position changes cannot be known, the simplest
      automatic update could involve continuous queries or repeated invocations of excessive and
      ineffective updates. It is better that this library does not assume such responsibility hiding
      such cost.</p> <p>Having said that, there is indeed an automatic update when resizing.</p> <h3>Automatic update on window resize</h3> <p>Window resizing is a well-known frequent scenario. When this happens, the update function is
      called.</p> <p>But if you need more control or are updating the pointers another way, or for some other
      reason you need to disable this behavior, set the <a>updateOnResize option</a> to
      false.</p></section></section> <section class="doc-section"><h1 id="update-specific-pointer">Update a specific pointer</h1> <!></section>`,1);function Q(v){var n=j(),a=U(n),p=r(a),c=e(e(p,!0)),u=e(e(c,!0));O(u,{title:"",children:(l,$)=>{h();var t=R();i(l,t)},$$slots:{default:!0},$$legacy:!0});var d=e(e(u,!0));b(d,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(l,$)=>{h();var t=w();t.nodeValue=`import { update } from 'pointitout' 

update() // Update all created pointers, recalculating its position.`,i(l,t)},$$slots:{default:!0},$$legacy:!0});var o=e(e(d,!0)),m=r(o),y=e(e(m,!0)),x=e(e(y,!0)),k=e(e(x,!0)),S=e(e(k,!0)),g=e(e(S,!0)),z=e(r(g));W(z,"href",`${q??""}/config`),h(),s(g),s(o),s(a);var _=e(e(a,!0)),B=r(_),I=e(e(B,!0));b(I,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(l,$)=>{h();var t=w();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// ...
// Later, after some change in the target's position
pointer.update() // Update the pointer`,i(l,t)},$$slots:{default:!0},$$legacy:!0}),s(_),i(v,n)}export{Q as component};
