import{D as R,e as b,v as T}from"../chunk-T5JJUGZA.mjs";import{b as i}from"../chunk-FLVFHPBB.mjs";function y(r,e,m,E){return class extends R{constructor(){let f=Object.entries(r),l=r.colors,n=c(l[0]),s=c(l[1]),o=c(l[2]),h={uC1r:{value:a(n==null?void 0:n.r)},uC1g:{value:a(n==null?void 0:n.g)},uC1b:{value:a(n==null?void 0:n.b)},uC2r:{value:a(s==null?void 0:s.r)},uC2g:{value:a(s==null?void 0:s.g)},uC2b:{value:a(s==null?void 0:s.b)},uC3r:{value:a(o==null?void 0:o.r)},uC3g:{value:a(o==null?void 0:o.g)},uC3b:{value:a(o==null?void 0:o.b)}},g=f.reduce((t,[u,v])=>{let H=T.clone({[u]:{value:v}});return i(i({},t),H)},{});super({metalness:.2,userData:g,side:b,onBeforeCompile:t=>{t.uniforms=i(i(i({},t.uniforms),g),h),t.vertexShader=e,t.fragmentShader=m}}),f.forEach(([t])=>Object.defineProperty(this,t,{get:()=>this.uniforms[t].value,set:u=>this.uniforms[t].value=u})),E&&E(this)}}}function d(r){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function p(r){let e=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return e?{r:parseInt(e[1]),g:parseInt(e[2]),b:parseInt(e[3])}:null}function c(r){if(r.startsWith("#"))return d(r);if(r.startsWith("rgb"))return p(r);throw new Error("Invalid color format")}function a(r=0){return r/255}export{y as shaderMaterial};
