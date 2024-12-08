// src/shaders/a/vertex.glsl
var vertex_default = "// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) \n\n// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\n//-------- start here ------------\n\nmat3 rotation3dY(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n\n  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);\n}\n\nvec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }\n\nvarying vec3 vNormal;\nvarying float displacement;\nvarying vec3 vPos;\nvarying float vDistort;\n\nvarying vec2 vUv;\n\nuniform float uTime;\nuniform float uSpeed;\n\nuniform float uLoadingTime;\n\nuniform float uNoiseDensity;\nuniform float uNoiseStrength;\n\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;\nvarying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\n\nvoid main() {\n\n  #include <beginnormal_vertex>\n  #include <color_vertex>\n  #include <defaultnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n  #include <uv2_vertex>\n  #include <uv_vertex>\n  #ifndef FLAT_SHADED\n    vNormal = normalize(transformedNormal);\n  #ifdef USE_TANGENT\n    vTangent = normalize(transformedTangent);\n    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);\n  #endif\n  #endif\n  #include <begin_vertex>\n\n  #include <clipping_planes_vertex>\n  #include <displacementmap_vertex>\n  #include <logdepthbuf_vertex>\n  #include <morphtarget_vertex>\n  #include <project_vertex>\n  #include <skinning_vertex>\n    vViewPosition = -mvPosition.xyz;\n  #include <fog_vertex>\n  #include <shadowmap_vertex>\n  #include <worldpos_vertex>\n\n  //-------- start vertex ------------\n  vUv = uv;\n\n  float t = uTime * uSpeed;\n  // Create a sine wave from top to bottom of the sphere\n  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);\n\n  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;\n  vPos = pos;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}\n";

// src/shaders/a/fragment.glsl
var fragment_default = "\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;\nuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;\nvarying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n// #include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\n// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment\n// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.\n\nvarying vec3 vNormal;\nvarying float displacement;\nvarying vec3 vPos;\nvarying float vDistort;\n\nuniform float uC1r;\nuniform float uC1g;\nuniform float uC1b;\nuniform float uC2r;\nuniform float uC2g;\nuniform float uC2b;\nuniform float uC3r;\nuniform float uC3g;\nuniform float uC3b;\n\nvarying vec3 color1;\nvarying vec3 color2;\nvarying vec3 color3;\n\n// for npm package, need to add this manually\nfloat linearToRelativeLuminance2( const in vec3 color ) {\n    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n    return dot( weights, color.rgb );\n}\n\nvoid main() {\n\n  //-------- basic gradient ------------\n  vec3 color1 = vec3(uC1r, uC1g, uC1b);\n  vec3 color2 = vec3(uC2r, uC2g, uC2b);\n  vec3 color3 = vec3(uC3r, uC3g, uC3b);\n  float clearcoat = 1.0;\n  float clearcoatRoughness = 0.5;\n\n  #include <clipping_planes_fragment>\n\n  vec4 diffuseColor = vec4(\n      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),\n      1);\n  // diffuseColor\uB294 \uC624\uBE0C\uC81D\uD2B8\uC758 \uBCA0\uC774\uC2A4 \uC0C9\uC0C1 (\uD658\uACBD\uC774\uB098 \uBE5B\uC774 \uACE0\uB824\uB418\uC9C0 \uC54A\uC740 \uBCF8\uC5F0\uC758\n  // \uC0C9)\n\n  // mix(x, y, a): a\uB97C \uCD95\uC73C\uB85C \uD588\uC744 \uB54C \uAC00\uC7A5 \uB0AE\uC740 \uAC12\uC5D0\uC11C x\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%, \uAC00\uC7A5\n  // \uB192\uC740 \uAC12\uC5D0\uC11C y\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%\uB85C \uB9CC\uB4E0\uB2E4. smoothstep(x, y, a): a\uCD95\uC744\n  // \uAE30\uC900\uC73C\uB85C x\uB97C \uCD5C\uC18C\uAC12, y\uB97C \uCD5C\uB300\uAC12\uC73C\uB85C \uADF8 \uC0AC\uC774\uC758 \uAC12\uC744 \uCABC\uAC20\uB2E4. x\uC640 y \uC0AC\uC774\uB97C\n  // 0-100 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uCC98\uB7FC \uB2E8\uACC4\uBCC4\uB85C \uD45C\uD604\uD558\uACE0, x \uBBF8\uB9CC\uC758 \uAC12\uC740 0, y \uC774\uC0C1\uC758\n  // \uAC12\uC740 100\uC73C\uB85C \uCC98\uB9AC\n\n  // 1. smoothstep(-3.0, 3.0,vPos.x)\uB85C x\uCD95\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uD45C\uD604 \uB420 \uBC94\uC704\uB97C -3,\n  // 3\uC73C\uB85C \uC815\uD55C\uB2E4.\n  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))\uB85C color1\uACFC color3\uC744\n  // \uC704\uC758 \uBC94\uC704 \uC548\uC5D0\uC11C \uADF8\uB77C\uB514\uC5B8\uD2B8\uB85C \uD45C\uD604\uD55C\uB2E4.\n  // \uC608\uB97C \uB4E4\uC5B4 color1\uC774 \uB178\uB791, color3\uC774 \uD30C\uB791\uC774\uB77C\uACE0 \uCE58\uBA74, x\uCD95 \uAE30\uC900 -3\uBD80\uD130 3\uAE4C\uC9C0\n  // \uB178\uB791\uACFC \uD30C\uB791 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uB098\uD0C0\uB098\uACE0, -3\uBCF4\uB2E4 \uC791\uC740 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uB178\uB791,\n  // 3\uBCF4\uB2E4 \uD070 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uD30C\uB791\uC774 \uB098\uD0C0\uB09C\uB2E4.\n  // 3. mix()\uB97C \uD55C \uBC88 \uB354 \uC0AC\uC6A9\uD574\uC11C \uC704\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uC640 color2\uB97C z\uCD95 \uAE30\uC900\uC73C\uB85C\n  // \uBD84\uBC30\uD55C\uB2E4.\n\n  //-------- materiality ------------\n  ReflectedLight reflectedLight =\n      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n  #ifdef TRANSMISSION\n    float totalTransmission = transmission;\n  #endif\n  #include <logdepthbuf_fragment>\n  #include <map_fragment>\n  #include <color_fragment>\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <roughnessmap_fragment>\n  #include <metalnessmap_fragment>\n  #include <normal_fragment_begin>\n  #include <normal_fragment_maps>\n  #include <clearcoat_normal_fragment_begin>\n  #include <clearcoat_normal_fragment_maps>\n  #include <emissivemap_fragment>\n  // #include <transmissionmap_fragment>\n  #include <lights_physical_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_maps>\n  #include <lights_fragment_end>\n  #include <aomap_fragment>\n    vec3 outgoingLight =\n        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +\n        reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n    //\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.\n  #ifdef TRANSMISSION\n    diffuseColor.a *=\n        mix(saturate(1. - totalTransmission +\n                    linearToRelativeLuminance2(reflectedLight.directSpecular +\n                                              reflectedLight.indirectSpecular)),\n            1.0, metalness);\n  #endif\n\n\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <dithering_fragment>\n\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C\n  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.\n  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),\n  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD\n  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.\n}\n";

// src/shaders/a/vertexSphere.glsl
var vertexSphere_default = "// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n\n//-------- start here ------------\n\nvarying vec3 vNormal;\nuniform float uTime;\nuniform float uSpeed;\nuniform float uNoiseDensity;\nuniform float uNoiseStrength;\nuniform float uFrequency;\nuniform float uAmplitude;\nvarying vec3 vPos;\nvarying float vDistort;\nvarying vec2 vUv;\nvarying vec3 vViewPosition;\n\n#define STANDARD\n#ifndef FLAT_SHADED\n  #ifdef USE_TANGENT\n    varying vec3 vTangent;\n    varying vec3 vBitangent;\n  #endif\n#endif\n\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\n\n\n// rotation\nmat3 rotation3dY(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);\n}\n\nvec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }\n\nvoid main() {\n  #include <beginnormal_vertex>\n  #include <color_vertex>\n  #include <defaultnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n  #include <uv2_vertex>\n  #include <uv_vertex>\n  #ifndef FLAT_SHADED\n    vNormal = normalize(transformedNormal);\n  #ifdef USE_TANGENT\n    vTangent = normalize(transformedTangent);\n    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);\n  #endif\n  #endif\n  #include <begin_vertex>\n\n  #include <clipping_planes_vertex>\n  #include <displacementmap_vertex>\n  #include <logdepthbuf_vertex>\n  #include <morphtarget_vertex>\n  #include <project_vertex>\n  #include <skinning_vertex>\n    vViewPosition = -mvPosition.xyz;\n  #include <fog_vertex>\n  #include <shadowmap_vertex>\n  #include <worldpos_vertex>\n\n  //-------- start vertex ------------\n  float t = uTime * uSpeed;\n  float distortion =\n      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;\n  vec3 pos = position + (normal * distortion);\n  float angle = sin(uv.y * uFrequency + t) * uAmplitude;\n  pos = rotateY(pos, angle);\n\n  vPos = pos;\n  vDistort = distortion;\n  vNormal = normal;\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}\n";

// src/shaders/a/fragmentSphere.glsl
var fragmentSphere_default = "\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;\nuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;\nvarying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n// #include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\n// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment\n// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.\nvarying vec3 vNormal;\nvarying float displacement;\nvarying vec3 vPos;\nvarying float vDistort;\nuniform float uC1r;\nuniform float uC1g;\nuniform float uC1b;\nuniform float uC2r;\nuniform float uC2g;\nuniform float uC2b;\nuniform float uC3r;\nuniform float uC3g;\nuniform float uC3b;\nvarying vec3 color1;\nvarying vec3 color2;\nvarying vec3 color3;\nvarying float distanceToCenter;\n\n\n// for npm package, need to add this manually\n// 'linearToRelativeLuminance' : function already has a body\nfloat linearToRelativeLuminance2( const in vec3 color ) {\n    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n    return dot( weights, color.rgb );\n}\n\nvoid main() {\n  //-------- basic gradient ------------\n  vec3 color1 = vec3(uC1r, uC1g, uC1b);\n  vec3 color2 = vec3(uC2r, uC2g, uC2b);\n  vec3 color3 = vec3(uC3r, uC3g, uC3b);\n  float clearcoat = 1.0;\n  float clearcoatRoughness = 0.5;\n#include <clipping_planes_fragment>\n\n  float distanceToCenter = distance(vPos, vec3(0, 0, 0));\n  // distanceToCenter\uB85C \uC911\uC2EC\uC810\uACFC\uC758 \uAC70\uB9AC\uB97C \uAD6C\uD568.\n\n  vec4 diffuseColor =\n      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),\n               distanceToCenter),\n           1);\n\n  //-------- materiality ------------\n  ReflectedLight reflectedLight =\n      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n#ifdef TRANSMISSION\n  float totalTransmission = transmission;\n#endif\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n// #include <transmissionmap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\n  vec3 outgoingLight =\n      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +\n      reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n//\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.\n#ifdef TRANSMISSION\n  diffuseColor.a *=\n      mix(saturate(1. - totalTransmission +\n                   linearToRelativeLuminance2(reflectedLight.directSpecular +\n                                             reflectedLight.indirectSpecular)),\n          1.0, metalness);\n#endif\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C\n  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.\n  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),\n  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD\n  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.\n\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}\n";

export {
  vertex_default,
  fragment_default,
  vertexSphere_default,
  fragmentSphere_default
};
