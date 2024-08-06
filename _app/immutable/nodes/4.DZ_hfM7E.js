import{c as u,s as e,a as s,t as d,d as g,n as f,r as m}from"../chunks/disclose-version.Bp1Y62Lx.js";import{C as h}from"../chunks/Code.dmhNf5x3.js";import{P as y}from"../chunks/PropertiesTable.DsCpRWDq.js";var v=d(`<section class="doc-section"><h1 id="clear-all-pointers">Configuring global options</h1> <p>The config function receives a SystemOptions object and will update only the global options
    presents in it. In the current version there is only one option.</p> <!> <!></section>`);function x(i){const r=[{property:"updateOnResize",default:"true",types:["boolean"],description:"If true, the update function will be called on every window resize, updating all pointers."}];var t=v(),a=u(t),p=e(e(a,!0)),o=e(e(p,!0));h(o,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(c,$)=>{f();var n=g();n.nodeValue=`import { config } from 'pointitout' 

config({
    updateOnResize: true 
})`,s(c,n)},$$slots:{default:!0},$$legacy:!0});var l=e(e(o,!0));y(l,{title:"SystemOptions",pioOptionsList:r,$$legacy:!0}),m(t),s(i,t)}export{x as component};
