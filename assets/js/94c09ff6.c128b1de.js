"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[888],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>s});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){return function(t){var n=m(t.components);return o.createElement(e,i({},t,{components:n}))}},m=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(n),p=r,f=s["".concat(a,".").concat(p)]||s[p]||u[p]||i;return n?o.createElement(f,c(c({ref:t},d),{},{components:n})):o.createElement(f,c({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=(n(86341),["components"]),c={id:"reconciliation",title:"Introduction"},l=void 0,d={unversionedId:"deep-dive/reconciliation",id:"deep-dive/reconciliation",title:"Introduction",description:"Reconciliation is an implementation detail in Litho\u2019s layout calculation process. Instead of recreating the entire layout tree for every update, reconciliation enables Litho to clone the",source:"@site/../docs/deep-dive/reconciliation.mdx",sourceDirName:"deep-dive",slug:"/deep-dive/reconciliation",permalink:"/docs/deep-dive/reconciliation",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/deep-dive/reconciliation.mdx",tags:[],version:"current",frontMatter:{id:"reconciliation",title:"Introduction"}},s={},m=[{value:"Tradeoffs",id:"tradeoffs",level:2}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.mdx)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Reconciliation is an implementation detail in Litho\u2019s layout calculation process. Instead of recreating the entire layout tree for every update, reconciliation enables Litho to clone the\nunmodified subtrees and only recreate the subtree that has changed."),(0,i.mdx)("p",null,"When using Litho, the component hierarchy is determined by what is returned by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"OnCreateLayout")," method. On the next state or prop update, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"OnCreateLayout")," may return a different\ntree of components. Litho uses reconciliation to determine which components should be re-created and which can be re-used (read cloned)."),(0,i.mdx)("p",null,"In essence, this means Litho will not call (most) lifecycle methods of components which were unaffected by the update. Reconciliation enforces the requirement that component specs must\nbe immutable and should not rely on side effects to achieve any desired behaviour."),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"As of December 2020, reconciliation is only implemented for state updates."))),(0,i.mdx)("h2",{id:"tradeoffs"},"Tradeoffs"),(0,i.mdx)("p",null,"It's important to remember that reconciliation is just an implementation detail; it's used for optimsation aimed at improving performance and doesn't affect the end result."),(0,i.mdx)("p",null,"To clariify, re-creation in this context means calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"OnCreateLayout")," for the modified component, it doesn\u2019t mean Litho will unmount and remount them. Litho will only mount and unmount items that\nhave changed."),(0,i.mdx)("p",null,"In order to reconcile changes, Litho keeps the previous component hierarchy in memory. This increases memory usage and can potentially increase OOMs."))}u.isMDXComponent=!0}}]);