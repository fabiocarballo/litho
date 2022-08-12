"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6378],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>l,withMDXComponents:()=>c});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){return function(n){var t=l(n.components);return o.createElement(e,i({},n,{components:t}))}},l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,f=c["".concat(a,".").concat(d)]||c[d]||u[d]||i;return t?o.createElement(f,p(p({ref:n},s),{},{components:t})):o.createElement(f,p({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var o=t(83117),r=t(80102),i=(t(67294),t(3905)),a=["components"],p={id:"using-components",title:"Using Components"},m=void 0,s={unversionedId:"using-components",id:"using-components",title:"Using Components",description:"Generated component classes provide a simple builder with the props you defined in your component spec. In order to use the generated component in your UI, you'll need a LithoView, which is an Android ViewGroup that is able to render components.",source:"@site/../docs/using-components.md",sourceDirName:".",slug:"/using-components",permalink:"/docs/using-components",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/using-components.md",tags:[],version:"current",frontMatter:{id:"using-components",title:"Using Components"}},c={},l=[],d={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.mdx)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Generated component classes provide a simple builder with the props you defined in your component ",(0,i.mdx)("em",{parentName:"p"},"spec"),". In order to use the generated component in your UI, you'll need a ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/LithoView.html"},"LithoView"),", which is an Android ",(0,i.mdx)("inlineCode",{parentName:"p"},"ViewGroup")," that is able to render components."),(0,i.mdx)("p",null,"You can assign a component to be rendered by a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'final Component component = MyComponent.create(c)\n    .title("My title")\n    .imageUri(Uri.parse("http://example.com/myimage"))\n    .build();\nLithoView view = LithoView.create(c, component);\n')),(0,i.mdx)("p",null,"In this example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyComponent")," will be laid out by the hosting ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView"),", which you can use in your application as you would normally use an Android View. See the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial"},"tutorial")," for an example on how to use it in an Activity."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," from this example, if directly used in your view hierarchy as is, will perform layout synchronously on the main thread."))),(0,i.mdx)("p",null,"For more information about performing layout off the main thread, see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/asynchronous-layout"},"Async Layout"),"."))}u.isMDXComponent=!0}}]);