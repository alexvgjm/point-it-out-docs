import{i as f,a as v,t as p,g as S,c as q}from"./disclose-version.DjlcKni_.js";import{i as Q}from"./legacy.BQXG6iyP.js";import{p as R,o as U,t as _,a as V,W as a,s as g,c as r,r as l,X as w,ac as x,a7 as Y}from"./index-client.C_AGn1Ij.js";import{u as Z,a as $,s as ee,t as T,b as te}from"./general.svelte.B65VZ__f.js";import{b as ae}from"./this.CEaKAIAF.js";import{p as n}from"./props.BeXgiwNT.js";var oe=p('<div class="code-wrapper__lang svelte-ciqgfa"> </div>'),se=p('<button class="code-wrapper__button svelte-ciqgfa"> </button>'),re=p('<button class="code-wrapper__button svelte-ciqgfa"> </button>'),le=p('<button class="code-wrapper__button svelte-ciqgfa">Select all</button>'),ne=p('<div class="code-wrapper svelte-ciqgfa"><!> <div class="code-wrapper__buttons svelte-ciqgfa"><!> <!> <!></div> <pre class="svelte-ciqgfa"><code><!></code></pre></div>');function fe(W,o){R(o,!1);let b=n(o,"language",8),j=n(o,"showLineWrapButton",8,!1),m=n(o,"showLanguage",8,!0),E=n(o,"showCopyButton",8,!1),F=n(o,"showSelectAllButton",8,!1),M=n(o,"noTop",8,!1);const D=Z().hljs,H={CSS:"#2965f1",HTML:"#e34c26",TypeScript:"#3178c6",JavaScript:"#f1dd35",Bash:"#4eaa25"};let u=x(!1),i=x(),h=x("📃 Copy"),y=-1;function I(){navigator.clipboard.writeText(a(i).textContent),w(h,"Copied to clipboard!"),clearTimeout(y),y=setTimeout(()=>w(h,"📃 Copy"),2e3)}function J(){if(window.getSelection===void 0)return;const e=getSelection();e&&e.selectAllChildren(a(i))}U(()=>D.highlightElement(a(i))),Q();var s=ne(),B=r(s);{var O=e=>{var t=oe(),c=r(t,!0);l(t),_(()=>q(c,b())),v(e,t)};f(B,e=>{m()&&e(O)})}var C=g(B,2),L=r(C);{var X=e=>{var t=se(),c=r(t);l(t),_(()=>q(c,`Text wrap: ${(a(u)?"on":"off")??""}`)),S("click",t,()=>{w(u,!a(u))}),v(e,t)};f(L,e=>{j()&&e(X)})}var k=g(L,2);{var z=e=>{var t=re(),c=r(t,!0);l(t),_(()=>q(c,a(h))),S("click",t,I),v(e,t)};f(k,e=>{E()&&e(z)})}var G=g(k,2);{var K=e=>{var t=le();S("click",t,J),v(e,t)};f(G,e=>{F()&&e(K)})}l(C);var A=g(C,2),d=r(A);const N=Y(()=>`${`language-${b().toLowerCase()}`??""} svelte-ciqgfa`);var P=r(d);$(P,o,"default",{}),l(d),ae(d,e=>w(i,e),()=>a(i)),l(A),l(s),_(()=>{ee(s,"style",`--lang-color: ${(m()?H[b()]:"transparent")??""}`),T(s,"code-wrapper__line-wrap",a(u)),T(s,"code-wrapper--show-lang",m()),T(s,"code-wrapper--no-top",M()),te(d,a(N))}),v(W,s),V()}export{fe as C};