
import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    number: '01',
    role: 'Software Development Intern',
    company: 'Pentagon',
    period: 'Internship',
    description:
      'Worked on practical software development tasks and gained hands-on exposure to development workflows, problem solving and building applications in a professional environment.',
  },
]

function Experience() {
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
      id="experience"
      className="section-space border-t border-black/10 bg-[#f4f4ef] px-6 text-black md:px-10"
    >
      {/* EDITORIAL LABEL */}
      <div className="mb-12 flex items-center justify-between border-b border-black/10 pb-4 sm:mb-14 md:mb-16">
        <span className="editorial-label text-black/40">
          05 — Experience
        </span>

        <span className="editorial-label text-black/30">
          Professional Journey
        </span>
      </div>

      {/* HEADER */}
      <div className="mb-14 flex items-end justify-between sm:mb-16 md:mb-20">
        <div>
          {/* LABEL */}
          <div className="overflow-hidden">
            <p
              className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] text-black/40 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-5 ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              Experience
            </p>
          </div>

          {/* TITLE */}
          <div className="overflow-hidden">
            <h2
              className={`display-font text-[17vw] uppercase leading-[0.72] tracking-[-0.02em] transition-transform delay-100 duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[16vw] md:text-[14vw] ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              Journey
            </h2>
          </div>
        </div>

        {/* COUNTER */}
        <span
          className={`mb-2 hidden text-xs uppercase tracking-[0.25em] text-black/30 transition-all delay-300 duration-700 md:block ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
        >
          01 Experience
        </span>
      </div>

      {/* EXPERIENCE LIST */}
      <div className="border-t border-black/20">
        {experiences.map((experience) => (
          <article
            key={experience.number}
            className="group grid gap-6 border-b border-black/20 py-8 transition-all duration-500 hover:bg-black/[0.02] sm:gap-8 sm:py-10 md:grid-cols-[0.4fr_1.8fr_0.8fr] md:gap-16 md:py-12 md:hover:px-5"
          >
            {/* NUMBER */}
            <div>
              <span className="text-[10px] text-black/30 sm:text-xs">
                {experience.number}
              </span>
            </div>

            {/* MAIN CONTENT */}
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl md:text-5xl md:group-hover:translate-x-2">
                {experience.role}
              </h3>

              <p className="mt-2 text-base text-black/50 sm:mt-3 sm:text-lg md:text-xl">
                {experience.company}
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:mt-8 sm:text-base">
                {experience.description}
              </p>
            </div>

            {/* PERIOD */}
            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 sm:text-xs">
                {experience.period}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* BOTTOM NOTE */}
      <div className="mt-6 flex items-center justify-between sm:mt-8">
        <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 sm:text-xs">
          Growing Through Experience
        </p>

        <span className="text-lg sm:text-xl">
          ↓
        </span>
      </div>
    </section>
  )
}

export default Experience
