import{_ as e}from"./wd-input.DJDVQ1n_.js";import{d as a,X as l,r as s,a as o,b as r,o as t,c as u,w as p,e as d,g as m,h as n,F as i,f,i as c}from"./index-B0wV8KWu.js";import{_ as b}from"./wd-button.BTOOSaL4.js";import{c as _,_ as w,a as h,b as v}from"./page-wraper.xrwG2hFo.js";import{_ as y}from"./wd-cell-group.B-g_Ck6K.js";import{_ as k}from"./wd-form.C-qwj8Cz.js";import"./useTranslate.232Synd_.js";import"./useChildren.D_bqRQP9.js";const g=v(a({__name:"demo1",setup(a){const v=l({name:"",phoneNumbers:[{key:Date.now(),value:""}]}),{success:g}=_(),j=s(),V=()=>{v.phoneNumbers.splice(v.phoneNumbers.length-1,1)},N=()=>{v.phoneNumbers.push({key:Date.now(),value:""})},x=()=>{j.value.reset()},C=()=>{j.value.validate().then((({valid:e,errors:a})=>{e&&g("校验通过")}))};return(a,l)=>{const s=o(r("wd-input"),e),_=o(r("wd-button"),b),g=c,z=o(r("wd-cell"),w),U=o(r("wd-cell-group"),y),q=o(r("wd-form"),k),D=o(r("page-wraper"),h);return t(),u(D,null,{default:p((()=>[d(q,{ref_key:"form",ref:j,model:v},{default:p((()=>[d(U,{border:""},{default:p((()=>[d(s,{label:"歪比巴卜名","label-width":"100px",prop:"name",clearable:"",modelValue:v.name,"onUpdate:modelValue":l[0]||(l[0]=e=>v.name=e),placeholder:"请输入歪比巴卜",rules:[{required:!0,message:"请填写歪比巴卜"}]},null,8,["modelValue"]),(t(!0),m(i,null,n(v.phoneNumbers,((e,a)=>(t(),u(s,{key:e.key,label:"玛卡巴卡单号"+a,prop:"phoneNumbers."+a+".value","label-width":"100px",clearable:"",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,placeholder:"玛卡巴卡单号",rules:[{required:!0,message:"请填写玛卡巴卡单号"+a}]},null,8,["label","prop","modelValue","onUpdate:modelValue","rules"])))),128)),d(z,{"title-width":"0px"},{default:p((()=>[d(g,{class:"footer"},{default:p((()=>[d(_,{size:"small",type:"info",plain:"",onClick:N},{default:p((()=>[f("添加")])),_:1}),d(_,{size:"small",type:"info",plain:"",onClick:V},{default:p((()=>[f("删除")])),_:1}),d(_,{size:"small",type:"info",plain:"",onClick:x},{default:p((()=>[f("重置")])),_:1}),d(_,{type:"primary",size:"small",onClick:C},{default:p((()=>[f("提交")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}}),[["__scopeId","data-v-048bd8c5"]]);export{g as default};
