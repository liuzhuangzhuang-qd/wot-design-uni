import{d as e,q as l,v as a,o as s,c as o,w as t,e as n,x as i,y as u,p as d,n as r,i as c}from"./index-B0wV8KWu.js";import{f as p,i as m,n as v,R as h,g as b,w as y,C as f,r as g,b as $}from"./page-wraper.xrwG2hFo.js";import{u as k}from"./useChildren.D_bqRQP9.js";const S=Symbol("wd-radio-group"),_={...p,modelValue:[String,Number,Boolean],shape:m("check"),checkedColor:String,disabled:v(!1),cell:v(!1),size:m(""),inline:v(!1),iconPlacement:m("auto")},C=$(e({name:"wd-radio",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...p,value:h([String,Number,Boolean]),shape:String,checkedColor:String,disabled:{type:[Boolean,null],default:null},cell:{type:[Boolean,null],default:null},size:String,inline:{type:[Boolean,null],default:null},maxWidth:String,iconPlacement:{type:String}},setup(e){const p=e,{parent:m}=b(S),v=l((()=>!!m&&p.value===m.props.modelValue)),h=l((()=>p.shape||f(m,"props.shape"))),$=l((()=>p.checkedColor||f(m,"props.checkedColor"))),k=l((()=>g(p.disabled)?p.disabled:f(m,"props.disabled"))),_=l((()=>g(p.inline)?p.inline:f(m,"props.inline"))),C=l((()=>p.size||f(m,"props.size"))),w=l((()=>g(p.cell)?p.cell:f(m,"props.cell"))),x=l((()=>g(p.iconPlacement)?p.iconPlacement:f(m,"props.iconPlacement")));function V(){const{value:e}=p;!k.value&&m&&g(e)&&m.updateValue(e)}return a((()=>p.shape),(e=>{const l=["check","dot","button"];e&&-1!==l.indexOf(e)||console.error(`shape must be one of ${l.toString()}`)})),(e,l)=>{const a=c;return s(),o(a,{class:r(`wd-radio ${w.value?"is-cell-radio":""} ${w.value&&"button"==h.value?"is-button-radio":""} ${C.value?"is-"+C.value:""} ${_.value?"is-inline":""} ${v.value?"is-checked":""} ${"check"!==h.value?"is-"+h.value:""} ${k.value?"is-disabled":""} icon-placement-${x.value} ${e.customClass}`),style:u(e.customStyle),onClick:V},{default:t((()=>[n(a,{class:"wd-radio__label",style:u(`${e.maxWidth?"max-width:"+e.maxWidth:""};  ${v.value&&"button"===h.value&&!k.value?"color :"+$.value:""}`)},{default:t((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),n(a,{class:"wd-radio__shape",style:u(v.value&&!k.value?"color: "+$.value:"")},{default:t((()=>["check"===h.value?(s(),o(y,{key:0,style:u(v.value&&!k.value?"color: "+$.value:""),name:"check"},null,8,["style"])):d("",!0)])),_:1},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-47b0a25b"]]),w=$(e({name:"wd-radio-group",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:_,emits:["change","update:modelValue"],setup(e,{emit:l}){const n=e,d=l,{linkChildren:p,children:m}=k(S);return p({props:n,updateValue:function(e){d("update:modelValue",e),d("change",{value:e})}}),a((()=>n.shape),(e=>{const l=["check","dot","button"];-1===l.indexOf(e)&&console.error(`shape must be one of ${l.toString()}`)}),{deep:!0,immediate:!0}),(e,l)=>{const a=c;return s(),o(a,{class:r(`wd-radio-group  ${e.customClass} ${e.cell&&"button"===e.shape?"is-button":""}`),style:u(e.customStyle)},{default:t((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-8fe978d3"]]);export{C as _,w as a};
