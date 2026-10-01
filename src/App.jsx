
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'

import Hero from './sections/Hero'
import About from './sections/About'
import SkillsMarquee from './sections/SkillsMarquee'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Experience from './sections/Experience'
import Work from './sections/Work'
import Contact from './sections/Contact'
import PageLoader from './components/PageLoader'

function App() {
  return (
    <main className="min-h-screen bg-[#f4f4ef] text-black">
      <PageLoader />  
      
      <CustomCursor />

      <Navbar />

      <Hero />

      <About />

      <SkillsMarquee />

      <Education />

      <Certifications />

      <Experience />

      <Work />

      <Contact />

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f4f4ef] px-6 py-7 text-black sm:py-8 md:px-10">
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
          {/* COPYRIGHT */}
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 sm:text-xs">
            © 2026 B L Pranav
          </p>

          {/* LINKS */}
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-[10px] uppercase tracking-[0.2em] sm:gap-x-6 sm:text-xs sm:tracking-[0.25em]">
            <a
              href="https://github.com/BLpranav15"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-40"
            >
              GitHub ↗
            </a>

            <a
              href="#home"
              className="transition-opacity duration-300 hover:opacity-40"
            >
              Back To Top ↑
            </a>
          </div>

          {/* STATUS */}
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 sm:text-xs">
            Available for opportunities
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
