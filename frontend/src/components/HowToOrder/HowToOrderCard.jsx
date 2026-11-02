import { motion } from "motion/react"
import { ArrowDown, ArrowRight } from "lucide-react"

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 110, damping: 16, mass: 0.85 } },
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -12 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 210, damping: 12, delay: 0.1 } },
}

export default function HowToOrderCard({ step, isLast, reduceMotion }) {
  const Icon = step.icon

  return (
    <div className="relative flex min-w-0 flex-col items-center lg:flex-row lg:flex-1 lg:items-stretch">
      
      {/* Tarjeta del paso */}
      <motion.div
        variants={reduceMotion ? undefined : scaleVariants}
        className="group relative flex w-full min-w-0 items-center gap-4 rounded-[20px] border border-[#f0e0d2] bg-white px-4 py-5 shadow-[0_8px_28px_rgba(84,39,15,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#ffd497] hover:shadow-[0_14px_38px_rgba(84,39,15,0.085)] sm:gap-5 sm:px-6 lg:min-h-[150px] lg:gap-4 lg:border-transparent lg:bg-transparent lg:px-3 lg:shadow-none lg:hover:shadow-none xl:gap-5 xl:px-5"
      >
        {/* Icono */}
        <motion.div
          variants={reduceMotion ? undefined : iconVariants}
          className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd94e] to-[#ffae00] text-[#3b1b12] shadow-[0_8px_20px_rgba(255,174,0,0.20)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 motion-reduce:transition-none sm:h-[78px] sm:w-[78px] lg:h-[82px] lg:w-[82px]"
        >
          <Icon size={33} strokeWidth={2} className="sm:h-9 sm:w-9" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-[5px] rounded-full border border-white/35" />
        </motion.div>

        {/* Texto */}
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-black leading-[1.3] text-[#3b1b12] sm:text-[17px] lg:text-[15px] xl:text-[17px]">
            <span className="mr-1 text-[#e77700]">{step.id}.</span> {step.title}
          </h3>
          <p className="mt-1.5 max-w-[260px] text-[12px] leading-[1.6] text-[#785b4f] sm:text-[13px]">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* Flechas (solo si no es el último) */}
      {!isLast && (
        <motion.div
          variants={reduceMotion ? undefined : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
          aria-hidden="true"
          className="flex h-9 shrink-0 items-center justify-center text-[#ff9c00] lg:mx-2 lg:h-auto"
        >
          <ArrowDown size={24} strokeWidth={2.4} className="lg:hidden" />
          <ArrowRight size={28} strokeWidth={2.5} className="hidden lg:block" />
        </motion.div>
      )}
    </div>
  )
}