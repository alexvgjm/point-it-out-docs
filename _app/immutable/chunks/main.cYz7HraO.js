var v=Object.defineProperty;var w=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>w(s,typeof e!="symbol"?e+"":e,t);const u={strokeColor:"orange",strokeWidth:4,padding:0,className:void 0};function E(s){const e=document.createElementNS("http://www.w3.org/2000/svg","svg"),t={...u,...s};return e.style.zIndex="9999",e.style.position="absolute",e.style.stroke=t.strokeColor,e.style.fill="none",e.style.pointerEvents="none",t.className&&e.classList.add(t.className),e.style.strokeWidth=t.strokeWidth+"px",e}function k(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function l(s){return typeof s=="string"?document.querySelector(s):s}class y{constructor(e){r(this,"strokeWidth");r(this,"strokeColor");r(this,"padding");r(this,"target");r(this,"svg");r(this,"container");const t={...u,...e},n=l(t.container||document.body);if(!n)throw new Error(`PointItOut: container is ${n}. Check container option.`);const i=l(e.target);if(!i)throw new Error(`PointItOut: Target is ${i}. Check target option.`);this.container=n,this.strokeWidth=t.strokeWidth,this.strokeColor=t.strokeColor,this.padding=t.padding,this.target=i,this.svg=E(e)}onResize(){this.update()}}class b extends y{constructor(t){super(t);r(this,"rectElm");r(this,"round",0);this.rectElm=k("rect"),this.svg.appendChild(this.rectElm),this.container.appendChild(this.svg),this.round=t.round||0,this.update()}update(){const t=this.target.getBoundingClientRect(),n=this.container.getBoundingClientRect(),i=this.strokeWidth,h=t.width+i*2+this.padding*2,a=t.height+i*2+this.padding*2,d=Math.round(i/2),g=t.top-n.top,p=t.left-n.left,f=g+this.container.scrollTop,m=p+this.container.scrollLeft;this.svg.style.top=f-i-this.padding+"px",this.svg.style.left=m-i-this.padding+"px",this.svg.setAttribute("width",h.toString()),this.svg.setAttribute("height",a.toString()),this.rectElm.setAttribute("x",`${d}`),this.rectElm.setAttribute("y",`${d}`),this.rectElm.setAttribute("width",`${h-i}`),this.rectElm.setAttribute("height",`${a-i}`),typeof this.round=="object"?(this.rectElm.setAttribute("rx",`${this.round.rx}`),this.rectElm.setAttribute("ry",`${this.round.ry}`)):this.rectElm.setAttribute("rx",`${this.round}`)}}const o=[],c=()=>o.forEach(s=>s.onResize());function C(){window.removeEventListener("resize",c),window.addEventListener("resize",c)}function R(s,e){C();let t;return t=new b(e),o.push(t),t}function S(){window.removeEventListener("resize",c),o.forEach(s=>s.svg.remove()),o.length=0}function A(){o.forEach(s=>s.update())}export{S as a,R as c,A as u};
