"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5483],{7772:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(87462),o=t(67294),l=t(23746),i=t(7694),r=t(13618),p="0.47.0",m="0.48.0-SNAPSHOT",s="0.10.5",d="0.142.0",c=t(86668);const u=function(e){var n=e.language,t=e.code.replace(/{{site.lithoVersion}}/g,p).replace(/{{site.soloaderVersion}}/g,s).replace(/{{site.lithoSnapshotVersion}}/g,m).replace(/{{site.flipperVersion}}/g,d).trim(),u=(0,c.L)().isDarkTheme?r.Z:i.Z;return o.createElement(l.ZP,(0,a.Z)({},l.lG,{code:t,language:n,theme:u}),(function(e){var n=e.className,t=e.style,a=e.tokens,l=e.getLineProps,i=e.getTokenProps;return o.createElement("pre",{className:n,style:t},a.map((function(e,n){return o.createElement("div",l({line:e,key:n}),e.map((function(e,n){return o.createElement("span",i({token:e,key:n}))})))})))}))}},41565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>u});var a=t(87462),o=t(63366),l=(t(67294),t(3905)),i=t(74866),r=t(85162),p=(t(7772),["components"]),m={id:"kotlin-api-basics",title:"KComponent and Props",keywords:["kcomponent","kcomponent litho","litho kcomponent"]},s=void 0,d={unversionedId:"kotlin/kotlin-api-basics",id:"kotlin/kotlin-api-basics",title:"KComponent and Props",description:"This page details how to convert existing components with @LayoutSpecs to Kotlin KComponent.",source:"@site/../docs/kotlin/basics.mdx",sourceDirName:"kotlin",slug:"/kotlin/kotlin-api-basics",permalink:"/docs/kotlin/kotlin-api-basics",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/basics.mdx",tags:[],version:"current",frontMatter:{id:"kotlin-api-basics",title:"KComponent and Props",keywords:["kcomponent","kcomponent litho","litho kcomponent"]},sidebar:"mainSidebar",previous:{title:"Introduction and Setup",permalink:"/docs/kotlin/kotlin-intro"},next:{title:"Introducing Hooks for State",permalink:"/docs/kotlin/hooks-for-spec-developers"}},c={},u=[{value:"Code generation",id:"code-generation",level:2},{value:"Props",id:"props",level:2},{value:"Common Props",id:"common-props",level:2},{value:"Java - Kotlin compatibility",id:"java---kotlin-compatibility",level:3},{value:"Working with <code>Style</code>",id:"working-with-style",level:3},{value:"TreeProps",id:"treeprops",level:2},{value:"Declaring a TreeProp",id:"declaring-a-treeprop",level:3},{value:"Using a TreeProp",id:"using-a-treeprop",level:3},{value:"Handles",id:"handles",level:2},{value:"Creating a Handle",id:"creating-a-handle",level:3},{value:"Using a Handle",id:"using-a-handle",level:3}],h={toc:u},x="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,p);return(0,l.mdx)(x,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},"This page details how to convert existing components with ",(0,l.mdx)("inlineCode",{parentName:"p"},"@LayoutSpecs")," to Kotlin ",(0,l.mdx)("inlineCode",{parentName:"p"},"KComponent"),"."),(0,l.mdx)("p",{parentName:"admonition"},"For information regarding the main Components and Props, refer to the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/tutorial/first-components"},"Components and Props")," page of the Tutorial.")),(0,l.mdx)("h2",{id:"code-generation"},"Code generation"),(0,l.mdx)("p",null,"The most fundamental change in the Litho Kotlin API is that code generation is no longer used. This means there's no need to mark components as ",(0,l.mdx)("inlineCode",{parentName:"p"},"@LayoutSpecs")," or declare any other annotations in the class. Remember to leave off the 'Spec' at the end of the component name!"),(0,l.mdx)("p",null,"The static method marked with ",(0,l.mdx)("inlineCode",{parentName:"p"},"@OnCreateLayout")," is replaced with a ",(0,l.mdx)("inlineCode",{parentName:"p"},"render")," function override, which returns what the component should render."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.litho.Component\nimport com.facebook.litho.ComponentScope\nimport com.facebook.litho.KComponent\n\nclass TestComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    TODO("Return a component")\n  }\n}\n')),(0,l.mdx)("h2",{id:"props"},"Props"),(0,l.mdx)("p",null,"Props are now just ",(0,l.mdx)("inlineCode",{parentName:"p"},"val")," properties on a component:"),(0,l.mdx)(i.default,{groupId:"basic",defaultValue:"kotlin_basic",values:[{label:"Kotlin",value:"kotlin_basic"},{label:"Java",value:"java_basic"}],mdxType:"Tabs"},(0,l.mdx)(r.default,{value:"kotlin_basic",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt start=start_simple_example end=end_simple_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt",start:"start_simple_example",end:"end_simple_example"},'class HelloComponent(private val name: String) : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    return Text(text = "Hello $name!")\n  }\n}\n'))),(0,l.mdx)(r.default,{value:"java_basic",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class FirstComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop String name) {\n    return Text.create(c).text("Hello " + name + "!").build();\n  }\n}\n')))),(0,l.mdx)("p",null,"Specify props to components as named arguments:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},'Text(text = "Hello $name!")\n')),(0,l.mdx)("h2",{id:"common-props"},"Common Props"),(0,l.mdx)("admonition",{type:"info"},(0,l.mdx)("p",{parentName:"admonition"},"A ",(0,l.mdx)("em",{parentName:"p"},"Style")," object is an immutable, linked-list of properties to apply to a component.")),(0,l.mdx)("p",null,"Common props, such as ",(0,l.mdx)("inlineCode",{parentName:"p"},"margin"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"clickHandler"),", and ",(0,l.mdx)("inlineCode",{parentName:"p"},"alpha"),", are now set using ",(0,l.mdx)("strong",{parentName:"p"},"Style"),"."),(0,l.mdx)("p",null,"In the Java Spec API, these common props could be applied to any component on their builder. However, in the Kotlin API, a component must declare it accepts a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Style")," as a prop. It can then pass that ",(0,l.mdx)("inlineCode",{parentName:"p"},"Style")," object to one of the Components it renders to."),(0,l.mdx)("p",null,"The following Java and Kotlin code is functionally equivalent and results in ",(0,l.mdx)("inlineCode",{parentName:"p"},"OuterTextComponent")," resolving to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Text")," component which has alpha, padding, and a margin set on it:"),(0,l.mdx)(i.default,{groupId:"children_style",defaultValue:"kotlin_children_style",values:[{label:"Kotlin",value:"kotlin_children_style"},{label:"Java",value:"java_children_style"}],mdxType:"Tabs"},(0,l.mdx)(r.default,{value:"kotlin_children_style",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt start=start_combine_style_example end=end_combine_style_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt",start:"start_combine_style_example",end:"end_combine_style_example"},'class OuterTextComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    return InnerTextComponent(style = Style.margin(all = 8.dp))\n  }\n}\n\nclass InnerTextComponent(private val style: Style? = null) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    return Text(\n        style = Style.padding(all = 8.dp).alpha(.5f) + style,\n        text = "I accept style from a parent!")\n  }\n}\n'))),(0,l.mdx)(r.default,{value:"java_children_style",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/documentation/OuterTextComponentSpec.java start=start_combine_style_outer_example end=end_combine_style_outer_example",file:"sample/src/main/java/com/facebook/samples/litho/java/documentation/OuterTextComponentSpec.java",start:"start_combine_style_outer_example",end:"end_combine_style_outer_example"},"@LayoutSpec\nclass OuterTextComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return InnerTextComponent.create(c).marginDip(YogaEdge.ALL, 8).build();\n  }\n}\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/documentation/InnerTextComponentSpec.java start=start_combine_style_inner_example end=end_combine_style_inner_example",file:"sample/src/main/java/com/facebook/samples/litho/java/documentation/InnerTextComponentSpec.java",start:"start_combine_style_inner_example",end:"end_combine_style_inner_example"},'@LayoutSpec\nclass InnerTextComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return Text.create(c)\n        .text("I accept style from a parent!")\n        .paddingDip(YogaEdge.ALL, 8)\n        .alpha(.5f)\n        .build();\n  }\n}\n')))),(0,l.mdx)("p",null,"If it isn't obvious that these are equivalent, it helps to understand that in the spec API, a series of ",(0,l.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," components resolve to a single 'node' ending with either a Row/Column or a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," component. All components resolving to this node share a single set of common props."),(0,l.mdx)("p",null,"For an illustration of this process, see the 6-minute YouTube video ",(0,l.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=t9wTHnCx5RM"},"Litho Lessons: Component to Screen"),"."),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},"This API also gives flexibility to accept multiple Style objects to apply to different children since all common props are passed down explicitly!")),(0,l.mdx)("h3",{id:"java---kotlin-compatibility"},"Java - Kotlin compatibility"),(0,l.mdx)("p",null,"To pass down a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Style")," from a Java class to a Kotlin ",(0,l.mdx)("inlineCode",{parentName:"p"},"KComponent"),", use ",(0,l.mdx)("inlineCode",{parentName:"p"},"StyleCompat"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/OuterStyleComponentSpec.java start=start_combine_style_outer_example end=end_combine_style_outer_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/OuterStyleComponentSpec.java",start:"start_combine_style_outer_example",end:"end_combine_style_outer_example"},"@LayoutSpec\nclass OuterStyleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return new InnerTextComponent(StyleCompat.marginDip(YogaEdge.ALL, 8).build());\n  }\n}\n")),(0,l.mdx)("p",null,"For the other way around (passing ",(0,l.mdx)("inlineCode",{parentName:"p"},"style")," from Kotlin code to a Java ",(0,l.mdx)("inlineCode",{parentName:"p"},"Component Spec"),"), use ",(0,l.mdx)("inlineCode",{parentName:"p"},".kotlinStyle()"),", which is equivalent to setting all the common props the Style defines:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt start=start_combine_java_kotlin_style_example end=end_combine_java_kotlin_style_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt",start:"start_combine_java_kotlin_style_example",end:"end_combine_java_kotlin_style_example"},"class OuterStyleKComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val style = Style.margin(all = 8.dp)\n    return OuterStyleComponent.create(context).kotlinStyle(style).build()\n  }\n}\n")),(0,l.mdx)("h3",{id:"working-with-style"},"Working with ",(0,l.mdx)("inlineCode",{parentName:"h3"},"Style")),(0,l.mdx)("p",null,"In the above example, ",(0,l.mdx)("inlineCode",{parentName:"p"},"+")," is used to combine the style passed from ",(0,l.mdx)("inlineCode",{parentName:"p"},"OuterTextComponent")," and the styles that ",(0,l.mdx)("inlineCode",{parentName:"p"},"InnerTextComponent")," defines. The ",(0,l.mdx)("inlineCode",{parentName:"p"},"+")," operator combines two styles into a single style without mutating either:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val alphaStyle = Style.alpha(1f)\nval combinedStyle = alphaStyle + Style.padding(all = 8.dp).margin(all = 8.dp)\n\n// Result:\n//   alphaStyle: (alpha: 1f)\n//   combinedStyle: (alpha: 1f) <- (padding-all: 8.dp) <- (margin-all: 8.dp)\n")),(0,l.mdx)("p",null,"Note that ordering around ",(0,l.mdx)("inlineCode",{parentName:"p"},"+")," matters: if a style property is defined twice, the ",(0,l.mdx)("strong",{parentName:"p"},"last")," definition wins:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val alphaStyle = Style.alpha(1f)\nval combinedStyle = alphaStyle + Style.padding(all = 8.dp).alpha(.5f)\n\n// Result:\n//   combinedStyle will apply padding of 8.dp and alpha of .5f\n")),(0,l.mdx)("p",null,"For reference, in the Java Spec API, if a parent component and a child component set the same common prop, the parent's definition wins. The equivalent in the Kotlin API is to have the parent style on the right-hand side of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"+")," operator."),(0,l.mdx)("h2",{id:"treeprops"},"TreeProps"),(0,l.mdx)("p",null,"A TreeProp is a special type of prop that's transparently passed from a parent component to its children. It provides a convenient way to share contextual data or utilities in a tree without having to explicitly pass val properties to every component in the hierarchy."),(0,l.mdx)("h3",{id:"declaring-a-treeprop"},"Declaring a TreeProp"),(0,l.mdx)("p",null,"In order to declare a TreeProp, use ",(0,l.mdx)("inlineCode",{parentName:"p"},"TreePropProvider"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsExampleComponent.kt start=declaring_tree_prop_start end=declaring_tree_prop_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsExampleComponent.kt",start:"declaring_tree_prop_start",end:"declaring_tree_prop_end"},"return TreePropProvider(\n    Typeface::class.java to Typeface.DEFAULT_BOLD,\n    String::class.java to getTextTitle(),\n    Int::class.java to Color.RED) {\n      TreePropsChildComponent()\n    }\n")),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},"One TreeProp can be delcared for any one given type. If a child of ParentComponent also defines a TreeProp of the given type, it will override the value of that TreeProp for all its children (but not for itself).")),(0,l.mdx)("h3",{id:"using-a-treeprop"},"Using a TreeProp"),(0,l.mdx)("p",null,"The child component can access the TreeProp value through a ",(0,l.mdx)("inlineCode",{parentName:"p"},"ComponentScope.getTreeProp<>()")," method that has the same type that was declared in the parents ",(0,l.mdx)("inlineCode",{parentName:"p"},"TreePropProvider")," call:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsChildComponent.kt start=using_tree_prop_start end=using_tree_prop_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsChildComponent.kt",start:"using_tree_prop_start",end:"using_tree_prop_end"},"val color = getTreeProp<Int>()\nval typeface = getTreeProp<Typeface>()\nval title = getTreeProp<String>()\n")),(0,l.mdx)("h2",{id:"handles"},"Handles"),(0,l.mdx)("p",null,"A Handle is a unique identifier that can be used to trigger events (though triggers themselves are not yet supported in the Kotlin API)."),(0,l.mdx)("h3",{id:"creating-a-handle"},"Creating a Handle"),(0,l.mdx)("p",null,"In order to create a Handle, use ",(0,l.mdx)("inlineCode",{parentName:"p"},"Handle()")," and save it as either a ",(0,l.mdx)("inlineCode",{parentName:"p"},"CachedValue")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"State"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/triggers/TooltipTriggerExampleKComponent.kt start=creating_handle_start end=creating_handle_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/triggers/TooltipTriggerExampleKComponent.kt",start:"creating_handle_start",end:"creating_handle_end"},"val anchorHandle = useCached { Handle() }\n")),(0,l.mdx)("h3",{id:"using-a-handle"},"Using a Handle"),(0,l.mdx)("p",null,"To add a Handle to a component, wrap the component in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"handle")," function. This sets the handle on the given component."),(0,l.mdx)("p",null,"With a direct reference to the handle, it can be used to trigger events for that component:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/triggers/TooltipTriggerExampleKComponent.kt start=using_handle_start end=using_handle_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/triggers/TooltipTriggerExampleKComponent.kt",start:"using_handle_start",end:"using_handle_end"},'handle(anchorHandle) {\n  Text(\n      text = "Tooltip anchor",\n      style = Style.margin(top = 50.dp).onVisible { showToolTip(anchorHandle) })\n}\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/triggers/TooltipTriggerExampleKComponent.kt start=showing_tooltip_start end=showing_tooltip_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/triggers/TooltipTriggerExampleKComponent.kt",start:"showing_tooltip_start",end:"showing_tooltip_end"},'private fun ComponentScope.showToolTip(anchorHandle: Handle) {\n  LithoTooltipController.showTooltipOnHandle(\n      context, createTooltip("Example Tooltip"), anchorHandle, 0, 0)\n}\n')))}g.isMDXComponent=!0}}]);