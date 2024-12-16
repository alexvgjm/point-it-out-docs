import{f as z,a as d,t as b,d as h,c as S}from"../chunks/disclose-version.DjlcKni_.js";import{i as H}from"../chunks/legacy.BQXG6iyP.js";import{p as J,b as O,a9 as T,aa as X,f as Y,a as Z,s as l,c as s,t as W,ab as _,W as i,n as c,r,ac as A,X as V}from"../chunks/index-client.C_AGn1Ij.js";import{s as B}from"../chunks/general.svelte.B65VZ__f.js";import{b as G}from"../chunks/paths.CXGXOoeF.js";import{C as $}from"../chunks/Code.DUo6Pgyj.js";import{C as I}from"../chunks/ColumnsContainer.DbzHa6Fa.js";import{Z as q,Y as L}from"../chunks/pointitout.Jpb47ULF.js";var F=(m,u)=>u(0),K=b('<div slot="right" class="result-panel"><button class="example-btn svelte-1cj560o"> </button> <div class="test-box" id="example">#example</div></div>'),N=(m,u)=>u(1),Q=b('<div slot="right" class="result-panel"><button class="example-btn svelte-1cj560o"> </button> <div class="test-box" id="example2">#example</div></div>'),U=b(`<header data-nav-heading="" id="getting-started" class="svelte-1cj560o"><img class="point-it-out-logo svelte-1cj560o" alt="Point it out logo"> <h1 class="point-it-out-title svelte-1cj560o">Point it out</h1> <p class="subtitle svelte-1cj560o">A tiny, 🌲tree-shakeable and zero-dependencies JavaScript library to point out DOM elements using absolutely positioned
  elements or procedurally generated SVGs.</p> <p class="copy svelte-1cj560o"><a href="https://alexvega.net/">Alexander Vega</a> © 2024 | MIT license | <a href="https://github.com/alexvgjm/point-it-out">GitHub</a></p></header> <section class="doc-section"><h1>Getting started</h1> <section class="doc-section"><h2>Installation</h2> <p>Install pointitout from npm:</p> <!></section> <section class="doc-section"><h2>Basic usage</h2> <p>Rect</p> <!> <p>Arrow</p> <!> <p>See more options for the <a>create function</a>.</p></section></section>`,1);function nt(m,u){J(u,!1);const p=A(),n=A(),R=[()=>{_(p,i(p)[0]=L("rect",{target:"#example",container:"main",strokeColor:"rgb(88, 150, 213)",strokeWidth:8,round:"20%"}))},()=>{_(p,i(p)[1]=L("arrow",{target:"#example2",container:"main",strokeColor:"hotpink",fillColor:"lightpink",strokeWidth:8,distance:20}))}];function x(t){_(n,i(n)[t]=!i(n)[t]),i(n)[t]?R[t]():i(p)[t].destroy()}O(q),T(()=>{},()=>{V(p,[])}),T(()=>{},()=>{V(n,[!1,!1])}),X(),H();var k=U(),v=Y(k),D=s(v);B(D,"src",`${G??""}/pointitout-logo.svg`),c(6),r(v);var C=l(v,2),f=l(s(C),2),E=l(s(f),4);$(E,{showLanguage:!1,showSelectAllButton:!0,language:"Bash",children:(t,g)=>{c();var e=h("npm install pointitout");d(t,e)},$$slots:{default:!0}}),r(f);var y=l(f,2),P=l(s(y),4);I(P,{$$slots:{left:(t,g)=>{$(t,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(e,a)=>{c();var o=h();o.nodeValue=`create('rect', {
    target: '#example',
    strokeColor: "#5896d5",
    strokeWidth: 8,
    round: '20%',
})`,d(e,o)},$$slots:{default:!0}})},right:(t,g)=>{var e=K(),a=s(e);a.__click=[F,x];var o=s(a,!0);r(a),c(2),r(e),W(()=>S(o,i(n)[0]?"▣ Clear rect":"▶ Run code")),d(t,e)}}});var j=l(P,4);I(j,{$$slots:{left:(t,g)=>{$(t,{slot:"left",noTop:!0,language:"TypeScript",showLanguage:!1,children:(e,a)=>{c();var o=h();o.nodeValue=`create('rect', {
  target: '#example2', 
  container: 'main',
  strokeColor: "palevioletred",
  fillColor: "lightpink",
  strokeWidth: 8,
  distance: 20
})`,d(e,o)},$$slots:{default:!0}})},right:(t,g)=>{var e=Q(),a=s(e);a.__click=[N,x];var o=s(a,!0);r(a),c(2),r(e),W(()=>S(o,i(n)[1]?"▣ Clear arrow":"▶ Run code")),d(t,e)}}});var w=l(j,2),M=l(s(w));B(M,"href",`${G??""}/create`),c(),r(w),r(y),r(C),d(m,k),Z()}z(["click"]);export{nt as component};