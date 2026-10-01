import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setVisible(true)
        observer.disconnect()
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -5% 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group reveal-section ${
        visible ? 'is-visible' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal