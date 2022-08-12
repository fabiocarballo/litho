"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1410],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>b,useMDXComponents:()=>s,withMDXComponents:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),m=function(e){return function(n){var t=s(n.components);return a.createElement(e,i({},n,{components:t}))}},s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,u=m["".concat(r,".").concat(p)]||m[p]||h[p]||i;return t?a.createElement(u,d(d({ref:n},c),{},{components:t})):a.createElement(u,d({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=t(83117),o=t(80102),i=(t(67294),t(3905)),r=t(44996),d=["components"],l={id:"onattached-ondetached",title:"OnAttached/OnDetached"},c=void 0,m={unversionedId:"onattached-ondetached",id:"onattached-ondetached",title:"OnAttached/OnDetached",description:"Sometimes we would like the component to subscribe a listener when it's available and unsubscribe the listener when the component is unavailable. Usually we can use VisibleEvent and InvisibleEvent handlers to subscribe/unsubscribe listeners.",source:"@site/../docs/onattached-ondetached.mdx",sourceDirName:".",slug:"/onattached-ondetached",permalink:"/docs/onattached-ondetached",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/onattached-ondetached.mdx",tags:[],version:"current",frontMatter:{id:"onattached-ondetached",title:"OnAttached/OnDetached"}},s={},p=[{value:"Introduce OnAttached/OnDetached lifecycle methods",id:"introduce-onattachedondetached-lifecycle-methods",level:2},{value:"When is @OnAttached method called?",id:"when-is-onattached-method-called",level:2},{value:"When is @OnDetached method called?",id:"when-is-ondetached-method-called",level:2},{value:"Sample app",id:"sample-app",level:2}],h={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Sometimes we would like the component to subscribe a listener when it's available and unsubscribe the listener when the component is unavailable. Usually we can use ",(0,i.mdx)("inlineCode",{parentName:"p"},"VisibleEvent")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"InvisibleEvent")," handlers to subscribe/unsubscribe listeners."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnEvent(VisibleEvent.class)\nstatic void onVisible(\n    ComponentContext c, @Prop DataSource dataSource, @State SomeListener listener) {\n  dataSource.subscribe(listener);\n}\n\n@OnEvent(InvisibleEvent.class)\nstatic void onInvisible(\n    ComponentContext c, @Prop DataSource dataSource, @State SomeListener listener) {\n  dataSource.unsubscribe(listener);\n}\n")),(0,i.mdx)("p",null,"However, there're a few drawbacks with this approach:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"VisibleEvent")," handler might not be called because the component isn't visible in the viewport, or might be called multiple times without changing the component. Similar issue with ",(0,i.mdx)("inlineCode",{parentName:"li"},"InvisibleEvent")," handler. It's hard to use these event handlers to manage listeners/resources."),(0,i.mdx)("li",{parentName:"ul"},"There's no guarantee that ",(0,i.mdx)("inlineCode",{parentName:"li"},"VisibleEvent"),"/",(0,i.mdx)("inlineCode",{parentName:"li"},"InvisibleEvent")," handlers are executed in order.")),(0,i.mdx)("p",null,"Method annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached")," is called when the component is attached to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),", and method annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," is called when either it's removed from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," or the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," is released. For each component, both the methods are guaranteed to be called at most once."),(0,i.mdx)("h2",{id:"introduce-onattachedondetached-lifecycle-methods"},"Introduce OnAttached/OnDetached lifecycle methods"),(0,i.mdx)("p",null,"By introducing these two methods, now we can subscribe the listener in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached")," method and unsubscribe it in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," method."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnAttached\nprotected void onAttached(\n    ComponentContext c, @Prop DataSource dataSource, @State SomeListener listener) {\n  dataSource.subscribe(listener);\n}\n\n@OnDetached\nprotected void onDetached(\n    ComponentContext c, @Prop DataSource dataSource, @State SomeListener listener) {\n  dataSource.unsubscribe(listener);\n}\n")),(0,i.mdx)("p",{align:"center"},(0,i.mdx)("img",{src:(0,r.default)("/images/layout-spec-delegate-moethods.svg"),alt:"Image",width:"70%",height:"70%",className:"white-background"})),(0,i.mdx)("h2",{id:"when-is-onattached-method-called"},"When is @OnAttached method called?"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached")," is called when ",(0,i.mdx)("inlineCode",{parentName:"p"},"LayoutState")," is finalized and applied to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),". For each component in each ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached")," is guaranteed to be called only once."),(0,i.mdx)("h2",{id:"when-is-ondetached-method-called"},"When is @OnDetached method called?"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," is called either when"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView#release()")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentTree#release()")," is called. Usually you would need to release ",(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentTree")," manually in Activity/Fragment ",(0,i.mdx)("inlineCode",{parentName:"li"},"onDestroy()")," to trigger ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnDetached")," method."),(0,i.mdx)("li",{parentName:"ul"},"A new root is assigned to ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentTree"),", i.e ",(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView#setComponent()"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentTree#setRoot()")," or one of their async variants is called, and the old component doesn't exist in the root. For example:")),(0,i.mdx)("p",{align:"center"},(0,i.mdx)("img",{src:(0,r.default)("/images/set-new-root.png"),alt:"Image",width:"60%",height:"60%"})),(0,i.mdx)("p",null,"When a new root is applied, ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," methods for components ",(0,i.mdx)("inlineCode",{parentName:"p"},"C"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"D"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"E")," are called. You can see that even if component ",(0,i.mdx)("inlineCode",{parentName:"p"},"E")," still exists in the new root, its ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," is called as well, because its position has changed."),(0,i.mdx)("h2",{id:"sample-app"},"Sample app"),(0,i.mdx)("p",null,"Check out ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleDelegateActivity.java"},"Component Lifecycle Example")," in our sample app to understand the component lifecycle methods better!"))}u.isMDXComponent=!0}}]);