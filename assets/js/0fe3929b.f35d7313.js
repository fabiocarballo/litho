"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9348],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.createElement(e,l({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,h=m["".concat(r,".").concat(p)]||m[p]||c[p]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(67294),i=n(86010);const l="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(l,r),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(83117),i=n(67294),l=n(86010),r=n(72389),o=n(67392),d=n(7094),s=n(12466);const m="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,r=e.lazy,p=e.block,c=e.defaultValue,h=e.values,x=e.groupId,f=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,d.U)(),w=N.tabGroupChoices,C=N.setTabGroupChoices,E=(0,i.useState)(y),T=E[0],O=E[1],A=[],L=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=x){var F=w[x];null!=F&&F!==T&&g.some((function(e){return e.value===F}))&&O(F)}var P=function(e){var t=e.currentTarget,n=A.indexOf(t),a=g[n].value;a!==T&&(L(t),O(a),null!=x&&C(x,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=A.indexOf(e.currentTarget)+1;n=null!=(a=A[i])?a:A[0];break;case"ArrowLeft":var l,r=A.indexOf(e.currentTarget)-1;n=null!=(l=A[r])?l:A[A.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.default)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return A.push(e)},onKeyDown:D,onFocus:P,onClick:P},r,{className:(0,l.default)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,r.default)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},62146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var a=n(83117),i=n(80102),l=(n(67294),n(3905)),r=n(44996),o=(n(65488),n(85162),["components"]),d={id:"flexbox-yoga",title:"Layout System with Flexbox"},s=void 0,m={unversionedId:"mainconcepts/flexbox-yoga",id:"mainconcepts/flexbox-yoga",title:"Layout System with Flexbox",description:"Litho uses the Yoga library, which is an implementation of Flexbox, to measure and layout on-screen components. If you have used Flexbox on the web before then this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you of LinearLayout.",source:"@site/../docs/mainconcepts/flexbox-yoga.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/flexbox-yoga",permalink:"/docs/mainconcepts/flexbox-yoga",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/flexbox-yoga.mdx",tags:[],version:"current",frontMatter:{id:"flexbox-yoga",title:"Layout System with Flexbox"},sidebar:"mainSidebar",previous:{title:"useErrorBoundary",permalink:"/docs/mainconcepts/use-error-boundary"},next:{title:"Yoga Playground",permalink:"/docs/mainconcepts/yoga-playground"}},u={},p=[{value:"Flexbox attributes",id:"flexbox-attributes",level:2},{value:"Layout direction",id:"layout-direction",level:3},{value:"Distribution along the main axis",id:"distribution-along-the-main-axis",level:3},{value:"Distribution along the cross axis",id:"distribution-along-the-cross-axis",level:3},{value:"Wrapping to multiple lines",id:"wrapping-to-multiple-lines",level:3},{value:"Line distribution",id:"line-distribution",level:4}],c={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Litho uses the ",(0,l.mdx)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," library, which is an implementation of ",(0,l.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox"),", to measure and layout on-screen components. If you have used Flexbox on the web before then this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you of ",(0,l.mdx)("inlineCode",{parentName:"p"},"LinearLayout"),"."),(0,l.mdx)("h2",{id:"flexbox-attributes"},"Flexbox attributes"),(0,l.mdx)("p",null,"This section shows how various attributes of Flexbox are used for on-screen layout."),(0,l.mdx)("h3",{id:"layout-direction"},"Layout direction"),(0,l.mdx)("p",null,"Flexbox is a ",(0,l.mdx)("strong",{parentName:"p"},"one-dimensional layout model"),", which means all elements are placed along one line."),(0,l.mdx)("p",null,"The following information may help you decide whether to layout your elements horizontally or vertically."),(0,l.mdx)("p",null,"The primary axis of layout is called the ",(0,l.mdx)("strong",{parentName:"p"},"Main Axis"),", and the direction perpendicular to it is called the ",(0,l.mdx)("strong",{parentName:"p"},"Cross Axis"),". For example, if you wanted your children to be laid out left to right, then the Main Axis would be the horizontal axis, and the Cross Axis would be the vertical axis."),(0,l.mdx)("p",null,"Litho uses special container components to define the direction of the layout, as shown in the following table."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},"Component"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Main Axis"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Child Elements Layout"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"If Wrapping is Enabled"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Row")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"left to right"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the left of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Row (reverse)")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"right to left"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the right of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Column")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"top to bottom"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the top of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Column (reverse)")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"bottom to top"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the bottom of the container.")))),(0,l.mdx)("p",null,"The above container components are illustrated in the following diagram."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-flex-direction.png"),alt:"flex-direction"}),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"(reverse)")," option is available through the ",(0,l.mdx)("inlineCode",{parentName:"p"},".reverse(boolean)")," method on ",(0,l.mdx)("inlineCode",{parentName:"p"},"Row"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"Column")," objects."))),(0,l.mdx)("h3",{id:"distribution-along-the-main-axis"},"Distribution along the main axis"),(0,l.mdx)("p",null,"If your container has more space than is necessary along the Main Axis then the way children are positioned across that axis needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"justifyContent")," method specifies how the child elements are distributed across the Main Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," enum input, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - position children at the start of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - position children at the end of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - position children in the centre of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - distribute extra space evenly between children."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - distribute space evenly around each child. Note that adjacent children will have '2x' space between them (because each child has its own 'padding')."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_EVENLY")," - distribute space evenly around all children.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," values are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-justify-content.png"),alt:"justify-content"}),(0,l.mdx)("h3",{id:"distribution-along-the-cross-axis"},"Distribution along the cross axis"),(0,l.mdx)("p",null,"If the elements in your line have different heights, then the way they are positioned along the line needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignItems")," method specifies how the container's children are distributed across the Cross Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum input, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - stretch the size of all elements to completely fill the line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - align elements with the start of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - align elements with the end of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - align elements with the centre of the line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"BASELINE")," - align elements with respect to their baselines.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-align-items.png"),alt:"align-items"}),(0,l.mdx)("h3",{id:"wrapping-to-multiple-lines"},"Wrapping to multiple lines"),(0,l.mdx)("p",null,"In addition to the one-dimensional Flexbox laying out its children in one line, Flexboxes can also wrap their children onto multiple lines, much like text wraps. You specify wrapping behavior with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Wrap")," method, which takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," enum value that has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"NO_WRAP")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - there is no wrapping. Children are forced into a single line; if they cannot fit, they will overflow."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP")," - elements that overflow a single line will be moved to the next line. If the main axis is horizontal, then the next line will be ",(0,l.mdx)("strong",{parentName:"li"},"below")," the previous line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP_REVERSE")," - similar to ",(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP")," except the order of lines is reversed. If the main axis is horizontal, then the next line will be ",(0,l.mdx)("strong",{parentName:"li"},"above")," the previous line.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," values are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-wrap.png"),alt:"wrap"}),(0,l.mdx)("h4",{id:"line-distribution"},"Line distribution"),(0,l.mdx)("p",null,"If your container has extra space in the Cross Axis direction, then the way lines are distributed in that space needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignContent")," method specifies how lines are distributed along the Cross Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum value, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - lines are stretched evenly to fill the available space in the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - lines are placed at the start of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - lines are placed at the end of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - lines are placed in the centre of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - evenly distributes extra space between all lines."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - pads lines above and below with extra space.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values, for Lines, are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-align-content.png"),alt:"align-content"}),(0,l.mdx)("p",null,"For more information on specific Flexbox properties, refer to the ",(0,l.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga documentation")," or explore any web resource on how Flexbox functions."))}h.isMDXComponent=!0}}]);