import"../chunks/Dj_qTCJT.js";import"../chunks/UrZ5fqd2.js";import{f as T,e as A,t as B,a as n,h as t,c as a,g as s,n as i,r}from"../chunks/C-VLNsqj.js";import{s as I}from"../chunks/BDwsY6I3.js";import{b as L}from"../chunks/VXsCTCol.js";import{C as c}from"../chunks/Dw5q4ayE.js";import{I as V}from"../chunks/DJJij3Z-.js";var k=T(`<section class="doc-section"><h1 id="update-all">Update all pointers</h1> <p>If the layout of your web or app changes, absolutely positioned pointers might keep the original
    first calculated position and not follow target elements to their new position. Make sure to
    call this function afterward to recalculate pointers positions over targets.</p> <!> <!> <section class="doc-section"><h2>Why is there no automatic update?</h2> <p>Since the factors that could cause target position changes cannot be known, the simplest
      automatic update could involve continuous queries or repeated invocations of excessive and
      ineffective updates. It is better that this library does not assume such responsibility hiding
      such cost.</p> <p>Having said that, there is indeed an automatic update when resizing.</p> <h3>Automatic update on window resize</h3> <p>Window resizing is a well-known frequent scenario. When this happens, the update function is
      called.</p> <p>But if you need more control or are updating the pointers another way, or for some other
      reason you need to disable this behavior, set the <a>updateOnResize option</a> to
      false.</p></section></section> <section class="doc-section"><h1 id="update-specific-pointer">Update a specific pointer</h1> <!></section> <section class="doc-section"><h1 id="clear-all-pointers">Clear all pointers</h1> <p>To clear all pointers simply call the clear function. This function is an easy way to call the
    destroy() method on every created pointer.</p> <!></section> <section class="doc-section"><h1 id="destroy-specific-pointer">Destroy a specific pointer</h1> <!> <section class="doc-section"><h2 id="destroy-specific-pointer">Pointer 'destroy' event</h2> <p>You can register a listener to be called when pointer is destroyed.</p> <!></section></section>`,1);function j(_){var h=k(),p=A(h),f=t(a(p),4);V(f,{title:"",children:(o,l)=>{i();var e=s(`Pointers are stored in a Set with no guaranteed order. If you need to update pointers in a
    specific order, store its references and update manually via its update method.`);n(o,e)},$$slots:{default:!0}});var g=t(f,2);c(g,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{i();var e=s();e.nodeValue=`import { update } from 'pointitout' 

update() // Update all created pointers, recalculating its position.`,n(o,e)},$$slots:{default:!0}});var m=t(g,2),v=t(a(m),10),b=t(a(v));i(),r(v),r(m),r(p);var d=t(p,2),S=t(a(d),2);c(S,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{i();var e=s();e.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// ...
// Later, after some change in the target's position
pointer.update() // Update the pointer`,n(o,e)},$$slots:{default:!0}}),r(d);var u=t(d,2),x=t(a(u),4);c(x,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{i();var e=s();e.nodeValue=`import { clear } from 'pointitout' 

clear() // Destroy all pointers. That's all.`,n(o,e)},$$slots:{default:!0}}),r(u);var y=t(u,2),w=t(a(y),2);c(w,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{i();var e=s();e.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.destroy() // Destroy the pointer`,n(o,e)},$$slots:{default:!0}});var $=t(w,2),P=t(a($),4);c(P,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,l)=>{i();var e=s();e.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.on('destroy', p => {
    console.log('A pointer was destroyed. 🪦 R.I.P')
    console.log('Pointer object: ', p)
})

pointer.destroy() // Destroy the pointer
// The function containing the console.logs will be called.`,n(o,e)},$$slots:{default:!0}}),r($),r(y),B(()=>I(b,"href",`${L??""}/config`)),n(_,h)}export{j as component};
