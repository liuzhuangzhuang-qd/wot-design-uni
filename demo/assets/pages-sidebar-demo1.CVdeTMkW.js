import{_ as l,a as e}from"./wd-sidebar.g8VBmxq-.js";import{d as a,r as t,m as s,a as i,b as o,o as u,c as r,w as d,e as n,g as c,h as m,F as p,i as b,aa as f}from"./index-B0wV8KWu.js";import{J as v,w,_,a as g,b as y}from"./page-wraper.xrwG2hFo.js";import{_ as h}from"./wd-cell-group.B-g_Ck6K.js";import"./wd-badge.ie0naOHg.js";import"./useChildren.D_bqRQP9.js";const j=y(a({__name:"demo1",setup(a){const y=t(1),j=t(0),x=t([]),k=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),V=t([{label:"分类一",title:"标题一",items:k},{label:"分类二",title:"标题二",items:k},{label:"分类三",title:"标题三",items:k.slice(0,18)},{label:"分类四",title:"标题四",items:k.slice(0,21)},{label:"分类五",title:"标题五",items:k},{label:"分类六",title:"标题六",items:k.slice(0,18)},{label:"分类七",title:"标题七",items:k}]);function C({value:l}){y.value=l,j.value=x.value[l]}function I(l){const{scrollTop:e}=l.detail;if(e<50)return void(y.value=0);const a=x.value.findIndex((l=>l>e&&l-e<=50));a>-1&&(y.value=a)}return s((()=>{v(".category",!0).then((l=>{x.value=l.map((l=>l.top||0)),j.value=l[y.value].top||0}))})),(a,t)=>{const s=i(o("wd-sidebar-item"),l),v=i(o("wd-sidebar"),e),x=i(o("wd-icon"),w),k=i(o("wd-cell"),_),z=i(o("wd-cell-group"),h),A=b,F=f,J=i(o("page-wraper"),g);return u(),r(J,null,{default:d((()=>[n(A,{class:"wraper"},{default:d((()=>[n(v,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=l=>y.value=l),onChange:C},{default:d((()=>[(u(!0),c(p,null,m(V.value,((l,e)=>(u(),r(s,{key:e,value:e,label:l.label},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),n(F,{class:"content","scroll-y":"","scroll-with-animation":"","scroll-top":j.value,throttle:!1,onScroll:I},{default:d((()=>[(u(!0),c(p,null,m(V.value,((l,e)=>(u(),r(A,{key:e,class:"category"},{default:d((()=>[n(z,{title:l.title,border:""},{default:d((()=>[(u(!0),c(p,null,m(l.items,((l,e)=>(u(),r(k,{key:e,title:l.title,label:l.label},{default:d((()=>[n(x,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-9ffe2939"]]);export{j as default};
