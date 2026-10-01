import { useEffect, useRef, useState } from 'react'

function About() {
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
      id="about"
      className="section-space bg-[#050505] px-6 text-[#f4f4ef] md:px-10"
    >
      {/* SECTION HEADER */}
      <div className="mb-14 sm:mb-16 md:mb-20">
        <p
          className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/40 transition-all duration-700 ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          About Me
        </p>

        <h2
          className={`display-font text-[16vw] uppercase leading-[0.72] tracking-[-0.01em] transition-all duration-1000 ease-out sm:text-[17vw] md:text-[14vw] ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-16 opacity-0'
          }`}
        >
          Who I Am
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
        {/* LEFT */}
        <div
          className={`transition-all delay-200 duration-1000 ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Based in India
          </p>

          <p className="mt-4 text-sm leading-7 text-white/60">
            Information Science & Engineering
          </p>

          <p className="mt-1 text-sm leading-7 text-white/60">
            JNNCE, Shivamogga
          </p>
        </div>

        {/* RIGHT */}
        <div>
          {/* INTRO */}
          <p
            className={`max-w-3xl text-[1.35rem] leading-[1.5] tracking-[-0.03em] transition-all delay-300 duration-1000 ease-out sm:text-2xl md:text-4xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            I'm B L Pranav, an entry-level developer who enjoys
            building web applications, working with data and
            exploring AI-driven ideas.
          </p>

          {/* DESCRIPTION */}
          <p
            className={`mt-7 max-w-2xl text-sm leading-7 text-white/55 transition-all delay-500 duration-1000 ease-out sm:text-base sm:leading-8 md:mt-8 md:text-lg ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            I work mainly with Python, Django, React, JavaScript
            and MySQL. I like turning ideas into practical projects
            and continuously improving how I build and solve problems.
          </p>

          {/* SKILLS */}
          <div
            className={`mt-12 border-t border-white/15 transition-all delay-700 duration-1000 ease-out md:mt-16 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/15 py-4 sm:py-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                What I Work With
              </span>

              <span className="text-[10px] text-white/30 sm:text-xs">
                07 Skills
              </span>
            </div>

            {[
              'Python',
              'Django',
              'React',
              'JavaScript',
              'MySQL',
              'Git',
              'AI / ML',
            ].map((skill, index) => (
              <div
                key={skill}
                className="group flex items-center justify-between border-b border-white/15 py-4 transition-opacity duration-300 hover:opacity-50 sm:py-5"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className="text-[9px] text-white/30 sm:text-[10px]">
                    0{index + 1}
                  </span>

                  <span className="text-lg tracking-[-0.02em] sm:text-xl md:text-2xl">
                    {skill}
                  </span>
                </div>

                <span className="text-lg text-white/30 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1 sm:text-xl">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
