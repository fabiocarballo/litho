"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5402],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>l});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){return function(t){var n=c(t.components);return o.createElement(e,r({},t,{components:n}))}},c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=c(n),u=a,g=l["".concat(i,".").concat(u)]||l[u]||d[u]||r;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={id:"custom-view-compat",title:"Compatibility with Custom Views"},m=void 0,p={unversionedId:"kotlin/custom-view-compat",id:"kotlin/custom-view-compat",title:"Compatibility with Custom Views",description:"This page details how to migrate custom Views to Litho Components when the existing widgets cannot be composed to achieve the UI you want.",source:"@site/../docs/kotlin/custom-view-compat.mdx",sourceDirName:"kotlin",slug:"/kotlin/custom-view-compat",permalink:"/docs/kotlin/custom-view-compat",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/custom-view-compat.mdx",tags:[],version:"current",frontMatter:{id:"custom-view-compat",title:"Compatibility with Custom Views"},sidebar:"mainSidebar",previous:{title:"Migration Strategies",permalink:"/docs/kotlin/migration-strategies"},next:{title:"Introduction",permalink:"/docs/codegen/overview"}},l={},c=[{value:"Views to Components",id:"views-to-components",level:2},{value:"Codegen component wrappers",id:"codegen-component-wrappers",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This page details how to migrate custom Views to Litho Components when the existing widgets cannot be composed to achieve the UI you want."),(0,r.mdx)("p",null,"Some cases when you might need this migration include:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Custom design systems with specialised widgets or measuring logic."),(0,r.mdx)("li",{parentName:"ul"},"Displaying Video, for which Litho doesn't provide a widget."),(0,r.mdx)("li",{parentName:"ul"},"Migrating a surface to Litho incrementally when you need to maintain a hybrid View-Component UI.")),(0,r.mdx)("h2",{id:"views-to-components"},"Views to Components"),(0,r.mdx)("p",null,"To learn how you can bridge a custom View or Drawable to a Component, follow the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs"},"Mount Specs")," page (in the Codege APIs secton)."),(0,r.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Bridging Views into Components is currently only supported through the Codegen MountSpec API."))),(0,r.mdx)("p",null,"You can compose MountSpec Components as you would compose any other KComponents, but they are instantiated using the Codegen Components Builder pattern.\nConsider the following MountSpec Component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/CircularImageSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/CircularImageSpec.kt",start:"start_example",end:"end_example"},"@MountSpec\nobject CircularImageSpec {\n\n  @OnCreateMountContent\n  fun onCreateMountContent(androidContext: Context): CustomImageView {\n    return CustomImageView(androidContext)\n  }\n\n  @OnMount\n  fun onMount(context: ComponentContext, image: CustomImageView, @Prop url: String) {\n    image.setUrl(url)\n  }\n}\n")),(0,r.mdx)("p",null,"You can create an instance of ",(0,r.mdx)("inlineCode",{parentName:"p"},"CircularImage")," in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"render()")," method of a KComponent using its Builder:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingBuilder.kt start=start_use_mount_spec end=end_use_mount_spec",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingBuilder.kt",start:"start_use_mount_spec",end:"end_use_mount_spec"},'override fun ComponentScope.render(): Component {\n  return CircularImage.create(context)\n      .widthDip(100f)\n      .heightDip(100f)\n      .marginDip(YogaEdge.TOP, 20f)\n      .url("image/url")\n      .build()\n}\n')),(0,r.mdx)("h2",{id:"codegen-component-wrappers"},"Codegen component wrappers"),(0,r.mdx)("p",null,"A common pattern for using Codegen MountSpec Components in KComponents is to wrap them in a ResourcesScope extension function and call that instead of the Builder to create the Component."),(0,r.mdx)("p",null,"This gives uniformity to your KComponent code as well as enabling you to seamlessly convert the Codegen MountSpec Components to a Kotlin DSL API when it becomes available without updating the existing usages."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/KotlinWrappers.kt start=start_kwrapper end=end_kwrapper",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/KotlinWrappers.kt",start:"start_kwrapper",end:"end_kwrapper"},"inline fun ResourcesScope.CircularImage(\n    url: String,\n    style: Style? = null,\n) = CircularImage.create(context).url(url).kotlinStyle(style).build()\n")),(0,r.mdx)("p",null,"After creating the wrapper, you can use a ",(0,r.mdx)("inlineCode",{parentName:"p"},"CircularImage")," Component as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingWrapper.kt start=start_use_mount_spec end=end_use_mount_spec",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingWrapper.kt",start:"start_use_mount_spec",end:"end_use_mount_spec"},'override fun ComponentScope.render(): Component {\n  return CircularImage(\n      url = "image/url", style = Style.width(100.dp).height(100.dp).margin(top = 10.dp))\n}\n')))}d.isMDXComponent=!0}}]);