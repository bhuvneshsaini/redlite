import"../chunks/disclose-version.bJ1TNjgf.js";import{u as x,B as y,r as k,p as c,a as v,s as w}from"../chunks/runtime.0RJBM7q3.js";import{w as M,f as h,g as p,m as l,t as R,a as u,d as m,y as j,s as a}from"../chunks/render.nzFa6Bvq.js";import{p as B}from"../chunks/stores.C76SSwWn.js";import{g as C}from"../chunks/entry.RSw9ZqGM.js";var D=(d,e,o)=>e(o.path),S=m('<div class="mr-4 text-base font-medium text-gray-600 pt-2 pb-2 box-border border border-b-2 border-white" role="presentation"> </div>');function i(d,e){v(e,!0);const o={};x(o);const r=()=>w(B,"$page",o);let s=y(e,"hidden",3,!1);var t=p(d,!0,S),n=u(t);k(()=>{l(t,"hidden",s()&&r().route.id!==e.path),l(t,"cursor-pointer",!s()),l(t,"hover:text-gray-900",!s()&&r().route.id!==e.path),l(t,"hover:text-blue-700",!s()&&r().route.id===e.path),l(t,"border-b-blue-600",r().route.id===e.path),l(t,"text-blue-600",r().route.id===e.path),R(n,e.label)}),t.__click=[D,C,e],h(d,t),c()}M(["click"]);var T=m('<div class="parent font-system svelte-1plg26p"><header class="flex pl-2 flex-rows items-center content-center justify-start text-gray-500 box-border border-b border-b-gray-300 shadow"><!> <!> <!> <!> <!></header> <div class="overflow-auto"><!></div></div>');function G(d,e){v(e,!1);var o=p(d,!0,T),r=u(o),s=u(r),t=a(a(s,!0)),n=a(a(t,!0)),b=a(a(n,!0)),f=a(a(b,!0)),g=a(a(r,!0)),_=u(g);i(s,{label:"Models",path:"/model"}),i(t,{label:"Tasks",path:"/task"}),i(n,{label:"Runs",path:"/run"}),i(b,{label:"Run Details",path:"/run/[name]",hidden:!0}),i(f,{label:"Compare Models",path:"/compare/[digest]/[metric]",hidden:!0}),j(_,e.children,{},null),h(d,o),c()}export{G as component};