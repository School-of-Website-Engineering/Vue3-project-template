import{_ as a}from"./index-6f8147d6.js";import{h as n,o as s,j as t,x as e,F as o,y as r,z as i,A as u}from"./vendor-06d4f7fa.js";const d={name:"NotFound",setup(){const a=n([!1,!1,!1]);return{letters:["4","0","4"],animate:()=>{a.forEach(((n,s)=>{setTimeout((()=>a[s]=!0),150*s)}))},animated:a}}},l=e("h1",null,"404",-1),m=e("p",null,"抱歉，您所寻找的页面未找到。",-1),c={class:"not-found-animation"};const f=a(d,[["render",function(a,n,d,f,p,v){return s(),t("div",{class:"not-found",onMouseover:n[0]||(n[0]=a=>f.animate())},[l,m,e("div",c,[(s(!0),t(o,null,r(f.letters,((a,n)=>(s(),t("span",{key:n,class:i({animated:f.animated[n]})},u(a),3)))),128))])],32)}]]);export{f as default};
