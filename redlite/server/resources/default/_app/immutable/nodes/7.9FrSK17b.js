import"../chunks/disclose-version.bJ1TNjgf.js";import{u as J,p as K,a as Q,s as k,b as e,g as S,d as U}from"../chunks/runtime.0RJBM7q3.js";import{e as c}from"../chunks/load.I0GEkmNg.js";import{i as V,c as a,b as o,e as m,f as C,o as W,g as j,a as M,d as p}from"../chunks/render.nzFa6Bvq.js";import{g as O}from"../chunks/entry.UEUw4yfS.js";import{T as X,M as Y}from"../chunks/Model.7STMVNEj.js";import{R as Z}from"../chunks/RunCard.GHiur8lq.js";import{l as ee,a as re}from"../chunks/data._a8D7-Tj.js";import{s as P}from"../chunks/colors.2whzp6Sg.js";var te=p("Loading..",!0),ae=p('<div class="my-2"><!></div>'),se=p('<div class="m-2"><!></div>');function be(v,R){Q(R,!1);const u={};J(u);const T=()=>k(ee,"$loading",u),H=()=>k(re,"$aggregations",u);var f=m(v),L=o(f);V(L,T,s=>{var d=W(s,!0,te);a(s,d)},s=>{var d=m(s),q=o(d);c(q,()=>H().tasks,5,(i,r)=>e(i).taskHash,(i,r,ne)=>{var b=j(i,!0,se),z=M(b);X(z,{get dataset(){return e(r).dataset},get split(){return e(r).split},get metric(){return e(r).metric},get data_digest(){return e(r).data_digest},get modelCount(){return Object.keys(e(r).models).length},onclick:()=>O(`/compare/${e(r).data_digest}/${P(e(r).metric)}`),children:(x,oe)=>{var y=m(x),A=o(y);c(A,()=>Object.entries(e(r).models),7,(l,_)=>e(e(l))[0],(l,_,B)=>{let D=()=>e(e(_))[0],n=()=>e(e(_))[1];var $=j(l,!0,ae),E=M($),F=U(()=>n().wins>0);Y(E,{get model(){return D()},get score_summary(){return n().score_summary},get completed(){return n().completed},get winner(){return S(F)},get runCount(){return n().runs.length},children:(w,me)=>{var N=m(w),G=o(N);c(G,()=>n().runs,5,(g,t)=>e(g).run,(g,t,de)=>{var h=m(g),I=o(h);Z(I,{get run(){return e(t).run},get score_summary(){return e(t).score_summary},get completed(){return e(t).completed},get duration(){return e(t).duration},get max_samples(){return e(t).max_samples},get dataset_labels(){return e(t).dataset_labels},onclick:()=>O(`/run/${P(e(t).run)}`)}),a(g,h)},null),a(w,N)}}),C(l,$)},null),a(x,y)}}),C(i,b)},null),a(s,d)}),a(v,f),K()}export{be as component};
