import { motion } from "motion/react"
import { Star, Truck } from "lucide-react"

export default function HeroStats({ reduceMotion, itemVariants }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : itemVariants}
      className="mt-9 grid w-full max-w-[520px] grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {/* Rating */}
      <div className="group flex items-center gap-3 rounded-2xl border border-[#efe0d1] bg-white/80 p-4 shadow-[0_8px_24px_rgba(59,27,18,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(59,27,18,0.1)]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff4dd]">
          <Star size={20} fill="#ffb400" className="text-[#ffb400]" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-base font-extrabold text-[#3b1b12]">4.8</span>
            <span className="text-[11px] font-medium text-[#765c50]">de 5 estrellas</span>
          </div>
          <p className="text-[11px] text-[#765c50]">3,020+ opiniones</p>
        </div>
      </div>

      {/* Delivery */}
      <div className="group flex items-center gap-3 rounded-2xl border border-[#efe0d1] bg-white/80 p-4 shadow-[0_8px_24px_rgba(59,27,18,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(59,27,18,0.1)]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1e6]">
          <Truck size={21} className="text-[#f39200]" />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-extrabold text-[#3b1b12]">Delivery rápido</p>
          <p className="text-[11px] text-[#765c50]">En 30 – 45 min</p>
        </div>
      </div>
    </motion.div>
  )
}