import { motion } from "motion/react"
import { Flame } from "lucide-react"

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

export default function MenuHeader({ reduceMotion }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mb-9 flex max-w-[750px] flex-col items-center text-center lg:mb-12"
    >
      <motion.p variants={reduceMotion ? undefined : itemVariants} className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e47400] sm:text-[11px]">
        <Flame size={16} /> Preparado con sabor
      </motion.p>
      <motion.h2 id="menu-heading" variants={reduceMotion ? undefined : itemVariants} className="font-extrabold text-[clamp(2rem,7vw,3.5rem)] leading-[1.1] tracking-tight text-[#3b1b12]">
        Nuestro <span className="text-[#f18100]">Menú Destacado</span>
      </motion.h2>
      <motion.p variants={reduceMotion ? undefined : itemVariants} className="mt-4 max-w-[540px] text-[13px] leading-6 text-[#856c60] sm:text-sm sm:leading-7">
        Descubre nuestros favoritos. Elige lo que más se te antoje y prepara tu pedido.
      </motion.p>
    </motion.div>
  )
}