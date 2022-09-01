"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2669],{3905:(e,t,i)=>{i.r(t),i.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>u,useMDXComponents:()=>d,withMDXComponents:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o.apply(this,arguments)}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),m=function(e){return function(t){var i=d(t.components);return n.createElement(e,o({},t,{components:i}))}},d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(i),p=a,b=m["".concat(r,".").concat(p)]||m[p]||y[p]||o;return i?n.createElement(b,l(l({ref:t},c),{},{components:i})):n.createElement(b,l({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}b.displayName="MDXCreateElement"},19497:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=i(83117),a=i(80102),o=(i(67294),i(3905)),r=["components"],l={id:"accessibility",title:"Accessibility"},s=void 0,c={unversionedId:"mountablecomponents/accessibility",id:"mountablecomponents/accessibility",title:"Accessibility",description:"Why Accessibility is important",source:"@site/../docs/mountablecomponents/accessibility.mdx",sourceDirName:"mountablecomponents",slug:"/mountablecomponents/accessibility",permalink:"/docs/mountablecomponents/accessibility",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mountablecomponents/accessibility.mdx",tags:[],version:"current",frontMatter:{id:"accessibility",title:"Accessibility"}},m={},d=[{value:"Why Accessibility is important",id:"why-accessibility-is-important",level:2},{value:"Implementing Accessibility features for Mountable Components",id:"implementing-accessibility-features-for-mountable-components",level:2},{value:"Supported Accessibility properties and events",id:"supported-accessibility-properties-and-events",level:2}],p={toc:d};function y(e){var t=e.components,i=(0,a.Z)(e,r);return(0,o.mdx)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"why-accessibility-is-important"},"Why Accessibility is important"),(0,o.mdx)("p",null,"The fundamental purpose of an interface is to provide people with access to information. Accessibility is the foundation of an interface. All people experience limitations in their abilities, whether it's temporary, situational or permanent. The aim of accessibility is to remove any obstacles that reduce the experience of using, understanding, and navigating your interface."),(0,o.mdx)("p",null,"This page provides details of the Litho components, methods, nodes, events, and headings available to ensure your interface provides the 'full experience' promoted by Meta."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"For information on how Meta is committed to creating a full UI experience for ",(0,o.mdx)("strong",{parentName:"p"},"all")," people, see the ",(0,o.mdx)("a",{parentName:"p",href:"https://en-gb.facebook.com/accessibility/"},"Meta Accessibility")," site."))),(0,o.mdx)("h2",{id:"implementing-accessibility-features-for-mountable-components"},"Implementing Accessibility features for Mountable Components"),(0,o.mdx)("p",null,"Accessibility properties and events for Mountable Components can be implemented by adding them to Style object that will be returned on MountableWithStyle object from render() method."),(0,o.mdx)("p",null,"You can see an example of how to combine Style that was passed to Mountable Component with a newly created Style object that implements accessibility properties and events:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/SimpleImageViewWithAccessibility.kt start=start_simple_mountable_component_with_a11y_example end=end_simple_mountable_component_with_a11y_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/SimpleImageViewWithAccessibility.kt",start:"start_simple_mountable_component_with_a11y_example",end:"end_simple_mountable_component_with_a11y_example"},'class SimpleImageViewWithAccessibility(private val style: Style? = null) : MountableComponent() {\n\n  override fun MountableComponentScope.render(): MountableWithStyle {\n    val a11y =\n        Style.accessibilityRole(AccessibilityRole.IMAGE)\n            .accessibilityRoleDescription("Image View")\n            .importantForAccessibility(ImportantForAccessibility.YES)\n            .onInitializeAccessibilityNodeInfo {\n              it.superDelegate.onInitializeAccessibilityNodeInfo(it.host, it.info)\n              it.info.addAction(\n                  AccessibilityNodeInfoCompat.AccessibilityActionCompat(\n                      AccessibilityNodeInfoCompat.ACTION_CLICK, "actionDescriptionText"))\n            }\n\n    return MountableWithStyle(SimpleImageViewMountable(), style?.plus(a11y) ?: a11y)\n  }\n}\n')),(0,o.mdx)("h2",{id:"supported-accessibility-properties-and-events"},"Supported Accessibility properties and events"),(0,o.mdx)("p",null,"The following list provides the supported properties on Style object:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Style.accessibilityHeading"),(0,o.mdx)("li",{parentName:"ul"},"Style.accessibilityRole"),(0,o.mdx)("li",{parentName:"ul"},"Style.accessibilityRoleDescription"),(0,o.mdx)("li",{parentName:"ul"},"Style.contentDescription"),(0,o.mdx)("li",{parentName:"ul"},"Style.importantForAccessibility")),(0,o.mdx)("p",null,"The following table provides the supported events on Style object:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Event"),(0,o.mdx)("th",{parentName:"tr",align:null},"AccessibilityDelegate method"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Style.onInitializeAccessibilityEvent"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onInitializeAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)"},"onInitializeAccessibilityEvent"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Style.onInitializeAccessibilityNodeInfo"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onInitializeAccessibilityNodeInfo(android.view.View, android.support.v4.view.accessibility.AccessibilityNodeInfoCompat)"},"onInitializeAccessibilityNodeInfo"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Style.onPopulateAccessibilityEvent"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)"},"onPopulateAccessibilityEvent"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Style.onRequestSendAccessibilityEvent"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onRequestSendAccessibilityEvent(android.view.ViewGroup, android.view.View, android.view.accessibility.AccessibilityEvent)"},"onRequestSendAccessibilityEvent"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Style.performAccessibilityAction"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#performAccessibilityAction(android.view.View, int, android.os.Bundle)"},"performAccessibilityAction"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Style.sendAccessibilityEvent"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#sendAccessibilityEvent(android.view.View, int)"},"sendAccessibilityEvent"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Style.sendAccessibilityEventUnchecked"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#sendAccessibilityEventUnchecked(android.view.View, android.view.accessibility.AccessibilityEvent)"},"sendAccessibilityEventUnchecked"))))))}y.isMDXComponent=!0}}]);