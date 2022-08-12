"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8330],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),m=function(e){return function(n){var t=s(n.components);return r.createElement(e,a({},n,{components:t}))}},s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},x=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,x=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return t?r.createElement(x,o(o({ref:n},p),{},{components:t})):r.createElement(x,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=x;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}x.displayName="MDXCreateElement"},97497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],o={id:"builtin-widgets",title:"Built-in widgets"},d=void 0,p={unversionedId:"widgets/builtin-widgets",id:"widgets/builtin-widgets",title:"Built-in widgets",description:"This page covers the basic built-in widgets. You can find the full list of components and APIs within the com.facebook.litho.widget package in javadocs.",source:"@site/../docs/widgets/builtin-widgets.mdx",sourceDirName:"widgets",slug:"/widgets/builtin-widgets",permalink:"/docs/widgets/builtin-widgets",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/widgets/builtin-widgets.mdx",tags:[],version:"current",frontMatter:{id:"builtin-widgets",title:"Built-in widgets"},sidebar:"mainSidebar",previous:{title:"Interactions",permalink:"/docs/kotlin/testing-actions"},next:{title:"Migration Strategies",permalink:"/docs/kotlin/migration-strategies"}},m={},s=[{value:"Text",id:"text",level:2},{value:"Required Prop",id:"required-prop",level:3},{value:"Usage",id:"usage",level:3},{value:"TextInput",id:"textinput",level:2},{value:"Required Prop",id:"required-prop-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Image",id:"image",level:2},{value:"Required Prop",id:"required-prop-2",level:3},{value:"Usage",id:"usage-2",level:3},{value:"Card",id:"card",level:2},{value:"Required Prop",id:"required-prop-3",level:3},{value:"Usage",id:"usage-3",level:3},{value:"SolidColor",id:"solidcolor",level:2},{value:"Required Prop",id:"required-prop-4",level:3},{value:"Usage",id:"usage-4",level:3},{value:"Progress",id:"progress",level:2},{value:"Required Prop",id:"required-prop-5",level:3},{value:"Usage",id:"usage-5",level:3},{value:"Spinner",id:"spinner",level:2},{value:"Required Props",id:"required-props",level:3},{value:"Usage",id:"usage-6",level:3},{value:"VerticalScroll",id:"verticalscroll",level:2},{value:"Required Prop",id:"required-prop-6",level:3},{value:"Usage",id:"usage-7",level:3},{value:"HorizontalScroll",id:"horizontalscroll",level:2},{value:"Required Prop",id:"required-prop-7",level:3},{value:"Usage",id:"usage-8",level:3},{value:"Recycler",id:"recycler",level:2}],u={toc:s};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page covers the basic built-in widgets. You can find the full list of components and APIs within the ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/index.html?com/facebook/litho/widget/package-summary.html"},"com.facebook.litho.widget")," package in javadocs."),(0,a.mdx)("h2",{id:"text"},"Text"),(0,a.mdx)("p",null,"Shows simple text (the equivalent of an Android ",(0,a.mdx)("inlineCode",{parentName:"p"},"TextView")," within Litho)."),(0,a.mdx)("h3",{id:"required-prop"},"Required Prop"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"CharSequence text")," - text to display.")),(0,a.mdx)("h3",{id:"usage"},"Usage"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"Text")," has numerous optional props you can use to style your text, just as with ",(0,a.mdx)("inlineCode",{parentName:"p"},"TextView")," since both use ",(0,a.mdx)("inlineCode",{parentName:"p"},"android.text.Layout")," under the hood."),(0,a.mdx)("p",null,"A full list of the optional props is available in the ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/Text.html"},"javadocs"),"."),(0,a.mdx)("p",null,"Most props directly accept resources ids:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},'final Component component =\n    Text.create(c)\n        .text("This is my example text")\n        .textSizeRes(R.dimen.my_text_size)\n        .textColorRes(R.color.my_text_color)\n        .textAlignment(Layout.Alignment.ALIGN_CENTER)\n        .build();\n')),(0,a.mdx)("h2",{id:"textinput"},"TextInput"),(0,a.mdx)("p",null,"Renders an editable text input using an Android ",(0,a.mdx)("inlineCode",{parentName:"p"},"EditText"),"."),(0,a.mdx)("h3",{id:"required-prop-1"},"Required Prop"),(0,a.mdx)("p",null,"None."),(0,a.mdx)("h3",{id:"usage-1"},"Usage"),(0,a.mdx)("p",null,"As this component is backed by Android's ",(0,a.mdx)("inlineCode",{parentName:"p"},"EditText"),", many native capabilities are applicable:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Use an ",(0,a.mdx)("inlineCode",{parentName:"li"},"android.text.InputFilter ")," to set a text length limit or modify text input."),(0,a.mdx)("li",{parentName:"ul"},"Change the input representation by passing an ",(0,a.mdx)("inlineCode",{parentName:"li"},"android.text.InputType")," constant."),(0,a.mdx)("li",{parentName:"ul"},"For performance reasons, avoid recreating the Component with different props to change its configuration. Instead, you can use Event triggers ",(0,a.mdx)("inlineCode",{parentName:"li"},"OnTrigger")," to update text, request view focus or set selection. For example, ",(0,a.mdx)("inlineCode",{parentName:"li"},'TextInput.setText(c, "myTextInputKey", "myText")'),".")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"private static final InputFilter lenFilter = new InputFilter.LengthFilter(maxLength);\nComponent component =\n    TextInput.create(c)\n        .initialText(text)\n        .textColorStateList(ColorStateList.valueOf(color))\n        .multiline(true)\n        .inputFilter(lenFilter)\n        .backgroundColor(Color.TRANSPARENT)\n        .inputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_FLAG_CAP_SENTENCES)\n        .build();\n")),(0,a.mdx)("h2",{id:"image"},"Image"),(0,a.mdx)("p",null,"Displays a drawable."),(0,a.mdx)("h3",{id:"required-prop-2"},"Required Prop"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Drawable drawable")," - drawable to display.")),(0,a.mdx)("h3",{id:"usage-2"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"Component component =\n    Image.create(c)\n        .drawableRes(R.drawable.my_drawable)\n        .scaleType(ImageView.ScaleType.CENTER_CROP)\n        .build();\n")),(0,a.mdx)("h2",{id:"card"},"Card"),(0,a.mdx)("p",null,"The Litho equivalent of an Android ",(0,a.mdx)("inlineCode",{parentName:"p"},"CardView"),". ",(0,a.mdx)("inlineCode",{parentName:"p"},"Card")," applies borders with shadows/elevation to a given component.\nIf your card is rendered on top of a dynamically coloured background that cannot be 'faked' using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Card")," component, use the less performant prop ",(0,a.mdx)("inlineCode",{parentName:"p"},"transparencyEnabled(true)"),"."),(0,a.mdx)("h3",{id:"required-prop-3"},"Required Prop"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Component content")," - the component to decorate.")),(0,a.mdx)("h3",{id:"usage-3"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"Component component =\n    Card.create(c)\n        .content(myContentComponent)\n        .clippingColorRes(R.color.my_clipping_color)\n        .cornerRadiusDip(8)\n        .build();\n")),(0,a.mdx)("h2",{id:"solidcolor"},"SolidColor"),(0,a.mdx)("p",null,"Renders solid colour."),(0,a.mdx)("h3",{id:"required-prop-4"},"Required Prop"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"int color")," - colour to display.")),(0,a.mdx)("h3",{id:"usage-4"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"Component component =\n    SolidColor.create(c)\n        .color(Color.RED)\n        .alpha(0.5)\n        .build();\n")),(0,a.mdx)("h2",{id:"progress"},"Progress"),(0,a.mdx)("p",null,"Renders an infinitely spinning progress bar backed by the Android's ",(0,a.mdx)("inlineCode",{parentName:"p"},"ProgressBar"),"."),(0,a.mdx)("h3",{id:"required-prop-5"},"Required Prop"),(0,a.mdx)("p",null,"None."),(0,a.mdx)("h3",{id:"usage-5"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"Component component =\n      Progress.create(c)\n        .indeterminateDrawableRes(R.drawable.my_loading_spinner)\n        .build();\n")),(0,a.mdx)("h2",{id:"spinner"},"Spinner"),(0,a.mdx)("p",null,"A simple spinner (dropdown) component. Derived from the standard Android ",(0,a.mdx)("inlineCode",{parentName:"p"},"Spinner"),"."),(0,a.mdx)("h3",{id:"required-props"},"Required Props"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"List<String> options")," - list of selection options."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"String selectedOption")," - the currently selected option.")),(0,a.mdx)("h3",{id:"usage-6"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"List<String> myOptions = ...\nComponent component =\n      Spinner.create(c)\n        .options(myOptions)\n        .selectedOption(myOptions.get(0))\n        .build();\n")),(0,a.mdx)("h2",{id:"verticalscroll"},"VerticalScroll"),(0,a.mdx)("p",null,"Wraps another component, allowing it to be vertically scrollable. It's analogous to Android's ",(0,a.mdx)("inlineCode",{parentName:"p"},"ScrollView"),"."),(0,a.mdx)("h3",{id:"required-prop-6"},"Required Prop"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Component childComponent")," - a component to vertically scroll.")),(0,a.mdx)("h3",{id:"usage-7"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"Component component =\n      VerticalScroll.create(c)\n        .childComponent(myComponentToScroll)\n        .verticalFadingEdgeEnabled(true)\n        .fadingEdgeLengthDip(FADING_EDGE_LENGTH_DP)\n        .build();\n")),(0,a.mdx)("h2",{id:"horizontalscroll"},"HorizontalScroll"),(0,a.mdx)("p",null,"Wraps another component, allowing it to be horizontally scrollable. It's analogous to Android's ",(0,a.mdx)("inlineCode",{parentName:"p"},"HorizontalScrollView"),"."),(0,a.mdx)("h3",{id:"required-prop-7"},"Required Prop"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Component contentProps")," - a Component to horizontally scroll.")),(0,a.mdx)("h3",{id:"usage-8"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"Component component =\n      HorizontalScroll.create(c)\n        .contentProps(myComponentToScroll)\n        .build();\n")),(0,a.mdx)("h2",{id:"recycler"},"Recycler"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"Recycler")," is the equivalent of Android's ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerView"),". It's recommended that you use ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/start"},"Sections")," for efficient list rendering, which uses ",(0,a.mdx)("inlineCode",{parentName:"p"},"Recycler")," under the hood."),(0,a.mdx)("p",null,"If you  want to use ",(0,a.mdx)("inlineCode",{parentName:"p"},"Recycler")," directly, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/recycler-collection-component"},"Adding and adapting the RecyclerCollection to your app")," page."))}c.isMDXComponent=!0}}]);