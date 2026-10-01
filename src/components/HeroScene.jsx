import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Planet from './Planet'

function SceneContent() {
  const group = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }

    const supportsHover =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (supportsHover) {
      window.addEventListener('mousemove', handleMouseMove, {
        passive: true,
      })
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    const targetRotationY = mouse.current.x * 0.32
    const targetRotationX = -mouse.current.y * 0.18

    group.current.rotation.y +=
      (targetRotationY - group.current.rotation.y) * 0.03

    group.current.rotation.x +=
      (targetRotationX - group.current.rotation.x) * 0.03
  })

  return (
    <group ref={group}>
      <Planet />
    </group>
  )
}

function SceneContentWrapper() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!canvasRef.current) return

      canvasRef.current.style.visibility =
        document.hidden ? 'hidden' : 'visible'
    }

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    )

    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )
    }
  }, [])

  return (
    <div ref={canvasRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <SceneContent />
      </Canvas>
    </div>
  )
}

function HeroScene() {
  return <SceneContentWrapper />
}

export default HeroScene
