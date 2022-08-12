"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2621],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>m,withMDXComponents:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){return function(t){var a=m(t.components);return n.createElement(e,i({},t,{components:a}))}},m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(a),p=o,h=c["".concat(r,".").concat(p)]||c[p]||u[p]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function v(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],l={id:"state-for-specs",title:"State in Specs"},d=void 0,s={unversionedId:"codegen/state-for-specs",id:"codegen/state-for-specs",title:"State in Specs",description:"This page introduces the concept of state in a component written using the Java Spec API, namely a @LayoutSpec or @MountSpec.",source:"@site/../docs/codegen/state-for-specs.md",sourceDirName:"codegen",slug:"/codegen/state-for-specs",permalink:"/docs/codegen/state-for-specs",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/state-for-specs.md",tags:[],version:"current",frontMatter:{id:"state-for-specs",title:"State in Specs"},sidebar:"mainSidebar",previous:{title:"TreeProps",permalink:"/docs/codegen/passing-data-to-components/treeprops"},next:{title:"Events for Specs",permalink:"/docs/codegen/events-for-specs"}},c={},m=[{value:"Adding Local State to a Component",id:"adding-local-state-to-a-component",level:2},{value:"1. Replace the <code>counter</code> prop declaration with a state declaration",id:"1-replace-the-counter-prop-declaration-with-a-state-declaration",level:3},{value:"2. Set an initial value for the <code>count</code> state",id:"2-set-an-initial-value-for-the-count-state",level:3},{value:"3. Use the state value",id:"3-use-the-state-value",level:3},{value:"Updating State",id:"updating-state",level:2},{value:"1. Set click handlers on the buttons",id:"1-set-click-handlers-on-the-buttons",level:3},{value:"2. Update the state value in the click handlers",id:"2-update-the-state-value-in-the-click-handlers",level:3},{value:"State API reference and considerations",id:"state-api-reference-and-considerations",level:2},{value:"Data Immutability",id:"data-immutability",level:3},{value:"Component identity",id:"component-identity",level:3},{value:"Initialising State values",id:"initialising-state-values",level:3},{value:"Updating State values",id:"updating-state-values",level:3}],p={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This page introduces the concept of state in a component written using the Java Spec API, namely a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"@MountSpec"),"."),(0,i.mdx)("p",{parentName:"div"},"If you aren't using the Spec API, refer to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page."))),(0,i.mdx)("p",null,"A component can have two types of data:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Props")," - passed down from the parent and cannot change during a component's lifecycle."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"State")," - state data is encapsulated and managed within the component and is transparent to the parent.")),(0,i.mdx)("p",null,"This page uses the example of a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Counter")," component, in which you can click a button to increase or decrease a value. The example helps you to learn how to use State to make the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Counter")," component reusable and encapsulated; it provides an overview of adding state to a component."),(0,i.mdx)("p",null,"You can start by encapsulating how the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Counter")," looks:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass CounterComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop int count) {\n    return Row.create(c)\n        .child(Text.create(c).text("+"))\n        .child(Text.create(c).text("" + count))\n        .child(Text.create(c).text("-"))\n        .build();\n  }\n}\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Counter")," component is missing a crucial feature: interacting with the buttons to update the count value."),(0,i.mdx)("p",null,"Ideally, you'd want this component to encapsulate all this behaviour in its internal implementation, which would mean you'd write it once then reuse it anywhere you need a counter, as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"final CounterComponent counter = CounterComponent.create().build();\n")),(0,i.mdx)("p",null,"To implement this, you need to add 'state' to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Counter")," component."),(0,i.mdx)("h2",{id:"adding-local-state-to-a-component"},"Adding Local State to a Component"),(0,i.mdx)("p",null,"You can change the ",(0,i.mdx)("inlineCode",{parentName:"p"},"counter")," from prop to state in three steps:"),(0,i.mdx)("h3",{id:"1-replace-the-counter-prop-declaration-with-a-state-declaration"},"1. Replace the ",(0,i.mdx)("inlineCode",{parentName:"h3"},"counter")," prop declaration with a state declaration"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nclass CounterComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State int count) {\n    return Row.create(c)\n        //...\n        .build();\n  }\n}\n")),(0,i.mdx)("h3",{id:"2-set-an-initial-value-for-the-count-state"},"2. Set an initial value for the ",(0,i.mdx)("inlineCode",{parentName:"h3"},"count")," state"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateInitialState\nstatic void onCreateInitialState(ComponentContext c, StateValue<Integer> count) {\n  count.set(1);\n}\n")),(0,i.mdx)("h3",{id:"3-use-the-state-value"},"3. Use the state value"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State int count) {\n    return Row.create(c)\n        .child(Text.create(c).text("+"))\n        .child(Text.create(c).text("" + count))\n        .child(Text.create(c).text("-"))\n        .build();\n  }\n')),(0,i.mdx)("h2",{id:"updating-state"},"Updating State"),(0,i.mdx)("p",null,"Next, you'll make the Counter component update the count value when the increase or decrease buttons are clicked, in two steps:"),(0,i.mdx)("h3",{id:"1-set-click-handlers-on-the-buttons"},"1. Set click handlers on the buttons"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State int count) {\n    return Row.create(c)\n        .child(Text.create(c).text("+").clickHandler(CounterComponent.onClickIncrease(c)))\n        .child(Text.create(c).text("" + count))\n        .child(Text.create(c).text("-").clickHandler(CounterComponent.onClickDecrease(c)))\n        .build();\n  }\n\n@OnEvent(ClickEvent.class)\nstatic void onClickIncrease(ComponentContext c) {}\n\n@OnEvent(ClickEvent.class)\nstatic void onClickDecrease(ComponentContext c) {}\n')),(0,i.mdx)("h3",{id:"2-update-the-state-value-in-the-click-handlers"},"2. Update the state value in the click handlers"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/identity/CounterComponentSpec.java start=start_counter end=end_counter",file:"sample/src/main/java/com/facebook/samples/litho/java/identity/CounterComponentSpec.java",start:"start_counter",end:"end_counter"},'@LayoutSpec\nclass CounterComponentSpec {\n\n  @OnCreateInitialState\n  static void onCreateInitialState(ComponentContext c, StateValue<Integer> count) {\n    count.set(1);\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State int count) {\n    return Row.create(c)\n        .child(Text.create(c).text("+").clickHandler(CounterComponent.onClickIncrease(c)))\n        .child(Text.create(c).text("" + count))\n        .child(Text.create(c).text("-").clickHandler(CounterComponent.onClickDecrease(c)))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickIncrease(ComponentContext c) {\n    CounterComponent.increase(c);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickDecrease(ComponentContext c) {\n    CounterComponent.decrease(c);\n  }\n\n  @OnUpdateState\n  static void increase(StateValue<Integer> count) {\n    count.set(count.get() + 1);\n  }\n\n  @OnUpdateState\n  static void decrease(StateValue<Integer> count) {\n    count.set(count.get() - 1);\n  }\n}\n')),(0,i.mdx)("h2",{id:"state-api-reference-and-considerations"},"State API reference and considerations"),(0,i.mdx)("h3",{id:"data-immutability"},"Data Immutability"),(0,i.mdx)("p",null,"Due to background layout, state can be accessed anytime by multiple threads. To ensure thread safety, state objects should be immutable (if for some rare reason this is not possible, then at least thread safe). The simplest solution is to express your state in terms of primitives since primitives are, by definition, immutable."),(0,i.mdx)("h3",{id:"component-identity"},"Component identity"),(0,i.mdx)("p",null,"Litho uses keys to keep track of component identity between layout changes and correctly identify a component as the target of a state update. For more information on how the component identity functions, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/keys-and-identity"},"Keys and Component Identity")," page."),(0,i.mdx)("h3",{id:"initialising-state-values"},"Initialising State values"),(0,i.mdx)("p",null,"State initialisation is guaranteed to happen once and only once for a component based on its ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/keys-and-identity"},"identity"),", even if there are multiple threads attempting to calculate the layout for the same component in parallel."),(0,i.mdx)("p",null,"In the Java API, the method annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateInitialState")," is guaranteed to be called just once during a component's lifecycle."),(0,i.mdx)("p",null,"This is an important consideration that you should keep in mind when you use prop values to initialize state. Passing new props to a component does not call the initializer again; a state value can only be updated after it was initialized by using the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/state-for-specs#updating-state"},"state update APIs"),"."),(0,i.mdx)("p",null,"In the Java API, to set an initial value for a state, you have to write a method annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateInitialState")," in your spec.\nThe following are points to keep in mind when writing an ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateInitialState")," method:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The first parameter must be of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentContext"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@Prop")," parameters are allowed, but ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnCreateInitialState")," methods are not called again if the props change."),(0,i.mdx)("li",{parentName:"ul"},"All other parameters must have a corresponding parameter annotated with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@State")," in the other lifecycle methods, and their type must be a ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/StateValue.html"},"StateValue")," that is parameterized with the type of the matching ",(0,i.mdx)("inlineCode",{parentName:"li"},"@State")," element."),(0,i.mdx)("li",{parentName:"ul"},"Initializing a state value is not mandatory and implementing an ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnCreateInitialState")," method can be entirely skipped. If a state value is not explicitly initialised, the initial state is assigned the default value of its inferred type. For example, ",(0,i.mdx)("inlineCode",{parentName:"li"},"0")," for integer state, ",(0,i.mdx)("inlineCode",{parentName:"li"},"false")," for Boolean state or ",(0,i.mdx)("inlineCode",{parentName:"li"},"null")," for Objects."),(0,i.mdx)("li",{parentName:"ul"},"You should never need to call the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnCreateInitialState")," method yourself.")),(0,i.mdx)("h3",{id:"updating-state-values"},"Updating State values"),(0,i.mdx)("p",null,"Every state update triggers a new layout calculation for its ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),". Passing new props to a Litho component and updating the state are implemented in the same way in Litho, so there is no performance difference. To understand when you should update a Component using new props or updating state, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/best-practices/props-vs-state"},"Props vs. State")," page."),(0,i.mdx)("p",null,"However, Litho implements a feature called reconciliation, which attempts to detect what part of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," is affected by that state update and reuse the layout for the nodes that don't need to change.\nState updates can be performed synchronously on the same thread that they were triggered from, or asynchronously from Litho's background thread."),(0,i.mdx)("p",null,"The following points should be kept in mind when updating a state value:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Avoid calling state update methods in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnCreateLayout")," method of a component. Every state update method triggers a new layout calculation, which re-invokes the render method of the component that triggered the state update. This can easily lead to an infinite loop. You should consider whether a ",(0,i.mdx)("a",{parentName:"li",href:"#lazy-state"},"lazy state")," update would be more appropriate for your use case, and only use state updates in a render method if you're absolutely certain that the state update is conditionally called and can only be triggered a limited number of times."),(0,i.mdx)("li",{parentName:"ul"},"In ",(0,i.mdx)("a",{parentName:"li",href:"/docs/codegen/mount-specs"},"MountSpecs"),", state updates are not allowed in ",(0,i.mdx)("inlineCode",{parentName:"li"},"bind")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"mount")," methods as they cause a runtime exception if used. If you need to update a state value in those methods, you should instead use a ",(0,i.mdx)("a",{parentName:"li",href:"#lazy-state"},"lazy state")," update.")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"In the Java API, you can define how a component's state or states should be updated by declaring methods annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnUpdateState")," in the specs. You can have as many ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnUpdateState")," methods as you need, according to what states you want to update or what parameters your states depend on."),(0,i.mdx)("p",{parentName:"div"},"The following points should be considered when writing an ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnUpdateState")," method:"),(0,i.mdx)("ul",{parentName:"div"},(0,i.mdx)("li",{parentName:"ul"},"Parameters representing the state values must match the name of a parameter annotated with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@State")," and used in other lifecycle methods, and their type must be a ",(0,i.mdx)("inlineCode",{parentName:"li"},"StateValue")," parameterized with the type of the matching ",(0,i.mdx)("inlineCode",{parentName:"li"},"@State"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@Prop"),"s are not allowed, but ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Param")," parameters are. If the value of your state depends on props, you can pass them as ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Param")," params from the lifecycle methods that call the state update methods. For each ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnUpdateState")," method in your spec, the generated component has two methods that delegate to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnUpdateStUpdate the state value in the click handlerate")," method under the hood:"),(0,i.mdx)("li",{parentName:"ul"},"A static method with the same name, which asynchronously applies the state updates."),(0,i.mdx)("li",{parentName:"ul"},"A static method with the same name and a ",(0,i.mdx)("em",{parentName:"li"},"Sync")," suffix, which synchronously triggers the state updates. Both methods take a ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentContext")," as first parameter, followed by all the parameters declared with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Param")," in your ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnUpdateState")," method.")),(0,i.mdx)("h2",{parentName:"div",id:"lazy-state"},"Lazy State"),(0,i.mdx)("p",{parentName:"div"},"For situations where you want to update the value of a state but don't need to immediately trigger a new layout calculation, you can use ",(0,i.mdx)("strong",{parentName:"p"},"lazy state updates"),". After a lazy state update, the new state value is visible in event handlers, but a new layout is not triggered.\nCurrently, the value is immediately visible to the event handler but ",(0,i.mdx)("strong",{parentName:"p"},"not")," visible to other lifecycle callbacks (such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"onMount"),")."),(0,i.mdx)("p",{parentName:"div"},"Lazy state is useful for updating state values that don't need to be reflected in the UI. For example, say you want to log an analytics event only the first time a component becomes visible. If you use lazy state, you can record whether a log was sent in a lazy state variable without causing the UI to reflow."),(0,i.mdx)("p",{parentName:"div"},"Lazy state can still be used for regular state updates."),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/identity/IdentityRootComponentSpec.java start=start_lazy_state end=end_lazy_state",file:"sample/src/main/java/com/facebook/samples/litho/java/identity/IdentityRootComponentSpec.java",start:"start_lazy_state",end:"end_lazy_state"},"@OnEvent(VisibleEvent.class)\nstatic void onClickEvent(ComponentContext c, @State(canUpdateLazily = true) boolean logOnce) {\n  if (!logOnce) {\n    // do some logging\n    IdentityRootComponent.lazyUpdateLogOnce(c, true);\n  }\n}\n")))))}u.isMDXComponent=!0}}]);