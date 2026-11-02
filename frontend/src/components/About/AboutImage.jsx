import { motion } from "motion/react"
import { ChefHat } from "lucide-react"
import aboutRestaurant from "../../assets/About/aboutRestaurant.webp"

const imageVariants = {
  hidden: { opacity: 0, x: -30, scale: 1.035 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutImage({ reduceMotion }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : imageVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-w-0 lg:order-1"
    >
      <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-[28px] border-2 border-[#ffd9ad] sm:-bottom-4 sm:-right-4 sm:rounded-[34px]" />

      <div className="group relative overflow-hidden rounded-[26px] bg-[#ead8c8] shadow-[0_24px_55px_rgba(79,39,17,0.12)] sm:rounded-[32px]">
        <img
          src={aboutRestaurant}
          alt="Interior conceptual de Antojitos con mesas de madera, iluminación cálida y detalles naturales"
          loading="lazy"
          decoding="async"
          className="block h-full w-full aspect-[5/4] object-cover object-center transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none sm:aspect-[16/11] lg:aspect-[5/4] xl:aspect-[4/3]"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#24110c]/45 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full border border-white/20 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur-lg sm:bottom-6 sm:left-6 sm:px-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0d7] text-[#ef8900]">
            <ChefHat size={17} />
          </span>
          <span className="text-[11px] font-extrabold text-[#3b1b12] sm:text-xs">
            Hecho para disfrutar
          </span>
        </div>
      </div>
    </motion.div>
  )
}