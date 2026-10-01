
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const closeButtonRef = useRef(null)

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        documentHeight > 0
          ? Math.min((scrollTop / documentHeight) * 100, 100)
          : 0

      setScrollProgress(progress)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Lock page scrolling while menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Focus close button when menu opens
  useEffect(() => {
    if (menuOpen) {
      closeButtonRef.current?.focus()
    }
  }, [menuOpen])

  return (
    <>
      {/* MENU BUTTON */}
      {!menuOpen && (
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          className="fixed right-5 top-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-black transition-all duration-500 hover:scale-110 hover:bg-[#c58a20] hover:shadow-[0_0_0_8px_rgba(197,138,32,0.12)] md:right-7 md:top-7 md:h-16 md:w-16"
        >
          {/* Scroll Progress Ring */}
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <circle
              cx="32"
              cy="32"
              r="29"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />

            <circle
              cx="32"
              cy="32"
              r="29"
              fill="none"
              stroke="#c58a20"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 29}
              strokeDashoffset={
                2 * Math.PI * 29 -
                (scrollProgress / 100) * 2 * Math.PI * 29
              }
              className="transition-[stroke-dashoffset] duration-300"
            />
          </svg>

          {/* Menu Icon */}
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span className="h-[1.5px] w-full bg-white" />
            <span className="h-[1.5px] w-full bg-white" />
          </span>
        </button>
      )}

      {/* FULL SCREEN MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[10000] min-h-screen overflow-y-auto bg-black text-white">
          {/* CLOSE BUTTON */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="group fixed right-5 top-5 z-[10002] flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black text-3xl font-light text-white transition-all duration-500 hover:border-[#c58a20] hover:bg-[#c58a20] hover:text-black md:right-7 md:top-7 md:h-16 md:w-16"
          >
            <span className="inline-block leading-none transition-transform duration-500 group-hover:rotate-90">
              ×
            </span>
          </button>

          {/* MENU CONTENT */}
          <div className="min-h-screen px-6 py-28 sm:px-8 md:px-16 md:py-32">
            <div className="flex min-h-[calc(100vh-14rem)] flex-col justify-center">
              <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white/40 animate-[fadeIn_700ms_ease-out_forwards] md:mb-10">
                Navigation
              </p>

              <nav className="flex flex-col items-start">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault()

                      setMenuOpen(false)

                      const target = document.querySelector(link.href)

                      if (target) {
                        setTimeout(() => {
                          target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          })
                        }, 150)
                      }
                    }}
                    style={{
                      animationDelay: `${150 + index * 70}ms`,
                    }}
                    className="group relative flex w-full max-w-3xl translate-y-8 items-baseline gap-3 border-b border-white/10 py-3 text-3xl font-medium tracking-[-0.04em] opacity-0 transition-all duration-500 ease-out hover:border-white/30 hover:pl-2 animate-[menuReveal_700ms_cubic-bezier(0.22,1,0.36,1)_forwards] sm:text-4xl md:gap-4 md:py-4 md:text-6xl"
                  >
                    {/* NUMBER → ARROW */}
                    <span className="relative w-5 shrink-0 overflow-hidden text-[9px] font-normal tracking-normal text-white/30 md:w-7 md:text-xs">
                      <span className="block transition-all duration-500 ease-out group-hover:-translate-y-full group-hover:text-[#c58a20]">
                        0{index + 1}
                      </span>

                      <span className="absolute inset-0 block translate-y-full text-[#c58a20] transition-all duration-500 ease-out group-hover:translate-y-0">
                        ↗
                      </span>
                    </span>

                    {/* MENU NAME */}
                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      {link.name}
                    </span>

                    {/* RIGHT ARROW */}
                    <span className="ml-1 text-base text-[#c58a20] opacity-0 transition-all duration-500 group-hover:translate-x-3 group-hover:opacity-100 md:text-lg">
                      →
                    </span>

                    {/* GOLD HOVER LINE */}
                    <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#c58a20] transition-all duration-700 ease-out group-hover:w-full" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* FOOTER LABEL */}
          <p className="fixed bottom-6 left-6 z-[10001] text-[10px] uppercase tracking-[0.3em] text-white/30 sm:left-8 md:bottom-7 md:left-16">
            B L&nbsp;&nbsp; P R A N A V
          </p>
        </div>
      )}
    </>
  )
}

export default Navbar
