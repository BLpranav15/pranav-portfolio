import { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const position = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const hovered = useRef(false)
  const animationFrame = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const supportsFinePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches

    if (!supportsFinePointer) {
      cursor.style.display = 'none'
      return
    }

    const handleMouseMove = (event) => {
      target.current.x = event.clientX
      target.current.y = event.clientY
    }

    const handleMouseOver = (event) => {
      hovered.current = Boolean(
        event.target.closest('a, button')
      )
    }

    const animate = () => {
      position.current.x +=
        (target.current.x - position.current.x) * 0.2

      position.current.y +=
        (target.current.y - position.current.y) * 0.2

      const scale = hovered.current ? 2.6 : 1
      const opacity = hovered.current ? 0.72 : 0.8

      cursor.style.transform = `translate3d(
        ${position.current.x}px,
        ${position.current.y}px,
        0
      ) translate(-50%, -50%) scale(${scale})`

      cursor.style.opacity = opacity

      animationFrame.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    })

    document.addEventListener('mouseover', handleMouseOver)

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-black mix-blend-difference transition-[width,height,opacity] duration-300 md:block"
      aria-hidden="true"
    />
  )
}

export default CustomCursor