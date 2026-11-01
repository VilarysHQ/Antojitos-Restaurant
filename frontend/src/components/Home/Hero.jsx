import { motion, useReducedMotion } from "motion/react"
import homeBackground from "../../assets/Home/homeBackground.png"

import HeroBadge from "./HeroBadge"
import HeroTitle from "./HeroTitle"
import HeroCTAs from "./HeroCTAs"
import HeroStats from "./HeroStats"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      aria-labelledby="home-heading"
      className="relative isolate flex w-full min-w-0 items-center overflow-hidden bg-[#fff8f1] text-[#3b1b12] min-h-[700px] lg:min-h-[680px] xl:min-h-[760px]"
    >
      {/* Imagen de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <img
          src={homeBackground}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-[70%_center] lg:object-center scale-105"
        />
      </div>

      {/* Overlay principal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#fffaf4]/98 via-[#fffaf4]/85 to-[#fffaf4]/20 lg:bg-gradient-to-r lg:from-[#fffaf4]/98 lg:via-[#fffaf4]/80 lg:to-transparent"
      />

      {/* Blobs decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#ffb400]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-[#c91f1f]/10 blur-[120px]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1440px] flex-col justify-center px-5 pb-16 pt-24 min-[390px]:px-6 sm:px-10 lg:px-12 lg:py-28 xl:px-16">
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="w-full min-w-0 max-w-[680px]"
        >
          <HeroBadge reduceMotion={reduceMotion} itemVariants={itemVariants} />
          <HeroTitle reduceMotion={reduceMotion} itemVariants={itemVariants} />
          <HeroCTAs reduceMotion={reduceMotion} itemVariants={itemVariants} />
          <HeroStats reduceMotion={reduceMotion} itemVariants={itemVariants} />
        </motion.div>
      </div>
    </section>
  )
}