// Generated by Framer (09050dd)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,RichText,SVG,Text,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import{Input}from"https://framerusercontent.com/modules/4TG0CA0xFC8r92HZNVLs/oNHmObL27xLBv67Gbys4/Input.js";import{Icon as Feather}from"https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/8wMRKrSQDZ6NDbLhK7JF/Feather.js";import{AllControls,Gradient}from"https://framerusercontent.com/modules/z3nMGg5wkheHH1MRKNH0/YCH7l8y9rkFSE6sNGsLq/DesignSystem.js";import{ActiveTitle,ArrowLeft,ArrowRight,HideScrollBar,insertCanvasAsImage,Tool3dAxis,ToolUndo,ToolZoomOut,UrlInput,UrlToProps}from"https://framerusercontent.com/modules/yRl2cTj9EYORBGzVcYOX/EDhJD2iYpJUp5V17qrpR/Overrides.js";import{TailwindCSS}from"https://framerusercontent.com/modules/eV6Cwcfo8Bh3bvsz3IXI/vu3NC887AyJm8e1oQ2KH/TailwindCSS.js";import Tools from"https://framerusercontent.com/modules/wqnL792mTpIh6KOqQVE8/znSn9yF1usR4YLCzpDWy/XWP78T8ip.js";const GradientFonts=getFonts(Gradient);const GradientUrlToProps=UrlToProps(Gradient);const InputFonts=getFonts(Input);const FeatherFonts=getFonts(Feather);const InputUrlInput=UrlInput(Input);const MotionDivArrowLeft=ArrowLeft(motion.div);const TextActiveTitle=ActiveTitle(Text);const MotionDivArrowRight=ArrowRight(motion.div);const ToolsFonts=getFonts(Tools);const ToolsToolUndo=ToolUndo(Tools);const ToolsTool3dAxis=Tool3dAxis(Tools);const ToolsToolZoomOut=ToolZoomOut(Tools);const AllControlsFonts=getFonts(AllControls);const TailwindCSSFonts=getFonts(TailwindCSS);const MotionDivHideScrollBar=HideScrollBar(motion.div);const MotionDivInsertCanvasAsImage=insertCanvasAsImage(motion.div);const cycleOrder=["ASohgaYfq","jJpM4l5cr","IxdGAuDig","lrYW_56hy"];const variantClassNames={ASohgaYfq:"framer-v-1pwgz07",IxdGAuDig:"framer-v-1imbskt",jJpM4l5cr:"framer-v-5hfd4w",lrYW_56hy:"framer-v-s37v42"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={default:"ASohgaYfq",input:"jJpM4l5cr",invalid:"lrYW_56hy",valid:"IxdGAuDig"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="ASohgaYfq",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"ASohgaYfq",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const tapoq8wmn=activeVariantCallback(async(...args)=>{setVariant("jJpM4l5cr");});const tapcdlrqq=activeVariantCallback(async(...args)=>{setVariant("ASohgaYfq");});const isDisplayed1=()=>{if(baseVariant==="lrYW_56hy")return true;return false;};const isDisplayed2=()=>{if(baseVariant==="IxdGAuDig")return true;return false;};const isDisplayed3=()=>{if(baseVariant==="jJpM4l5cr")return true;return false;};const isDisplayed4=()=>{if(baseVariant==="jJpM4l5cr")return true;return false;};const isDisplayed5=()=>{if(baseVariant==="lrYW_56hy")return true;return false;};const isDisplayed6=()=>{if(baseVariant==="lrYW_56hy")return true;return false;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-hRbJf",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-1pwgz07",className),"data-framer-name":"default",layoutDependency:layoutDependency,layoutId:"ASohgaYfq",ref:ref,style:{...style},transition:transition,...addPropertyOverrides({IxdGAuDig:{"data-framer-name":"valid"},jJpM4l5cr:{"data-framer-name":"input"},lrYW_56hy:{"data-framer-name":"invalid"}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1cqj63m","data-framer-name":"previewWrap",layoutDependency:layoutDependency,layoutId:"p4T5xNE_k",style:{backgroundColor:"rgb(0, 0, 0)"},transition:transition,children:[/*#__PURE__*/ _jsx(Text,{__fromCanvasComponent:true,className:"framer-1tiyeo",fonts:["Inter-SemiBold"],layoutDependency:layoutDependency,layoutId:"ICaH3DH3n",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Preview</span><br></span></span>",style:{"--framer-font-family":'"Inter-SemiBold", "Inter", sans-serif',"--framer-font-size":"14px","--framer-font-style":"normal","--framer-font-weight":600,"--framer-letter-spacing":"0px","--framer-line-height":"1.5em","--framer-text-alignment":"start","--framer-text-color":"rgb(255, 255, 255)","--framer-text-decoration":"none","--framer-text-transform":"none"},transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ay7sco-container",layoutDependency:layoutDependency,layoutId:"tGeOu2MHd-container",transition:transition,children:/*#__PURE__*/ _jsx(GradientUrlToProps,{activeTab:"Colors",animate:"on",brightness:1.2,cameraZoom:1,cAzimuthAngle:180,cDistance:2.6,color1:"rgb(255, 80, 5)",color2:"rgb(219, 186, 149)",color3:"rgb(208, 188, 225)",control:"query",cPolarAngle:90,envPreset:"city",grain:"on",height:"100%",id:"tGeOu2MHd",layoutId:"tGeOu2MHd",lightType:"3d",positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",style:{height:"100%",width:"100%"},type:"plane",uAmplitude:.1,uDensity:1.3,uFrequency:.1,uSpeed:.6,uStrength:4,uTime:0,width:"100%",zoomOut:false})}),isDisplayed1()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1ksfbso",layoutDependency:layoutDependency,layoutId:"ffXWHyOZv",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-n78n4d-container",layoutDependency:layoutDependency,layoutId:"jJrlha8Kw-container",transformTemplate:(_,t)=>`translateY(-50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(Input,{backgroundColor:"rgb(56, 56, 56)",border:'var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10)) /* {"name":"key-orange"} */',borderRadius:8,borderWidth:2,bottomLeftRadius:0,bottomRightRadius:0,caretColor:"rgb(255, 255, 255)",disabled:false,enableLimit:false,focusColor:"rgb(84, 84, 84)",focused:true,font:false,fontFamily:"",fontSize:16,fontWeight:400,height:"100%",id:"jJrlha8Kw",isMixedBorderRadius:false,isRTL:false,keyboard:"url",layoutId:"jJrlha8Kw",lineHeight:1.4,maxLength:10,multiLine:false,padding:15,paddingBottom:0,paddingLeft:0,paddingPerSide:false,paddingRight:0,paddingTop:0,password:false,placeholder:"URL from shadergradient.co",placeholderColor:"rgb(170, 170, 170)",style:{width:"100%"},textAlign:"left",textColor:'var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10)) /* {"name":"key-orange"} */',topLeftRadius:0,topRightRadius:0,truncate:false,value:"",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-sz4xb8",layoutDependency:layoutDependency,layoutId:"MIniBky1T",style:{background:"linear-gradient(90deg, rgba(56, 56, 56, 0) 0%, rgb(56, 56, 56) 100%)"},transition:transition}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1osnndu",layoutDependency:layoutDependency,layoutId:"E32HiwBWJ",style:{backgroundColor:"rgb(82, 82, 82)",borderBottomLeftRadius:3,borderBottomRightRadius:3,borderTopLeftRadius:3,borderTopRightRadius:3},transition:transition,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-x5gxmg-container",layoutDependency:layoutDependency,layoutId:"jlSUF0c9z-container",transition:transition,children:/*#__PURE__*/ _jsx(Feather,{color:"rgb(255, 255, 255)",height:"100%",iconSearch:"minimize-2",iconSelection:"arrow-right",id:"jlSUF0c9z",layoutId:"jlSUF0c9z",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},width:"100%"})})})]}),isDisplayed2()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-139vojp",layoutDependency:layoutDependency,layoutId:"ipae1Q9Z6",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ydicee-container",layoutDependency:layoutDependency,layoutId:"eKW5BZFiV-container",transformTemplate:(_,t)=>`translateY(-50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(Input,{backgroundColor:"rgb(56, 56, 56)",border:"rgb(84, 84, 84)",borderRadius:8,borderWidth:2,bottomLeftRadius:0,bottomRightRadius:0,caretColor:"rgb(255, 255, 255)",disabled:false,enableLimit:false,focusColor:"rgb(84, 84, 84)",focused:true,font:false,fontFamily:"",fontSize:16,fontWeight:400,height:"100%",id:"eKW5BZFiV",isMixedBorderRadius:false,isRTL:false,keyboard:"url",layoutId:"eKW5BZFiV",lineHeight:1.4,maxLength:10,multiLine:false,padding:15,paddingBottom:0,paddingLeft:0,paddingPerSide:false,paddingRight:0,paddingTop:0,password:false,placeholder:"URL from shadergradient.co",placeholderColor:"rgb(170, 170, 170)",style:{width:"100%"},textAlign:"left",textColor:"rgb(255, 255, 255)",topLeftRadius:0,topRightRadius:0,truncate:false,value:"",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1qg2zbp",layoutDependency:layoutDependency,layoutId:"e3HRmSXo0",style:{background:"linear-gradient(90deg, rgba(56, 56, 56, 0) 0%, rgb(56, 56, 56) 100%)"},transition:transition}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-13r4p9u",layoutDependency:layoutDependency,layoutId:"QNON8Ie4g",style:{backgroundColor:"var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10))",borderBottomLeftRadius:3,borderBottomRightRadius:3,borderTopLeftRadius:3,borderTopRightRadius:3},transition:transition,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-z5g4o7-container",layoutDependency:layoutDependency,layoutId:"HKELtiq4Q-container",transition:transition,children:/*#__PURE__*/ _jsx(Feather,{color:"rgb(255, 255, 255)",height:"100%",iconSearch:"minimize-2",iconSelection:"arrow-right",id:"HKELtiq4Q",layoutId:"HKELtiq4Q",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},width:"100%"})})})]}),isDisplayed3()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1vgl4mr","data-framer-name":"Input",layoutDependency:layoutDependency,layoutId:"OBj6QcjrF",transition:transition,children:[isDisplayed4()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-1jnb6sn-container",layoutDependency:layoutDependency,layoutId:"qtRx1yz5y-container",transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,...addPropertyOverrides({jJpM4l5cr:{transformTemplate:(_,t)=>`translateY(-50%) ${t}`}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsx(InputUrlInput,{backgroundColor:"rgb(56, 56, 56)",border:"rgba(0, 0, 0, 0)",borderRadius:8,borderWidth:2,bottomLeftRadius:0,bottomRightRadius:0,caretColor:"rgb(255, 255, 255)",disabled:false,enableLimit:false,focusColor:"rgb(84, 84, 84)",focused:false,font:false,fontFamily:"",fontSize:16,fontWeight:400,height:"100%",id:"qtRx1yz5y",isMixedBorderRadius:false,isRTL:false,keyboard:"",layoutId:"qtRx1yz5y",lineHeight:1.4,maxLength:10,multiLine:false,padding:15,paddingBottom:0,paddingLeft:0,paddingPerSide:false,paddingRight:0,paddingTop:0,password:false,placeholder:"URL from shadergradient.co",placeholderColor:"rgb(170, 170, 170)",style:{width:"100%"},textAlign:"left",textColor:'var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10)) /* {"name":"key-orange"} */',topLeftRadius:0,topRightRadius:0,truncate:false,value:"",width:"100%",...addPropertyOverrides({jJpM4l5cr:{keyboard:"url",textColor:"rgb(255, 255, 255)"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-r7lnec",layoutDependency:layoutDependency,layoutId:"WGGgEdRjn",style:{backgroundColor:"rgb(82, 82, 82)",borderBottomLeftRadius:3,borderBottomRightRadius:3,borderTopLeftRadius:3,borderTopRightRadius:3},transition:transition,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-1b5fo8x-container",layoutDependency:layoutDependency,layoutId:"JZbwux1WT-container",transition:transition,children:/*#__PURE__*/ _jsx(Feather,{color:"rgb(255, 255, 255)",height:"100%",iconSearch:"minimize-2",iconSelection:"arrow-right",id:"JZbwux1WT",layoutId:"JZbwux1WT",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},width:"100%"})})})]}),isDisplayed5()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-1elrb7l",layoutDependency:layoutDependency,layoutId:"VCMKwUznP",transition:transition}),isDisplayed6()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1x4tq4w",layoutDependency:layoutDependency,layoutId:"NphR6HbNE",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1wpkfl6",layoutDependency:layoutDependency,layoutId:"gIg3TaHNH",style:{backgroundColor:"var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10))",borderBottomLeftRadius:2,borderBottomRightRadius:2,borderTopLeftRadius:2,borderTopRightRadius:2},transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--framer-font-size":"12px"},children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-font-size":"12px","--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Invalid link :("})})}),className:"framer-1xm4egn",layoutDependency:layoutDependency,layoutId:"ujjwFf44e",style:{"--extracted-1w3ko1f":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1tytrhz",layoutDependency:layoutDependency,layoutId:"tHFxtyKKt",style:{backgroundColor:"var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10))",borderBottomLeftRadius:2,borderBottomRightRadius:2,borderTopLeftRadius:2,borderTopRightRadius:2,rotate:-45},transition:transition})]})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-18e3n0t",layoutDependency:layoutDependency,layoutId:"zsa2gFwHi",style:{backgroundColor:"rgb(56, 56, 56)"},transition:transition,children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-af8hm3",layoutDependency:layoutDependency,layoutId:"BHm_Pyq5B",transition:transition,children:[/*#__PURE__*/ _jsx(Text,{__fromCanvasComponent:true,className:"framer-1b1yzrq",fonts:["Inter-SemiBold"],layoutDependency:layoutDependency,layoutId:"W6czhSPhQ",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Preset </span><br></span></span>",style:{"--framer-font-family":'"Inter-SemiBold", "Inter", sans-serif',"--framer-font-size":"14px","--framer-font-style":"normal","--framer-font-weight":600,"--framer-letter-spacing":"0px","--framer-line-height":"2.2em","--framer-text-alignment":"start","--framer-text-color":"rgb(255, 255, 255)","--framer-text-decoration":"none","--framer-text-transform":"none"},transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1rpa8fh",layoutDependency:layoutDependency,layoutId:"uY8fShLYK",style:{backgroundColor:"rgb(82, 82, 82)",borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopLeftRadius:8,borderTopRightRadius:8},transition:transition,children:[/*#__PURE__*/ _jsx(MotionDivArrowLeft,{className:"framer-ctetbh","data-framer-name":"button",layoutDependency:layoutDependency,layoutId:"tlLpsmFTi",style:{rotate:180},transition:transition,children:/*#__PURE__*/ _jsx(SVG,{className:"framer-writyi","data-framer-name":"graphic",fill:"hsl(0, 0%, 100%)",intrinsicHeight:24,intrinsicWidth:24,layoutDependency:layoutDependency,layoutId:"SQoqOYeW2",style:{rotate:180},svg:'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIosIcon"><path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>',transition:transition,withExternalLayout:true})}),/*#__PURE__*/ _jsx(TextActiveTitle,{__fromCanvasComponent:true,className:"framer-mm1yt2",fonts:["Inter-SemiBold"],layoutDependency:layoutDependency,layoutId:"wr_6jGFtC",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Halo</span><br></span></span>",style:{"--framer-font-family":'"Inter-SemiBold", "Inter", sans-serif',"--framer-font-size":"14px","--framer-font-style":"normal","--framer-font-weight":600,"--framer-letter-spacing":"0px","--framer-line-height":"2.2em","--framer-text-alignment":"start","--framer-text-color":"rgb(255, 255, 255)","--framer-text-decoration":"none","--framer-text-transform":"none"},transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(MotionDivArrowRight,{className:"framer-y0b0qn","data-framer-name":"button",layoutDependency:layoutDependency,layoutId:"T53_afyFA",transition:transition,children:/*#__PURE__*/ _jsx(SVG,{className:"framer-8qnrqk","data-framer-name":"graphic",fill:"hsl(0, 0%, 100%)",intrinsicHeight:24,intrinsicWidth:24,layoutDependency:layoutDependency,layoutId:"yA8mKgD2k",style:{rotate:180},svg:'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIosIcon"><path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>',transition:transition,withExternalLayout:true})})]})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-kq0p7r",layoutDependency:layoutDependency,layoutId:"RDGiziIji",style:{backgroundColor:"rgb(82, 82, 82)",borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopLeftRadius:100,borderTopRightRadius:100},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-xcuylx-container",layoutDependency:layoutDependency,layoutId:"ccYBEn5cQ-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsToolUndo,{axisIcon:false,feather:true,height:"100%",hoverText:"undo",icon:"corner-up-left",id:"ccYBEn5cQ",layoutId:"ccYBEn5cQ",variant:"QOKSNfwYS",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-pwr3f4-container",layoutDependency:layoutDependency,layoutId:"WnXvem91x-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsTool3dAxis,{axisIcon:true,feather:false,height:"100%",hoverText:"3d axis",icon:"corner-up-left",id:"WnXvem91x",layoutId:"WnXvem91x",variant:"PJFWvoY8M",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1hb769c-container",layoutDependency:layoutDependency,layoutId:"z8Ve0GW4z-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsToolZoomOut,{axisIcon:false,feather:true,height:"100%",hoverText:"zoom out",icon:"minimize-2",id:"z8Ve0GW4z",layoutId:"z8Ve0GW4z",variant:"PJFWvoY8M",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-600kf6-container",layoutDependency:layoutDependency,layoutId:"beqsTygCF-container",transition:transition,children:/*#__PURE__*/ _jsx(Tools,{axisIcon:false,feather:true,height:"100%",hoverText:"import url",icon:"link",id:"beqsTygCF",layoutId:"beqsTygCF",tap:tapoq8wmn,variant:"QOKSNfwYS",width:"100%",...addPropertyOverrides({IxdGAuDig:{tap:tapcdlrqq,variant:"cRsgIXvK1"},jJpM4l5cr:{tap:tapcdlrqq,variant:"cRsgIXvK1"},lrYW_56hy:{tap:tapcdlrqq,variant:"cRsgIXvK1"}},baseVariant,gestureVariant)})})]})]}),/*#__PURE__*/ _jsxs(MotionDivHideScrollBar,{className:"framer-1jrti1w","data-framer-name":"scrollWrap",layoutDependency:layoutDependency,layoutId:"AeGXfvLJg",style:{backgroundColor:"rgb(246, 248, 248)"},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-b4qjhb-container",layoutDependency:layoutDependency,layoutId:"CRnJVnMOu-container",transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(AllControls,{height:"100%",id:"CRnJVnMOu",isFigma:true,isMobile:true,layoutId:"CRnJVnMOu",style:{width:"100%"},width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-16fv3vz-container",layoutDependency:layoutDependency,layoutId:"zHhBZbUGx-container",style:{opacity:0},transition:transition,children:/*#__PURE__*/ _jsx(TailwindCSS,{height:"100%",id:"zHhBZbUGx",layoutId:"zHhBZbUGx",width:"100%"})})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1xipvue",layoutDependency:layoutDependency,layoutId:"xIm9hVJM1",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-124k4q5","data-framer-name":"Button",layoutDependency:layoutDependency,layoutId:"kO8EPcJXs",style:{backgroundColor:"var(--token-7f791c90-fa2a-4004-b0b3-eaae9cb65f59, rgb(255, 67, 10))",borderBottomLeftRadius:9,borderBottomRightRadius:9,borderTopLeftRadius:9,borderTopRightRadius:9},transition:transition,children:/*#__PURE__*/ _jsx(Text,{__fromCanvasComponent:true,className:"framer-itp9vq",fonts:["Inter-Medium"],layoutDependency:layoutDependency,layoutId:"NofqXYM2l",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Extract GIF</span><br></span></span>",style:{"--framer-font-family":'"Inter-Medium", "Inter", sans-serif',"--framer-font-size":"14px","--framer-font-style":"normal","--framer-font-weight":500,"--framer-letter-spacing":"0px","--framer-line-height":"2.2em","--framer-text-alignment":"start","--framer-text-color":"rgb(255, 255, 255)","--framer-text-decoration":"none","--framer-text-transform":"none"},transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,verticalAlignment:"top",withExternalLayout:true})}),/*#__PURE__*/ _jsx(MotionDivInsertCanvasAsImage,{className:"framer-egpbf3","data-border":true,"data-framer-name":"Button",layoutDependency:layoutDependency,layoutId:"sxKAAd2cv",style:{"--border-bottom-width":"1px","--border-color":'var(--token-7f791c90-fa2a-4004-b0b3-eaae9cb65f59, rgb(255, 67, 10)) /* {"name":"key-red"} */',"--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",borderBottomLeftRadius:9,borderBottomRightRadius:9,borderTopLeftRadius:9,borderTopRightRadius:9},transition:transition,children:/*#__PURE__*/ _jsx(Text,{__fromCanvasComponent:true,className:"framer-vllcju",fonts:["Inter-Medium"],layoutDependency:layoutDependency,layoutId:"pc2lY2CJJ",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Snapshot</span><br></span></span>",style:{"--framer-font-family":'"Inter-Medium", "Inter", sans-serif',"--framer-font-size":"14px","--framer-font-style":"normal","--framer-font-weight":500,"--framer-letter-spacing":"0px","--framer-line-height":"2.2em","--framer-text-alignment":"start","--framer-text-color":"var(--token-7f791c90-fa2a-4004-b0b3-eaae9cb65f59, rgb(255, 67, 10))","--framer-text-decoration":"none","--framer-text-transform":"none"},transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,verticalAlignment:"top",withExternalLayout:true})})]})]})})});});const css=['.framer-hRbJf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-hRbJf * { box-sizing: border-box; }",".framer-hRbJf .framer-1pwgz07 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 832px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 453px; }",".framer-hRbJf .framer-1cqj63m { flex: none; height: 305px; overflow: hidden; position: relative; width: 100%; }",".framer-hRbJf .framer-1tiyeo { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; }",".framer-hRbJf .framer-1ay7sco-container { flex: none; height: 100%; left: calc(49.90019960079842% - 100% / 2); position: absolute; top: calc(49.83606557377052% - 100% / 2); width: 100%; }",".framer-hRbJf .framer-1ksfbso, .framer-hRbJf .framer-139vojp { flex: none; height: 53px; left: calc(50.11037527593821% - 344px / 2); overflow: visible; position: absolute; top: calc(49.83606557377052% - 53px / 2); width: 344px; }",".framer-hRbJf .framer-n78n4d-container, .framer-hRbJf .framer-1ydicee-container { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 51%; }",".framer-hRbJf .framer-sz4xb8, .framer-hRbJf .framer-1qg2zbp { flex: none; height: 38px; overflow: visible; position: absolute; right: 50px; top: calc(50.94339622641512% - 38px / 2); width: 37px; }",".framer-hRbJf .framer-1osnndu, .framer-hRbJf .framer-13r4p9u, .framer-hRbJf .framer-r7lnec { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 5px; top: calc(50.94339622641512% - 42px / 2); width: 47px; }",".framer-hRbJf .framer-x5gxmg-container, .framer-hRbJf .framer-z5g4o7-container, .framer-hRbJf .framer-1b5fo8x-container { flex: none; height: 24px; position: relative; width: 24px; }",".framer-hRbJf .framer-1vgl4mr { flex: none; height: 201px; left: calc(51.434878587196486% - 322px / 2); overflow: visible; position: absolute; top: calc(50.16393442622953% - 201px / 2); width: 322px; }",".framer-hRbJf .framer-1jnb6sn-container { flex: none; height: auto; left: 48%; position: absolute; top: 50%; width: 309px; }",".framer-hRbJf .framer-1elrb7l { flex: none; height: 45px; overflow: hidden; position: absolute; right: 79px; top: calc(50.16393442622953% - 45px / 2); width: 94px; }",".framer-hRbJf .framer-1x4tq4w { flex: none; height: 22px; left: calc(50.11037527593821% - 78px / 2); overflow: visible; position: absolute; top: 85px; width: 78px; }",".framer-hRbJf .framer-1wpkfl6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; padding: 6px 7px 6px 7px; position: absolute; top: 50%; width: min-content; z-index: 1; }",".framer-hRbJf .framer-1xm4egn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-hRbJf .framer-1tytrhz { aspect-ratio: 1 / 1; bottom: -6px; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: calc(50.00000000000002% - 12px / 2); overflow: hidden; position: absolute; width: 12px; will-change: transform; }",".framer-hRbJf .framer-18e3n0t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 6px 9px 6px 18px; position: relative; width: 100%; }",".framer-hRbJf .framer-af8hm3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",".framer-hRbJf .framer-1b1yzrq, .framer-hRbJf .framer-mm1yt2 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",".framer-hRbJf .framer-1rpa8fh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 32px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 147px; }",".framer-hRbJf .framer-ctetbh, .framer-hRbJf .framer-y0b0qn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 20px; }",".framer-hRbJf .framer-writyi, .framer-hRbJf .framer-8qnrqk { aspect-ratio: 1 / 1; flex: none; height: 12px; position: relative; width: var(--framer-aspect-ratio-supported, 12px); }",".framer-hRbJf .framer-kq0p7r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 3px 3px 3px 3px; position: relative; width: min-content; }",".framer-hRbJf .framer-xcuylx-container, .framer-hRbJf .framer-pwr3f4-container, .framer-hRbJf .framer-1hb769c-container, .framer-hRbJf .framer-600kf6-container, .framer-hRbJf .framer-1e8o2bz-container { flex: none; height: auto; position: relative; width: auto; }",".framer-hRbJf .framer-1jrti1w { flex: none; height: 390px; overflow: auto; position: relative; width: 100%; }",".framer-hRbJf .framer-b4qjhb-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: 100%; }",".framer-hRbJf .framer-16fv3vz-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 0px; width: auto; }",".framer-hRbJf .framer-1xipvue { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 16px 0px; position: relative; width: 100%; }",".framer-hRbJf .framer-124k4q5, .framer-hRbJf .framer-egpbf3 { flex: none; height: 56px; overflow: hidden; position: relative; width: 206px; will-change: transform; }",".framer-hRbJf .framer-itp9vq, .framer-hRbJf .framer-vllcju { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 13px; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hRbJf .framer-1pwgz07, .framer-hRbJf .framer-1osnndu, .framer-hRbJf .framer-13r4p9u, .framer-hRbJf .framer-r7lnec, .framer-hRbJf .framer-1wpkfl6, .framer-hRbJf .framer-af8hm3, .framer-hRbJf .framer-ctetbh, .framer-hRbJf .framer-y0b0qn, .framer-hRbJf .framer-kq0p7r, .framer-hRbJf .framer-1xipvue { gap: 0px; } .framer-hRbJf .framer-1pwgz07 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hRbJf .framer-1pwgz07 > :first-child { margin-top: 0px; } .framer-hRbJf .framer-1pwgz07 > :last-child { margin-bottom: 0px; } .framer-hRbJf .framer-1osnndu > *, .framer-hRbJf .framer-13r4p9u > *, .framer-hRbJf .framer-r7lnec > *, .framer-hRbJf .framer-1wpkfl6 > *, .framer-hRbJf .framer-ctetbh > *, .framer-hRbJf .framer-y0b0qn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-hRbJf .framer-1osnndu > :first-child, .framer-hRbJf .framer-13r4p9u > :first-child, .framer-hRbJf .framer-r7lnec > :first-child, .framer-hRbJf .framer-1wpkfl6 > :first-child, .framer-hRbJf .framer-af8hm3 > :first-child, .framer-hRbJf .framer-ctetbh > :first-child, .framer-hRbJf .framer-y0b0qn > :first-child, .framer-hRbJf .framer-kq0p7r > :first-child, .framer-hRbJf .framer-1xipvue > :first-child { margin-left: 0px; } .framer-hRbJf .framer-1osnndu > :last-child, .framer-hRbJf .framer-13r4p9u > :last-child, .framer-hRbJf .framer-r7lnec > :last-child, .framer-hRbJf .framer-1wpkfl6 > :last-child, .framer-hRbJf .framer-af8hm3 > :last-child, .framer-hRbJf .framer-ctetbh > :last-child, .framer-hRbJf .framer-y0b0qn > :last-child, .framer-hRbJf .framer-kq0p7r > :last-child, .framer-hRbJf .framer-1xipvue > :last-child { margin-right: 0px; } .framer-hRbJf .framer-af8hm3 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-hRbJf .framer-kq0p7r > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-hRbJf .framer-1xipvue > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }",".framer-hRbJf.framer-v-5hfd4w .framer-1vgl4mr { height: 53px; left: calc(50.11037527593821% - 344px / 2); top: calc(49.83606557377052% - 53px / 2); width: 344px; }",".framer-hRbJf.framer-v-5hfd4w .framer-1jnb6sn-container { left: 0px; right: 0px; top: 51%; width: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 832
 * @framerIntrinsicWidth 453
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"jJpM4l5cr":{"layout":["fixed","fixed"]},"IxdGAuDig":{"layout":["fixed","fixed"]},"lrYW_56hy":{"layout":["fixed","fixed"]}}}
 */ const FramertNpoQk34A=withCSS(Component,css);export default FramertNpoQk34A;FramertNpoQk34A.displayName="Figma Plugin";FramertNpoQk34A.defaultProps={height:832,width:453};addPropertyControls(FramertNpoQk34A,{variant:{options:["ASohgaYfq","jJpM4l5cr","IxdGAuDig","lrYW_56hy"],optionTitles:["default","input","valid","invalid"],title:"Variant",type:ControlType.Enum}});addFonts(FramertNpoQk34A,[...GradientFonts,...InputFonts,...FeatherFonts,...ToolsFonts,...AllControlsFonts,...TailwindCSSFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramertNpoQk34A","slots":[],"annotations":{"framerIntrinsicHeight":"832","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"jJpM4l5cr\":{\"layout\":[\"fixed\",\"fixed\"]},\"IxdGAuDig\":{\"layout\":[\"fixed\",\"fixed\"]},\"lrYW_56hy\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerContractVersion":"1","framerIntrinsicWidth":"453"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./tNpoQk34A.map