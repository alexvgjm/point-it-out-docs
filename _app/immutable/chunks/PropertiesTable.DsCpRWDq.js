import{h as M,k as E,e as Q,B as U,C as V,D as F,i as W,F as X,G,f as u,a as i,c as _,t as c,s as a,r as o,d as Z,b as H}from"./disclose-version.Bp1Y62Lx.js";import{b as $,c as ee,j as ae,t as x,T as v}from"./index-client.DElzHtsw.js";import{i as b}from"./if.Cc8Pxh-J.js";import{e as I,i as S}from"./each.DEAlNpfb.js";import{t as L}from"./general.svelte.vTPFSwDH.js";import{p as te}from"./props.C3SyeIBd.js";function N(D,r,O,P){var p=D,m="",s;$(()=>{m!==(m=r())&&(s&&(ae(s),s=null),m!==""&&(s=ee(()=>{if(M){E.data;for(var e=Q(),d=e;e!==null&&(e.nodeType!==8||e.data!=="");)d=e,e=e.nextSibling;if(e===null)throw U(),V;F(E,d),p=W(e);return}var g=m+"",f=X(g);F(f.firstChild,f.lastChild),p.before(f)})))})}var re=c('<h1 class="title svelte-lt2icm"><!></h1>'),se=c('<div class="props-table__header props-table__header--name svelte-lt2icm">Name</div> <div class="props-table__header props-table__header--types svelte-lt2icm">Type/s</div> <div class="props-table__header props-table__header--desc svelte-lt2icm">Description</div>',1),ie=c("Required",1),le=c('<span class="prop-type svelte-lt2icm"><!></span>'),oe=c('<div class="prop-name svelte-lt2icm"> <span class="default svelte-lt2icm"><!></span></div> <div class="prop-types svelte-lt2icm"></div> <div class="prop-desc svelte-lt2icm"><span><!></span></div> <!>',1),ve=c("<!> <!> <!>",1),de=c('<section class="props-table svelte-lt2icm"><!></section>');function ne(D,r){const O=s=>{var e=ve(),d=u(e);b(d,()=>r.title,h=>{var t=re(),y=_(t);N(y,()=>r.title),o(t),i(h,t)});var g=a(a(d,!0));b(g,P,h=>{var t=se(),y=u(t),R=a(a(y,!0));a(a(R,!0)),i(h,t)});var f=a(a(g,!0));I(f,65,()=>r.pioOptionsList,S,(h,t,y)=>{var R=oe(),T=u(R),j=_(T),q=a(j),Y=_(q);b(Y,()=>v(t).default,n=>{var l=Z();x(()=>H(l,"Default: "+v(t).default)),i(n,l)},n=>{var l=ie();i(n,l)}),o(q),o(T);var k=a(a(T,!0));I(k,73,()=>v(t).types,S,(n,l,B)=>{var C=le(),K=_(C);N(K,()=>v(l)),o(C),i(n,C)}),o(k);var w=a(a(k,!0)),A=_(w),z=_(A);N(z,()=>v(t).description),o(A),o(w);var J=a(a(w,!0));b(J,()=>v(t).props,n=>{var l=G(),B=u(l);ne(B,{get pioOptionsList(){return v(t).props},subtable:!0,headers:!1}),i(n,l)}),x(()=>{L(T,"subtable-name",r.subtable),H(j,`${v(t).property??""} `)}),i(h,R)}),i(s,e)};let P=te(r,"headers",3,!0);var p=G(),m=u(p);b(m,()=>r.subtable,s=>{O(s)},s=>{var e=de(),d=_(e);O(d),o(e),x(()=>{L(e,"subtable",r.subtable),L(e,"even",r.even)}),i(s,e)}),i(D,p)}export{ne as P};
