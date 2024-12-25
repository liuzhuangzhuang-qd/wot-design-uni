import{av as h,p as o,q as s,S as t,U as d,O as e,aQ as r,ag as a,m as l}from"./chunks/framework.ChOTG-bu.js";const f=JSON.parse('{"title":"Watermark 水印 0.1.16","description":"","frontmatter":{},"headers":[],"relativePath":"component/watermark.md","filePath":"component/watermark.md","lastUpdated":1735145538000}'),c={name:"component/watermark.md"},k={id:"watermark-水印-0-1-16",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#watermark-水印-0-1-16","aria-label":'Permalink to "Watermark 水印 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">0.1.16</el-tag>"'},"​",-1),g=r('<p>在页面或组件上添加指定的图片或文字，可用于版权保护、品牌宣传等场景。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>将 WaterMark 组件放在页面中，可以通过<code>content</code>字段设置水印显示内容，通过<code>width</code>和<code>height</code>设置单个水印的高度与宽度，展示一个全屏的水印。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wot-design-uni&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;130&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;130&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="图片水印" tabindex="-1">图片水印 <a class="header-anchor" href="#图片水印" aria-label="Permalink to &quot;图片水印&quot;">​</a></h3><p>通过<code>image</code>字段设置网络图片地址或Base64图片，通过<code>image-width</code>和<code>image-height</code>字段设置水印图片的宽高。 <strong>注意：钉钉小程序平台仅支持网络图片。</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://wot-design-uni.cn/wot-design.png&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :image-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;38&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :image-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;38&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="局部水印" tabindex="-1">局部水印 <a class="header-anchor" href="#局部水印" aria-label="Permalink to &quot;局部水印&quot;">​</a></h3><p>通过<code>full-screen</code>设置是否为全屏水印。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wot-design-uni&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :full-screen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="自定义层级和透明度" tabindex="-1">自定义层级和透明度 <a class="header-anchor" href="#自定义层级和透明度" aria-label="Permalink to &quot;自定义层级和透明度&quot;">​</a></h3><p>通过<code>opacity</code>设置透明度、<code>z-index</code>设置水印层级。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wot-design-uni&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :opacity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-watermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td><code>content</code></td><td>显示内容</td><td>string</td><td>-</td><td><code>&#39;&#39;</code></td><td>0.1.16</td></tr><tr><td><code>image</code></td><td>显示图片的地址，支持网络图片和base64（钉钉小程序支持网络图片）</td><td>string</td><td>-</td><td><code>&#39;&#39;</code></td><td>0.1.16</td></tr><tr><td><code>imageHeight</code></td><td>图片高度</td><td>number</td><td>-</td><td><code>100</code></td><td>0.1.16</td></tr><tr><td><code>imageWidth</code></td><td>图片宽度</td><td>number</td><td>-</td><td><code>100</code></td><td>0.1.16</td></tr><tr><td><code>gutterX</code></td><td>X轴间距，单位px</td><td>number</td><td>-</td><td><code>0</code></td><td>0.1.16</td></tr><tr><td><code>gutterY</code></td><td>Y轴间距，单位px</td><td>number</td><td>-</td><td><code>0</code></td><td>0.1.16</td></tr><tr><td><code>width</code></td><td>canvas画布宽度，单位px</td><td>number</td><td>-</td><td><code>100</code></td><td>0.1.16</td></tr><tr><td><code>height</code></td><td>canvas画布高度，单位px</td><td>number</td><td>-</td><td><code>100</code></td><td>0.1.16</td></tr><tr><td><code>fullScreen</code></td><td>是否为全屏水印</td><td>boolean</td><td>-</td><td><code>true</code></td><td>0.1.16</td></tr><tr><td><code>color</code></td><td>水印字体颜色</td><td>string</td><td>-</td><td><code>&#39;#8c8c8c&#39;</code></td><td>0.1.16</td></tr><tr><td><code>size</code></td><td>水印字体大小，单位px</td><td>number</td><td>-</td><td><code>14</code></td><td>0.1.16</td></tr><tr><td><code>fontStyle</code></td><td>水印字体样式（仅微信、支付宝和h5支持）</td><td>string</td><td><code>normal</code> / <code>italic</code> / <code>oblique</code></td><td><code>&#39;normal&#39;</code></td><td>0.1.16</td></tr><tr><td><code>fontWeight</code></td><td>水印字体的粗细（仅微信、支付宝和h5支持）</td><td>string</td><td><code>normal</code> / <code>bold</code> / <code>bolder</code></td><td><code>&#39;normal&#39;</code></td><td>0.1.16</td></tr><tr><td><code>fontFamily</code></td><td>水印字体系列（仅微信、支付宝和h5支持）</td><td>string</td><td>-</td><td><code>&#39;PingFang SC&#39;</code></td><td>0.1.16</td></tr><tr><td><code>rotate</code></td><td>水印旋转角度</td><td>number</td><td>-</td><td><code>-25</code></td><td>0.1.16</td></tr><tr><td><code>zIndex</code></td><td>自定义层级</td><td>number</td><td>-</td><td><code>1100</code></td><td>0.1.16</td></tr><tr><td><code>opacity</code></td><td>自定义透明度，取值 0~1</td><td>number</td><td>-</td><td><code>0.5</code></td><td>0.1.16</td></tr></tbody></table><h2 id="源代码" tabindex="-1">源代码 <a class="header-anchor" href="#源代码" aria-label="Permalink to &quot;源代码&quot;">​</a></h2>',16);function E(m,u,y,b,F,w){const n=a("el-tag"),i=a("ExternalLink");return l(),o("div",null,[s("h1",k,[t("Watermark 水印 "),d(n,{text:"",style:{"vertical-align":"middle","margin-left":"8px"},effect:"plain"},{default:e(()=>[t("0.1.16")]),_:1}),t(),p]),g,d(i,{href:"https://github.com/Moonofweisheng/wot-design-uni/tree/master/src/pages/watermark"},{default:e(()=>[t("文档")]),_:1}),t(" • "),d(i,{href:"https://github.com/Moonofweisheng/wot-design-uni/tree/master/src/uni_modules/wot-design-uni/components/wd-watermark"},{default:e(()=>[t("组件")]),_:1})])}const q=h(c,[["render",E]]);export{f as __pageData,q as default};
