import{b as d}from"./chunk-PP7OPZ6Z.mjs";import{c as S}from"./chunk-T47MKGKS.mjs";import{c as T,d as x,e as s,f as p}from"./chunk-GBT7WEJX.mjs";import{useEffect as C,useRef as F}from"react";function q({type:u,cAzimuthAngle:z,cPolarAngle:y,cDistance:h,cameraZoom:o,zoomOut:R,enableTransition:m=!0}){let f=F();return S((e,E)=>f.current.update(E)),C(()=>{let e=f.current;e==null||e.rotateTo(d(z),d(y),m)},[f,z,y]),C(()=>{let e=f.current;R?u==="sphere"?(e==null||e.dollyTo(p.distance,m),e==null||e.zoomTo(p.zoom,m)):(e==null||e.dollyTo(s.distance,m),e==null||e.zoomTo(s.zoom,m)):u==="sphere"?(e==null||e.zoomTo(o,m),e==null||e.dollyTo(x,m)):(e==null||e.dollyTo(h,m),e==null||e.zoomTo(T,m))},[f,R,u,o,h]),f}export{q as a};
