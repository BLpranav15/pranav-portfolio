import { lazy, Suspense } from 'react'

const HeroScene = lazy(() => import('../components/HeroScene'))

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f4f4ef] text-black"
    >
      {/* 3D HERO OBJECT */}
      <div className="absolute inset-0 z-0">
        <div className="hero-object absolute right-[-42%] top-[5%] h-[350px] w-[350px] sm:right-[-22%] sm:top-[5%] sm:h-[520px] sm:w-[520px] md:right-[-2%] md:top-[2%] md:h-[680px] md:w-[680px] lg:right-[2%] lg:h-[760px] lg:w-[760px]">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>  

        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-20">

        {/* TOP INFORMATION */}
        <div className="hero-fade hero-delay-1 mb-8 flex flex-col gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium uppercase tracking-[0.45em] md:text-base">
            B L&nbsp;&nbsp; P R A N A V
          </p>

          <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-black/40 sm:text-[10px]">
            <span>2026</span>
            <span className="h-1 w-1 rounded-full bg-[#c58a20]" />
            <span>Information Science &amp; Engineering</span>
          </div>
        </div>

        {/* MAIN NAME */}
        <div className="relative">
          <h1 className="hero-reveal hero-delay-2 display-font whitespace-nowrap text-[18vw] uppercase leading-[0.72] tracking-[-0.02em] md:text-[14vw]">
            BL PRANAV
          </h1>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 h-px w-full bg-black md:mt-10" />

        {/* INTRO */}
        <div className="hero-reveal hero-delay-3 mt-8 flex flex-col gap-8 md:mt-7 md:flex-row md:items-start md:justify-end">
          <div className="max-w-md md:mr-[4%]">
            <p className="text-lg leading-[1.6] tracking-wide md:text-xl lg:text-2xl">
              I build web apps, turn ideas into real projects,
              and keep learning new tech along the way.
              <span className="ml-3 inline-block text-2xl md:text-3xl">→</span>
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-fade hero-delay-4 absolute bottom-6 left-6 z-20 flex items-center gap-3 md:bottom-8 md:left-10">
        <div className="h-10 w-px overflow-hidden bg-black/20">
          <div className="h-full w-full origin-top animate-pulse bg-black" />
        </div>

        <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
      </div>
    </section>
  )
}

export default Hero


