import{a as q}from"./chunk-GMNM2FJJ.mjs";import"./chunk-35NIH65G.mjs";import{a}from"./chunk-W3L6TID3.mjs";import"./chunk-F5B5J54Z.mjs";import"./chunk-BKMGN7IO.mjs";import"./chunk-OLS57UDG.mjs";import"./chunk-NT2YB4PR.mjs";import"./chunk-MMCLXX6Z.mjs";import"./chunk-WGOL3MLC.mjs";import"./chunk-BRW6T4GV.mjs";import"./chunk-7PDI4C6I.mjs";import"./chunk-BLJRLX43.mjs";import"./chunk-VJZMGGI7.mjs";import"./chunk-BEWLCLFX.mjs";import"./chunk-N6TUE7XZ.mjs";import"./chunk-TRWKIKVP.mjs";import"./chunk-E7V5LYA3.mjs";import"./chunk-GVZ27G62.mjs";import"./chunk-NDBI2UTM.mjs";import"./chunk-UN3VLPHF.mjs";import"./chunk-7X6WKRGK.mjs";import"./chunk-LHZKBITZ.mjs";import"./chunk-IYUIP3ZG.mjs";import"./chunk-X2NOPSAQ.mjs";import"./chunk-XBHFYVA5.mjs";import"./chunk-N5FWW2PM.mjs";import"./chunk-KOXQ6YZD.mjs";import"./chunk-XKMHTVH5.mjs";import"./chunk-F3ULA5MU.mjs";import"./chunk-MEUJQT3P.mjs";import"./chunk-EQTKUIXJ.mjs";import"./chunk-DGWQX4P7.mjs";import"./chunk-S5MMHT4E.mjs";import"./chunk-DQNNXJ42.mjs";import"./chunk-65UQCRZJ.mjs";import"./chunk-GBT7WEJX.mjs";import"./chunk-KW4VNSJM.mjs";import{b as n,d as o}from"./chunk-FLVFHPBB.mjs";import{ControlType as t}from"framer";import{jsx as v}from"react/jsx-runtime";function T(V){var i=V,{position:e,rotation:r,cameraAngle:l,noise:u}=i,d=o(i,["position","rotation","cameraAngle","noise"]);let{positionX:p,positionY:y,positionZ:s}=e,{rotationX:m,rotationY:c,rotationZ:b}=r,{cAzimuthAngle:h,cPolarAngle:f}=l,{uDensity:S,uStrength:g}=u;return v(a,n({positionX:p,positionY:y,positionZ:s,rotationX:m,rotationY:c,rotationZ:b,cAzimuthAngle:h,cPolarAngle:f,uDensity:S,uStrength:g},d))}T.propertyControls={control:{type:t.Enum,options:["props","query"],optionTitles:["Props","Query"],displaySegmentedControl:!0},activeTab:{title:"Settings Group",type:t.Enum,options:["Shape","Colors","Effects","View"],hidden:e=>e.control==="query"},type:{type:t.Enum,options:["plane","sphere","waterPlane"],optionTitles:["Plane","Sphere","Water"],displaySegmentedControl:!0,hidden:e=>e.control==="query"||e.activeTab!=="Shape"},shader:{type:t.Enum,options:["defaults","positionMix"],optionTitles:["Type A","Type B"],displaySegmentedControl:!0,hidden:e=>e.control==="query"||e.activeTab!=="Shape"},animate:{type:t.Enum,options:["on","off"],optionTitles:["On","Off"],displaySegmentedControl:!0,hidden:e=>e.control==="query"||e.activeTab!=="Shape"&&e.activeTab!=="URL"},uTime:{title:"Movements",type:t.Number,step:.1,displayStepper:!0,hidden:e=>e.animate==="on"||e.control==="query"||e.activeTab!=="Shape"},uSpeed:{title:"Speed",type:t.Number,step:.1,min:.1,displayStepper:!0,defaultValue:.4,hidden:e=>e.animate==="off"||e.control==="query"||e.activeTab!=="Shape"},noise:{type:t.Object,controls:{uStrength:{type:t.Number,title:"Strength",step:.1,min:.1,displayStepper:!0,defaultValue:4},uDensity:{type:t.Number,title:"Density",step:.1,min:.1,displayStepper:!0,defaultValue:1.3}},hidden:e=>e.control==="query"||e.activeTab!=="Shape"},uAmplitude:{type:t.Number,title:"Spiral",step:.1,min:.1,displayStepper:!0,defaultValue:1,hidden:e=>e.type!=="sphere"||e.control==="query"||e.activeTab!=="Shape"},pixelDensity:{type:t.Number,step:.1,min:0,max:3,displayStepper:!0,defaultValue:1,hidden:e=>e.control==="query"||e.activeTab!=="Shape"},grain:{type:t.Enum,options:["on","off"],optionTitles:["On","Off"],displaySegmentedControl:!0,hidden:e=>e.control==="query"||e.activeTab!=="Effects"},lightType:{type:t.Enum,options:["env","3d"],optionTitles:["Env","Light"],displaySegmentedControl:!0,defaultValue:"3d",hidden:e=>e.control==="query"||e.activeTab!=="Effects"},envPreset:{type:t.Enum,options:["city","dawn","lobby"],optionTitles:["City","Dawn","Lobby"],displaySegmentedControl:!0,hidden:e=>e.lightType==="3d"||e.control==="query"||e.activeTab!=="Effects"},brightness:{type:t.Number,step:.1,min:.1,max:3,defaultValue:1.2,hidden:e=>e.lightType==="env"||e.control==="query"||e.activeTab!=="Effects"||e.url},reflection:{type:t.Number,step:.1,min:0,max:1,defaultValue:.1,hidden:e=>e.lightType==="3d"||e.control==="query"||e.activeTab!=="Effects"||e.url},color1:{type:t.Color,defaultValue:"#ff5005",hidden:e=>e.control==="query"||e.activeTab!=="Colors"},color2:{type:t.Color,defaultValue:"#dbba95",hidden:e=>e.control==="query"||e.activeTab!=="Colors"},color3:{type:t.Color,defaultValue:"#d0bce1",hidden:e=>e.control==="query"||e.activeTab!=="Colors"},cDistance:{title:"Distance",type:t.Number,displayStepper:!0,min:0,max:20,defaultValue:3.6,hidden:e=>e.type==="sphere"||e.control==="query"||e.activeTab!=="View"},cameraZoom:{type:t.Number,displayStepper:!0,step:.1,min:.1,max:30,defaultValue:1,hidden:e=>e.type!=="sphere"||e.control==="query"||e.activeTab!=="View"},cameraAngle:{type:t.Object,controls:{cAzimuthAngle:{title:"Azimuth",type:t.Number,displayStepper:!0,step:10,min:0,max:360,defaultValue:180},cPolarAngle:{title:"Polar",type:t.Number,displayStepper:!0,step:10,min:0,max:180,defaultValue:90}},hidden:e=>e.control==="query"||e.activeTab!=="View"},position:{type:t.Object,controls:{positionX:{type:t.Number,step:.1,displayStepper:!0,defaultValue:-1.4},positionY:{type:t.Number,step:.1,displayStepper:!0,defaultValue:0},positionZ:{type:t.Number,step:.1,displayStepper:!0,defaultValue:0}},hidden:e=>e.control==="query"||e.activeTab!=="View"},rotation:{type:t.Object,controls:{rotationX:{type:t.Number,step:10,min:-360,max:360,displayStepper:!0,defaultValue:0},rotationY:{type:t.Number,step:10,min:-360,max:360,displayStepper:!0,defaultValue:10},rotationZ:{type:t.Number,step:10,min:-360,max:360,displayStepper:!0,defaultValue:50}},hidden:e=>e.control==="query"||e.activeTab!=="View"},urlString:{type:t.String,placeholder:"URL from shadergradient.co",defaultValue:"https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false",hidden:e=>e.control==="props"},zoomOut:{type:t.Boolean,title:"View",enabledTitle:"Wide",disabledTitle:"-",hidden:e=>e.control==="query"},toggleAxis:{type:t.Boolean,title:"Axis",enabledTitle:"Guide",disabledTitle:"-",hidden:e=>e.control==="query"},pointerEvents:{type:t.Enum,title:"Touch Control",options:["none","auto"],optionTitles:["Disable","Enable"],displaySegmentedControl:!0,hidden:e=>e.control==="query"},performantOnCanvas:{type:t.Boolean,defaultValue:!1}};export{T as FramerShaderGradient,q as ShaderGradientCanvas};
