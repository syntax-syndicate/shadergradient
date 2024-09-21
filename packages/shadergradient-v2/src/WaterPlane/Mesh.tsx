import React, { useRef } from 'react'
import { vertexShader, fragmentShader } from './shader'
import { useFrame } from '@react-three/fiber'
import { degToRad } from '@/utils'
import * as THREE from 'three'

const amplitude = 2
const meshCount = 192

export function Mesh({ width, height, position, rotation }) {
  const materialRef = useRef()
  const { positionX, positionY, positionZ } = position
  const { rotationX, rotationY, rotationZ } = rotation

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = elapsedTime
      materialRef.current.uniforms.u_amplitude.value = amplitude
    }
  })

  return (
    <mesh
      rotation={[degToRad(rotationX), degToRad(rotationY), degToRad(rotationZ)]}
      position={[positionX, positionY, positionZ]}
    >
      <planeGeometry args={[width, height, meshCount, meshCount]} />
      <shaderMaterial
        ref={materialRef}
        attach='material'
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        // wireframe={true}
        uniforms={{
          u_time: { value: 0.0 },
          u_amplitude: { value: amplitude },
          u_width: { value: width },
          u_height: { value: height },
        }}
      />
    </mesh>
  )
}
