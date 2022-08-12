"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8938],{7772:(e,o,n)=>{n.d(o,{Z:()=>h});var t=n(83117),i=n(67294),a=n(23746),s=n(7694),l=n(13618),r="0.41.2",d="0.41.3-SNAPSHOT",c="0.10.4",p="0.46.0",m=n(86668);const h=function(e){var o=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,r).replace(/{{site.soloaderVersion}}/g,c).replace(/{{site.lithoSnapshotVersion}}/g,d).replace(/{{site.flipperVersion}}/g,p).trim(),h=(0,m.L)().isDarkTheme?l.Z:s.Z;return i.createElement(a.ZP,(0,t.Z)({},a.lG,{code:n,language:o,theme:h}),(function(e){var o=e.className,n=e.style,t=e.tokens,a=e.getLineProps,s=e.getTokenProps;return i.createElement("pre",{className:o,style:n},t.map((function(e,o){return i.createElement("div",a({line:e,key:o}),e.map((function(e,o){return i.createElement("span",s({token:e,key:o}))})))})))}))}},91898:(e,o,n)=>{n.r(o),n.d(o,{additionalBuckCode:()=>w,additionalDependenciesCode:()=>y,assets:()=>h,buckCode:()=>k,contentTitle:()=>p,default:()=>N,dependenciesCode:()=>g,frontMatter:()=>c,kaptAdditionalDependenciesCode:()=>b,kaptDependenciesCode:()=>x,kaptSnapshotsDependenciesCode:()=>f,metadata:()=>m,snapshotDependenciesCode:()=>v,toc:()=>u});var t=n(83117),i=n(80102),a=(n(67294),n(3905)),s=n(65488),l=n(85162),r=n(7772),d=["components"],c={id:"getting-started",title:"Getting Started",hide_table_of_contents:!0},p=void 0,m={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"<Tabs",source:"@site/../docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/getting-started.mdx",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",hide_table_of_contents:!0}},h={},u=[{value:"Adding Litho to your Project",id:"adding-litho-to-your-project",level:2},{value:"Adding Sections to your Project",id:"adding-sections-to-your-project",level:2},{value:"Using Snapshot releases",id:"using-snapshot-releases",level:2},{value:"Adding Litho to your Kotlin Project",id:"adding-litho-to-your-kotlin-project",level:2},{value:"Adding Sections to your Project",id:"adding-sections-to-your-project-1",level:2},{value:"Using Snapshot releases",id:"using-snapshot-releases-1",level:2},{value:"Adding Litho to your Project",id:"adding-litho-to-your-project-1",level:2},{value:"Adding Sections to your Project",id:"adding-sections-to-your-project-2",level:2},{value:"Testing your Installation",id:"testing-your-installation",level:2},{value:"Testing your Installation",id:"testing-your-installation-1",level:2}],g="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  annotationProcessor 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}",y="dependencies {\n\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n\n  annotationProcessor 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}",v="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoSnapshotVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoSnapshotVersion}}'\n  annotationProcessor 'com.facebook.litho:litho-processor:{{site.lithoSnapshotVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoSnapshotVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoSnapshotVersion}}'\n}",x="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  kapt 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}",b="dependencies {\n\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n\n  kapt 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}",f="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoSnapshotVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoSnapshotVersion}}'\n\n  kapt 'com.facebook.litho:litho-processor:{{site.lithoSnapshotVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoSnapshotVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoSnapshotVersion}}'\n}",k='android_prebuilt_aar(\n    name = "litho",\n    aar = ":litho-core.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-core.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-core:aar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-annotation",\n    binary_jar = ":litho-annotation.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-processor.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-processor:jar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-processor",\n    binary_jar = ":litho-processor.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-annotation.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-annotation:jar:{{site.lithoVersion}}",\n)\n\nandroid_prebuilt_aar(\n    name = "litho-widget",\n    aar = ":litho-widget.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-widget.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-widget:aar:{{site.lithoVersion}}",\n)\n\nandroid_library(\n    ...\n    # Your target here\n    ...\n    annotation_processor_deps = [\n        ":litho-annotation",\n        ":litho-processor",\n    ],\n    annotation_processors = [\n        "com.facebook.litho.specmodels.processor.ComponentsProcessor",\n    ],\n    provided_deps = [\n        "litho-annotation",\n    ],\n    deps = [\n        ":litho",\n        ":litho-widget",\n        ...\n    ]\n)',w='android_prebuilt_aar(\n    name = "litho-sections",\n    aar = ":litho-sections-core.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-core.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-core:aar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-sections-annotation",\n    binary_jar = ":litho-sections-annotation.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-processor.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-processor:jar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-sections-processor",\n    binary_jar = ":litho-sections-processor.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-annotation.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-annotation:jar:{{site.lithoVersion}}",\n)\n\nandroid_prebuilt_aar(\n    name = "litho-sections-widget",\n    aar = ":litho-sections-widget.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-widget.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-widget:aar:{{site.lithoVersion}}",\n)',C={toc:u,dependenciesCode:g,additionalDependenciesCode:y,snapshotDependenciesCode:v,kaptDependenciesCode:x,kaptAdditionalDependenciesCode:b,kaptSnapshotsDependenciesCode:f,buckCode:k,additionalBuckCode:w};function N(e){var o=e.components,n=(0,i.Z)(e,d);return(0,a.mdx)("wrapper",(0,t.Z)({},C,n,{components:o,mdxType:"MDXLayout"}),(0,a.mdx)(s.default,{defaultValue:"gradle-java",values:[{label:"Gradle/Java",value:"gradle-java"},{label:"Gradle/Kotlin",value:"gradle-kotlin"},{label:"Buck/Java",value:"buck-java"},{label:"Testing/Java",value:"testing-java"},{label:"Testing/Kotlin",value:"testing-kotlin"}],mdxType:"Tabs"},(0,a.mdx)(l.default,{value:"gradle-java",mdxType:"TabItem"},(0,a.mdx)("h2",{id:"adding-litho-to-your-project"},"Adding Litho to your Project"),(0,a.mdx)("p",null,"We publish the Litho artifacts to Bintray's JCenter. To include Litho to your\nAndroid project, make sure you include the reference to the repository in your ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  jcenter()\n}\n")),(0,a.mdx)("p",null,"Then add the dependencies like this:"),(0,a.mdx)(r.Z,{language:"groovy",code:g,mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"adding-sections-to-your-project"},"Adding Sections to your Project"),(0,a.mdx)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can include Sections by adding the following additional dependencies to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)(r.Z,{language:"groovy",code:y,mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"using-snapshot-releases"},"Using Snapshot releases"),(0,a.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"This will break and may set your house on fire. Snapshots are unsigned and automatically published by our CI system. Use them for testing purposes only."))),(0,a.mdx)("p",null,"First, add the Sonatype Snapshots repository to your gradle config:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n  maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n')),(0,a.mdx)("p",null,"Then you can access the snapshot versions of all Litho artifacts that we\npublish:"),(0,a.mdx)(r.Z,{language:"groovy",code:v,mdxType:"VersionedCodeBlock"})),(0,a.mdx)(l.default,{value:"gradle-kotlin",mdxType:"TabItem"},(0,a.mdx)("h2",{id:"adding-litho-to-your-kotlin-project"},"Adding Litho to your Kotlin Project"),(0,a.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Kotlin support for Litho is experimental at this point."))),(0,a.mdx)("p",null,"In order to use Litho's annotation processor, you need to opt in to the Kotlin KAPT plugin at the\ntop of your application's ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'kotlin-kapt'\n")),(0,a.mdx)("p",null,"We publish the Litho artifacts to Bintray's JCenter. To include Litho to your\nAndroid project, make sure you include the reference to the repository in your ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  jcenter()\n}\n")),(0,a.mdx)("p",null,"Then add the dependencies like this:"),(0,a.mdx)(r.Z,{language:"groovy",code:x,mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"adding-sections-to-your-project-1"},"Adding Sections to your Project"),(0,a.mdx)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can include Sections by adding the following additional dependencies to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)(r.Z,{language:"groovy",code:b,mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"using-snapshot-releases-1"},"Using Snapshot releases"),(0,a.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"This will break and may set your house on fire. Snapshots are unsigned and automatically published by our CI system. Use them for testing purposes only."))),(0,a.mdx)("p",null,"First, add the Sonatype Snapshots repository to your gradle config:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n  maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n')),(0,a.mdx)("p",null,"Then you can access the snapshot versions of all Litho artifacts that we\npublish:"),(0,a.mdx)(r.Z,{language:"groovy",code:f,mdxType:"VersionedCodeBlock"})),(0,a.mdx)(l.default,{value:"buck-java",mdxType:"TabItem"},(0,a.mdx)("h2",{id:"adding-litho-to-your-project-1"},"Adding Litho to your Project"),(0,a.mdx)("p",null,"You can include Litho to your Android project via Buck by adding the following to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"BUCK")," file:"),(0,a.mdx)(r.Z,{language:"python",code:k,mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"adding-sections-to-your-project-2"},"Adding Sections to your Project"),(0,a.mdx)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can include Sections by adding the following additional dependencies to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"BUCK")," file:"),(0,a.mdx)(r.Z,{language:"python",code:w,mdxType:"VersionedCodeBlock"}),(0,a.mdx)("p",null,"Then modify your ",(0,a.mdx)("inlineCode",{parentName:"p"},"android_library")," target as such:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'android_library(\n    ...\n    # Your target here\n    ...\n    annotation_processor_deps = [\n        ":litho-annotation",\n        ":litho-processor",\n        ":litho-sections-annotations",\n        ":litho-sections-processor",\n    ],\n    annotation_processors = [\n        "com.facebook.litho.specmodels.processor.ComponentsProcessor",\n        "com.facebook.litho.specmodels.processor.sections.SectionsComponentProcessor",\n    ],\n    provided_deps = [\n        "litho-annotations",\n        "litho-sections-annotations",\n    ],\n    deps = [\n        ":litho",\n        ":litho-widget",\n        ":litho-sections",\n        ":litho-sections-widget",\n        ...\n    ]\n)\n'))),(0,a.mdx)(l.default,{value:"testing-java",mdxType:"TabItem"},(0,a.mdx)("h2",{id:"testing-your-installation"},"Testing your Installation"),(0,a.mdx)("p",null,"You can test your install by adding a view created with Litho to an activity."),(0,a.mdx)("p",null,"First, initialize ",(0,a.mdx)("inlineCode",{parentName:"p"},"SoLoader"),". Litho has a dependency on ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader")," to help load native libraries provided by the underlying layout engine, ",(0,a.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga"),". Your ",(0,a.mdx)("inlineCode",{parentName:"p"},"Application")," class is a good place to do this:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java",metastring:'title="MyApplication.java"',title:'"MyApplication.java"'},"public class MyApplication extends Application {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n\n    SoLoader.init(this, false);\n  }\n}\n")),(0,a.mdx)("p",null,"Then, add a predefined Litho ",(0,a.mdx)("inlineCode",{parentName:"p"},"Text"),' widget to an activity that displays "Hello World!":'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java",metastring:'title="MyActivity.java"',title:'"MyActivity.java"'},'import com.facebook.litho.ComponentContext;\nimport com.facebook.litho.LithoView;\n\npublic class MyActivity extends Activity {\n\n  @Override\n  public void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    final ComponentContext c = new ComponentContext(this);\n\n    final LithoView lithoView = LithoView.create(\n        this /* context */,\n        Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50)\n            .build());\n\n    setContentView(lithoView);\n  }\n}\n')),(0,a.mdx)("p",null,'Now, when you run the app you should see "Hello World!" displayed on the screen.')),(0,a.mdx)(l.default,{value:"testing-kotlin",mdxType:"TabItem"},(0,a.mdx)("h2",{id:"testing-your-installation-1"},"Testing your Installation"),(0,a.mdx)("p",null,"You can test your install by adding a view created with Litho to an activity."),(0,a.mdx)("p",null,"First, initialize ",(0,a.mdx)("inlineCode",{parentName:"p"},"SoLoader"),". Litho has a dependency on ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader")," to help load native libraries provided by the underlying layout engine, ",(0,a.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga"),". Your ",(0,a.mdx)("inlineCode",{parentName:"p"},"Application")," class is a good place to do this:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyApplication.kt"',title:'"MyApplication.kt"'},"class MyApplication: Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, false)\n  }\n}\n")),(0,a.mdx)("p",null,"Then, add a predefined Litho ",(0,a.mdx)("inlineCode",{parentName:"p"},"Text"),' widget to an activity that displays "Hello World!":'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyActivity.kt"',title:'"MyActivity.kt"'},'import com.facebook.litho.ComponentContext\nimport com.facebook.litho.LithoView\n\nclass MyActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val c = ComponentContext(this)\n\n    val lithoView = LithoView.create(\n        this /* context */,\n        Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50)\n            .build())\n\n    setContentView(lithoView)\n  }\n}\n')),(0,a.mdx)("p",null,'Now, when you run the app you should see "Hello World!" displayed on the screen.'))))}N.isMDXComponent=!0}}]);