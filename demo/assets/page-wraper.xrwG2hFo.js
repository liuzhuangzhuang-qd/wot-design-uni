var e=Object.defineProperty,t=(t,a,o)=>((t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o)(t,"symbol"!=typeof a?a+"":a,o);import{O as a,d as o,q as l,o as s,c as r,w as n,p as i,n as c,y as u,l as d,i as f,P as v,Q as p,r as m,L as h,e as g,x as w,f as y,t as b,R as x,k,S as $,v as C,T as _,U as O,V as S,H as F,W as M,u as A,g as z,F as B,X as I,Y as V,Z as N,_ as T,m as j,a as G,b as E}from"./index-B0wV8KWu.js";class D{constructor(e){t(this,"promise"),t(this,"_reject",null),this.promise=new Promise(((t,a)=>{e(t,a),this._reject=a}))}abort(e){this._reject&&this._reject(e)}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}}function R(){return P()+P()+P()+P()+P()+P()+P()+P()}function P(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function Y(e){return Number.isNaN(Number(e))?`${e}`:`${e}px`}function L(e){return"[object Object]"===Object.prototype.toString.call(e)||"object"==typeof e}function H(e){const t=Object.prototype.toString.call(e).match(/\[object (\w+)\]/);return t&&t.length?t[1].toLowerCase():""}const U=function(e,t){const a=(null==t?void 0:t.labelKey)||"value";return Array.isArray(e)?e.map((e=>e[a])).join(", "):e[a]},W=e=>null!=e,q=(e,t="value")=>{if(e<0)throw new Error(`${t} shouldn't be less than zero`)};function Q(e,t,a){const o=(e<<16|t<<8|a).toString(16);return"#"+"0".repeat(Math.max(0,6-o.length))+o}function K(e){const t=[];for(let a=1;a<7;a+=2)t.push(parseInt("0x"+e.slice(a,a+2),16));return t}const Z=(e,t,a)=>Math.min(Math.max(e,t),a),X=(e,t)=>{if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t))return!1;if(e.length!==t.length)return!1;for(let a=0;a<e.length;++a)if(e[a]!==t[a])return!1;return!0},J=(e,t=2)=>{let a=e.toString();for(;a.length<t;)a="0"+a;return a},ee={id:1e3};function te(e,t,o){return new Promise(((l,s)=>{let r=null;r=o?a().in(o):a(),r[t?"selectAll":"select"](e).boundingClientRect((e=>{t&&oe(e)&&e.length>0||!t&&e?l(e):s(new Error("No nodes found"))})).exec()}))}function ae(e){return e.replace(/-(\w)/g,((e,t)=>t.toUpperCase()))}function oe(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}function le(e){return"function"===H(e)}function se(e){return"string"===H(e)}function re(e){return"number"===H(e)}function ne(e){return!(!L(e)||!W(e))&&(le(e.then)&&le(e.catch))}function ie(e){return"boolean"==typeof e}function ce(e){return void 0===e}function ue(e){if("number"!=typeof e)throw new Error("输入必须为数字");return e%2==1}function de(e){return/^data:image\/(png|jpg|jpeg|gif|bmp);base64,/.test(e)}function fe(e){return oe(e)?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return fe(e)})).join(";"):se(e)?e:L(e)?Object.keys(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[(a=t,a.replace(/[A-Z]/g,(function(e){return"-"+e})).toLowerCase()),e[t]].join(":");var a})).join(";"):""}const ve=(e=1e3/30)=>new D((t=>{const a=setTimeout((()=>{clearTimeout(a),t(!0)}),e)}));function pe(e,t=new Map){if(null===e||"object"!=typeof e)return e;if(be(e))return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e.source,e.flags);if(e instanceof Error){const t=new Error(e.message);return t.stack=e.stack,t}if(t.has(e))return t.get(e);const a=Array.isArray(e)?[]:{};t.set(e,a);for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=pe(e[o],t));return a}function me(e,t){if("object"!=typeof(e=pe(e))||"object"!=typeof t)throw new Error("Both target and source must be objects.");for(const a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function he(e,t){return Object.keys(t).forEach((a=>{const o=e[a],l=t[a];L(o)&&L(l)?he(o,l):e[a]=l})),e}function ge(e,t){const a=Object.entries(t).map((([e,t])=>`${e}=${encodeURIComponent(t)}`)).join("&"),o=e.includes("?")?"&":"?";return`${e}${o}${a}`}function we(e,t,a={}){let o,l,s,r=null;const n=!!W(a.leading)&&a.leading,i=!W(a.trailing)||a.trailing;function c(){void 0!==o&&(s=e.apply(l,o),o=void 0)}function u(){r=setTimeout((()=>{r=null,i&&c()}),t)}return function(...e){return o=e,l=this,null===r?(n&&c(),u()):i&&(null!==r&&(clearTimeout(r),r=null),u()),s}}const ye=(e,t)=>{const a=t.split(".");try{return a.reduce(((e,t)=>null!=e?e[t]:void 0),e)}catch(o){return}},be=e=>"[object Date]"===Object.prototype.toString.call(e)&&!Number.isNaN(e.getTime());function xe(e){return/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|video)/i.test(e)}function ke(e){return/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|image)/i.test(e)}const $e=(()=>{let e=!1;return e=!0,true})();function Ce(e,t){const a=pe(e);return Object.keys(a).forEach((e=>t(a[e],e)&&delete a[e])),a}function _e(e=0,t=0,a=0,o=0){return a*(1-Math.pow(2,-10*e/o))*1024/1023+t}function Oe(e,t){return e.reduce(((e,a)=>Math.abs(a-t)<Math.abs(e-t)?a:e))}const Se=[Number,String],Fe={type:Boolean,default:!0},Me=e=>({type:e,required:!0}),Ae=()=>({type:Array,default:()=>[]}),ze=e=>({type:Boolean,default:e}),Be=e=>({type:Number,default:e}),Ie=e=>({type:Se,default:e}),Ve=e=>({type:String,default:e}),Ne={customStyle:Ve(""),customClass:Ve("")},Te=(e,t)=>{const a=e.__vccOpts||e;for(const[o,l]of t)a[o]=l;return a},je=Te(o({name:"wd-icon",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Ne,name:Me(String),color:String,size:String,classPrefix:Ve("wd-icon")},emits:["click","touch"],setup(e,{emit:t}){const a=e,o=t,v=l((()=>W(a.name)&&ke(a.name))),p=l((()=>{const e=a.classPrefix;return`${e} ${a.customClass} ${v.value?"wd-icon--image":e+"-"+a.name}`})),m=l((()=>{const e={};return a.color&&(e.color=a.color),a.size&&(e["font-size"]=Y(a.size)),`${fe(e)}; ${a.customStyle}`}));function h(e){o("click",e)}return(e,t)=>{const a=d,o=f;return s(),r(o,{onClick:h,class:c(p.value),style:u(m.value)},{default:n((()=>[v.value?(s(),r(a,{key:0,class:"wd-icon__image",src:e.name},null,8,["src"])):i("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-fb36023d"]]);function Ge(e){const t=v(e,null);if(t){const e=h(),{link:a,unlink:o,internalChildren:s}=t;a(e),p((()=>o(e)));return{parent:t,index:l((()=>s.indexOf(e)))}}return{parent:null,index:m(-1)}}const Ee=Symbol("wd-cell-group"),De={...Ne,title:String,value:String,useSlot:ze(!1),border:ze(!1)};function Re(){const{parent:e,index:t}=Ge(Ee);return{border:l((()=>e&&e.props.border&&t.value))}}const Pe=Symbol("wd-form"),Ye={...Ne,model:Me(Object),rules:{type:Object,default:()=>({})},resetOnChange:ze(!0),errorType:{type:String,default:"message"}},Le=Te(o({name:"wd-cell",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Ne,title:String,value:Ie(""),icon:String,label:String,isLink:ze(!1),to:String,replace:ze(!1),clickable:ze(!1),size:String,border:ze(void 0),titleWidth:String,center:ze(!1),required:ze(!1),vertical:ze(!1),prop:String,rules:Ae(),customIconClass:Ve(""),customLabelClass:Ve(""),customValueClass:Ve(""),customTitleClass:Ve("")},emits:["click"],setup(e,{emit:t}){const a=e,o=t,d=Re(),v=l((()=>Boolean(W(a.border)?a.border:d.border.value))),{parent:p}=Ge(Pe),m=l((()=>p&&a.prop&&p.errorMessages&&p.errorMessages[a.prop]?p.errorMessages[a.prop]:"")),h=l((()=>{let e=!1;if(p&&p.props.rules){const t=p.props.rules;for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&o===a.prop&&Array.isArray(t[o])&&(e=t[o].some((e=>e.required)))}return a.required||a.rules.some((e=>e.required))||e}));function $(){const e=a.to;(a.clickable||a.isLink)&&o("click"),e&&a.isLink&&(a.replace?x({url:e}):k({url:e}))}return(e,t)=>{const a=f;return s(),r(a,{class:c(["wd-cell",v.value?"is-border":"",e.size?"is-"+e.size:"",e.center?"is-center":"",e.customClass]),style:u(e.customStyle),"hover-class":e.isLink||e.clickable?"is-hover":"none","hover-stay-time":70,onClick:$},{default:n((()=>[g(a,{class:c(["wd-cell__wrapper",e.vertical?"is-vertical":""])},{default:n((()=>[g(a,{class:c(["wd-cell__left",h.value?"is-required":""]),style:u(e.titleWidth?"min-width:"+e.titleWidth+";max-width:"+e.titleWidth+";":"")},{default:n((()=>[e.icon?(s(),r(je,{key:0,name:e.icon,"custom-class":`wd-cell__icon  ${e.customIconClass}`},null,8,["name","custom-class"])):w(e.$slots,"icon",{key:1},void 0,!0),g(a,{class:"wd-cell__title"},{default:n((()=>[e.title?(s(),r(a,{key:0,class:c(e.customTitleClass)},{default:n((()=>[y(b(e.title),1)])),_:1},8,["class"])):w(e.$slots,"title",{key:1},void 0,!0),e.label?(s(),r(a,{key:2,class:c(`wd-cell__label ${e.customLabelClass}`)},{default:n((()=>[y(b(e.label),1)])),_:1},8,["class"])):w(e.$slots,"label",{key:3},void 0,!0)])),_:3})])),_:3},8,["class","style"]),g(a,{class:"wd-cell__right"},{default:n((()=>[g(a,{class:"wd-cell__body"},{default:n((()=>[g(a,{class:c(`wd-cell__value ${e.customValueClass}`)},{default:n((()=>[w(e.$slots,"default",{},(()=>[y(b(e.value),1)]),!0)])),_:3},8,["class"]),e.isLink?(s(),r(je,{key:0,"custom-class":"wd-cell__arrow-right",name:"arrow-right"})):w(e.$slots,"right-icon",{key:1},void 0,!0)])),_:3}),m.value?(s(),r(a,{key:0,class:"wd-cell__error-message"},{default:n((()=>[y(b(m.value),1)])),_:1})):i("",!0)])),_:3})])),_:3},8,["class"])])),_:3},8,["class","style","hover-class"])}}}),[["__scopeId","data-v-618a4564"]]),He=Te(o({name:"wd-switch",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Ne,modelValue:{type:[Boolean,String,Number],required:!0,default:!1},disabled:ze(!1),activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:String,inactiveColor:String,size:{type:Se},beforeChange:Function},emits:["change","update:modelValue"],setup(e,{emit:t}){const a=e,o=t,i=l((()=>`wd-switch ${a.customClass} ${a.disabled?"is-disabled":""} ${a.modelValue===a.activeValue?"is-checked":""}`)),d=l((()=>{const e={background:a.modelValue===a.activeValue?a.activeColor:a.inactiveColor,"border-color":a.modelValue===a.activeValue?a.activeColor:a.inactiveColor};return a.size&&(e["font-size"]=Y(a.size)),`${fe(e)};${a.customStyle}`})),v=l((()=>a.modelValue===a.activeValue&&a.activeColor||a.modelValue!==a.activeValue&&a.inactiveColor?"box-shadow: none;":""));function p(){if(a.disabled)return;const e=a.modelValue===a.activeValue?a.inactiveValue:a.activeValue;a.beforeChange&&le(a.beforeChange)?a.beforeChange({value:e,resolve:t=>{t&&(o("update:modelValue",e),o("change",{value:e}))}}):(o("update:modelValue",e),o("change",{value:e}))}return $((()=>{-1===[a.activeValue,a.inactiveValue].indexOf(a.modelValue)&&(o("update:modelValue",a.inactiveValue),o("change",{value:a.inactiveValue}))})),(e,t)=>{const a=f;return s(),r(a,{class:c(i.value),style:u(d.value),onClick:p},{default:n((()=>[g(a,{class:"wd-switch__circle",style:u(v.value)},null,8,["style"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-17bb0cab"]]),Ue=Te(o({name:"wd-gap",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Ne,bgColor:Ve("transparent"),safeAreaBottom:ze(!1),height:Ie(15)},setup(e){const t=e,a=l((()=>{const e={};return W(t.bgColor)&&(e.background=t.bgColor),W(t.height)&&(e.height=Y(t.height)),`${fe(e)};${t.customStyle}`}));return(e,t)=>{const o=f;return s(),r(o,{class:c(`wd-gap ${e.safeAreaBottom?"wd-gap--safe":""} ${e.customClass}`),style:u(a.value)},null,8,["class","style"])}}}),[["__scopeId","data-v-54155a5a"]]),We=Te(o({name:"wd-transition",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Ne,show:ze(!1),duration:{type:[Object,Number,Boolean],default:300},lazyRender:ze(!1),name:[String,Array],destroy:ze(!0),enterClass:Ve(""),enterActiveClass:Ve(""),enterToClass:Ve(""),leaveClass:Ve(""),leaveActiveClass:Ve(""),leaveToClass:Ve("")},emits:["click","before-enter","enter","before-leave","leave","after-leave","after-enter"],setup(e,{emit:t}){const a=e=>{let t=`${o.enterClass} ${o.enterActiveClass}`,a=`${o.enterToClass} ${o.enterActiveClass}`,l=`${o.leaveClass} ${o.leaveActiveClass}`,s=`${o.leaveToClass} ${o.leaveActiveClass}`;if(Array.isArray(e))for(let o=0;o<e.length;o++)t=`wd-${e[o]}-enter wd-${e[o]}-enter-active ${t}`,a=`wd-${e[o]}-enter-to wd-${e[o]}-enter-active ${a}`,l=`wd-${e[o]}-leave wd-${e[o]}-leave-active ${l}`,s=`wd-${e[o]}-leave-to wd-${e[o]}-leave-active ${s}`;else e&&(t=`wd-${e}-enter wd-${e}-enter-active ${t}`,a=`wd-${e}-enter-to wd-${e}-enter-active ${a}`,l=`wd-${e}-leave wd-${e}-leave-active ${l}`,s=`wd-${e}-leave-to wd-${e}-leave-active ${s}`);return{enter:t,"enter-to":a,leave:l,"leave-to":s}},o=e,d=t,v=m(!1),p=m(!1),h=m(""),g=m(!1),y=m(300),b=m(""),x=m(null),k=m(null),_=m(null),O=l((()=>`-webkit-transition-duration:${y.value}ms;transition-duration:${y.value}ms;${p.value||!o.destroy?"":"display: none;"}${o.customStyle}`)),S=l((()=>`wd-transition ${o.customClass}  ${b.value}`));function F(){d("click")}function M(){x.value=new D((async e=>{try{const t=a(o.name),l=L(o.duration)?o.duration.enter:o.duration;h.value="enter",d("before-enter"),k.value=ve(),await k.value,d("enter"),b.value=t.enter,y.value=l,k.value=ve(),await k.value,v.value=!0,p.value=!0,k.value=ve(),await k.value,k.value=null,g.value=!1,b.value=t["enter-to"],e()}catch(t){}}))}function A(){g.value||(g.value=!0,"leave"===h.value?d("after-leave"):"enter"===h.value&&d("after-enter"),!o.show&&p.value&&(p.value=!1))}return $((()=>{o.show&&M()})),C((()=>o.show),(e=>{e?(ne(x.value)&&x.value.abort(),ne(k.value)&&k.value.abort(),ne(_.value)&&_.value.abort(),x.value=null,k.value=null,_.value=null,M()):async function(){if(!x.value)return g.value=!1,A();try{if(await x.value,!p.value)return;const e=a(o.name),t=L(o.duration)?o.duration.leave:o.duration;h.value="leave",d("before-leave"),y.value=t,_.value=ve(),await _.value,d("leave"),b.value=e.leave,_.value=ve(),await _.value,g.value=!1,b.value=e["leave-to"],_.value=function(e){return new D((t=>{const a=setTimeout((()=>{clearTimeout(a),t()}),e)}))}(y.value),await _.value,_.value=null,A(),x.value=null}catch(e){}}()}),{deep:!0}),(e,t)=>{const a=f;return!e.lazyRender||v.value?(s(),r(a,{key:0,class:c(S.value),style:u(O.value),onTransitionend:A,onClick:F},{default:n((()=>[w(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])):i("",!0)}}}),[["__scopeId","data-v-5a88dbdb"]]);function qe(e){const t=m(0),a=()=>{0===t.value&&(document.getElementsByTagName("body")[0].style.overflow="hidden"),t.value++},o=()=>{t.value>0&&(t.value--,0===t.value&&(document.getElementsByTagName("body")[0].style.overflow=""))},l=()=>{e()&&o()};return C(e,(e=>{e?a():o()})),_(l),O(l),{lock:a,unlock:o}}const Qe=Te(o({name:"wd-overlay",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Ne,show:ze(!1),duration:{type:[Object,Number,Boolean],default:300},lockScroll:ze(!0),zIndex:Be(10)},emits:["click"],setup(e,{emit:t}){const a=e,o=t;function l(){o("click")}function i(){}return qe((()=>a.show&&a.lockScroll)),(e,t)=>(s(),r(We,{show:e.show,name:"fade","custom-class":"wd-overlay",duration:e.duration,"custom-style":`z-index: ${e.zIndex}; ${e.customStyle}`,onClick:l,onTouchmove:t[0]||(t[0]=S((t=>e.lockScroll?i:""),["stop","prevent"]))},{default:n((()=>[w(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style"]))}}),[["__scopeId","data-v-774508e2"]]),Ke=Te(o({name:"wd-popup",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Ne,transition:String,closable:ze(!1),position:Ve("center"),closeOnClickModal:ze(!0),duration:{type:[Number,Boolean],default:300},modal:ze(!0),zIndex:Be(10),hideWhenClose:ze(!0),modalStyle:Ve(""),safeAreaInsetBottom:ze(!1),modelValue:ze(!1),lazyRender:ze(!0),lockScroll:ze(!0)},emits:["update:modelValue","before-enter","enter","before-leave","leave","after-leave","after-enter","click-modal","close"],setup(e,{emit:t}){const a=e,o=t,c=l((()=>a.transition?a.transition:"center"===a.position?["zoom-in","fade"]:"left"===a.position?"slide-left":"right"===a.position?"slide-right":"bottom"===a.position?"slide-up":"top"===a.position?"slide-down":"slide-up")),u=m(0),d=l((()=>`z-index:${a.zIndex}; padding-bottom: ${u.value}px;${a.customStyle}`)),v=l((()=>`wd-popup wd-popup--${a.position} ${a.transition||"center"!==a.position?"":"is-deep"} ${a.customClass||""}`));function p(){o("click-modal"),a.closeOnClickModal&&h()}function h(){o("close"),o("update:modelValue",!1)}function y(){}return $((()=>{if(a.safeAreaInsetBottom){const{safeArea:e,screenHeight:t,safeAreaInsets:a}=F();u.value=e&&a?a.bottom:0}})),(e,t)=>{const a=f;return s(),r(a,{class:"wd-popup-wrapper"},{default:n((()=>[e.modal?(s(),r(Qe,{key:0,show:e.modelValue,"z-index":e.zIndex,"lock-scroll":e.lockScroll,duration:e.duration,"custom-style":e.modalStyle,onClick:p,onTouchmove:y},null,8,["show","z-index","lock-scroll","duration","custom-style"])):i("",!0),g(We,{"lazy-render":e.lazyRender,"custom-class":v.value,"custom-style":d.value,duration:e.duration,show:e.modelValue,name:c.value,destroy:e.hideWhenClose,onBeforeEnter:t[0]||(t[0]=e=>o("before-enter")),onEnter:t[1]||(t[1]=e=>o("enter")),onAfterEnter:t[2]||(t[2]=e=>o("after-enter")),onBeforeLeave:t[3]||(t[3]=e=>o("before-leave")),onLeave:t[4]||(t[4]=e=>o("leave")),onAfterLeave:t[5]||(t[5]=e=>o("after-leave"))},{default:n((()=>[w(e.$slots,"default",{},void 0,!0),e.closable?(s(),r(je,{key:0,"custom-class":"wd-popup__close",name:"add",onClick:h})):i("",!0)])),_:3},8,["lazy-render","custom-class","custom-style","duration","show","name","destroy"])])),_:3})}}}),[["__scopeId","data-v-e559c015"]]),Ze={type:Ve("danger"),color:Ve(""),zIndex:Be(99),visible:ze(!1),message:Ie(""),selector:Ve(""),duration:Be(3e3),position:Ve("top"),safeHeight:Number,background:Ve("")};let Xe,Je={type:"danger",color:void 0,zIndex:99,message:"",duration:3e3,position:"top",safeHeight:void 0,background:void 0,onClick:void 0,onClosed:void 0,onOpened:void 0};const et="__NOTIFY_OPTION__",tt=Symbol("None"),at=(e="")=>{const t=ot(e),a=v(t,m(tt));a.value===tt&&(a.value=Je,M(t,a));const o=()=>{Xe&&clearTimeout(Xe),a.value!==tt&&(a.value.visible=!1)};return{showNotify:e=>{const t=me(Je,se(e)?{message:e}:e);a.value=me(t,{visible:!0}),a.value.duration&&a.value.duration>0&&(Xe&&clearTimeout(Xe),Xe=setTimeout((()=>o()),t.duration))},closeNotify:o}},ot=e=>e?`${et}${e}`:et;const lt=Te(o({name:"wd-notify",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:Ze,emits:["update:visible","click","closed","opened"],setup(e,{emit:t}){const a=e,o=t,i=v(ot(a.selector),m(a)),d=l((()=>{const{safeHeight:e,position:t}=i.value;let a="";switch(t){case"top":a=`top: calc(var(--window-top) + ${Y(e||0)})`;break;case"bottom":a="bottom: var(--window-bottom)"}return a})),p=e=>{if(le(i.value.onClick))return i.value.onClick(e);o("click",e)},h=()=>{if(le(i.value.onClosed))return i.value.onClosed();o("closed")},x=()=>{if(le(i.value.onOpened))return i.value.onOpened();o("opened")};return C((()=>i.value.visible),(e=>{o("update:visible",e)}),{deep:!0}),(e,t)=>{const a=f;return s(),r(Ke,{modelValue:A(i).visible,"onUpdate:modelValue":t[0]||(t[0]=e=>A(i).visible=e),"custom-style":d.value,position:A(i).position,"z-index":A(i).zIndex,duration:250,modal:!1,onLeave:h,onEnter:x},{default:n((()=>[g(a,{class:c(["wd-notify",[`wd-notify--${A(i).type}`]]),style:u({color:A(i).color,background:A(i).background}),onClick:p},{default:n((()=>[w(e.$slots,"default",{},(()=>[y(b(A(i).message),1)]),!0)])),_:3},8,["class","style"])])),_:3},8,["modelValue","custom-style","position","z-index"])}}}),[["__scopeId","data-v-8aa9e729"]]),st=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],rt=e=>e.replace(/[+/]/g,(e=>"+"===e?"-":"_")).replace(/=+\$/m,""),nt="function"==typeof btoa?e=>btoa(e):e=>{if(e.charCodeAt(0)>255)throw new RangeError("The string contains invalid characters.");return((e,t=!1)=>{let a="";for(let o=0,l=e.length;o<l;o+=3){const[t,l,s]=[e[o],e[o+1],e[o+2]],r=t<<16|l<<8|s;a+=st[r>>>18],a+=st[r>>>12&63],a+=void 0!==l?st[r>>>6&63]:"=",a+=void 0!==s?st[63&r]:"="}return t?rt(a):a})(Uint8Array.from(e,(e=>e.charCodeAt(0))))},it=e=>unescape(encodeURIComponent(e));function ct(e,t=!1){const a=nt(it(e));return t?rt(a):a}const ut=Te(o({name:"wd-loading",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Ne,type:Ve("ring"),color:Ve("#4D80F0"),size:Ie("")},setup(e){const t=ee.id++,a=ee.id++,o=ee.id++,i={outline:(e="#4D80F0")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="${t}"><stop stop-color="#FFF" offset="0%" stop-opacity="0"/><stop stop-color="#FFF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#${t}) " stroke-width="3.5" stroke-linecap="round"/></g></svg>`,ring:(e="#4D80F0",t="#a6bff7")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="${a}" gradientUnits="userSpaceOnUse" x1="50" x2="50" y2="180"><stop offset="0" stop-color="${e}"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${a})" d="M20 100c0-44.1 35.9-80 80-80V0C44.8 0 0 44.8 0 100s44.8 100 100 100v-20c-44.1 0-80-35.9-80-80z"></path> <linearGradient id="${o}" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${o})" d="M100 0v20c44.1 0 80 35.9 80 80s-35.9 80-80 80v20c55.2 0 100-44.8 100-100S155.2 0 100 0z"></path> <circle cx="100" cy="10" r="10" fill="${e}"></circle></svg>`},d=e,v=m(""),p=m(""),h=m(null);C((()=>d.size),(e=>{h.value=Y(e)}),{deep:!0,immediate:!0}),C((()=>d.type),(()=>{y()}),{deep:!0,immediate:!0});const w=l((()=>{const e={};return W(h.value)&&(e.height=Y(h.value),e.width=Y(h.value)),`${fe(e)}; ${d.customStyle}`}));function y(){const{type:e,color:t}=d;let a=W(e)?e:"ring";const o=`"data:image/svg+xml;base64,${ct("ring"===a?i[a](t,p.value):i[a](t))}"`;v.value=o}return $((()=>{p.value=((e,t,a=2)=>{const o=K(e),l=K(t),s=(l[0]-o[0])/a,r=(l[1]-o[1])/a,n=(l[2]-o[2])/a,i=[];for(let c=0;c<a;c++)i.push(Q(parseInt(String(s*c+o[0])),parseInt(String(r*c+o[1])),parseInt(String(n*c+o[2]))));return i})(d.color,"#ffffff",2)[1],y()})),(e,t)=>{const a=f;return s(),r(a,{class:c(`wd-loading ${d.customClass}`),style:u(w.value)},{default:n((()=>[g(a,{class:"wd-loading__body"},{default:n((()=>[g(a,{class:"wd-loading__svg",style:u(`background-image: url(${v.value});`)},null,8,["style"])])),_:1})])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-d8892117"]]),dt="__TOAST_OPTION__",ft={msg:"",duration:2e3,loadingType:"outline",loadingColor:"#4D80F0",iconColor:"#4D80F0",position:"middle",show:!1,zIndex:100},vt=Symbol("None");function pt(e=""){const t=mt(e),a=v(t,m(vt));a.value===vt&&(a.value=ft,M(t,a));let o=null;const l=e=>t=>s(me(e,"string"==typeof t?{msg:t}:t)),s=e=>{const t=me(ft,"string"==typeof e?{msg:e}:e);a.value=me(t,{show:!0}),o&&clearTimeout(o),a.value.duration&&a.value.duration>0&&(o=setTimeout((()=>{o&&clearTimeout(o),d()}),t.duration))},r=l({iconName:"loading",duration:0,cover:!0}),n=l({iconName:"success",duration:1500}),i=l({iconName:"error"}),c=l({iconName:"warning"}),u=l({iconName:"info"}),d=()=>{a.value={show:!1}};return{show:s,loading:r,success:n,error:i,warning:c,info:u,close:d}}const mt=e=>e?`${dt}${e}`:dt,ht={success:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>成功</title><desc>Created with Sketch.</desc><defs><filter x="-63.2%" y="-80.0%" width="226.3%" height="260.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122733141   0 0 0 0 0.710852582   0 0 0 0 0.514812768  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><rect id="path-2" x="3.4176226" y="5.81442199" width="3" height="8.5" rx="1.5"></rect><linearGradient x1="50%" y1="0.126649064%" x2="50%" y2="100%" id="linearGradient-4"><stop stop-color="#ACFFBD" stop-opacity="0.208123907" offset="0%"></stop><stop stop-color="#10B87C" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-388.000000, -538.000000)"><g id="成功" transform="translate(388.000000, 538.000000)"><circle id="Oval" fill="#34D19D" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#34D19D" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(11.500000, 14.000000)"><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><use id="Rectangle-Copy-24" fill="#C4FFEB" transform="translate(4.917623, 10.064422) rotate(-45.000000) translate(-4.917623, -10.064422) " xlink:href="#path-2"></use><rect id="Rectangle" fill="url(#linearGradient-4)" mask="url(#mask-3)" transform="translate(6.215869, 11.372277) rotate(-45.000000) translate(-6.215869, -11.372277) " x="4.71586891" y="9.52269089" width="3" height="3.69917136"></rect><rect id="Rectangle" fill="#FFFFFF" transform="translate(11.636236, 7.232744) scale(1, -1) rotate(-45.000000) translate(-11.636236, -7.232744) " x="10.1362361" y="-1.02185365" width="3" height="16.5091951" rx="1.5"></rect></g></g></g></g></svg>',warning:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>警告</title><desc>Created with Sketch.</desc> <defs> <filter x="-240.0%" y="-60.0%" width="580.0%" height="220.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.824756567   0 0 0 0 0.450356612   0 0 0 0 0.168550194  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-580.000000, -538.000000)"> <g id="警告" transform="translate(580.000000, 538.000000)"><circle id="Oval" fill="#F0883A" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#F0883A" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 10.800000)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(2.492935, 7.171583) scale(1, -1) rotate(-360.000000) translate(-2.492935, -7.171583) " x="0.992934699" y="0.955464537" width="3" height="12.4322365" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#FFDEC5" transform="translate(2.508751, 17.202636) scale(1, -1) rotate(-360.000000) translate(-2.508751, -17.202636) " x="1.00875134" y="15.200563" width="3" height="4.00414639" rx="1.5"></rect></g></g></g></g></svg>',info:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>常规</title><desc>Created with Sketch.</desc><defs><filter x="-300.0%" y="-57.1%" width="700.0%" height="214.3%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.362700096   0 0 0 0 0.409035039   0 0 0 0 0.520238904  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-772.000000, -538.000000)"><g id="常规" transform="translate(772.000000, 538.000000)"><circle id="Oval" fill="#909CB7" opacity="0.4" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#909CB7" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 9.800000)"><g id="编组-2" transform="translate(2.492935, 10.204709) rotate(-180.000000) translate(-2.492935, -10.204709) translate(0.992935, 0.204709)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(1.500000, 7.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -7.000000) " x="0" y="0" width="3" height="14" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#EEEEEE" transform="translate(1.500000, 18.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -18.000000) " x="0" y="16" width="3" height="4" rx="1.5"></rect></g></g></g></g></g></svg>',error:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>toast</title><desc>Created with Sketch.</desc><defs><linearGradient x1="99.6229896%" y1="50.3770104%" x2="0.377010363%" y2="50.3770104%" id="linearGradient-1"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient><linearGradient x1="0.377010363%" y1="50.3770104%" x2="99.6229896%" y2="50.3770104%" id="linearGradient-2"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-196.000000, -538.000000)"> <g id="toast" transform="translate(196.000000, 538.000000)"><circle id="Oval" fill="#FA4350" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#FA4350" opacity="0.900000036" cx="21" cy="21" r="16"></circle><rect id="矩形" fill="#FFDFDF" transform="translate(21.071068, 21.071068) rotate(-225.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect><rect id="矩形" fill="url(#linearGradient-1)" transform="translate(19.303301, 22.838835) rotate(-225.000000) translate(-19.303301, -22.838835) " x="17.3033009" y="21.3388348" width="4" height="3"></rect><rect id="矩形" fill="url(#linearGradient-2)" transform="translate(22.838835, 19.303301) rotate(-225.000000) translate(-22.838835, -19.303301) " x="20.8388348" y="17.8033009" width="4" height="3"></rect><rect id="矩形" fill="#FFFFFF" transform="translate(21.071068, 21.071068) rotate(-315.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect></g></g></g></svg>'},gt=Te(o({name:"wd-toast",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Ne,selector:Ve("")},setup(e){const t=e,a=m(""),o=m(""),d=m("middle"),p=m(!1),h=m(100),w=m("outline"),x=m("#4D80F0"),k=m(),_=m(),O=m(""),S=m(!1),F=m("wd-icon"),M=m("");let A=null,I=null;const V=mt(t.selector),N=v(V,m(ft));C((()=>N.value),(e=>{var t;(t=e)&&(p.value=!!W(t.show)&&t.show,p.value&&(a.value=W(t.iconName)?t.iconName:"",M.value=W(t.iconClass)?t.iconClass:"",o.value=W(t.msg)?t.msg:"",d.value=W(t.position)?t.position:"middle",h.value=W(t.zIndex)?t.zIndex:100,w.value=W(t.loadingType)?t.loadingType:"outline",x.value=W(t.loadingColor)?t.loadingColor:"#4D80F0",k.value=W(t.iconSize)?Y(t.iconSize):t.iconSize,_.value=W(t.loadingSize)?Y(t.loadingSize):t.loadingSize,S.value=!!W(t.cover)&&t.cover,F.value=W(t.classPrefix)?t.classPrefix:"wd-icon",I=le(t.closed)?t.closed:null,A=le(t.opened)?t.opened:null))}),{deep:!0,immediate:!0}),C((()=>a.value),(()=>{R()}),{deep:!0,immediate:!0});const T=l((()=>fe({"z-index":h.value,position:"fixed",top:"50%",left:0,width:"100%",transform:"translate(0, -50%)","text-align":"center"}))),j=l((()=>`wd-toast ${t.customClass} wd-toast--${d.value} ${"loading"===a.value&&!o.value||!a.value&&!M.value?"":"wd-toast--with-icon"} ${"loading"!==a.value||o.value?"":"wd-toast--loading"}`)),G=l((()=>{const e={backgroundImage:`url(${O.value})`};return W(k.value)&&(e.width=k.value,e.height=k.value),fe(e)}));function E(){le(A)&&A()}function D(){le(I)&&I()}function R(){if("success"!==a.value&&"warning"!==a.value&&"info"!==a.value&&"error"!==a.value)return;const e=`"data:image/svg+xml;base64,${ct(ht[a.value]())}"`;O.value=e}return $((()=>{R()})),(e,t)=>{const l=f;return s(),z(B,null,[S.value?(s(),r(Qe,{key:0,"z-index":h.value,"lock-scroll":"",show:p.value,"custom-style":"background-color: transparent;pointer-events: auto;"},null,8,["z-index","show"])):i("",!0),g(We,{name:"fade",show:p.value,"custom-style":T.value,onAfterEnter:E,onAfterLeave:D},{default:n((()=>[g(l,{class:c(j.value)},{default:n((()=>["loading"===a.value?(s(),r(ut,{key:0,type:w.value,color:x.value,size:_.value,"custom-class":"wd-toast__icon"},null,8,["type","color","size"])):"success"===a.value||"warning"===a.value||"info"===a.value||"error"===a.value?(s(),r(l,{key:1,class:"wd-toast__iconWrap wd-toast__icon"},{default:n((()=>[g(l,{class:"wd-toast__iconBox"},{default:n((()=>[g(l,{class:"wd-toast__iconSvg",style:u(G.value)},null,8,["style"])])),_:1})])),_:1})):M.value?(s(),r(je,{key:2,"custom-class":"wd-toast__icon",size:k.value,"class-prefix":F.value,name:M.value},null,8,["size","class-prefix","name"])):i("",!0),o.value?(s(),r(l,{key:3,class:"wd-toast__msg"},{default:n((()=>[y(b(o.value),1)])),_:1})):i("",!0)])),_:1},8,["class"])])),_:1},8,["show","custom-style"])],64)}}}),[["__scopeId","data-v-6bd15537"]]),wt=o({name:"wd-config-provider",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Ne,theme:Ve("light"),themeVars:{type:Object,default:()=>({})}},setup(e){const t=e,a=l((()=>`wot-theme-${t.theme} ${t.customClass}`)),o=l((()=>{const e=i(t.themeVars);return e?`${fe(e)};${t.customStyle}`:t.customStyle})),i=e=>{if(!e)return;const t={};return Object.keys(e).forEach((a=>{var o;t[`--wot-${o=a,(o=o.replace(o.charAt(0),o.charAt(0).toLocaleLowerCase())).replace(/([a-z])([A-Z])/g,((e,t,a)=>t+"-"+a.toLowerCase()))}`]=e[a]})),t};return(e,t)=>{const l=f;return s(),r(l,{class:c(a.value),style:u(o.value)},{default:n((()=>[w(e.$slots,"default")])),_:3},8,["class","style"])}}}),yt="__QUEUE_KEY__";function bt(){const e=m([]);function t(t){e.value.forEach((e=>{e.$.uid!==t.$.uid&&e.$.exposed.close()}))}function a(){e.value.forEach((e=>{e.$.exposed.close()}))}return M(yt,{queue:e,pushToQueue:function(t){e.value.push(t)},removeFromQueue:function(t){e.value=e.value.filter((e=>e.$.uid!==t.$.uid))},closeOther:t,closeOutside:a}),{closeOther:t,closeOutside:a}}const xt=m("zh-CN"),kt=I({"zh-CN":{calendar:{placeholder:"请选择",title:"选择日期",day:"日",week:"周",month:"月",confirm:"确定",startTime:"开始时间",endTime:"结束时间",to:"至",timeFormat:"YY年MM月DD日 HH:mm:ss",dateFormat:"YYYY年MM月DD日",weekFormat:(e,t)=>`${e} 第 ${t} 周`,startWeek:"开始周",endWeek:"结束周",startMonth:"开始月",endMonth:"结束月",monthFormat:"YYYY年MM月"},calendarView:{startTime:"开始",endTime:"结束",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},rangePrompt:e=>`选择天数不能超过${e}天`,rangePromptWeek:e=>`选择周数不能超过${e}周`,rangePromptMonth:e=>`选择月份不能超过${e}个月`,monthTitle:"YYYY年M月",yearTitle:"YYYY年",month:"M月",hour:e=>`${e}时`,minute:e=>`${e}分`,second:e=>`${e}秒`},collapse:{expand:"展开",retract:"收起"},colPicker:{title:"请选择",placeholder:"请选择",select:"请选择"},datetimePicker:{start:"开始时间",end:"结束时间",to:"至",placeholder:"请选择",confirm:"完成",cancel:"取消"},loadmore:{loading:"正在努力加载中...",finished:"已加载完毕",error:"加载失败",retry:"点击重试"},messageBox:{inputPlaceholder:"请输入",confirm:"确定",cancel:"取消",inputNoValidate:"输入的数据不合法"},numberKeyboard:{confirm:"完成"},pagination:{prev:"上一页",next:"下一页",page:e=>`当前页：${e}`,total:e=>`当前数据：${e}条`,size:e=>`分页大小：${e}`},picker:{cancel:"取消",done:"完成",placeholder:"请选择"},imgCropper:{confirm:"完成",cancel:"取消"},search:{search:"搜索",cancel:"取消"},steps:{wait:"未开始",finished:"已完成",process:"进行中",failed:"失败"},tabs:{all:"全部"},upload:{error:"上传失败"},input:{placeholder:"请输入..."},selectPicker:{title:"请选择",placeholder:"请选择",select:"请选择",confirm:"确认",filterPlaceholder:"搜索"},tag:{placeholder:"请输入",add:"新增标签"},textarea:{placeholder:"请输入..."},tableCol:{indexLabel:"序号"}}}),$t={messages:()=>kt[xt.value],use(e,t){xt.value=e,t&&this.add({[e]:t})},add(e={}){he(kt,e)}},Ct=m(!1);function _t(){const{loading:e,close:t,show:a}=pt();let o=null;return function(){const e=V("freeAdTime");if(e){const t=(new Date).getTime()-e;Ct.value=!(t>864e5)}else Ct.value=!1}(),{createRewardVideoAd:function(){uni.createRewardedVideoAd?(o=uni.createRewardedVideoAd({adUnitId:"adunit-91e0e9b07b57557a"}),o.onLoad((()=>{console.log("激励视频 广告加载成功")})),o.onError((e=>{console.log("激励视频 广告加载失败",e)})),o.onClose((e=>{e&&e.isEnded?(console.log("激励视频 广告完成"),Ct.value=!0,N("freeAdTime",(new Date).getTime()),a({msg:"广告观看成功，感谢支持"})):console.log("激励视频 广告未完成")}))):console.log("当前环境不支持激励视频广告")},showRewardAd:function(){e({msg:"正在加载激励视频..."}),o&&o.show().then((()=>{t()})).catch((()=>{o.load().then((()=>o.show().finally((()=>{t()})))).catch((e=>{t(),console.log("激励视频 广告显示失败")}))}))},isFree:Ct}}const Ot=Te(o({options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},__name:"page-wraper",props:{showDarkMode:{type:Boolean,default:!1},safeAreaInsetBottom:{type:Boolean,default:!0},useWxAd:{type:Boolean,default:!0},useRewardFab:{type:Boolean,default:!1}},setup(e){const t=e;l((()=>t.useRewardFab&&!0)),_t();const a=T(),{closeOutside:o}=bt(),c=m(!1),u=m(!1),d={colorTheme:"red"},v=l((()=>a.isDark.value||c.value?"dark":"light"));return j((()=>{Je=me(Je,{onClick:e=>console.log("onClick",e),onClosed:()=>console.log("onClosed"),onOpened:()=>console.log("onOpened")})})),(e,t)=>{const a=G(E("wd-switch"),He),l=G(E("wd-cell"),Le),p=G(E("wd-gap"),Ue),m=f,h=G(E("wd-notify"),lt),y=G(E("wd-toast"),gt),b=G(E("wd-config-provider"),wt);return s(),r(b,{theme:v.value,"theme-vars":u.value?d:{}},{default:n((()=>[g(m,{class:"page-wraper",onClick:A(o)},{default:n((()=>[e.showDarkMode?(s(),r(l,{key:0,title:"切换暗黑","title-width":"240px",center:""},{default:n((()=>[g(a,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e)},null,8,["modelValue"])])),_:1})):i("",!0),e.showDarkMode?(s(),r(l,{key:1,title:"切换主题色","title-width":"240px",center:""},{default:n((()=>[g(a,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e)},null,8,["modelValue"])])),_:1})):i("",!0),w(e.$slots,"default",{},void 0,!0),e.safeAreaInsetBottom?(s(),r(p,{key:2,height:"0","safe-area-bottom":""})):i("",!0)])),_:3},8,["onClick"]),g(h),g(y)])),_:3},8,["theme","theme-vars"])}}}),[["__scopeId","data-v-db0724bb"]]);export{ie as $,ct as A,ae as B,ye as C,le as D,Se as E,re as F,De as G,Ee as H,R as I,te as J,yt as K,$t as L,me as M,he as N,Ae as O,Re as P,Pe as Q,Me as R,X as S,we as T,H as U,pe as V,Z as W,U as X,se as Y,q as Z,Le as _,Ot as a,qe as a0,ee as a1,xe as a2,ke as a3,J as a4,be as a5,Ye as a6,ne as a7,de as a8,ge as a9,Ue as aa,Qe as ab,ue as ac,$e as ad,_e as ae,Fe as af,Oe as ag,_t as ah,Te as b,pt as c,gt as d,He as e,Ne as f,Ge as g,Y as h,Ve as i,bt as j,We as k,Ke as l,Be as m,ze as n,fe as o,lt as p,ut as q,W as r,oe as s,ve as t,at as u,L as v,je as w,Ce as x,ce as y,Ie as z};
