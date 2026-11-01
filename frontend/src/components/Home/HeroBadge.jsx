import { motion } from "motion/react"
import { Sparkles } from "lucide-react"

export default function HeroBadge({ reduceMotion, itemVariants }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : itemVariants}
      className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#f2d9b3] bg-white/70 px-4 py-2 backdrop-blur-md shadow-[0_4px_16px_rgba(59,27,18,0.06)]"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffb400] opacity-70 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffb400]" />
      </span>
      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#4a2519] sm:text-xs">
        Pollo a la brasa · Broastería
      </span>
      <Sparkles size={14} className="text-[#ffb400]" />
    </motion.div>
  )
}