import"../chunks/Dj_qTCJT.js";import"../chunks/UrZ5fqd2.js";import{f as l,a as n,g as d,h as i,c as u,n as c,r as f}from"../chunks/C-VLNsqj.js";import{C as g}from"../chunks/Dw5q4ayE.js";import{P as m}from"../chunks/CKY-ru2c.js";var h=l(`<section class="doc-section"><h1 id="configuring-global-options">Configuring global options</h1> <p>The config function receives a SystemOptions object and will update only 
    the global options presents in it.</p> <!> <!></section>`);function $(s){const a=[{property:"updateOnResize",default:"true",types:["boolean"],description:"If true, the update function will be called on every window resize, updating all pointers."},{property:"updateAfterLoad",default:"true",types:["boolean"],description:`If true, the update function will be called on window's "load" event. This is a default basic layout shifting management.`}];var e=h(),t=i(u(e),4);g(t,{showLanguage:!1,showSelectAllButton:!0,language:"TypeScript",children:(p,b)=>{c();var o=d();o.nodeValue=`// Example
import { config } from 'pointitout' 
    
config({
    updateOnResize: false // disable the updateOnResize. It does
                          // not alter the other options.
})`,n(p,o)},$$slots:{default:!0}});var r=i(t,2);m(r,{title:"SystemOptions",get pioOptionsList(){return a}}),f(e),n(s,e)}export{$ as component};
