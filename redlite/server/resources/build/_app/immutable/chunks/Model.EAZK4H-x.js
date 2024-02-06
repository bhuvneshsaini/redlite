import"./disclose-version.bJ1TNjgf.js";import{a as q,p as z,B as A,g,f as G,e as H,d as y}from"./runtime.0RJBM7q3.js";import{r as U,K as V,i as d,f as M,g as R,a as c,n as X,d as W,j as Y,c as v,y as J,s as a,e as i,b as o}from"./render.nzFa6Bvq.js";import{L as u}from"./LabeledItem.7kmRm6Fl.js";import{f as N,a as O}from"./util.1yHLqVpv.js";var Z=W('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>'),h=W('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>'),p=W("<button><!></button>");function Q(b,e){q(e,!0);const x=U(e,["expanded","onToggleExpansion"]),_=x.class;delete x.class;var k=R(b,!0,p),w=c(k);V(k,()=>[{onclick:e.onToggleExpansion},{title:"toggle metrics"},{class:`flex-none w-6 ml-2 ${X(_)}`},x],!0,""),d(w,()=>e.expanded,m=>{var f=R(m,!0,Z);M(m,f)},m=>{var f=R(m,!0,h);M(m,f)}),M(b,k),z()}var $=W('<div><div class="flex w-full border border-gray-300 rounded-lg"><!> <div class="grid grid-cols-8 flex-grow"><!> <!> <!> <!> <!> <!> <!> <!> <!></div></div> <div class="ml-10"><!></div></div>');function ue(b,e){q(e,!0);const x=A(e,"expandable",3,!0);let _=G(!1);function k(){H(_,!g(_))}var w=R(b,!0,$);Y(w,"");var m=c(w),f=c(m),K=a(a(f,!0)),C=c(K),T=a(a(C,!0)),E=a(a(T,!0)),j=a(a(E,!0)),D=y(()=>e.data_digest.slice(0,6)),B=a(a(j,!0)),L=a(a(B,!0)),F=a(a(L,!0)),I=a(a(F,!0)),P=a(a(I,!0)),n=a(a(m,!0)),l=c(n);d(f,x,r=>{var t=i(r),s=o(t);Q(s,{get expanded(){return g(_)},onToggleExpansion:k}),v(r,t)},null),u(C,{label:"dataset",get value(){return e.dataset},get onclick(){return e.onclick}}),u(T,{label:"split",get value(){return e.split}}),u(E,{label:"metric",get value(){return e.metric}}),u(j,{label:"data_digest",get value(){return g(D)},get title(){return e.data_digest}}),d(B,()=>e.runCount,r=>{var t=i(r),s=o(t);u(s,{label:"#runs",get value(){return e.runCount}}),v(r,t)},null),d(L,()=>e.winner!==void 0,r=>{var t=i(r),s=o(t);u(s,{label:"winner",get value(){return e.winner}}),v(r,t)},null),d(F,()=>e.modelCount,r=>{var t=i(r),s=o(t);u(s,{label:"#models",get value(){return e.modelCount}}),v(r,t)},null),d(I,()=>e.score_summary,r=>{var t=i(r),s=o(t),S=y(()=>N(e.score_summary));u(s,{label:"score_summary",get value(){return g(S)}}),v(r,t)},null),d(P,()=>e.completed,r=>{var t=i(r),s=o(t),S=y(()=>O(e.completed));u(s,{label:"completed",get value(){return g(S)}}),v(r,t)},null),d(l,()=>g(_),r=>{var t=i(r),s=o(t);J(s,e.children,{},null),v(r,t)},null),M(b,w),z()}var ee=W('<div><div class="flex border border-gray-300 rounded-lg "><!> <div class="grid grid-cols-5 flex-grow"><!> <!> <!> <!> <!> <!> <!> <!></div></div> <div class="ml-10"><!></div></div>');function de(b,e){q(e,!0);const x=A(e,"expandable",3,!0);let _=G(!1);function k(){H(_,!g(_))}var w=R(b,!0,ee),m=c(w),f=c(m),K=a(a(f,!0)),C=c(K),T=a(a(C,!0)),E=a(a(T,!0)),j=a(a(E,!0)),D=a(a(j,!0)),B=a(a(D,!0)),L=a(a(B,!0)),F=a(a(L,!0)),I=a(a(m,!0)),P=c(I);d(f,x,n=>{var l=i(n),r=o(l);Q(r,{get expanded(){return g(_)},onToggleExpansion:k}),v(n,l)},null),u(C,{label:"model",get value(){return e.model},get onclick(){return e.onclick}}),d(T,()=>e.meanWinRate!==void 0,n=>{var l=i(n),r=o(l),t=y(()=>e.meanWinRate.toFixed(3));u(r,{label:"win rate",get value(){return g(t)}}),v(n,l)},null),d(E,()=>e.score_summary,n=>{var l=i(n),r=o(l),t=y(()=>N(e.score_summary));u(r,{label:"score_summary",get value(){return g(t)}}),v(n,l)},null),d(j,()=>e.completed,n=>{var l=i(n),r=o(l),t=y(()=>O(e.completed));u(r,{label:"completed",get value(){return g(t)}}),v(n,l)},null),d(D,()=>e.taskCount,n=>{var l=i(n),r=o(l);u(r,{label:"#tasks",get value(){return e.taskCount}}),v(n,l)},null),d(B,()=>e.runCount,n=>{var l=i(n),r=o(l);u(r,{label:"#runs",get value(){return e.runCount}}),v(n,l)},null),u(L,{label:"run",get value(){return e.run}}),d(F,()=>e.winner!==void 0,n=>{var l=i(n),r=o(l);u(r,{label:"winner",get value(){return e.winner}}),v(n,l)},null),d(P,()=>g(_),n=>{var l=i(n),r=o(l);J(r,e.children,{},null),v(n,l)},null),M(b,w),z()}export{de as M,ue as T};
