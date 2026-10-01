import { useEffect, useRef, useState } from 'react'
import { projects } from '../constants'

function Work() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [visibleProjects, setVisibleProjects] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  const visualRotation = useRef({
    x: 0,
    y: 0,
  })

  const cursorPosition = useRef({
    x: 0,
    y: 0,
  })

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)

            setVisibleProjects((current) => {
              if (current.includes(index)) {
                return current
              }

              return [...current, index]
            })

            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    projectRefs.current.forEach((project) => {
      if (project) {
        observer.observe(project)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="section-space border-t border-black/10 bg-[#f4f4ef] px-6 text-black md:px-10"
    >
      {/* EDITORIAL LABEL */}
      <div className="mb-12 flex items-center justify-between border-b border-black/10 pb-4 sm:mb-14 md:mb-16">
        <span className="editorial-label text-black/40">
          06 — Work
        </span>

        <span className="editorial-label text-black/30">
          Selected Projects
        </span>
      </div>

      {/* SECTION HEADER */}
      <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 md:mb-20 md:flex-row md:items-end">
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
              Selected Work
            </p>
          </div>

          {/* TITLE */}
          <div className="overflow-hidden">
            <h2
              className={`display-font text-[17vw] uppercase leading-[0.75] tracking-[-0.01em] transition-transform delay-100 duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[16vw] md:text-[13vw] ${
                isVisible
                  ? 'translate-y-0'
                  : 'translate-y-full'
              }`}
            >
              Projects
            </h2>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          className={`max-w-sm text-sm leading-7 text-black/60 transition-all delay-300 duration-700 sm:text-base ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
        >
          A collection of projects where I explored development,
          databases, AI and interactive web applications.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="border-t border-black/20">
        {projects.map((project, index) => (
          <article
            ref={(element) => {
              projectRefs.current[index] = element
            }}
            data-index={index}
            key={project.title}
            className={`group border-b border-black/20 py-8 transition-all duration-1000 ease-out sm:py-10 md:py-14 ${
              visibleProjects.includes(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-6 sm:gap-8">

              {/* PROJECT META */}
              <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="shrink-0 text-[10px] text-black/30 sm:text-xs">
                    0{index + 1}
                  </span>

                  <span className="truncate text-[10px] uppercase tracking-[0.2em] text-black/40 sm:text-xs sm:tracking-[0.3em]">
                    {index === 0 && 'AI / Recommendation'}
                    {index === 1 && 'Full Stack / Booking'}
                    {index === 2 && 'Database / Management'}
                  </span>
                </div>

                <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-black/30 sm:text-xs sm:tracking-[0.25em]">
                  2026
                </span>
              </div>

              {/* PROJECT VISUAL */}
              <div
                className="group/visual relative h-[210px] w-full overflow-hidden bg-black perspective-[1200px] sm:h-[280px] md:h-[420px]"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => {
                  setHoveredProject(null)

                  visualRotation.current = {
                    x: 0,
                    y: 0,
                  }

                  cursorPosition.current = {
                    x: 0,
                    y: 0,
                  }
                }}
                onMouseMove={(event) => {
                  const rect =
                    event.currentTarget.getBoundingClientRect()

                  const x =
                    (event.clientX - rect.left) /
                      rect.width -
                    0.5

                  const y =
                    (event.clientY - rect.top) /
                      rect.height -
                    0.5

                  cursorPosition.current = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  }

                  visualRotation.current = {
                    x: y * -4,
                    y: x * 4,
                  }

                  event.currentTarget.style.setProperty(
                    '--rotate-x',
                    `${visualRotation.current.x}deg`
                  )

                  event.currentTarget.style.setProperty(
                    '--rotate-y',
                    `${visualRotation.current.y}deg`
                  )

                  event.currentTarget.style.setProperty(
                    '--cursor-x',
                    `${cursorPosition.current.x}px`
                  )

                  event.currentTarget.style.setProperty(
                    '--cursor-y',
                    `${cursorPosition.current.y}px`
                  )
                }}
              >
                {/* CLICKABLE PROJECT AREA */}
                {project.github !== '#' ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="absolute inset-0 z-10"
                  />
                ) : null}

                {/* VIEW PROJECT CURSOR */}
                {hoveredProject === index && (
                  <div
                    className="pointer-events-none absolute z-30 hidden h-20 w-20 items-center justify-center rounded-full bg-[#c58a20] text-center text-[9px] font-medium uppercase leading-tight tracking-[0.12em] text-black shadow-lg md:flex md:h-24 md:w-24"
                    style={{
                      left: 'var(--cursor-x)',
                      top: 'var(--cursor-y)',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    View
                    <br />
                    Project ↗
                  </div>
                )}

                {/* BACKGROUND NUMBER */}
                <span className="display-font absolute -bottom-5 -right-3 text-[48vw] leading-none text-white/[0.04] transition-transform duration-1000 ease-out group-hover/visual:-translate-x-2 sm:text-[40vw] md:-bottom-8 md:-right-4 md:text-[22vw]">
                  0{index + 1}
                </span>

                {/* PROJECT PREVIEW */}
                <div
                  className="absolute inset-0 flex items-center justify-center overflow-hidden p-4 transition-transform duration-700 ease-out sm:p-6 md:p-8"
                  style={{
                    transform: `
                      perspective(1200px)
                      rotateX(var(--rotate-x, 0deg))
                      rotateY(var(--rotate-y, 0deg))
                      scale(${hoveredProject === index ? 1.035 : 1})
                    `,
                  }}
                >
                  {/* LIGHT OVERLAY */}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/[0.08] via-transparent to-black/25 opacity-0 transition-opacity duration-1000 group-hover/visual:opacity-100" />

                  {/* PROJECT 01 — SMART RETAIL */}
                  {index === 0 && (
                    <div className="w-full max-w-3xl">
                      <div className="mb-3 flex items-center justify-between gap-4 sm:mb-5">
                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.3em]">
                          Recommendation Engine
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/30 sm:text-[10px] sm:tracking-[0.3em]">
                          SVD / PYTHON
                        </span>
                      </div>

                      <div className="grid gap-2 sm:gap-3 md:grid-cols-[1.2fr_0.8fr]">
                        {/* MAIN PANEL */}
                        <div className="border border-white/10 bg-white/[0.04] p-3 transition-colors duration-700 group-hover/visual:border-white/20 sm:p-5">
                          <div className="mb-4 flex items-center justify-between sm:mb-8">
                            <div>
                              <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 sm:text-[9px] sm:tracking-[0.25em]">
                                Customer Profile
                              </p>

                              <p className="mt-1 text-[10px] text-white/80 sm:mt-2 sm:text-sm">
                                Personalized Recommendations
                              </p>
                            </div>

                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c58a20] sm:h-2 sm:w-2" />
                          </div>

                          <div className="space-y-2 sm:space-y-3">
                            {[
                              ['Fresh Apples', '94%'],
                              ['Organic Milk', '89%'],
                              ['Whole Grain Bread', '84%'],
                            ].map(([productName, score], productIndex) => (
                              <div
                                key={productName}
                                className="flex items-center justify-between border-t border-white/10 pt-2 sm:pt-3"
                              >
                                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                                  <span className="text-[8px] text-white/25 sm:text-[9px]">
                                    0{productIndex + 1}
                                  </span>

                                  <span className="truncate text-[9px] text-white/65 sm:text-xs">
                                    {productName}
                                  </span>
                                </div>

                                <span className="ml-2 shrink-0 text-[9px] text-white/40 sm:text-[10px]">
                                  {score}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SCORE PANEL */}
                        <div className="flex flex-col justify-between border border-white/10 bg-[#c58a20] p-3 text-black transition-transform duration-700 group-hover/visual:-translate-y-1 sm:p-5">
                          <div>
                            <p className="text-[8px] uppercase tracking-[0.2em] opacity-50 sm:text-[9px] sm:tracking-[0.25em]">
                              Match Score
                            </p>

                            <p className="mt-3 text-4xl font-medium tracking-[-0.06em] sm:mt-6 sm:text-5xl md:text-6xl">
                              94
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] opacity-50 sm:text-xs sm:tracking-[0.2em]">
                              Recommendation
                            </p>
                          </div>

                          <div className="mt-5 h-1 w-full bg-black/10 sm:mt-10">
                            <div className="h-full w-[94%] bg-black" />
                          </div>
                        </div>
                      </div>

                      {/* MINI DATA BAR */}
                      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2 md:grid-cols-4">
                        {[
                          'Purchase',
                          'History',
                          'Analysis',
                          'Result',
                        ].map((item) => (
                          <div
                            key={item}
                            className="border border-white/10 px-2 py-2 transition-colors duration-500 group-hover/visual:border-white/20 sm:px-3 sm:py-3"
                          >
                            <span className="text-[8px] uppercase tracking-[0.15em] text-white/35 sm:text-[9px] sm:tracking-[0.2em]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PROJECT 02 — MOVIE BOOKING */}
                  {index === 1 && (
                    <div className="w-full max-w-2xl">
                      <div className="mb-3 flex items-center justify-between gap-4 sm:mb-5">
                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.3em]">
                          Movie Booking
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/30 sm:text-[10px] sm:tracking-[0.3em]">
                          DJANGO / MYSQL
                        </span>
                      </div>

                      <div className="border border-white/10 bg-white/[0.04] p-3 transition-colors duration-700 group-hover/visual:border-white/20 sm:p-5">
                        <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6">
                          <div>
                            <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 sm:text-[9px] sm:tracking-[0.25em]">
                              Screen 01
                            </p>

                            <p className="mt-1 text-[10px] text-white/80 sm:mt-2 sm:text-sm">
                              Select Your Seats
                            </p>
                          </div>

                          <span className="text-[8px] uppercase tracking-[0.15em] text-white/30 sm:text-[9px] sm:tracking-[0.2em]">
                            24 Seats
                          </span>
                        </div>

                        {/* SCREEN */}
                        <div className="mx-auto mb-4 h-1 w-2/3 bg-white/20 sm:mb-7" />

                        {/* SEATS */}
                        <div className="grid grid-cols-6 gap-1 sm:gap-2 md:grid-cols-8">
                          {Array.from({ length: 32 }).map((_, seatIndex) => (
                            <div
                              key={seatIndex}
                              className={`aspect-square border transition-transform duration-500 ${
                                seatIndex % 7 === 0
                                  ? 'border-[#c58a20] bg-[#c58a20] group-hover/visual:scale-105'
                                  : 'border-white/10 bg-white/[0.06]'
                              }`}
                            />
                          ))}
                        </div>

                        {/* BOOKING INFO */}
                        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 sm:mt-7 sm:pt-4">
                          <span className="text-[8px] uppercase tracking-[0.15em] text-white/30 sm:text-[9px] sm:tracking-[0.2em]">
                            Available
                          </span>

                          <span className="text-[10px] text-white/60 sm:text-xs">
                            27 Seats
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 03 — ART GALLERY */}
                  {index === 2 && (
                    <div className="w-full max-w-2xl">
                      <div className="mb-3 flex items-center justify-between gap-4 sm:mb-5">
                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.3em]">
                          Art Gallery
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/30 sm:text-[10px] sm:tracking-[0.3em]">
                          MYSQL / CRUD
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
                        {[
                          'Artwork 01',
                          'Artwork 02',
                          'Artwork 03',
                          'Artwork 04',
                          'Artwork 05',
                          'Artwork 06',
                        ].map((artwork, artworkIndex) => (
                          <div
                            key={artwork}
                            className="group/art relative aspect-[3/4] overflow-hidden border border-white/10 bg-white/[0.05]"
                          >
                            <div
                              className={`absolute inset-2 transition-transform duration-700 group-hover/visual:scale-[1.04] sm:inset-4 ${
                                artworkIndex % 3 === 0
                                  ? 'bg-[#c58a20]/70'
                                  : artworkIndex % 2 === 0
                                    ? 'bg-white/20'
                                    : 'bg-white/10'
                              }`}
                            />

                            <span className="absolute bottom-2 left-2 text-[7px] uppercase tracking-[0.15em] text-white/40 sm:bottom-3 sm:left-3 sm:text-[8px] sm:tracking-[0.2em]">
                              {artwork}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="flex flex-col gap-7 sm:gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  {/* PROJECT TITLE ROW */}
                  <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                    <span className="mono-font mt-2 text-[9px] tracking-[0.2em] text-black/30 sm:mt-3 sm:text-[10px]">
                      0{index + 1}
                    </span>

                    <div className="overflow-hidden">
                      <h3 className="display-font text-[12vw] uppercase leading-[0.78] tracking-[-0.015em] transition-transform duration-700 ease-out group-hover:translate-x-1 sm:text-[10vw] md:text-[7vw] md:group-hover:translate-x-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="ml-8 mt-5 max-w-xl text-sm leading-7 text-black/55 sm:ml-10 sm:mt-6 sm:text-base md:ml-12">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="ml-8 mt-5 flex flex-wrap gap-2 sm:ml-10 sm:mt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-black/15 px-3 py-1 text-[9px] uppercase tracking-[0.12em] transition-all duration-500 group-hover:border-black/30 sm:text-[10px] sm:tracking-[0.15em]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GITHUB ARROW */}
                <a
                  href={
                    project.github !== '#'
                      ? project.github
                      : undefined
                  }
                  target={
                    project.github !== '#'
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    project.github !== '#'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={`View ${project.title} on GitHub`}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-full border border-black/20 text-xl transition-all duration-700 ease-out sm:h-16 sm:w-16 sm:text-2xl md:self-auto ${
                    project.github === '#'
                      ? 'cursor-default opacity-30'
                      : 'cursor-pointer hover:bg-black hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2'
                  }`}
                >
                  ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work