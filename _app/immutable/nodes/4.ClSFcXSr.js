import{c as d,s as e,a as n,t as c,d as f,n as g,r as h}from"../chunks/disclose-version.mesN2nRT.js";import{C as m}from"../chunks/Code.CHKhiNxC.js";import{P as y}from"../chunks/PropertiesTable.CripjIJj.js";var b=c(`<section class="doc-section"><h1 id="configuring-global-options">Configuring global options</h1> <p>The config function receives a SystemOptions object and will update only 
    the global options presents in it.</p> <!> <!></section>`);function x(i){const s=[{property:"updateOnResize",default:"true",types:["boolean"],description:"If true, the update function will be called on every window resize, updating all pointers."},{property:"updateAfterLoad",default:"true",types:["boolean"],description:`If true, the update function will be called on window's "load" event. This is a default basic layout shifting management.`}];var t=b(),r=d(t),l=e(e(r,!0)),o=e(e(l,!0));m(o,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(u,v)=>{g();var a=f();a.nodeValue=`// Example
import { config } from 'pointitout' 
    
config({
    updateOnResize: false // disable the updateOnResize. It does
                          // not alter the other options.
})`,n(u,a)},$$slots:{default:!0},$$legacy:!0});var p=e(e(o,!0));y(p,{title:"SystemOptions",pioOptionsList:s,$$legacy:!0}),h(t),n(i,t)}export{x as component};
