import { useEffect, useRef, useState } from 'react'

const certifications = [
  {
    number: '01',
    title: 'Data Structures & Algorithms in Python : Sorting Algorithms',
    issuer: 'Infosys Springboard',
    year: '2026',
    link: 'https://drive.google.com/file/d/1kuhLz4BLkGzdVK8fnJdcXNZjlL6067Ei/view?usp=drive_link',
  },
  {
    number: '02',
    title: 'Computational Theory: Language Principle & Finite Automata',
    issuer: 'Infosys Springboard',
    year: '2026',
    link: 'https://drive.google.com/file/d/1ZW4170vGZbV2Nk3SvNDCpp6l4eyweIWD/view?usp=drive_link',
  },
  {
    number: '03',
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    year: '2026',
    link: 'https://drive.google.com/file/d/1oRm7-YEDn7238cs7LA2IetcntgT4uEPY/view?usp=drive_link',
  },
]

function Certifications() {
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
      id="certifications"
      className="section-space border-t border-white/10 bg-[#050505] px-6 text-[#f4f4ef] md:px-10"
    >
      {/* EDITORIAL LABEL */}
      <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-4 sm:mb-14 md:mb-16">
        <span className="editorial-label text-white/40">
          04 — Certifications
        </span>

        <span className="editorial-label text-white/30">
          Professional Learning
        </span>
      </div>

      {/* HEADER */}
      <div className="mb-14 flex items-end justify-between sm:mb-16 md:mb-20">
        <div>
          {/* LABEL */}
          <div className="overflow-hidden">
            <p
              className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/40 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-5 ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              Certifications
            </p>
          </div>

          {/* TITLE */}
          <div className="overflow-visible">
            <h2
              className={`display-font overflow-visible py-2 text-[17vw] uppercase leading-[0.82] tracking-[-0.02em] transition-transform delay-100 duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[16vw] md:text-[14vw] ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              Learning
            </h2>
          </div>
        </div>

        {/* COUNTER */}
        <span
          className={`mb-2 hidden text-xs uppercase tracking-[0.25em] text-white/30 transition-all delay-300 duration-700 md:block ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
        >
          03 Certifications
        </span>
      </div>

      {/* CERTIFICATION LIST */}
      <div className="border-t border-white/15">
        {certifications.map((certification) => (
          <a
            key={certification.number}
            href={certification.link}
            target="_blank"
            rel="noreferrer"
            className="group relative grid gap-5 overflow-hidden border-b border-white/15 py-7 transition-all duration-500 hover:bg-white/[0.025] sm:gap-6 sm:py-8 md:grid-cols-[0.4fr_2fr_1fr_0.4fr] md:items-center md:py-10"
          >
            {/* GOLD HOVER LINE */}
            <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#c58a20] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />

            {/* NUMBER */}
            <span className="text-[10px] text-white/30 transition-colors duration-500 group-hover:text-[#c58a20] sm:text-xs">
              {certification.number}
            </span>

            {/* TITLE + ISSUER */}
            <div>
              <h3 className="max-w-3xl text-xl font-medium tracking-[-0.03em] transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-2xl md:text-4xl">
                {certification.title}
              </h3>

              <p className="mt-2 text-xs text-white/40 transition-colors duration-500 group-hover:text-white/65 sm:text-sm">
                {certification.issuer}
              </p>
            </div>

            {/* YEAR */}
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 transition-colors duration-500 group-hover:text-white/55 sm:text-xs md:text-left">
              {certification.year}
            </p>

            {/* ARROW */}
            <span className="hidden text-xl text-white/30 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:text-[#c58a20] sm:text-2xl md:block">
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="mt-6 flex items-center justify-between sm:mt-8">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 sm:text-xs">
          STILL LEVELING UP
        </p>

        <span className="text-lg text-white/30 sm:text-xl">
          ↓
        </span>
      </div>
    </section>
  )
}

export default Certifications
