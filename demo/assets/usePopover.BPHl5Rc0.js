import{r as t,L as e}from"./index-B0wV8KWu.js";import{J as a,v as o}from"./page-wraper.xrwG2hFo.js";function l(l=!0){const{proxy:r}=e(),p=t(""),u=t(""),n=t(""),v=t(""),s=t(0),$=t(0),x=t(0),f=t(0),i=t(0),m=t(0),h=t(0);return{popStyle:p,arrowStyle:u,showStyle:n,arrowClass:v,init:function(t,e,o){if(e){const e=[`wd-${o}__arrow`,"bottom"===t||"bottom-start"===t||"bottom-end"===t?`wd-${o}__arrow-up`:"","left"===t||"left-start"===t||"left-end"===t?`wd-${o}__arrow-right`:"","right"===t||"right-start"===t||"right-end"===t?`wd-${o}__arrow-left`:"","top"===t||"top-start"===t||"top-end"===t?`wd-${o}__arrow-down`:""];v.value=e.join(" ")}a("#target",!1,r).then((t=>{t&&(x.value=t.left,f.value=t.bottom,i.value=t.width,m.value=t.height,h.value=t.top)})),a("#pos",!1,r).then((t=>{t&&(s.value=t.width,$.value=t.height)}))},control:function(t,e){const a=l?9:0,r=i.value/2,n=a+m.value+5,v=i.value+a+5,x=m.value/2;let f=0,h=0;Array.isArray(e)?(f=(r-17>0?0:r-25)+e[0],h=(x-17>0?0:x-25)+(e[1]?e[1]:e[0])):o(e)?(f=(r-17>0?0:r-25)+e.x,h=(x-17>0?0:x-25)+e.y):(f=(r-17>0?0:r-25)+e,h=(x-17>0?0:x-25)+e);const g=new Map([["top",[`left: ${r}px; bottom: ${n}px; transform: translateX(-50%);`,"left: 50%;"]],["top-start",[`left: ${f}px; bottom: ${n}px;`,`left: ${(s.value>=i.value?i.value/2:s.value-25)-f}px;`]],["top-end",[`right: ${f}px; bottom: ${n}px;`,`right: ${(s.value>=i.value?i.value/2:s.value-25)-f}px; transform: translateX(50%);`]],["bottom",[`left: ${r}px; top: ${n}px; transform: translateX(-50%);`,"left: 50%;"]],["bottom-start",[`left: ${f}px; top: ${n}px;`,`left: ${(s.value>=i.value?i.value/2:s.value-25)-f}px;`]],["bottom-end",[`right: ${f}px; top: ${n}px;`,`right: ${(s.value>=i.value?i.value/2:s.value-25)-f}px; transform: translateX(50%);`]],["left",[`right: ${v}px; top: ${x}px; transform: translateY(-50%);`,"top: 50%"]],["left-start",[`right: ${v}px; top: ${h}px;`,`top: ${($.value>=m.value?m.value/2:$.value-20)-h}px;`]],["left-end",[`right: ${v}px; bottom: ${h}px;`,`bottom: ${($.value>=m.value?m.value/2:$.value-20)-h}px; transform: translateY(50%);`]],["right",[`left: ${v}px; top: ${x}px; transform: translateY(-50%);`,"top: 50%"]],["right-start",[`left: ${v}px; top: ${h}px;`,`top: ${($.value>=m.value?m.value/2:$.value-20)-h}px;`]],["right-end",[`left: ${v}px; bottom: ${h}px;`,`bottom: ${($.value>=m.value?m.value/2:$.value-20)-h}px; transform: translateY(50%);`]]]);p.value=g.get(t)[0],u.value=g.get(t)[1]},noop:function(){}}}export{l as u};
