const ce=()=>{};function fn(e){return typeof(e==null?void 0:e.then)=="function"}function H(e){for(var n=0;n<e.length;n++)e[n]()}function Me(e,n,t){if(e==null)return n(void 0),t&&t(void 0),ce;const u=e.subscribe(n,t);return u.unsubscribe?()=>u.unsubscribe():u}var ae=Array.isArray,ln=Array.from,_n=Object.keys,an=Object.assign,dn=Object.isFrozen,pn=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,hn=Object.getOwnPropertyDescriptors,yn=Object.prototype,vn=Array.prototype,En=Object.getPrototypeOf;function mn(e){return typeof e=="function"}const bn=1,An=2,kn=4,On=8,Tn=16,In=64,Fe=1,je=4,He=8,wn=["beforeinput","click","dblclick","contextmenu","focusin","focusout","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Sn=["touchstart","touchmove","touchend"],Cn={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Ue=0,de=1,pe=2,Ye=3,Be=4,Ke=7;function Rn(e){return{d:null,e:null,i:e,p:null,r:null,t:Ue}}function Dn(){return{a:null,ae:null,c:null,ce:null,d:null,e:null,p:E,r:null,t:de,v:!1}}function Nn(){return{d:null,e:null,p:E,r:null,t:Ke}}function Ln(){return{d:null,e:null,p:E,n:!0,r:null,t:Be}}function xn(e,n){return{a:n,d:null,f:e,v:[],e:null,p:E,r:null,s:[],t:pe}}function Pn(e,n,t){return{a:null,d:null,e:null,i:n,k:t,v:e,p:E,r:null,s:null,t:Ye}}const he=1,U=2,X=4,C=8,x=16,R=64,P=128,A=256,b=512,Y=1024,ne=2048,J=4096,Q=X|C|x,ye=0,Ve=1,z=Symbol(),ve=Symbol();let g=ye,Z=!1,W=!1,Ee=!1,S=!1,i=[],D=[],te=[],_e=[],B=0,k=null,o=null,y=null,d=0,I=null,w=!1,ue=!1,F=!1,E=null,l=null,ee=!1;function G(e){const n=e||l;return n!==null&&n.r}function me(e,n){return e===n}function ge(e,n){return{c:null,e:me,f:e,v:n,x:null}}function be(e,n,t){return{b:t,c:null,d:null,e:null,f:e,l:0,i:null,r:null,v:n,x:null,y:null}}function Ae(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function oe(e){const n=e.f;if(n&b||e.v===z)return!0;if(n&Y){const t=e.d;if(t!==null){const u=t.length;let r;for(r=0;r<u;r++){const c=t[r];if(c.f&Y&&!oe(c)){O(c,A);continue}if(c.f&b)if(c.f&U){if(Ce(c,!0),e.f&b)return!0}else return!0}}}return!1}function ke(e){const n=e.i,t=e.f,u=y,r=d,c=I,h=k,f=E,s=l,m=F,v=(t&x)!==0,V=w;y=null,d=0,I=null,k=e,E=e.b,l=e.x,F=!S&&(t&P)!==0,w=!1,v&&(l==null?void 0:l.u)!=null&&l.u.e();try{let p;v?p=n(e.b,e):p=n();let _=e.d;if(y!==null){let a;if(_!==null){const q=_.length,T=d===0?y:_.slice(0,d).concat(y),ie=T.length>16&&q-d>1?new Set(T):null;for(a=d;a<q;a++){const $=_[a];(ie!==null?!ie.has($):!T.includes($))&&Oe(e,$)}}if(_!==null&&d>0)for(_.length=d+y.length,a=0;a<y.length;a++)_[d+a]=y[a];else e.d=_=y;if(!F)for(a=d;a<_.length;a++){const q=_[a],T=q.c;T===null?q.c=[e]:T[T.length-1]!==e&&T.push(e)}}else _!==null&&d<_.length&&(se(e,d),_.length=d);return p}finally{y=u,d=r,I=c,k=h,E=f,l=s,F=m,w=V}}function Oe(e,n){const t=n.c;let u=0;if(t!==null){u=t.length-1;const r=t.indexOf(e);r!==-1&&(u===0?n.c=null:(t[r]=t[u],t.pop()))}u===0&&n.f&P&&(O(n,b),se(n,0))}function se(e,n){const t=e.d;if(t!==null){const u=n===0?null:t.slice(0,n);let r;for(r=n;r<t.length;r++){const c=t[r];(u===null||!u.includes(c))&&Oe(e,c)}}}function fe(e){const n=e.r;if(e.r=null,n!==null){let t;for(t=0;t<n.length;t++)Ne(n[t])}}function ze(e,n){if(e!==null)throw n}function Te(e){if(e.f&J)return;const n=e.v,t=o;o=e;try{fe(e),n!==null&&n();const r=ke(e);typeof r=="function"&&(e.v=r)}catch(r){const c=e.b;if(c!==null)ze(c,r);else throw r}finally{o=t}const u=e.x;G(u)&&e.f&C&&i.length>0&&Xe(u)}function Ie(){if(B>100)throw new Error("ERR_SVELTE_TOO_MANY_UPDATES");B++}function L(e){const n=e.length;if(n>0){Ie();const t=S;S=!0;try{let u;for(u=0;u<n;u++){const r=e[u],c=r.f;c&(J|ne)||(oe(r)?(O(r,A),Te(r)):c&Y&&O(r,A))}}finally{S=t}e.length=0}}function Ze(){if(Z=!1,B>101)return;const e=i,n=D;i=[],D=[],L(e),L(n),Z||(B=0)}function M(e,n){const t=e.f;if(n){const u=S;try{S=!0,Te(e),O(e,A)}finally{S=u}}else if(g===ye&&(Z||(Z=!0,queueMicrotask(Ze))),t&X)D.push(e),t&R||Re(e,!0);else{const u=i.length;let r=u===0;if(!r){const c=e.l,h=e.b,f=(t&C)!==0;let s,m,v=u;for(;;){if(s=i[--v],s.l<=c){v+1===u?r=!0:(m=(s.f&C)!==0,(s.b!==h||m&&!f)&&v++,i.splice(v,0,e));break}if(v===0){i.unshift(e);break}}}r&&i.push(e)}}function we(){W=!1;const e=te.slice();te=[],H(e)}function We(){Ee=!1;const e=_e.slice();_e=[],H(e)}function Mn(e){W||(W=!0,setTimeout(we,0)),te.push(e)}function Ge(){const e=[];for(let n=0;n<i.length;n++){const t=i[n];t.f&x&&t.x===l&&(e.push(t),i.splice(n,1),n--)}L(e)}function Xe(e){const n=[];for(let t=0;t<i.length;t++){const u=i[t];u.f&C&&u.x===e&&(n.push(u),i.splice(t,1),t--)}L(n)}function Se(e){const n=g,t=i,u=D;try{Ie();const r=[],c=[];g=Ve,i=r,D=c,L(t),L(u),e!==void 0&&e(),(i.length>0||c.length>0)&&Se(),Ee&&We(),W&&we(),B=0}finally{g=n,i=t,D=u}}async function qn(){await Promise.resolve(),Se()}function Ce(e,n){const t=ee;ee=!0,fe(e);const u=ke(e);ee=t;const r=F||e.f&P?b:A;O(e,r);const c=e.e;c(u,e.v)||(e.v=u,le(e,b,n))}function Fn(e,n,t){let u=t[n];const r=u===void 0;r&&(u={store:null,last_value:null,value:Le(z),unsubscribe:ce},t[n]=u),(r||u.store!==e)&&(u.unsubscribe(),u.store=e??null,u.unsubscribe=Je(e,u.value));const c=N(u.value);return c===z?u.last_value:c}function Je(e,n){return e==null?(re(n,void 0),ce):Me(e,u=>{ue=!0,re(n,u),ue=!1})}function jn(e){on(()=>{let n;for(n in e)e[n].unsubscribe()})}function N(e){const n=e.f;if(n&J)return e.v;if(k!==null&&!(k.f&R)&&!w){const t=(k.f&P)!==0,u=k.d;y===null&&u!==null&&u[d]===e&&!(t&&o!==null)?d++:(u===null||d===0||u[d-1]!==e)&&(y===null?y=[e]:y.push(e)),I!==null&&o!==null&&o.f&A&&I.includes(e)&&(O(o,b),M(o,!1))}return n&U&&oe(e)&&Ce(e,!1),e.v}function re(e,n){return De(e,n),n}function Re(e,n,t){const u=e.r;if(u!==null){let r;for(r=0;r<u.length;r++){const c=u[r];c.f&Q&&j(c,n,t)}}}function j(e,n,t=new Set){const u=e.f;if((u&ne)!==0!==n){e.f^=ne,!n&&u&Q&&!(u&A)&&M(e,!1);const c=e.b;if(c!==null&&!t.has(c)){t.add(c);const h=c.t;if(h===de){const f=c.e;f!==null&&c!==E&&j(f,n);const s=c.ce;s!==null&&c.v&&j(s,n,t);const m=c.ae;m!==null&&!c.v&&j(m,n,t)}else if(h===pe){const f=c.v;for(let{e:s}of f)s!==null&&j(s,n,t)}}}Re(e,n,t)}function le(e,n,t){const u=G(e.x),r=e.c;if(r!==null){const c=r.length;let h;for(h=0;h<c;h++){const f=r[h],s=f.f,m=(s&P)!==0,v=(s&b)!==0;v&&!m||(!t||!u)&&f===o||(O(f,n),(s&A||v&&m)&&(f.f&Q?M(f,!1):le(f,Y,t)))}}}function De(e,n){if(!w&&!ue&&k!==null&&G(e.x)&&k.f&U)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");if(e.f&he&&!e.e(n,e.v)){const t=e.x;if(e.v=n,G(t)&&o!==null&&o.c===null&&o.f&A&&(y!==null&&y.includes(e)?(O(o,b),M(o,!1)):I===null?I=[e]:I.push(e)),le(e,b,!0),o===null&&i.length===0){const u=t==null?void 0:t.u;if(u!=null){H(u.b);const r=tn(()=>{Ne(r),H(u.a)})}}}}function Ne(e){const n=e.v,t=e.y,u=e.f;fe(e),se(e,0),e.i=e.r=e.y=e.x=e.b=e.d=e.c=null,O(e,J),t!==null&&(ae(t)?H(t):t()),n!==null&&u&Q&&n()}function Qe(e){const t=o===null?U|P:U,u=be(t|A,z,E);return u.i=e,u.x=l,u.e=me,k!==null&&Ae(k,u),u}function $e(e){const n=ge(he|A,e);return n.x=l,n}function Le(e){const n=$e(e);return n.e=Pe,n}function en(e){const n=w;try{return w=!0,e()}finally{w=n}}function K(e,n,t,u,r){const c=be(e|b,null,u);return c.i=n,c.x=l,o!==null&&(c.l=o.l+1,e&R||Ae(o,c)),r&&M(c,t),c}function Hn(){return o?(o.f&R)===0:!1}function nn(e){if(o===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=o.f&x&&l!==null&&!l.m,t=K(X,e,!1,E,!n);if(n){const u=l;(u.e??(u.e=[])).push(t)}return t}function tn(e){return K(X|R,e,!1,E,!0)}function Un(e,n){return K(C|R,e,n,E,!0)}function Yn(e){if(o===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=o!==null&&(o.f&x)!==0;return K(C,()=>{const t=e();return Ge(),t},n,E,!0)}function Bn(e,n=E,t=!1,u=!0){let r=x;return t&&(r|=R),K(r,e,u,n,!0)}function Kn(e,n){let t=e.y;t===null?e.y=n:ae(t)?t.push(n):e.y=[t,n]}const un=~(b|Y|A);function O(e,n){e.f=e.f&un|n}function rn(e){return typeof e=="object"&&e!==null&&typeof e.f=="number"}function cn(e){return typeof e=="object"&&e!==null&&e.t===ve}function Vn(e,n,t,u){var V;var r=(t&Fe)!==0,c=(V=qe(e,n))==null?void 0:V.set,h=e[n];h===void 0&&u!==void 0&&(t&He&&(u=u()),h=u,c&&c(h));var f=()=>{var p=e[n];return p!==void 0&&(u=void 0),p===void 0?u:p};if(!(t&je))return f;if(c)return function(p){return arguments.length===1?(c(p),p):f()};var s=!1,m=Le(h),v=Qe(()=>{var p=f(),_=N(m);return s?(s=!1,_):m.v=p});return r||(v.e=Pe),function(p,_=!1){var a=N(v);return arguments.length>0?((_||(r?p!==a:xe(p,a)))&&(s=!0,re(m,_?a:p),N(v)),p):a}}function xe(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Pe(e,n){return!xe(e,n)}function gn(e,n=1){const t=N(e);return De(e,t+n),t}function on(e){nn(()=>()=>en(e))}function zn(e,n=!1){l={a:null,c:null,e:null,m:!1,p:l,s:e,r:n,u:null}}function Zn(e){const n=l;if(n!==null){e!==void 0&&(n.a=e);const t=n.e;if(t!==null){n.e=null;for(let u=0;u<t.length;u++)M(t[u],!1)}l=n.p,n.m=!0}}function Wn(e,n){return{o:e,p:n,t:ve}}function Gn(e){return rn(e)?N(e):cn(e)?e.o[e.p]:e}export{Ln as $,Le as A,Vn as B,dn as C,yn as D,kn as E,vn as F,pn as G,gn as H,ee as I,qe as J,Hn as K,En as L,Mn as M,j as N,Un as O,tn as P,H as Q,Dn as R,fn as S,Se as T,z as U,_n as V,Rn as W,l as X,ln as Y,E as Z,Nn as _,zn as a,an as a0,Cn as a1,Sn as a2,en as a3,rn as a4,hn as a5,wn as a6,mn as a7,Yn as a8,ce as a9,Me as aa,Gn as b,nn as c,Qe as d,re as e,$e as f,N as g,Kn as h,ae as i,Ne as j,bn as k,Wn as l,De as m,cn as n,On as o,Zn as p,xn as q,Bn as r,Fn as s,qn as t,jn as u,Te as v,Tn as w,An as x,Pn as y,In as z};