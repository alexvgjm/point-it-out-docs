import{f as R,c as i,s as e,a as r,t as U,d as u,n as d,r as s}from"../chunks/disclose-version.Bp1Y62Lx.js";import{C as h}from"../chunks/Code.dmhNf5x3.js";var W=U(`<section class="doc-section"><h1 id="update-all">Update all pointers</h1> <p>If the layout of your web or app changes, elements positioned absolutely as pointers might keep
    the original first calculated position and not follow target elements to their new position.
    Make sure to call this function afterward to recalculate pointers positions over targets.</p> <!> <section class="doc-section"><h2>Why is there no automatic update?</h2> <p>Since the factors that could cause target position changes cannot be known, the simplest
      automatic update could involve continuous queries or repeated invocations of excessive and
      ineffective updates.</p> <p>It is better that this library does not assume such responsibility hiding such cost.</p> <h3>Automatic update on window resize</h3> <p>Window resizing is a well-known frequent scenario. When this happens, the update function is
      called.</p> <p>But if you need more control or are updating the pointers another way, or for some other
      reason you need to disable this behavior, set the updateOnResize option to false.</p></section></section> <section class="doc-section"><h1 id="update-specific-pointer">Update a specific pointer</h1> <p>WORK IN PROGRESS. This doesn't work yet, will be added in 1.5.</p> <!></section>`,1);function B(f){var n=W(),o=R(n),g=i(o),v=e(e(g,!0)),p=e(e(v,!0));h(p,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(a,k)=>{d();var t=u();t.nodeValue=`import { update } from 'pointitout' 

update() // Update all created pointers, recalculating its position.`,r(a,t)},$$slots:{default:!0},$$legacy:!0});var c=e(e(p,!0)),m=i(c),w=e(e(m,!0)),y=e(e(w,!0)),$=e(e(y,!0)),_=e(e($,!0));e(e(_,!0)),s(c),s(o);var l=e(e(o,!0)),b=i(l),S=e(e(b,!0)),x=e(e(S,!0));h(x,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(a,k)=>{d();var t=u();t.nodeValue=`import { create } from 'pointitout' 

const pointer = create('rect', { target: '#target-element-id' })

// ...
// Later, after some change in the target's position
pointer.update() // Update the pointer`,r(a,t)},$$slots:{default:!0},$$legacy:!0}),s(l),r(f,n)}export{B as component};
