import{r as G,K as H,i as g,e as E,f as T,a as b,k as I,d as C,c as _,w as K,s as a,g as c,b as f}from"./disclose-version.aiVGvucR.js";import{a as W,p as F,g as v,f as P,e as S,d as x}from"./runtime.g9XoCGco.js";import{B as i}from"./Bubble.8QeVWBuV.js";import{f as q,a as z}from"./util.xL8_OAi2.js";var J=C('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>'),L=C('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>'),N=C("<button><!></button>");function A(m,e){W(e,!0);const n=G(e,["expanded","onToggleExpansion"]),k=n.class;delete n.class;var u=T(m,!0,N),w=b(u);H(u,()=>[{onclick:e.onToggleExpansion},{title:"toggle metrics"},{class:`flex-none w-8 ${I(k)}`},n],!0,""),g(w,()=>e.expanded,d=>{var o=T(d,!0,J);E(d,o)},d=>{var o=T(d,!0,L);E(d,o)}),E(m,u),F()}var O=C('<div><div class="flex"><!> <!> <!> <!> <!> <!></div> <div class="ml-12"><!></div></div>');function Z(m,e){W(e,!0);let n=P(!1);function k(){S(n,!v(n))}var u=T(m,!0,O),w=b(u),d=b(w),o=a(a(d)),y=a(a(o)),B=a(a(y)),D=x(()=>e.data_digest.slice(0,6)),h=a(a(B)),j=a(a(h)),M=a(a(w)),l=b(M);A(d,{get expanded(){return v(n)},onToggleExpansion:k}),i(o,{label:"dataset",get value(){return e.dataset},get onclick(){return e.onclick}}),i(y,{label:"metric",get value(){return e.metric}}),i(B,{label:"data_digest",get value(){return v(D)},get title(){return e.data_digest}}),g(h,()=>e.score_summary,t=>{var r=c(t),s=f(r),R=x(()=>q(e.score_summary));i(s,{label:"score_summary",get value(){return v(R)}}),_(t,r)},null),g(j,()=>e.completed,t=>{var r=c(t),s=f(r),R=x(()=>z(e.completed));i(s,{label:"completed",get value(){return v(R)}}),_(t,r)},null),g(l,()=>v(n),t=>{var r=c(t),s=f(r);K(s,e.children,{},null),_(t,r)},null),E(m,u),F()}var Q=C('<div><div class="flex"><!> <!> <!> <!> <!> <!></div> <div class="ml-12"><!></div></div>');function p(m,e){W(e,!0);let n=P(!1);function k(){S(n,!v(n))}var u=T(m,!0,Q),w=b(u),d=b(w),o=a(a(d)),y=a(a(o)),B=a(a(y)),D=a(a(B)),h=a(a(D)),j=a(a(w)),M=b(j);A(d,{get expanded(){return v(n)},onToggleExpansion:k}),i(o,{label:"model",get value(){return e.model},get onclick(){return e.onclick}}),g(y,()=>e.meanWinRate!==void 0,l=>{var t=c(l),r=f(t),s=x(()=>e.meanWinRate.toFixed(3));i(r,{label:"win rate",get value(){return v(s)}}),_(l,t)},null),g(B,()=>e.score_summary,l=>{var t=c(l),r=f(t),s=x(()=>q(e.score_summary));i(r,{label:"score_summary",get value(){return v(s)}}),_(l,t)},null),g(D,()=>e.completed,l=>{var t=c(l),r=f(t),s=x(()=>z(e.completed));i(r,{label:"completed",get value(){return v(s)}}),_(l,t)},null),g(h,()=>e.wins!==void 0,l=>{var t=c(l),r=f(t);i(r,{label:"wins",get value(){return e.wins}}),_(l,t)},null),g(M,()=>v(n),l=>{var t=c(l),r=f(t);K(r,e.children,{},null),_(l,t)},null),E(m,u),F()}export{Z as D,p as M};