"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7447],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.createElement(e,i({},t,{components:n}))}},d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(67294).createContext(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(82924);const i=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(87462),a=n(67294),i=n(24544),r=n(7694),s=n(13618),l="0.41.1",c="0.41.2-SNAPSHOT",p="0.9.0",d="0.46.0",m=n(85350);const u=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,d).trim(),u=(0,m.Z)().isDarkTheme?s.Z:r.Z;return a.createElement(i.ZP,(0,o.Z)({},i.lG,{code:n,language:t,theme:u}),(function(e){var t=e.className,n=e.style,o=e.tokens,i=e.getLineProps,r=e.getTokenProps;return a.createElement("pre",{className:t,style:n},o.map((function(e,t){return a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return a.createElement("span",r({token:e,key:t}))})))})))}))}},99190:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>d,default:()=>u});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=n(75960),s=["components"],l={id:"unit-testing",title:"Getting Started"},c=void 0,p={unversionedId:"testing/unit-testing",id:"testing/unit-testing",isDocsHomePage:!1,title:"Getting Started",description:"To use any of the testing utilities, include the litho-testing package in your build.",source:"@site/../docs/testing/unit-testing.mdx",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/docs/testing/unit-testing",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/unit-testing.mdx",tags:[],version:"current",frontMatter:{id:"unit-testing",title:"Getting Started"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/testing/testing-overview"},next:{title:"Sub-Component Testing",permalink:"/docs/testing/subcomponent-testing"}},d=[{value:"Example",id:"example",children:[{value:"Setup",id:"setup",children:[],level:3},{value:"Testing Component Rendering",id:"testing-component-rendering",children:[],level:3}],level:2},{value:"Additional Assertions",id:"additional-assertions",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"To use any of the testing utilities, include the ",(0,i.mdx)("inlineCode",{parentName:"p"},"litho-testing")," package in your build."))),(0,i.mdx)("p",null,"Add the following lines to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"dependencies")," block in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.mdx)(r.Z,{language:"groovy",code:"\ntestImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n",mdxType:"VersionedCodeBlock"}),(0,i.mdx)("p",null,"Litho's testing APIs are exposed through fluid AssertJ methods and are available as:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/ComponentAssert.html"},"ComponentAssert")," for assertions that are run against either Component builders or Components."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoViewAssert.html"},"LithoViewAssert")," for assertions against mounted UI hierarchies.")),(0,i.mdx)("p",null,"For convenience, ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoAssertions.html"},"LithoAssertions.assertThat")," can be statically imported (it hosts all the APIs of ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentAssert"),",",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoViewAssert"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListAssert<Component>"),"):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import static com.facebook.litho.testing.assertj.LegacyLithoAssertions.assertThat;\n")),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,"To demonstrate how the APIs are used, consider the following component that displays a 'like' icon and a short description:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"/**\n * Displays who liked the post.\n *\n * 1 - 3 likers => Comma separated names (example: Jane, Mike, Doug)\n * > 3 likers => Comma separated number denoting the like count\n */\n@LayoutSpec\nclass LikersComponentSpec {\n\n  @OnCreateLayout\n  protected static Component onCreateLayout(\n      ComponentContext c,\n      @Prop List<User> likers) {\n\n    return Row.create(c)\n        .alignItems(FLEX_START)\n        .child(\n          Image.create(c)\n            .drawableRes(R.drawable.like))\n        .child(\n          Text.create(c)\n            .text(formatLikers(likers))\n            .textSizeSp(12)\n            .ellipsize(TruncateAt.END))\n        .build();\n  }\n\n  private static String formatLikers(List<User> likers) {\n    ...\n  }\n}\n")),(0,i.mdx)("h3",{id:"setup"},"Setup"),(0,i.mdx)("p",null,"To verify the rendering of the text and the icon."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create a new test class; ",(0,i.mdx)("inlineCode",{parentName:"li"},"LikersComponentTest"),"."),(0,i.mdx)("li",{parentName:"ul"},"Add ",(0,i.mdx)("inlineCode",{parentName:"li"},"@RunWith(RobolectricTestRunner.class)")," to the top of the test class."),(0,i.mdx)("li",{parentName:"ul"},"Add a ",(0,i.mdx)("inlineCode",{parentName:"li"},"LithoViewRule")," JUnit ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/junit-team/junit4/wiki/Rules"},(0,i.mdx)("inlineCode",{parentName:"a"},"@Rule"))," that sets up overrides for ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.styleable.html"},"Styleables"),"\nand exposes some useful APIs.")),(0,i.mdx)("p",null,"The test class should look like the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@RunWith(RobolectricTestRunner.class)\npublic class LikersComponentTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n\n}\n")),(0,i.mdx)("h3",{id:"testing-component-rendering"},"Testing Component Rendering"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"LegacyLithoAssertions")," exposes AssertJ-style APIs to assert what gets rendered by a component. These APIs will generally layout, mount, and render the component before testing the assertions:#"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@RunWith(RobolectricTestRunner.class)\npublic class LikersComponentTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n  @Test\n  public void whenTwoUsersLike_shouldShowBothUserNames() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final ImmutableList<User> likers = ImmutableList.of(\n      new User("Jane"), new User("Mike")\n    );\n    final LikersComponent component = LikersComponent.create(c)\n        .likers(likers)\n        .build();\n\n    LegacyLithoAssertions.assertThat(c , component).hasVisibleText("Jane, Mike");\n  }\n\n  @Test\n  public void whenUsersLike_shouldShowLikeIcon() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final ImmutableList<User> likers = ImmutableList.of(\n      new User("Jane"), new User("Mike")\n    );\n    final LikersComponent component = LikersComponent.create(c)\n        .likers(likers)\n        .build();\n\n    final Drawable likeIcon = c.getResources().getDrawable(R.drawable.like);\n    LegacyLithoAssertions.assertThat(c , component).hasVisibleDrawable(likeIcon);\n  }\n}\n')),(0,i.mdx)("h2",{id:"additional-assertions"},"Additional Assertions"),(0,i.mdx)("p",null,"There are several additional assertions that can be tested using LegacyLithoAssertions. To see the entire scope of APIs, refer to the JavaDoc ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoAssertions.html"},"LithoAssertions"),"."),(0,i.mdx)("p",null,"Those APIs test assertions on the view hierarchy that's created by the mounted Component. So, asserting the presence of a Drawable in a Component will traverse the entire view hierarchy rendered by the Component."),(0,i.mdx)("p",null,"Following are some of the assertions provided by LegacyLithoAssertions:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#hasVisibleTextMatching()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#doesNotHaveVisibleText()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#willRender()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#doesNotHaveVisibleDrawable()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#hasContentDescription()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#willNotRender()"))),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"When running Litho unit tests, be aware that the native library for Yoga must be loaded, which can pose some challenges depending on your build system of choice. With Gradle and\nRobolectric, for instance, you may run into issues as Robolectric spins up new ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/ClassLoader.html"},"ClassLoaders"),"\nfor every test suite with a different configuration. The same applies to PowerMock, which prepares the ClassLoaders on a per-suite basis and leaves them in a non-reusable state."),(0,i.mdx)("p",{parentName:"div"},"The JVM has two important and relevant limitations:"),(0,i.mdx)("ol",{parentName:"div"},(0,i.mdx)("li",{parentName:"ol"},"A shared library can only ever be loaded once per process."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"ClassLoader"),"s do not share information about the libraries loaded.")),(0,i.mdx)("p",{parentName:"div"},"Due to these limitations, using multiple ClassLoaders for test runs is highly problematic as every instance will attempt to load Yoga.  All, except the first, calls will fail with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"libyoga.so already loaded in another classloader")," exception."),(0,i.mdx)("p",{parentName:"div"},"The only way to avoid the limitations is by preventing the use of multiple ClassLoaders or forking the process whenever a new ClassLoader is necessary."),(0,i.mdx)("p",{parentName:"div"},"Gradle allows you to limit the number of test classes a process can execute before it is discarded. If you set the number to one, you avoid the ClassLoader reuse:"),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"android {\n    [...]\n\n    testOptions {\n        unitTests.all {\n            forkEvery = 1\n            maxParallelForks = Math.ceil(Runtime.runtime.availableProcessors() * 1.5)\n        }\n    }\n}\n")),(0,i.mdx)("p",{parentName:"div"},"With Buck, this behaviour can be achieved by assigning test targets separate names, which results in a parallel process being spun up. Alternatively, you can\nset the ",(0,i.mdx)("inlineCode",{parentName:"p"},"fork_mode")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"per_test"),", as described in the ",(0,i.mdx)("a",{parentName:"p",href:"https://buckbuild.com/rule/java_test.html#fork_mode"},"java_test")," page of the Buck website."),(0,i.mdx)("p",{parentName:"div"},"Ultimately, depending on your build system and the existing constraints of your project, you may need to adjust the way in which your test runner utilises\nClassLoaders. This is not a problem unique to Litho, it's an unfortunate consequence of mixing native and Java code in Android projects."))))}u.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>r});var o=n(87410);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i=n(67294),r={Prism:o.default,theme:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a};function u(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,i=l({},u(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(i.style=r.plain),void 0!==a&&(i.style=void 0!==i.style?l({},i.style,a):a),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return i[n[0]];var r=o?{display:"inline-block"}:{},s=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[r].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,i=e.token,r=l({},u(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==a&&(r.style=void 0!==r.style?l({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),s(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var i=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,i=this.getThemeDict(this.props),r=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],i=0,r=0,s=[],l=[s];r>-1;){for(;(i=o[r]++)<a[r];){var m=void 0,u=t[r],h=n[r][i];if("string"==typeof h?(u=r>0?u:["plain"],m=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),m=h.content),"string"==typeof m){var y=m.split(c),g=y.length;s.push({types:u,content:y[0]});for(var f=1;f<g;f++)p(s),l.push(s=[]),s.push({types:u,content:y[f]})}else r++,t.push(u),n.push(m),o.push(0),a.push(m.length)}r--,t.pop(),n.pop(),o.pop(),a.pop()}return p(s),l}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);