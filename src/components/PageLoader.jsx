
import { useEffect, useState } from 'react'

function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setLoading(false)
      return
    }

    const exitTimer = setTimeout(() => {
      setExit(true)
    }, 1200)

    const removeTimer = setTimeout(() => {
      setLoading(false)
    }, 1750)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-[20000] flex items-center justify-center bg-[#050505] text-[#f4f4ef] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        exit
          ? 'pointer-events-none -translate-y-full'
          : 'translate-y-0'
      }`}
    >
      <div className="w-full px-6 md:px-10">
        <div className="flex items-end justify-between border-b border-white/15 pb-4">
          <div className="overflow-hidden">
            <p
              className="display-font translate-y-full text-[18vw] leading-[0.75] tracking-[-0.02em] animate-[loaderTitle_900ms_cubic-bezier(0.22,1,0.36,1)_300ms_forwards] md:text-[14vw]"
              style={{ animationFillMode: 'forwards' }}
            >
              PRANAV
            </p>
          </div>

          <span className="mb-1 text-[9px] uppercase tracking-[0.3em] text-white/40 animate-[fadeIn_700ms_ease-out_500ms_forwards] opacity-0 md:text-xs">
            2026
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
            Portfolio
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
            Loading
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageLoader
