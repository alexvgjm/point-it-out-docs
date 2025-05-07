import{a as i,t as l,d}from"../chunks/disclose-version.DjlcKni_.js";import"../chunks/legacy.BQXG6iyP.js";import{s as n,c as u,n as c,r as f}from"../chunks/index-client.C_AGn1Ij.js";import{C as g}from"../chunks/Code.DUo6Pgyj.js";import{P as m}from"../chunks/PropertiesTable.Cw4P0USA.js";var h=l(`<section class="doc-section"><h1 id="configuring-global-options">Configuring global options</h1> <p>The config function receives a SystemOptions object and will update only 
    the global options presents in it.</p> <!> <!></section>`);function x(s){const a=[{property:"updateOnResize",default:"true",types:["boolean"],description:"If true, the update function will be called on every window resize, updating all pointers."},{property:"updateAfterLoad",default:"true",types:["boolean"],description:`If true, the update function will be called on window's "load" event. This is a default basic layout shifting management.`}];var e=h(),t=n(u(e),4);g(t,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(r,b)=>{c();var o=d();o.nodeValue=`// Example
import { config } from 'pointitout' 
    
config({
    updateOnResize: false // disable the updateOnResize. It does
                          // not alter the other options.
})`,i(r,o)},$$slots:{default:!0}});var p=n(t,2);m(p,{title:"SystemOptions",pioOptionsList:a}),f(e),i(s,e)}export{x as component};
