import{h as y,e as $,H as j,g as F,i as D,j as O,k as x,l as ee,E as H,m as b,o as L,p as re,q as ae,u as ne,v as le,w as Z}from"./disclose-version.Bp1Y62Lx.js";import{b as fe,i as se,r as G,c as J,d as ie,I as te,q as ue,e as K,s as Q,m as ve,f as U,g as oe,h as _e,j as de,k as ce,S as he,l as Ee}from"./index-client.DElzHtsw.js";let m=null;function Ie(s,e){return e}function pe(s,e,a,u){for(var v=[],o=e.length,i=0;i<o;i++)oe(e[i].e,v,!0);var E=o>0&&v.length===0&&a!==null;if(E){var p=a.parentNode;re(p),p.append(a),u.clear(),I(s,e[0].prev,e[o-1].next)}_e(v,()=>{for(var h=0;h<o;h++){var _=e[h];E||(u.delete(_.k),I(s,_.prev,_.next)),de(_.e,!E)}})}function ye(s,e,a,u,v,o=null){var i=s,E={flags:e,items:new Map,first:null},p=(e&Z)!==0;if(p){var h=s;i=y?D(h.firstChild):h.appendChild(ne())}y&&$();var _=null;fe(()=>{var n=a(),d=se(n)?n:n==null?[]:Array.from(n),l=d.length,t=E.flags;t&L&&!ce(d)&&!(he in d)&&!(Ee in d)&&(t^=L,t&le&&!(t&H)&&(t^=H));let c=!1;if(y){var T=i.data===j;T!==(l===0)&&(i=F(),D(i),O(!1),c=!0)}if(y){for(var S=null,A,r=0;r<l;r++){if(x.nodeType===8&&x.data===ee){i=x,c=!0,O(!1);break}var f=d[r],N=u(f,r);A=P(x,E,S,null,f,N,r,v,t),E.items.set(N,A),S=A}l>0&&D(F())}y||Ae(d,E,i,v,t,u),o!==null&&(l===0?_?G(_):_=J(()=>o(i)):_!==null&&ie(_,()=>{_=null})),c&&O(!0)}),y&&(i=x)}function Ae(s,e,a,u,v,o){var Y,q,B,V;var i=(v&ae)!==0,E=(v&(H|b))!==0,p=s.length,h=e.items,_=e.first,n=_,d=new Set,l=null,t=new Set,c=[],T=[],S,A,r,f;if(i)for(f=0;f<p;f+=1)S=s[f],A=o(S,f),r=h.get(A),r!==void 0&&((Y=r.a)==null||Y.measure(),t.add(r));for(f=0;f<p;f+=1){if(S=s[f],A=o(S,f),r=h.get(A),r===void 0){var N=n?n.e.nodes.start:a;l=P(N,e,l,l===null?e.first:l.next,S,A,f,u,v),h.set(A,l),c=[],T=[],n=l.next;continue}if(E&&Te(r,S,f,v),r.e.f&te&&(G(r.e),i&&((q=r.a)==null||q.unfix(),t.delete(r))),r!==n){if(d.has(r)){if(c.length<T.length){var R=T[0],g;l=R.prev;var M=c[0],k=c[c.length-1];for(g=0;g<c.length;g+=1)X(c[g],R,a);for(g=0;g<T.length;g+=1)d.delete(T[g]);I(e,M.prev,k.next),I(e,l,M),I(e,k,R),n=R,l=k,f-=1,c=[],T=[]}else d.delete(r),X(r,n,a),I(e,r.prev,r.next),I(e,r,l===null?e.first:l.next),I(e,l,r),l=r;continue}for(c=[],T=[];n!==null&&n.k!==A;)d.add(n),T.push(n),n=n.next;if(n===null)continue;r=n}c.push(r),l=r,n=r.next}const C=Array.from(d);for(;n!==null;)C.push(n),n=n.next;var w=C.length;if(w>0){var W=v&Z&&p===0?a:null;if(i){for(f=0;f<w;f+=1)(B=C[f].a)==null||B.measure();for(f=0;f<w;f+=1)(V=C[f].a)==null||V.fix()}pe(e,C,W,h)}i&&ue(()=>{var z;for(r of t)(z=r.a)==null||z.apply()}),K.first=e.first&&e.first.e,K.last=l&&l.e}function Te(s,e,a,u){u&H&&Q(s.v,e),u&b?Q(s.i,a):s.i=a}function P(s,e,a,u,v,o,i,E,p){var h=m;try{var _=(p&H)!==0,n=(p&L)===0,d=_?n?ve(v):U(v):v,l=p&b?U(i):i,t={i:l,v:d,k:o,a:null,e:null,prev:a,next:u};return m=t,t.e=J(()=>E(s,d,l),y),t.e.prev=a&&a.e,t.e.next=u&&u.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),u!==null&&(u.prev=t,u.e.prev=t.e),t}finally{m=h}}function X(s,e,a){for(var u=s.next?s.next.e.nodes.start:a,v=e?e.e.nodes.start:a,o=s.e.nodes.start;o!==u;){var i=o.nextSibling;v.before(o),o=i}}function I(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{ye as e,Ie as i};