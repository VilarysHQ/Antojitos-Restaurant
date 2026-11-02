import { motion } from "motion/react"

export default function InfoCardMobile({ benefit, itemVariants, reduceMotion }) {
  const Icon = benefit.icon

  return (
    <motion.div
      variants={reduceMotion ? undefined : itemVariants}
      className="flex min-w-0 flex-col gap-3 rounded-[18px] border border-[#f0e2d6] bg-white p-4 shadow-[0_6px_24px_rgba(95,44,16,0.035)] sm:p-6"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff2da] text-[#f18c00]">
        <Icon size={23} strokeWidth={1.7} />
      </div>
      <div className="min-w-0">
        <h3 className="mb-1.5 text-[12px] font-extrabold leading-[1.3] text-[#3b1b12] min-[390px]:text-[13px] sm:text-base">
          {benefit.title}
        </h3>
        <p className="text-[10px] leading-[1.5] text-[#876b5e] min-[390px]:text-[11px] sm:text-[13px]">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  )
}