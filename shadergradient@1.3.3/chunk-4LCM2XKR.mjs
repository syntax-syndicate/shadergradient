import{a as t}from"./chunk-VJZMGGI7.mjs";import{a as h,b as d}from"./chunk-N46T4J2N.mjs";import{a as u}from"./chunk-OBLWGYEF.mjs";import{a as n}from"./chunk-E7V5LYA3.mjs";import{A as a,z as s}from"./chunk-UWMHRNBJ.mjs";var f=!0,o=class extends h{constructor(e,r,i){super(),t===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=s.clone(t.uniforms),this.material=new a({uniforms:this.uniforms,fragmentShader:t.fragmentShader,vertexShader:t.vertexShader}),f&&(this.uniforms.width.value=e,this.uniforms.height.value=r),this.uniforms.disable.value=i.disable,this.fsQuad=new d(this.material),this.blendMode=new u(n.SCREEN),this.extensions=null}render(e,r,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,r){f&&(this.uniforms.width.value=e,this.uniforms.height.value=r)}initialize(e,r,i){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return t.fragmentShader}getVertexShader(){return t.vertexShader}update(e,r,i){}};export{o as a};
