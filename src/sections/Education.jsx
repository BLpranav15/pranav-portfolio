import Reveal from '../components/Reveal'

function Education() {
  return (
    <Reveal>
      <section
        id="education"
        className="section-space border-t border-black/10 bg-[#f4f4ef] px-6 text-black md:px-10"
      >
        {/* EDITORIAL LABEL */}
        <div className="mb-12 flex items-center justify-between border-b border-black/10 pb-4 sm:mb-14 md:mb-16">
          <span className="editorial-label text-black/40">
            03 — Education
          </span>

          <span className="editorial-label text-black/30">
            Academic Background
          </span>
        </div>

        {/* HEADER */}
        <div className="mb-14 flex items-end justify-between sm:mb-16 md:mb-20">
          <div>
            <div className="overflow-hidden">
              <p className="mb-4 translate-y-full text-xs font-medium uppercase tracking-[0.35em] text-black/40 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-5 group-[.is-visible]:translate-y-0">
                Education
              </p>
            </div>

            <div className="overflow-visible">
              <h2 className="display-font overflow-visible py-2 translate-y-full text-[17vw] uppercase leading-[0.82] tracking-[-0.02em] transition-transform delay-100 duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[16vw] md:text-[14vw] group-[.is-visible]:translate-y-0">
                Learning
              </h2>
            </div>
          </div>

          <span className="mb-2 hidden text-xs uppercase tracking-[0.25em] text-black/40 md:block">
            01 / 01
          </span>
        </div>

        {/* EDUCATION ITEM */}
        <div className="border-t border-black/20">
          <div className="grid gap-8 border-b border-black/20 py-8 sm:gap-10 sm:py-10 md:grid-cols-[0.7fr_2fr_0.8fr] md:items-start md:gap-16">

            {/* YEAR */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 sm:text-xs">
                2022 — 2026
              </p>
            </div>

            {/* MAIN */}
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl md:text-5xl">
                Bachelor of Engineering
              </h3>

              <p className="mt-2 text-base text-black/50 sm:mt-3 sm:text-lg md:text-xl">
                Information Science & Engineering
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:mt-8 sm:text-base">
                Jawaharlal Nehru National College of Engineering,
                Shivamogga. Focused on software development,
                databases, web technologies and exploring
                AI-driven applications through academic and
                personal projects.
              </p>
            </div>

            {/* LOCATION */}
            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 sm:text-xs">
                JNNCE
              </p>

              <p className="mt-2 text-sm text-black/60">
                Shivamogga, Karnataka
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-6 flex items-center justify-between sm:mt-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 sm:text-xs">
            2026 Graduate
          </p>

          <span className="text-xl sm:text-2xl">
            ↓
          </span>
        </div>
      </section>
    </Reveal>
  )
}

export default Education