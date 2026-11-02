import { motion } from "motion/react"
import { ArrowLeft, ArrowRight, Flame } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function PromotionsHeader({ reduceMotion, canScrollLeft, canScrollRight, scrollCarousel }) {
  return (
    <motion.div variants={reduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-9 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-[660px]">
        <motion.p variants={reduceMotion ? undefined : itemVariants} className="mb-3 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#dd7400]">
          <Flame size={16} /> Promociones especiales
        </motion.p>
        <motion.h2 id="promotions-heading" variants={reduceMotion ? undefined : itemVariants} className="font-black text-[clamp(2rem,7vw,3.5rem)] leading-[1.08] tracking-[-0.045em] text-[#3b1b12]">
          Más sabor, <span className="text-[#d12720]">más antojos.</span>
        </motion.h2>
        <motion.p variants={reduceMotion ? undefined : itemVariants} className="mt-4 max-w-[540px] text-[13px] leading-7 text-[#806459] sm:text-sm">
          Combos pensados para compartir, disfrutar y convertir cualquier momento en algo delicioso.
        </motion.p>
      </div>

      <div className="flex items-center justify-between gap-3 lg:hidden">
        <p className="text-[11px] text-[#987b6c]">Desliza para ver las promociones</p>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => scrollCarousel(-1)} disabled={!canScrollLeft} aria-label="Ver promoción anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ead8c8] bg-white text-[#3b1b12] disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-[#f18c00]">
            <ArrowLeft size={19} />
          </button>
          <button type="button" onClick={() => scrollCarousel(1)} disabled={!canScrollRight} aria-label="Ver siguiente promoción" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffb400] text-[#3b1b12] disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-[#f18c00]">
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}