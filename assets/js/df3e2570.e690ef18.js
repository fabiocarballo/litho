"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8169],{3905:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i.apply(this,arguments)}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),m=function(e){return function(t){var o=c(t.components);return r.createElement(e,i({},t,{components:o}))}},c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,h=m["".concat(a,".").concat(d)]||m[d]||p[d]||i;return o?r.createElement(h,l(l({ref:t},u),{},{components:o})):r.createElement(h,l({ref:t},u))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},33706:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=o(83117),n=o(80102),i=(o(67294),o(3905)),a=["components"],l={id:"overview",title:"Overview"},s=void 0,u={unversionedId:"tutorial/overview",id:"tutorial/overview",title:"Overview",description:"This tutorial doesn\u2019t assume you have existing Litho knowledge.",source:"@site/../docs/tutorial/overview.md",sourceDirName:"tutorial",slug:"/tutorial/overview",permalink:"/docs/tutorial/overview",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"mainSidebar",previous:{title:"Motivation",permalink:"/docs/intro/motivation"},next:{title:"Setting up the Project",permalink:"/docs/tutorial/project-setup"}},m={},c=[{value:"Getting the most from the tutorial",id:"getting-the-most-from-the-tutorial",level:2}],d={toc:c};function p(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This tutorial doesn\u2019t assume you have existing Litho knowledge."))),(0,i.mdx)("p",null,"In this tutorial, you'll build a small Instagram clone. During the process, you'll use core APIs around props, state, and defining lists."),(0,i.mdx)("p",null,"The tutorial's content is divided into the following sections:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/tutorial/project-setup"},"Setting up the Project")," - helps you set up the environment for the rest of the tutorial."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/tutorial/first-components"},"Components and Props")," - learn the basic Litho building blocks, write a simple ",(0,i.mdx)("em",{parentName:"li"},"Component"),", extend it to accept ",(0,i.mdx)("em",{parentName:"li"},"props"),", and become familiar with building layouts with Flexbox in Litho."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/tutorial/intoducing-layout"},"Introducing Layout")," - helps you to become familiar with building layouts with Flexbox."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/tutorial/adding-state"},"Adding State")," - teaches you how to make your Components interactive."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/tutorial/building-lists"},"Building Lists")," - gives an overview of how to build lists in Litho.")),(0,i.mdx)("h2",{id:"getting-the-most-from-the-tutorial"},"Getting the most from the tutorial"),(0,i.mdx)("p",null,"The way to get the most out of this tutorial is to 'learn by coding'. So, rather than just reading through the text, it's a good idea to 'try out' the code and experiment with your ideas."),(0,i.mdx)("p",null,"You don\u2019t have to complete all of the sections at once to get the value out of this tutorial. Try to get as far as you can, even if it\u2019s just one or two sections per session."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," Before you dive into the tutorial, it's highly recommended you watch this short video on how Litho functions and how a Litho component gets turned into a View on the screen:"),(0,i.mdx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/t9wTHnCx5RM",title:"Litho Lessons: Component to Screen",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}p.isMDXComponent=!0}}]);