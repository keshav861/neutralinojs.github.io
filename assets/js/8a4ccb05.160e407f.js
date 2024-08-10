"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[5823],{8880:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=r(4848),t=r(8453);const l={title:"Neutralino.computer",toc_max_heading_level:2},s=void 0,c={id:"api/computer",title:"Neutralino.computer",description:"Neutralino.computer namespace contains methods related to the user's hardware.",source:"@site/docs/api/computer.md",sourceDirName:"api",slug:"/api/computer",permalink:"/docs/api/computer",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/computer.md",tags:[],version:"current",frontMatter:{title:"Neutralino.computer",toc_max_heading_level:2},sidebar:"docs",previous:{title:"Neutralino.clipboard",permalink:"/docs/api/clipboard"},next:{title:"Neutralino.custom",permalink:"/docs/api/custom"}},o={},a=[{value:"computer.getMemoryInfo()",id:"computergetmemoryinfo",level:2},{value:"Return Object (awaited):",id:"return-object-awaited",level:3},{value:"computer.getArch()",id:"computergetarch",level:2},{value:"Return String (awaited):",id:"return-string-awaited",level:3},{value:"computer.getKernelInfo()",id:"computergetkernelinfo",level:2},{value:"Return Object (awaited):",id:"return-object-awaited-1",level:3},{value:"computer.getOSInfo()",id:"computergetosinfo",level:2},{value:"Return Object (awaited):",id:"return-object-awaited-2",level:3},{value:"computer.getCPUInfo()",id:"computergetcpuinfo",level:2},{value:"Return Object (awaited):",id:"return-object-awaited-3",level:3},{value:"computer.getDisplays()",id:"computergetdisplays",level:2},{value:"Return Object (awaited):",id:"return-object-awaited-4",level:3},{value:"Display",id:"display",level:3},{value:"computer.getMousePosition()",id:"computergetmouseposition",level:2},{value:"Return Object (awaited):",id:"return-object-awaited-5",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Neutralino.computer"})," namespace contains methods related to the user's hardware."]}),"\n",(0,i.jsx)(n.h2,{id:"computergetmemoryinfo",children:"computer.getMemoryInfo()"}),"\n",(0,i.jsx)(n.p,{children:"Returns system memory statistics in bytes."}),"\n",(0,i.jsx)(n.h3,{id:"return-object-awaited",children:"Return Object (awaited):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"physical"})," Object: Physical memory information.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"total"})," Number: Total physical memory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"available"})," Number: Available physical memory."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"virtual"})," Object: Virtual memory information.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"total"})," Number: Total virtual memory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"available"})," Number: Available virtual memory."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let memoryInfo = await Neutralino.computer.getMemoryInfo();\nconsole.log(`RAM size: ${memoryInfo.physical.total}B`);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"computergetarch",children:"computer.getArch()"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the CPU architecture identifier: ",(0,i.jsx)(n.code,{children:"x64"})," (x86 64bit/arm64), ",(0,i.jsx)(n.code,{children:"ia32"})," (x86 32bit), ",(0,i.jsx)(n.code,{children:"arm"}),", ",(0,i.jsx)(n.code,{children:"itanium"}),",\nor ",(0,i.jsx)(n.code,{children:"unknown"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"return-string-awaited",children:"Return String (awaited):"}),"\n",(0,i.jsx)(n.p,{children:"CPU architecture."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let arch = await Neutralino.computer.getArch();\nconsole.log(arch);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"computergetkernelinfo",children:"computer.getKernelInfo()"}),"\n",(0,i.jsx)(n.p,{children:"Returns operating system kernel information."}),"\n",(0,i.jsx)(n.h3,{id:"return-object-awaited-1",children:"Return Object (awaited):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variant"})," String: Kernel type: ",(0,i.jsx)(n.code,{children:"Linux"}),", ",(0,i.jsx)(n.code,{children:"Darwin"}),", ",(0,i.jsx)(n.code,{children:"Windows NT"}),", or ",(0,i.jsx)(n.code,{children:"Unknown"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version"})," String: Version in the ",(0,i.jsx)(n.code,{children:"<major>.<minor>.<patch>-<build_number>"})," format."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let kernelInfo = await Neutralino.computer.getKernelInfo();\nconsole.log(`Kernel: ${kernelInfo.variant}`);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"computergetosinfo",children:"computer.getOSInfo()"}),"\n",(0,i.jsx)(n.p,{children:"Returns operating system information."}),"\n",(0,i.jsx)(n.h3,{id:"return-object-awaited-2",children:"Return Object (awaited):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," String: Operating system name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"})," String: Operating system description."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version"})," String: Version in the ",(0,i.jsx)(n.code,{children:"<major>.<minor>.<patch>-<build_number>"})," format."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let osInfo = await Neutralino.computer.getOSInfo();\nconsole.log(`OS: ${osInfo.name}`);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"computergetcpuinfo",children:"computer.getCPUInfo()"}),"\n",(0,i.jsx)(n.p,{children:"Returns the CPU information."}),"\n",(0,i.jsx)(n.h3,{id:"return-object-awaited-3",children:"Return Object (awaited):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vendor"})," String: Vendor name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model"})," String: Model name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"frequency"})," Number: The current CPU frequency in hertz (Hz)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"architecture"})," String: CPU architecture name. Returns the same value as the ",(0,i.jsx)(n.code,{children:"getArch"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"logicalThreads"})," Number: Number of logical threads in the parallelism model."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"physicalCores"})," Number: Number of physical cores in the CPU."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"physicalUnits"})," Number: Number of physical CPU hardware units in the motherboard."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let cpuInfo = await Neutralino.computer.getCPUInfo();\nconsole.log(`CPU model: ${cpuInfo.model}`);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"computergetdisplays",children:"computer.getDisplays()"}),"\n",(0,i.jsx)(n.p,{children:"Returns information about all connected displays."}),"\n",(0,i.jsx)(n.h3,{id:"return-object-awaited-4",children:"Return Object (awaited):"}),"\n",(0,i.jsxs)(n.p,{children:["An array of ",(0,i.jsx)(n.code,{children:"Display"})," objects."]}),"\n",(0,i.jsx)(n.h3,{id:"display",children:"Display"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," Number: A virtual display identifier."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"resolution"})," Object: Display resolution information.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"width"})," Number: Display width."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"height"})," Number: Display height."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dpi"})," Number: DPI (Dots Per Inch) value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bpp"})," Number: BPP (Bits Per Pixel) value (also known as the color depth)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"refreshRate"})," Number: Refresh rate in hertz (Hz)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let displays = await Neutralino.computer.getDisplays();\nfor(let display of displays) {\n    console.log(display);\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"computergetmouseposition",children:"computer.getMousePosition()"}),"\n",(0,i.jsx)(n.p,{children:"Returns the current mouse cursor position."}),"\n",(0,i.jsx)(n.h3,{id:"return-object-awaited-5",children:"Return Object (awaited):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"})," Number: Distance from the left edge of the screen in pixels."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," Number: Distance from the top edge of the screen in pixels."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let pos = await Neutralino.computer.getMousePosition();\nconsole.log(`Pos: ${pos.x}, ${pos.y}`);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var i=r(6540);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);