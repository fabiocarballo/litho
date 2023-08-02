"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3529],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>p});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){return function(r){var n=u(r.components);return t.createElement(e,a({},r,{components:n}))}},u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},m=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||a;return n?t.createElement(d,s(s({ref:r},l),{},{components:n})):t.createElement(d,s({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},53191:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"use-error-boundary",title:"useErrorBoundary"},c=void 0,l={unversionedId:"mainconcepts/use-error-boundary",id:"mainconcepts/use-error-boundary",title:"useErrorBoundary",description:"useErrorBoundary enables components to catch and handle errors higher up in the tree and provide appropriate fallback, logging or retry mechanisms.",source:"@site/../docs/mainconcepts/use-error-boundary.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/use-error-boundary",permalink:"/docs/mainconcepts/use-error-boundary",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/use-error-boundary.mdx",tags:[],version:"current",frontMatter:{id:"use-error-boundary",title:"useErrorBoundary"},sidebar:"mainSidebar",previous:{title:"useCached",permalink:"/docs/mainconcepts/use-cached"},next:{title:"useLiveData",permalink:"/docs/mainconcepts/use-live-data"}},p={},u=[{value:"Example: Showing an Error State in UI",id:"example-showing-an-error-state-in-ui",level:2},{value:"Re-throwing Errors",id:"re-throwing-errors",level:3},{value:"Why not Try/Catch?",id:"why-not-trycatch",level:2}],m={toc:u},d="wrapper";function h(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)(d,(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," enables components to catch and handle errors higher up in the tree and provide appropriate fallback, logging or retry mechanisms."),(0,a.mdx)("p",null,"A component becomes an error boundary when it declares a ",(0,a.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," hook. The lambda passed to ",(0,a.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," will receive any exceptions that are thrown while rendering or dispatching events of components sitting underneath the error boundary in the tree."),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," can be used in combination with ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-state"},"useState"),", to update the state with the exception that was caught. This will then trigger a render pass with the new state value in order to replace the crashing component with an error message, or not display it at all."),(0,a.mdx)("h2",{id:"example-showing-an-error-state-in-ui"},"Example: Showing an Error State in UI"),(0,a.mdx)("p",null,"The following code shows how a component can handle an error in one of its child components and render an error state instead of crashing the app:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KErrorBoundary.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KErrorBoundary.kt",start:"start_example",end:"end_example"},'class KErrorBoundary(private val childComponent: Component) : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val errorState = useState<Exception?> { null }\n    useErrorBoundary { exception: Exception -> errorState.update(exception) }\n\n    errorState.value?.let {\n      return Column(style = Style.margin(all = 16.dp)) {\n        child(KDebugComponent(message = "KComponent\'s Error Boundary", throwable = it))\n      }\n    }\n\n    return childComponent\n  }\n}\n')),(0,a.mdx)("h3",{id:"re-throwing-errors"},"Re-throwing Errors"),(0,a.mdx)("p",null,"An error boundary may choose to only handle certain classes of errors. You can re-throw an exception from within the ",(0,a.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," hook so that it propagates up the component tree until it is either caught by another error boundary or hits the root and causes a crash. This is done by calling ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/ComponentUtils.html#raise-com.facebook.litho.ComponentContext-java.lang.Exception-"},(0,a.mdx)("inlineCode",{parentName:"a"},"ComponentUtils.raise"))," with your context and the exception."),(0,a.mdx)("h2",{id:"why-not-trycatch"},"Why not Try/Catch?"),(0,a.mdx)("p",null,"You may be asking why all this additional infrastructure is necessary when you could just use try/catch. The problem is that there's no easily accessible place to wrap your component code using try/catch."),(0,a.mdx)("p",null,"The following snippet shows the use of try/catch:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KIncorrectErrorHandlingComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KIncorrectErrorHandlingComponent.kt",start:"start_example",end:"end_example"},'class KIncorrectErrorHandlingComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    // This implementation won\'t work - you need to implement error boundary with useErrorBoundary\n    // hook instead.\n    return try {\n      // PossiblyCrashingSubTitleComponent can crash\n      PossiblyCrashingSubTitleComponent.create(context).subtitle("example").build()\n    } catch (e: Exception) {\n      // error handling code\n      KDebugComponent(message = "Error Component", throwable = e)\n    }\n  }\n}\n')),(0,a.mdx)("p",null,"When using try/catch (as in the above code), if ",(0,a.mdx)("inlineCode",{parentName:"p"},"PossiblyCrashingSubTitleComponent")," throws an exception in ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCreateLayout"),", it wouldn't be caught! The reason for this is that you are just returning a declaration of your layout here and don't actually execute any code."),(0,a.mdx)("p",null,"This is the responsibility of the Litho framework, hence the need to provide higher-level infrastructure to give access to those errors."))}h.isMDXComponent=!0}}]);