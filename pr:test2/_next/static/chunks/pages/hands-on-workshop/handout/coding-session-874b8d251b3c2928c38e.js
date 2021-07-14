(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{91173:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return p},default:function(){return h}});var o=n(96156),i=n(17375),s=(n(67294),n(3905)),a=n(60741);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"Coding session"},u={meta:p},c=a.Z;function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)(c,l(l(l({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As a developer, you are working on ",(0,s.kt)("strong",{parentName:"p"},"version 1")," of your library. You\nalready have a product and it is functioning (kind of). But the interface\nthere is not componentized. Let's fix it."),(0,s.kt)("p",null,"By this time, you should already have a list of components to implement, aligned with\nyour team. ",(0,s.kt)("strong",{parentName:"p"},"At this step, your final goal is to create a set of components for your\nfuture product"),". Focus on the Storybook, don't change the product yet.\nHowever, you can copy-paste the styles from the product."),(0,s.kt)("h2",null,"Workflow"),(0,s.kt)("p",null,"This is a large task, that we are going to work on also on the second day. We split it\nto the following parts:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Update design tokens"),(0,s.kt)("li",{parentName:"ol"},"Process the tokens with Style Dictionary"),(0,s.kt)("li",{parentName:"ol"},"Display design tokens in Storybook"),(0,s.kt)("li",{parentName:"ol"},"Update the components with tokens"),(0,s.kt)("li",{parentName:"ol"},"Write new components"),(0,s.kt)("li",{parentName:"ol"},"Visual regression tests")),(0,s.kt)("h2",null,"1. Updating design tokens"),(0,s.kt)("p",null,"If you want to sync with the design library, build Figma tokens.\nYou will use in components and product pages.\nThe tokens are exported from Figma in one click with\n",(0,s.kt)("a",l({parentName:"p"},{href:"https://github.com/lukasoppermann/design-tokens"}),"Design Tokens plugin"),". Once\nyou got ",(0,s.kt)("inlineCode",{parentName:"p"},"design-tokens.json")," file from your designer, put it to\n",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/tokens/design-tokens.json"),"."),(0,s.kt)("h3",null,"Under the tokens' hood"),(0,s.kt)("p",null,"The exported is not very convenient for development, so we process\nit with the help of ",(0,s.kt)("a",l({parentName:"p"},{href:"https://amzn.github.io/style-dictionary/"}),"Style Dictionary"),".\nYou can see the result in ",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/src/tokens/dist/"),". These are the\nthe files that will be imported into the components. You don't have to change\nanything there, but it is good to know how\nthese things work."),(0,s.kt)("h2",null,"2. Process the tokens with Style Dictionary"),(0,s.kt)("p",null,"You can see in ",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/src/tokens/dist/")," how ",(0,s.kt)("em",{parentName:"p"},"color")," and ",(0,s.kt)("em",{parentName:"p"},"typography"),"\ntokens are displayed. But as you noticed, the ",(0,s.kt)("inlineCode",{parentName:"p"},"design-tokens.json")," file has much\nmore information. For example, space tokens. Before you use them in the library,\nyou need a custom processing via Style Dictionary."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Let's write a custom processing for spacing tokens.")),(0,s.kt)("h2",null,"3. Display design tokens in Storybook"),(0,s.kt)("p",null,"Now you have spacing tokens as variables. The next step is to make them visible\nin Storybook. Look at the stories for colors and typography as an example."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Let's display spacing tokens.")),(0,s.kt)("h2",null,"4. Update the components with tokens"),(0,s.kt)("p",null,"In the repository, you have some components. But only the color tokens are used\nin their code. The spacing values are hard-coded."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Let's bring tokens into the code.")),(0,s.kt)("h2",null,"5. Writing new components"),(0,s.kt)("p",null,"Quickly add component template files:"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{}),"yarn add-component <ComponentName>\n")),(0,s.kt)("p",null,"For example, if you run ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn add-component Avatar"),", a new folder with two new files will be created at ",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/src/components"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Avatar/",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"index.js"),(0,s.kt)("li",{parentName:"ul"},"Avatar.stories.mdx")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),". When you add the component, it gets re-exported in the library index file,\nwhich is ",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/src/index.js"),". If you want to rename or remove a component,\ndon't forget also to change there."),(0,s.kt)("h3",null,"What do I code?"),(0,s.kt)("p",null,"Check ",(0,s.kt)("a",l({parentName:"p"},{href:"https://component.gallery/"}),"https://component.gallery/")," to get ideas on how to fill your\ncomponent with code."),(0,s.kt)("h2",null,"6. Visual regression tests"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),". ",(0,s.kt)("em",{parentName:"p"},"Creevey requires Docker to be installed.")),(0,s.kt)("p",null,"To keep the system consistent, you should always provide visual references for your\ncomponents. This will make automatic testing work smoothly. This is how\nyou can do it:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Run the testing UI with ",(0,s.kt)("inlineCode",{parentName:"li"},"yarn test:creevey:ui")),(0,s.kt)("li",{parentName:"ol"},"Run the tests and examine the results"),(0,s.kt)("li",{parentName:"ol"},"Noticed the inconcistency? Fix and run the tests again."),(0,s.kt)("li",{parentName:"ol"},"There is a change but you were expecting it? Approve.")),(0,s.kt)("p",null,"If you created a new component, or visualy changed the existing one, it\nwill always go with the change of their visual references. Notice the changes\nfiles in ",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/tests/referenceImages"),", add them and commit. It is\na good habit to include your visual references in your pull request. And it\nensures the tests automation."))}h.isMDXComponent=!0},7821:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hands-on-workshop/handout/coding-session",function(){return n(91173)}])}},function(e){e.O(0,[774,888,179],(function(){return t=7821,e(e.s=t);var t}));var t=e.O();_N_E=t}]);