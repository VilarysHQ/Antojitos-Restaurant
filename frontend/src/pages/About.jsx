import { useReducedMotion } from "motion/react"
import AboutImage from "../components/About/AboutImage"
import AboutContent from "../components/About/AboutContent"

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="nosotros" aria-labelledby="about-heading" className="relative isolate w-full min-w-0 scroll-mt-[84px] overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decoraciones de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-0 h-80 w-80 rounded-full bg-[#ffb400]/[0.06] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-[#f17a00]/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-12 xl:gap-16">
          <AboutImage reduceMotion={reduceMotion} />
          <AboutContent reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  )
}