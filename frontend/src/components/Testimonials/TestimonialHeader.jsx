import { motion } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function TestimonialsHeader({ reduceMotion, canScrollLeft, canScrollRight, scrollCarousel }) {
  return (
    <>
      <motion.div variants={reduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } } }} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto mb-10 flex max-w-[720px] flex-col items-center text-center lg:mb-12">
        <motion.p variants={reduceMotion ? undefined : itemVariants} className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.19em] text-[#d97600]">
          Experiencias que inspiran
        </motion.p>
        <motion.h2 id="testimonials-heading" variants={reduceMotion ? undefined : itemVariants} className="font-black text-[clamp(2rem,7vw,3.5rem)] leading-[1.08] tracking-[-0.05em] text-[#3b1b12]">
          Lo que dicen <span className="text-[#f18a00]">nuestros clientes</span>
        </motion.h2>
        <motion.p variants={reduceMotion ? undefined : itemVariants} className="mt-4 max-w-[550px] text-[13px] leading-7 text-[#82685b] sm:text-sm">
          La mejor recompensa es compartir buenos momentos alrededor de nuestra mesa.
        </motion.p>
      </motion.div>

      <div className="mb-5 flex items-center justify-between gap-4 lg:hidden">
        <p className="text-[11px] text-[#94786a]">Desliza para descubrir más</p>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => scrollCarousel(-1)} disabled={!canScrollLeft} aria-label="Ver testimonio anterior" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadbd0] bg-white text-[#3b1b12] disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-[#f18a00]">
            <ArrowLeft size={18} />
          </button>
          <button type="button" onClick={() => scrollCarousel(1)} disabled={!canScrollRight} aria-label="Ver siguiente testimonio" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb400] text-[#3b1b12] disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-[#f18a00]">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  )
}