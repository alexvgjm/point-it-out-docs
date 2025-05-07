import{a,t as T,d as n}from"../chunks/disclose-version.DjlcKni_.js";import"../chunks/legacy.BQXG6iyP.js";import{f as A,s as t,c as i,n as r,r as s}from"../chunks/index-client.C_AGn1Ij.js";import{s as B}from"../chunks/general.svelte.B65VZ__f.js";import{b as I}from"../chunks/paths.eRSBGY6g.js";import{C as c}from"../chunks/Code.DUo6Pgyj.js";import{I as L}from"../chunks/InfoBox.D6dvsujv.js";var V=T(`<section class="doc-section"><h1 id="update-all">Update all pointers</h1> <p>If the layout of your web or app changes, absolutely positioned pointers might keep the original
    first calculated position and not follow target elements to their new position. Make sure to
    call this function afterward to recalculate pointers positions over targets.</p> <!> <!> <section class="doc-section"><h2>Why is there no automatic update?</h2> <p>Since the factors that could cause target position changes cannot be known, the simplest
      automatic update could involve continuous queries or repeated invocations of excessive and
      ineffective updates. It is better that this library does not assume such responsibility hiding
      such cost.</p> <p>Having said that, there is indeed an automatic update when resizing.</p> <h3>Automatic update on window resize</h3> <p>Window resizing is a well-known frequent scenario. When this happens, the update function is
      called.</p> <p>But if you need more control or are updating the pointers another way, or for some other
      reason you need to disable this behavior, set the <a>updateOnResize option</a> to
      false.</p></section></section> <section class="doc-section"><h1 id="update-specific-pointer">Update a specific pointer</h1> <!></section> <section class="doc-section"><h1 id="clear-all-pointers">Clear all pointers</h1> <p>To clear all pointers simply call the clear function. This function is an easy way to call the
    destroy() method on every created pointer.</p> <!></section> <section class="doc-section"><h1 id="destroy-specific-pointer">Destroy a specific pointer</h1> <!> <section class="doc-section"><h2 id="destroy-specific-pointer">Pointer 'destroy' event</h2> <p>You can register a listener to be called when pointer is destroyed.</p> <!></section></section>`,1);function R(_){var h=V(),p=A(h),f=t(i(p),4);L(f,{title:"",children:(o,l)=>{r();var e=n(`Pointers are stored in a Set with no guaranteed order. If you need to update pointers in a
    specific order, store its references and update manually via its update method.`);a(o,e)},$$slots:{default:!0}});var g=t(f,2);c(g,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{r();var e=n();e.nodeValue=`import { update } from 'pointitout' 

update() // Update all created pointers, recalculating its position.`,a(o,e)},$$slots:{default:!0}});var m=t(g,2),v=t(i(m),10),b=t(i(v));B(b,"href",`${I??""}/config`),r(),s(v),s(m),s(p);var d=t(p,2),S=t(i(d),2);c(S,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{r();var e=n();e.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// ...
// Later, after some change in the target's position
pointer.update() // Update the pointer`,a(o,e)},$$slots:{default:!0}}),s(d);var u=t(d,2),x=t(i(u),4);c(x,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{r();var e=n();e.nodeValue=`import { clear } from 'pointitout' 

clear() // Destroy all pointers. That's all.`,a(o,e)},$$slots:{default:!0}}),s(u);var y=t(u,2),w=t(i(y),2);c(w,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{r();var e=n();e.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.destroy() // Destroy the pointer`,a(o,e)},$$slots:{default:!0}});var $=t(w,2),P=t(i($),4);c(P,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{r();var e=n();e.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.on('destroy', p => {
    console.log('A pointer was destroyed. 🪦 R.I.P')
    console.log('Pointer object: ', p)
})

pointer.destroy() // Destroy the pointer
// The function containing the console.logs will be called.`,a(o,e)},$$slots:{default:!0}}),s($),s(y),a(_,h)}export{R as component};
