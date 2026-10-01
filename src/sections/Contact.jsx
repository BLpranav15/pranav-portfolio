import { useEffect, useRef, useState } from 'react'

function Contact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-6 py-16 text-[#f4f4ef] sm:py-20 md:px-10 md:py-20"
    >
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <div className="overflow-hidden">
            <p
              className={`text-xs font-medium uppercase tracking-[0.35em] text-white/40 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              Contact
            </p>
          </div>

          <div className="overflow-hidden">
            <p
              className={`mt-2 text-[10px] uppercase tracking-[0.25em] text-white/25 transition-transform delay-100 duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-3 sm:text-xs ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              Open to opportunities
            </p>
          </div>
        </div>

        <span
          className={`text-[10px] uppercase tracking-[0.25em] text-white/30 transition-all delay-300 duration-700 sm:text-xs ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
        >
          08
        </span>
      </div>

      {/* MAIN */}
      <div className="flex min-h-[62vh] flex-col justify-center py-16 sm:min-h-[65vh] sm:py-20">
        <p
          className={`mb-8 max-w-xl text-base leading-7 text-white/55 transition-all delay-200 duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-10 sm:text-lg sm:leading-relaxed md:text-2xl ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          I'm currently looking for an opportunity to start
          my career in software development and contribute
          to real-world products.
        </p>

        {/* EMAIL CTA */}
        <a
          href="mailto:blpranav2202@gmail.com"
          aria-label="Send an email to B L Pranav"
          className="group relative block w-full cursor-pointer"
        >
          <div className="overflow-visible py-2">
            <h2
              className={`display-font overflow-visible py-1 text-[16vw] uppercase leading-[0.82] tracking-[-0.02em] transition-transform delay-300 duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 sm:text-[17vw] md:text-[15vw] md:group-hover:-translate-x-2 ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              LET'S
            </h2>
          </div>

          <div className="overflow-visible py-2">
            <h2
              className={`display-font overflow-visible py-1 text-[16vw] uppercase leading-[0.82] tracking-[-0.02em] transition-transform delay-[450ms] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:translate-y-1 sm:text-[17vw] md:text-[15vw] md:group-hover:translate-x-4 ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              CONNECT
            </h2>
          </div>

          {/* CTA LINE */}
          <div
            className={`mt-5 h-px origin-left bg-white/20 transition-all delay-[600ms] duration-1000 ease-out group-hover:scale-x-100 group-hover:bg-[#c58a20] sm:mt-6 md:mt-8 ${
              isVisible
                ? 'scale-x-[0.3]'
                : 'scale-x-0'
            }`}
          />

          <p
            className={`mt-3 text-[9px] uppercase tracking-[0.3em] text-white/30 transition-all delay-[700ms] duration-700 group-hover:text-[#c58a20] sm:mt-4 sm:text-[10px] ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Send me an email ↗
          </p>
        </a>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/15 pt-6 sm:pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* LOOKING FOR */}
          <div className="max-w-md">
            <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
              Looking For
            </p>

            <p className="text-xs uppercase leading-6 tracking-[0.12em] text-white/70 sm:text-sm">
              Software Development · Python · Web · AI
            </p>
          </div>

          {/* LINKS */}
          <div className="flex max-w-xl flex-wrap gap-x-5 gap-y-4 text-[10px] uppercase tracking-[0.2em] sm:gap-x-6 sm:text-xs sm:tracking-[0.25em]">
            <a
              href="mailto:blpranav2202@gmail.com"
              className="group/link relative"
            >
              <span className="text-white/70 transition-colors duration-300 group-hover/link:text-[#c58a20]">
                Email ↗
              </span>

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c58a20] transition-all duration-300 group-hover/link:w-full" />
            </a>

            <a
              href="https://linkedin.com/in/bl-pranav"
              target="_blank"
              rel="noreferrer"
              className="group/link relative"
            >
              <span className="text-white/70 transition-colors duration-300 group-hover/link:text-[#c58a20]">
                LinkedIn ↗
              </span>

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c58a20] transition-all duration-300 group-hover/link:w-full" />
            </a>

            <a
              href="tel:+917411127301"
              className="group/link relative"
            >
              <span className="text-white/70 transition-colors duration-300 group-hover/link:text-[#c58a20]">
                +91 74111 27301 ↗
              </span>

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c58a20] transition-all duration-300 group-hover/link:w-full" />
            </a>

            <a
              href="https://github.com/BLpranav15"
              target="_blank"
              rel="noreferrer"
              className="group/link relative"
            >
              <span className="text-white/70 transition-colors duration-300 group-hover/link:text-[#c58a20]">
                GitHub ↗
              </span>

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c58a20] transition-all duration-300 group-hover/link:w-full" />
            </a>

            <a
              href="#home"
              className="group/link relative"
            >
              <span className="text-white/70 transition-colors duration-300 group-hover/link:text-[#c58a20]">
                Back To Top ↑
              </span>

              
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact