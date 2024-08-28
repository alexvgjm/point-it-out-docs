import{f as j,c as r,s as e,a,t as w,d as l,n as i,r as s}from"../chunks/disclose-version.mesN2nRT.js";import{s as H}from"../chunks/general.svelte.nVSAAccE.js";import{b as M}from"../chunks/paths.mhD1lz4a.js";import{C as c}from"../chunks/Code.CHKhiNxC.js";import{I as O}from"../chunks/InfoBox.SFwgA1Xq.js";var Y=w(`Pointers are stored in a Set with no guaranteed order. If you need to update pointers in a
    specific order, store its references and update manually via its update method.`,1),E=w(`<section class="doc-section"><h1 id="update-all">Update all pointers</h1> <p>If the layout of your web or app changes, absolutely positioned pointers might keep the original
    first calculated position and not follow target elements to their new position. Make sure to
    call this function afterward to recalculate pointers positions over targets.</p> <!> <!> <section class="doc-section"><h2>Why is there no automatic update?</h2> <p>Since the factors that could cause target position changes cannot be known, the simplest
      automatic update could involve continuous queries or repeated invocations of excessive and
      ineffective updates. It is better that this library does not assume such responsibility hiding
      such cost.</p> <p>Having said that, there is indeed an automatic update when resizing.</p> <h3>Automatic update on window resize</h3> <p>Window resizing is a well-known frequent scenario. When this happens, the update function is
      called.</p> <p>But if you need more control or are updating the pointers another way, or for some other
      reason you need to disable this behavior, set the <a>updateOnResize option</a> to
      false.</p></section></section> <section class="doc-section"><h1 id="update-specific-pointer">Update a specific pointer</h1> <!></section> <section class="doc-section"><h1 id="clear-all-pointers">Clear all pointers</h1> <p>To clear all pointers simply call the clear function. This function is an easy way to call the
    destroy() method on every created pointer.</p> <!></section> <section class="doc-section"><h1 id="destroy-specific-pointer">Destroy a specific pointer</h1> <!> <section class="doc-section"><h2 id="destroy-specific-pointer">Pointer 'destroy' event</h2> <p>You can register a listener to be called when pointer is destroyed.</p> <!></section></section>`,1);function Q(b){var h=E(),p=j(h),S=r(p),x=e(e(S,!0)),g=e(e(x,!0));O(g,{title:"",children:(o,n)=>{i();var t=Y();a(o,t)},$$slots:{default:!0},$$legacy:!0});var f=e(e(g,!0));c(f,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,n)=>{i();var t=l();t.nodeValue=`import { update } from 'pointitout' 

update() // Update all created pointers, recalculating its position.`,a(o,t)},$$slots:{default:!0},$$legacy:!0});var v=e(e(f,!0)),P=r(v),T=e(e(P,!0)),A=e(e(T,!0)),B=e(e(A,!0)),I=e(e(B,!0)),m=e(e(I,!0)),L=e(r(m));H(L,"href",`${M??""}/config`),i(),s(m),s(v),s(p);var u=e(e(p,!0)),V=r(u),k=e(e(V,!0));c(k,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,n)=>{i();var t=l();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// ...
// Later, after some change in the target's position
pointer.update() // Update the pointer`,a(o,t)},$$slots:{default:!0},$$legacy:!0}),s(u);var d=e(e(u,!0)),z=r(d),D=e(e(z,!0)),U=e(e(D,!0));c(U,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,n)=>{i();var t=l();t.nodeValue=`import { clear } from 'pointitout' 

clear() // Destroy all pointers. That's all.`,a(o,t)},$$slots:{default:!0},$$legacy:!0}),s(d);var y=e(e(d,!0)),C=r(y),$=e(e(C,!0));c($,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,n)=>{i();var t=l();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.destroy() // Destroy the pointer`,a(o,t)},$$slots:{default:!0},$$legacy:!0});var _=e(e($,!0)),W=r(_),q=e(e(W,!0)),R=e(e(q,!0));c(R,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,n)=>{i();var t=l();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.on('destroy', p => {
    console.log('A pointer was destroyed. 🪦 R.I.P')
    console.log('Pointer object: ', p)
})

pointer.destroy() // Destroy the pointer
// The function containing the console.logs will be called.`,a(o,t)},$$slots:{default:!0},$$legacy:!0}),s(_),s(y),a(b,h)}export{Q as component};
