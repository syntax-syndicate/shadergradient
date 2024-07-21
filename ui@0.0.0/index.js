var m=Object.defineProperty,R=Object.defineProperties,$=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var g=(t,e,i)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,v=(t,e)=>{for(var i in e||(e={}))f.call(e,i)&&g(t,i,e[i]);if(l)for(var i of l(e))b.call(e,i)&&g(t,i,e[i]);return t},h=(t,e)=>R(t,E(e));var A=(t,e)=>{var i={};for(var n in t)f.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&l)for(var n of l(t))e.indexOf(n)<0&&b.call(t,n)&&(i[n]=t[n]);return i};var S=(t,e)=>{for(var i in e)m(t,i,{get:e[i],enumerable:!0})},z=(t,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of I(e))!f.call(t,r)&&r!==i&&m(t,r,{get:()=>e[r],enumerable:!(n=$(e,r))||n.enumerable});return t};var D=t=>z(m({},"__esModule",{value:!0}),t);var O={};S(O,{Button:()=>K,TextAnimation:()=>N});module.exports=D(O);var w=(...t)=>t.filter(e=>!!e).join(" ");var x=require("react/jsx-runtime"),F={primary:"bg-primary text-white",secondary:"ring-1 ring-primary text-primary"},K=n=>{var r=n,{kind:t="primary",children:e}=r,i=A(r,["kind","children"]);return(0,x.jsx)("button",h(v({className:w("h-button font-medium rounded w-full",F[t])},i),{children:e}))};var p=require("react"),a=require("framer-motion"),k=require("react-intersection-observer"),o=require("react/jsx-runtime");function N({fontSize:t,color:e,content:i,delay:n,width:r=null,yBefore:B=20,isFramerCanvas:P=!1}){let T={before:{transition:{staggerChildren:.015}},after:{transition:{staggerChildren:.015}}},V={before:{opacity:0,y:B,rotate:-15,scale:.4,transition:{type:"spring",duration:.4,damping:10}},after:{opacity:1,y:0,scale:1,rotate:0,transition:{type:"spring",duration:.4,damping:10}}},[C,c]=(0,k.useInView)(),s=(0,a.useAnimation)(),[H,L]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{c?s.start("after"):s.start("before")},[s,c]),setTimeout(()=>{L(!0)},n),(0,o.jsx)(a.AnimatePresence,{children:H&&(0,o.jsx)(a.motion.div,{style:{position:"relative",wordBreak:"break-word",width:r},children:(0,o.jsx)(a.motion.h1,{variants:T,ref:C,initial:P?"after":"before",animate:s,children:(0,o.jsx)("div",{style:{textAlign:"left",fontSize:t,color:e,fontWeight:500},children:i.split(" ").map((d,y)=>(0,o.jsxs)("div",{style:{display:"inline-block"},children:[Array.from(d).map((u,M)=>(0,o.jsx)(a.motion.span,{style:{position:"relative",display:"inline-block",width:"auto"},variants:V,children:u===" "?"\xA0":u},`${M}-${u}`)),y!==i.split(" ").length-1?"\xA0":null]},`word-${d}-${y}`))})})})})}0&&(module.exports={Button,TextAnimation});
