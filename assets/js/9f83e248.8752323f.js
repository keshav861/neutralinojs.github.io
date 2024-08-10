"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[8700],{5771:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var t=i(4848),o=i(8453);const s={title:"Neutralino.init",toc_max_heading_level:2},a=void 0,l={id:"api/init",title:"Neutralino.init",description:"init is not a namespace, it's a function that initializes a Neutralinojs application.",source:"@site/docs/api/init.md",sourceDirName:"api",slug:"/api/init",permalink:"/docs/api/init",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/init.md",tags:[],version:"current",frontMatter:{title:"Neutralino.init",toc_max_heading_level:2},sidebar:"docs",previous:{title:"Neutralino.filesystem",permalink:"/docs/api/filesystem"},next:{title:"Neutralino.os",permalink:"/docs/api/os"}},c={},r=[{value:"init()",id:"init",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"init"})," is not a namespace, it's a function that initializes a Neutralinojs application."]}),"\n",(0,t.jsx)(n.h2,{id:"init",children:"init()"}),"\n",(0,t.jsxs)(n.p,{children:["The application developer needs to call this method explicitly via a JavaScript source file before using any\nnative API function. The ",(0,t.jsx)(n.code,{children:"init"})," function does the following tasks when it's called."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Starts a WebSocket connection with the Neutralinojs server asynchronously."}),"\n",(0,t.jsxs)(n.li,{children:["Registers auto-reload event handler if the ",(0,t.jsx)(n.code,{children:"--neu-dev-auto-reload"})," flag (the ",(0,t.jsx)(n.code,{children:"neu run"})," command sets this flag) is provided."]}),"\n",(0,t.jsxs)(n.li,{children:["Defines ",(0,t.jsx)(n.code,{children:"NL_CVERSION"})," with the client libary version in the ",(0,t.jsx)(n.code,{children:"window"})," scope."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can call native API calls right after the ",(0,t.jsx)(n.code,{children:"init"})," function call, as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"Neutralino.init();\n\nNeutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Also, you can wrap immediate native calls with the ",(0,t.jsx)(n.code,{children:"ready"})," event callback if you like."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"Neutralino.init();\n\nNeutralino.events.on('ready', () => {\n    Neutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');\n});\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Neutralinojs client library typically queues and sends native API calls to the server when the WebSocket connection\nis established. Therefore, you don't need to use the ",(0,t.jsx)(n.code,{children:"ready"})," event callback always."]})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(6540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);