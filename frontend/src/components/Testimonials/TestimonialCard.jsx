import { motion } from "motion/react"
import { Quote, Star } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function TestimonialCard({ testimonial, reduceMotion }) {
  return (
    <motion.article
      variants={reduceMotion ? undefined : itemVariants}
      className="group relative flex h-full min-w-0 w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-[24px] border border-[#f0e1d6] bg-white p-5 shadow-[0_10px_35px_rgba(86,43,20,0.055)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#f5ccaa] hover:shadow-[0_18px_42px_rgba(86,43,20,0.09)] motion-reduce:transform-none min-[440px]:w-[76%] sm:w-[58%] md:w-[46%] lg:w-auto lg:shrink lg:p-6 xl:p-7"
    >
      <Quote aria-hidden="true" size={46} strokeWidth={1.3} className="pointer-events-none absolute right-5 top-5 text-[#ffb400]/15" />

      <div className="relative z-10 flex items-center gap-3.5">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarColor} text-base font-black text-[#5c301d] ring-4 ring-[#fff5ec] sm:h-[60px] sm:w-[60px]`} aria-hidden="true">
          {testimonial.initials}
        </div>

        <div className="min-w-0">
          <h3 className="text-[14px] font-extrabold leading-tight text-[#3b1b12] sm:text-[15px]">
            {testimonial.name}
          </h3>
          <div className="mt-1.5 flex items-center gap-0.5" aria-label={`${testimonial.rating} de 5 estrellas`}>
            {Array.from({ length: testimonial.rating }, (_, index) => (
              <Star key={index} aria-hidden="true" size={16} fill="currentColor" strokeWidth={1.5} className="text-[#ffad00]" />
            ))}
          </div>
        </div>
      </div>

      <blockquote className="relative z-10 mt-5 flex-1 text-[13px] leading-[1.75] text-[#76594e] sm:text-[14px]">
        “{testimonial.comment}”
      </blockquote>

      <div aria-hidden="true" className="mt-6 h-1 w-11 rounded-full bg-[#ffb400]" />
    </motion.article>
  )
}