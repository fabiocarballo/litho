"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5402],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>w,useMDXComponents:()=>l,withMDXComponents:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){return function(t){var n=l(t.components);return o.createElement(e,a({},t,{components:n}))}},l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,d=c["".concat(i,".").concat(u)]||c[u]||g[u]||a;return n?o.createElement(d,m(m({ref:t},p),{},{components:n})):o.createElement(d,m({ref:t},p))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[d]="string"==typeof e?e:r,i[1]=m;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],m={id:"custom-view-compat",title:"Compatibility with Custom Views"},s=void 0,p={unversionedId:"kotlin/custom-view-compat",id:"kotlin/custom-view-compat",title:"Compatibility with Custom Views",description:"This section contains information about the old Java Spec API.",source:"@site/../docs/kotlin/custom-view-compat.mdx",sourceDirName:"kotlin",slug:"/kotlin/custom-view-compat",permalink:"/docs/kotlin/custom-view-compat",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/custom-view-compat.mdx",tags:[],version:"current",frontMatter:{id:"custom-view-compat",title:"Compatibility with Custom Views"},sidebar:"mainSidebar",previous:{title:"Migration Strategies",permalink:"/docs/kotlin/migration-strategies"},next:{title:"Introduction",permalink:"/docs/codegen/overview"}},c={},l=[{value:"Views to Components",id:"views-to-components",level:2},{value:"Codegen component wrappers",id:"codegen-component-wrappers",level:2}],u={toc:l},d="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.mdx)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("admonition",{type:"caution"},(0,a.mdx)("p",{parentName:"admonition"},"This section contains information about the old Java Spec API.\nFor new development, the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/overview"},"Primitive Components")," is a recommended way to migrate from custom Views to Litho Components.")),(0,a.mdx)("p",null,"This page details how to migrate custom Views to Litho Components when the existing widgets cannot be composed to achieve the UI you want."),(0,a.mdx)("p",null,"Some cases when you might need this migration include:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Custom design systems with specialised widgets or measuring logic."),(0,a.mdx)("li",{parentName:"ul"},"Displaying Video, for which Litho doesn't provide a widget."),(0,a.mdx)("li",{parentName:"ul"},"Migrating a surface to Litho incrementally when you need to maintain a hybrid View-Component UI.")),(0,a.mdx)("h2",{id:"views-to-components"},"Views to Components"),(0,a.mdx)("p",null,"To learn how you can bridge a custom View or Drawable to a Component, follow the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs"},"Mount Specs")," page (in the Codege APIs secton)."),(0,a.mdx)("admonition",{type:"info"},(0,a.mdx)("p",{parentName:"admonition"},"Bridging Views into Components is currently only supported through the Codegen MountSpec API.")),(0,a.mdx)("p",null,"You can compose MountSpec Components as you would compose any other KComponents, but they are instantiated using the Codegen Components Builder pattern.\nConsider the following MountSpec Component:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/CircularImageSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/CircularImageSpec.kt",start:"start_example",end:"end_example"},"@MountSpec\nobject CircularImageSpec {\n\n  @OnCreateMountContent\n  fun onCreateMountContent(androidContext: Context): CustomImageView {\n    return CustomImageView(androidContext)\n  }\n\n  @OnMount\n  fun onMount(context: ComponentContext, image: CustomImageView, @Prop url: String) {\n    image.setUrl(url)\n  }\n}\n")),(0,a.mdx)("p",null,"You can create an instance of ",(0,a.mdx)("inlineCode",{parentName:"p"},"CircularImage")," in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"render()")," method of a KComponent using its Builder:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingBuilder.kt start=start_use_mount_spec end=end_use_mount_spec",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingBuilder.kt",start:"start_use_mount_spec",end:"end_use_mount_spec"},'override fun ComponentScope.render(): Component {\n  return CircularImage.create(context)\n      .widthDip(100f)\n      .heightDip(100f)\n      .marginDip(YogaEdge.TOP, 20f)\n      .url("image/url")\n      .build()\n}\n')),(0,a.mdx)("h2",{id:"codegen-component-wrappers"},"Codegen component wrappers"),(0,a.mdx)("p",null,"A common pattern for using Codegen MountSpec Components in KComponents is to wrap them in a ResourcesScope extension function and call that instead of the Builder to create the Component."),(0,a.mdx)("p",null,"This gives uniformity to your KComponent code as well as enabling you to seamlessly convert the Codegen MountSpec Components to a Kotlin DSL API when it becomes available without updating the existing usages."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/KotlinWrappers.kt start=start_kwrapper end=end_kwrapper",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/KotlinWrappers.kt",start:"start_kwrapper",end:"end_kwrapper"},"inline fun ResourcesScope.CircularImage(\n    url: String,\n    style: Style? = null,\n) = CircularImage.create(context).url(url).kotlinStyle(style).build()\n")),(0,a.mdx)("p",null,"After creating the wrapper, you can use a ",(0,a.mdx)("inlineCode",{parentName:"p"},"CircularImage")," Component as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingWrapper.kt start=start_use_mount_spec end=end_use_mount_spec",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/viewcompat/RootComponentUsingWrapper.kt",start:"start_use_mount_spec",end:"end_use_mount_spec"},'override fun ComponentScope.render(): Component {\n  return CircularImage(\n      url = "image/url", style = Style.width(100.dp).height(100.dp).margin(top = 10.dp))\n}\n')))}g.isMDXComponent=!0}}]);