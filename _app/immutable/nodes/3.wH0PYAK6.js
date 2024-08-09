import{f as x,c as s,s as e,a as r,t as D,d as n,n as i,r as l}from"../chunks/disclose-version.DWBJy-Vp.js";import{C as c}from"../chunks/Code.DhCHQ6XF.js";var P=D(`<section class="doc-section"><h1 id="clear-all-pointers">Clear all pointers</h1> <p>To clear all pointers simply call the clear function. This function is an easy way to call the
    destroy() method on every created pointer.</p> <!></section> <section class="doc-section"><h1 id="destroy-specific-pointer">Destroy a specific pointer</h1> <!> <section class="doc-section"><h2 id="destroy-specific-pointer">Pointer onDestroy hook</h2> <p>You can register functions to be called when pointer is destroyed.</p> <!></section></section>`,1);function A(y){var p=P(),a=x(p),f=s(a),$=e(e(f,!0)),m=e(e($,!0));c(m,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,g)=>{i();var t=n();t.nodeValue=`import { clear } from 'pointitout' 

clear() // Destroy all pointers. That's all.`,r(o,t)},$$slots:{default:!0},$$legacy:!0}),l(a);var u=e(e(a,!0)),v=s(u),d=e(e(v,!0));c(d,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,g)=>{i();var t=n();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.destroy() // Destroy the pointer`,r(o,t)},$$slots:{default:!0},$$legacy:!0});var h=e(e(d,!0)),w=s(h),_=e(e(w,!0)),T=e(e(_,!0));c(T,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,g)=>{i();var t=n();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.onDestroy( p => {
    console.log('A pointer was destroyed. 🪦 R.I.P')
    console.log('Pointer object: ', p)
})

pointer.destroy() // Destroy the pointer
// The function containing the console.logs will be called.`,r(o,t)},$$slots:{default:!0},$$legacy:!0}),l(h),l(u),r(y,p)}export{A as component};
