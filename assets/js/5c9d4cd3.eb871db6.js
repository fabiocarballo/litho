"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2261],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>u,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){return function(n){var t=m(n.components);return a.createElement(e,i({},n,{components:t}))}},m=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),d=o,y=p["".concat(r,".").concat(d)]||p[d]||h[d]||i;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},74273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=t(83117),o=t(80102),i=(t(67294),t(3905)),r=["components"],s={id:"transition-key-types",title:"Transition Key Scoping"},l=void 0,c={unversionedId:"animations/transition-key-types",id:"animations/transition-key-types",title:"Transition Key Scoping",description:"Within the other pages of the 'Animations' section, a common approach is used when defining transitions: assigning transition keys and creating transitions, all within a single ComponentSpec.",source:"@site/../docs/animations/transition-key-types.md",sourceDirName:"animations",slug:"/animations/transition-key-types",permalink:"/docs/animations/transition-key-types",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-key-types.md",tags:[],version:"current",frontMatter:{id:"transition-key-types",title:"Transition Key Scoping"},sidebar:"mainSidebar",previous:{title:"More Ways to Define Transitions",permalink:"/docs/animations/transition-definitions"},next:{title:"Handling Visibility",permalink:"/docs/mainconcepts/coordinate-state-actions/visibility-handling"}},p={},m=[],d={toc:m};function h(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Within the other pages of the 'Animations' section, a common approach is used when defining transitions: assigning transition keys and creating transitions, all within a single ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentSpec"),"."),(0,i.mdx)("p",null,"There are situations where this approach is not suitable, such as when the transition key is assigned within one ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentSpec")," while the transitions themselves are defined in another."),(0,i.mdx)("p",null,"If an attempt to try to do everything using the same approach contained in the other pages of the Animations section is taken, it won't work. It will look like there are no transitions defined, as shown in the following two LayoutSpecs:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java start=not_working_start end=not_working_end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java",start:"not_working_start",end:"not_working_end"},"@LayoutSpec\npublic class GlobalKeyParentComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return GlobalKeyTransitionComponent.create(c).build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(GlobalKeyTransitionComponentSpec.SQUARE_KEY)\n        .animate(AnimatedProperties.X);\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java start=not_working_start end=not_working_end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java",start:"not_working_start",end:"not_working_end"},'@LayoutSpec\npublic class GlobalKeyTransitionComponentSpec {\n  public static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .child(\n            SolidColor.create(c)\n                .color(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .transitionKey(SQUARE_KEY))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .clickHandler(GlobalKeyTransitionComponent.onClickEvent(c))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    GlobalKeyTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n}\n')),(0,i.mdx)("p",null,"The reason it won't work is that, ",(0,i.mdx)("strong",{parentName:"p"},"by default, transition keys are only visible within the scope of the component spec in which they are used"),"."),(0,i.mdx)("p",null,"The scope of transition keys is determined by the ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html"},"TransitionKeyType"),", for which there are two options:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html#LOCAL"},"LOCAL")," - the default type; only visible within the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentSpec")," where it's used."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html#GLOBAL"},"GLOBAL")," - makes a transition key visible through the whole ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentTree"),". The drawback here is that the keys should be unique within the tree. It usually takes extra effort to use several components of the same type that assign the ",(0,i.mdx)("inlineCode",{parentName:"li"},"GLOBAL")," transition keys within one tree to avoid transition key collisions.")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Litho throws an exception when a transition key collision occurs, which may not be trivial to debug and resolve in the case of ",(0,i.mdx)("inlineCode",{parentName:"p"},"GLOBAL")," transition keys. It's recommended that you use ",(0,i.mdx)("inlineCode",{parentName:"p"},"LOCAL")," transition keys and assign those keys within the same Spec that defined them.")),(0,i.mdx)("p",null,"There are two ways to change the transition key type:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Use ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Component.Builder.html#transitionKeyType-com.facebook.litho.Transition.TransitionKeyType-"},"Component.Builder#transitionKeyType()")," when assigning a key to a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component"),"."),(0,i.mdx)("li",{parentName:"ol"},"When creating a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition"),", use a version of ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-com.facebook.litho.Transition.TransitionKeyType-java.lang.String-"},"Transition.create()")," that takes the ",(0,i.mdx)("inlineCode",{parentName:"li"},"TransitionKeyType")," argument along with the key itself.")),(0,i.mdx)("p",null,"The following LayoutSpecs are the ones shown at the top of this page but amended to include ",(0,i.mdx)("inlineCode",{parentName:"p"},"TransitionKeyType.GLOBAL"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java start=start_working end=end_working",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java",start:"start_working",end:"end_working"},"@LayoutSpec\npublic class GlobalKeyParentComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return GlobalKeyTransitionComponent.create(c).build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(\n            Transition.TransitionKeyType.GLOBAL, GlobalKeyTransitionComponentSpec.SQUARE_KEY)\n        .animate(AnimatedProperties.X);\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java start=start_working end=end_working",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java",start:"start_working",end:"end_working"},'@LayoutSpec\npublic class GlobalKeyTransitionComponentSpec {\n  public static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .child(\n            SolidColor.create(c)\n                .color(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .transitionKeyType(Transition.TransitionKeyType.GLOBAL)\n                .transitionKey(SQUARE_KEY))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .clickHandler(GlobalKeyTransitionComponent.onClickEvent(c))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    GlobalKeyTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n}\n')))}h.isMDXComponent=!0}}]);