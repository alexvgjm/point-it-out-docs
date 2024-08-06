import{f as w,c as i,s as e,a,t as _,d as l,n as c,r as p}from"../chunks/disclose-version.Bp1Y62Lx.js";import{C as u}from"../chunks/Code.dmhNf5x3.js";var S=_(`<section class="doc-section"><h1 id="clear-all-pointers">Clear all pointers</h1> <p>This section is under construction. For now, it's enough to know that the "clear" function
    deletes ALL currently created pointers.</p> <!></section> <section class="doc-section"><h1 id="destroy-specific-pointer">Destroy a specific pointer</h1> <p>WORK IN PROGRESS. This doesn't work yet, will be added in 1.5.</p> <!></section>`,1);function L(d){var s=S(),r=w(s),h=i(r),g=e(e(h,!0)),f=e(e(g,!0));u(f,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,y)=>{c();var t=l();t.nodeValue=`import { clear } from 'pointitout' 

clear() // Destroy all pointers. That's all.`,a(o,t)},$$slots:{default:!0},$$legacy:!0}),p(r);var n=e(e(r,!0)),$=i(n),m=e(e($,!0)),v=e(e(m,!0));u(v,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(o,y)=>{c();var t=l();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

pointer.destroy() // Destroy the pointer`,a(o,t)},$$slots:{default:!0},$$legacy:!0}),p(n),a(d,s)}export{L as component};
