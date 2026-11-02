import { motion } from "motion/react"

export default function InfoCardDesktop({ benefit, index, itemVariants, reduceMotion }) {
  const Icon = benefit.icon

  return (
    <motion.div
      variants={reduceMotion ? undefined : itemVariants}
      className={`group flex min-w-0 items-start gap-3 px-5 ${index !== 0 ? "border-l border-[#eadbd0]" : ""}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[#ff9200] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
        <Icon size={32} strokeWidth={1.65} />
      </div>
      <div className="min-w-0">
        <h3 className="mb-1 text-[14px] font-extrabold leading-snug text-[#32180f]">
          {benefit.title}
        </h3>
        <p className="text-[12px] leading-[1.5] text-[#62483b]">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  )
}