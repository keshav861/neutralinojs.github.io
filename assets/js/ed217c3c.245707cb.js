"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[715],{5078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(4848),i=t(8453);const s={title:"Neutralino.custom",toc_max_heading_level:2},r=void 0,a={id:"api/custom",title:"Neutralino.custom",description:"Neutralinojs offers the extensions API to write custom backend code with any programming language,",source:"@site/docs/api/custom.md",sourceDirName:"api",slug:"/api/custom",permalink:"/docs/api/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/custom.md",tags:[],version:"current",frontMatter:{title:"Neutralino.custom",toc_max_heading_level:2},sidebar:"docs",previous:{title:"Neutralino.computer",permalink:"/docs/api/computer"},next:{title:"Neutralino.debug",permalink:"/docs/api/debug"}},d={},c=[{value:"custom.getMethods()",id:"customgetmethods",level:2},{value:"Return Array (awaited):",id:"return-array-awaited",level:3},{value:"custom.add(num1, num2, options)",id:"customaddnum1-num2-options",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Options",id:"options",level:3},{value:"Return Number (awaited):",id:"return-number-awaited",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Neutralinojs offers the extensions API to write custom backend code with any programming language,\nbut extensions come with the following drawbacks that affect apps in several scenarios:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Extensions use a shared WebSocket for communication, so using direct C++ references\n(i.e., the window handler) is impossible within extensions."}),"\n",(0,o.jsx)(n.li,{children:"The developer is responsible for packaging their extension binaries."}),"\n",(0,o.jsx)(n.li,{children:"A C++-based extension is not fast as native C++-based code due to the WebSockets-based IPC."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, a developer can download the framework C++ code, modify it, and re-compile it. But,\nthe developer may face issues while synching upstream code modifications. So, Neutralinojs offers a separate namespace, a generic JavaScript function template, pre-developed helper functions for handling JavaScript-to-C++ parameter mapping (i.e., ",(0,o.jsx)(n.code,{children:"helpers::hasField(json, '<fieldname>'))"}),", and a developer guide to add custom APIs to the Neutralinojs framework without updating the framework core."]}),"\n",(0,o.jsx)(n.h2,{id:"customgetmethods",children:"custom.getMethods()"}),"\n",(0,o.jsx)(n.p,{children:"Returns all custom methods added by the app developer."}),"\n",(0,o.jsx)(n.h3,{id:"return-array-awaited",children:"Return Array (awaited):"}),"\n",(0,o.jsx)(n.p,{children:"A string array of all custom method identifiers."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"let methods = await Neutralino.custom.getMethods();\nconsole.log(methods);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"customaddnum1-num2-options",children:"custom.add(num1, num2, options)"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This is a sample method and official Neutralinojs framework builds don't include this method by default.\nSo, you have to download the Neutralinojs framework source code and uncomment the ",(0,o.jsx)(n.code,{children:"add"})," method in the\n",(0,o.jsx)(n.a,{href:"https://github.com/neutralinojs/neutralinojs/tree/main/api/custom",children:(0,o.jsx)(n.code,{children:"custom"})})," namespace and\n",(0,o.jsx)(n.a,{href:"https://github.com/neutralinojs/neutralinojs/blob/db457c717d789a040e70f0b8de9ddd412c8ec103/server/router.cpp#L122",children:(0,o.jsx)(n.code,{children:"router.cpp"})}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"This method returns the sum of two numbers for demonstration purposes of custom methods."}),"\n",(0,o.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"num1"})," Number: The first number for the summation process."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"num2"})," Number: The second number for the summation process."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"addExtraFive"})," Boolean: Adds extra five to the numerical result."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"addExtraTen"})," Boolean: Adds extra ten to the numerical result."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"return-number-awaited",children:"Return Number (awaited):"}),"\n",(0,o.jsx)(n.p,{children:"The sum of input numerical parameters with extra value additions based on options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"let sum;\nsum = await Neutralino.custom.add(10, 10); // 20\nsum = await Neutralino.custom.add(1, 1, { addExtraFive: true, addExtraTen: true }); // 17\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Check the ",(0,o.jsx)(n.code,{children:"add"})," method implementation and learn how to capture, validate, and process parameters in C++.\nFor compiling your Neutralinojs fork, you can use the existing\n",(0,o.jsx)(n.a,{href:"https://github.com/neutralinojs/neutralinojs/tree/main/.github/workflows",children:"GitHub Actions workflows"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);