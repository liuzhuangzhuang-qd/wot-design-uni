import{d as s,o as t,c as a,w as e,e as o,n as l,f as n,t as u,p as d,y as r,i as c}from"./index-B0wV8KWu.js";import{f as i,m,i as w,n as p,w as _,b}from"./page-wraper.xrwG2hFo.js";const f=b(s({name:"wd-sort-button",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...i,modelValue:m(0),title:w(""),allowReset:p(!1),descFirst:p(!1),line:p(!0)},emits:["change","update:modelValue"],setup(s,{emit:i}){const m=s,w=i;function p(){let{modelValue:s,allowReset:t,descFirst:a}=m;a?0===s?s=-1:-1===s?s=1:1===s&&(s=t?0:-1):0===s?s=1:1===s?s=-1:-1===s&&(s=t?0:1),w("update:modelValue",s),w("change",{value:s})}return(s,i)=>{const m=c;return t(),a(m,{class:l(`wd-sort-button ${s.line?"wd-sort-button--line":""} ${s.customClass}`),style:r(s.customStyle),onClick:p},{default:e((()=>[o(m,{class:"wd-sort-button__wrapper"},{default:e((()=>[o(m,{class:l("wd-sort-button__left "+(0!==s.modelValue?"is-active":""))},{default:e((()=>[n(u(s.title),1)])),_:1},8,["class"]),o(m,{class:l("wd-sort-button__right "+(0!==s.modelValue?"is-active":""))},{default:e((()=>[1!==s.modelValue?(t(),a(_,{key:0,name:"arrow-up","custom-class":"wd-sort-button__icon-up"})):d("",!0),-1!==s.modelValue?(t(),a(_,{key:1,name:"arrow-down","custom-class":"wd-sort-button__icon-down"})):d("",!0)])),_:1},8,["class"])])),_:1})])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-e9775921"]]);export{f as w};
