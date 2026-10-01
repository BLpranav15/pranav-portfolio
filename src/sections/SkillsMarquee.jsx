
import Reveal from '../components/Reveal'

function SkillsMarquee() {
  const skills = [
    'PYTHON',
    'DJANGO',
    'REACT',
    'JAVASCRIPT',
    'MYSQL',
    'AI / ML',
    'GIT',
  ]

  return (
    <Reveal>
      <section className="overflow-hidden border-t border-black/10 bg-[#c58a20] text-black">
        {/* EDITORIAL LABEL */}
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4 md:px-10">
          <span className="editorial-label text-black/50">
            02 — Toolkit
          </span>

          <span className="editorial-label text-black/40">
            Skills / Technologies
          </span>
        </div>

        {/* SKILLS MARQUEE */}
        <div className="py-4 sm:py-5 md:py-6">
          <div className="flex w-max animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="display-font px-4 text-3xl tracking-wide sm:px-6 sm:text-4xl md:px-10 md:text-6xl">
                  {skill}
                </span>

                <span className="text-lg sm:text-xl md:text-2xl">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default SkillsMarquee
