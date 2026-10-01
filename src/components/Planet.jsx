import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Planet() {
  const planet = useRef(null)
  const ring = useRef(null)
  const moon = useRef(null)
  const group = useRef(null)

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    // Main planet rotation
    if (planet.current) {
      planet.current.rotation.y += delta * 0.12
    }

    // Slow ring rotation
    if (ring.current) {
      ring.current.rotation.z += delta * 0.025
    }

    // Small moon movement
    if (moon.current) {
      moon.current.position.x = -1.35 + Math.cos(time * 0.45) * 0.08
      moon.current.position.y = 0.65 + Math.sin(time * 0.45) * 0.08
    }

    // Very subtle floating movement
    if (group.current) {
      group.current.position.y = Math.sin(time * 0.6) * 0.04
    }
  })

  return (
    <group ref={group}>

      {/* WHITE PLANET */}
      <mesh ref={planet}>
        <sphereGeometry args={[1.65, 64, 64]} />

        <meshStandardMaterial
          color="#f4f4f1"
          roughness={0.35}
          metalness={0.05}
        />
      </mesh>

      {/* GOLD METALLIC RING */}
      <mesh
        ref={ring}
        rotation={[
          Math.PI / 2.9,
          -Math.PI / 8,
          -Math.PI / 10,
        ]}
      >
        <torusGeometry
          args={[2.15, 0.055, 32, 160]}
        />

        <meshStandardMaterial
          color="#c58a20"
          roughness={0.18}
          metalness={0.9}
        />
      </mesh>

      {/* SMALL GOLD MOON */}
      <mesh
        ref={moon}
        position={[-1.35, 0.65, 0.25]}
      >
        <sphereGeometry args={[0.32, 48, 48]} />

        <meshStandardMaterial
          color="#c58a20"
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

    </group>
  )
}

export default Planet