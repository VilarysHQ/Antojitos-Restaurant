import { motion } from "motion/react"

export default function HeroTitle({ reduceMotion, itemVariants }) {
  return (
    <>
      <motion.h1
        id="home-heading"
        variants={reduceMotion ? undefined : itemVariants}
        className="max-w-[680px] font-extrabold tracking-[-0.055em] text-[clamp(2.35rem,9.5vw,4.75rem)] leading-[0.95] text-[#3b1b12] lg:text-[clamp(3.75rem,5.8vw,5.5rem)]"
      >
        El sabor que te{" "}
        <br className="hidden sm:block" />
        <span className="relative inline-block bg-gradient-to-r from-[#c91f1f] via-[#e34a1f] to-[#ff8800] bg-clip-text text-transparent">
          provoca volver
        </span>
      </motion.h1>

      <motion.p
        variants={reduceMotion ? undefined : itemVariants}
        className="mt-6 max-w-[500px] text-[15px] leading-7 text-[#563c31] sm:text-base sm:leading-relaxed"
      >
        Disfruta del más rico pollo a la brasa, broaster y nuestras
        especialidades, con la calidad, el sabor y la atención que nos caracteriza.
      </motion.p>
    </>
  )
}