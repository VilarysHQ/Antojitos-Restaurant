import { motion } from "motion/react"
import { UtensilsCrossed, Flame, ArrowUpRight } from "lucide-react"
import { aboutData } from "../../data/About/dataAbout"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutContent({ reduceMotion }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-w-0 lg:order-2"
    >
      {/* Eyebrow */}
      <motion.div variants={reduceMotion ? undefined : fadeUpVariants} className="mb-4 inline-flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0d9] text-[#ef8200]">
          <UtensilsCrossed size={18} />
        </span>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#da7700]">
          Nuestra esencia
        </p>
      </motion.div>

      {/* Título */}
      <motion.h2 id="about-heading" variants={reduceMotion ? undefined : fadeUpVariants} className="font-black text-[clamp(2.15rem,6vw,3.5rem)] leading-[1.06] tracking-[-0.05em] text-[#3b1b12]">
        Sobre <span className="text-[#f17a00]">Antojitos</span>
      </motion.h2>

      {/* Descripciones */}
      <motion.div variants={reduceMotion ? undefined : fadeUpVariants} className="mt-6 flex flex-col gap-4 text-[13px] leading-[1.85] text-[#74564b] sm:text-[14px] lg:text-[14px] xl:text-[15px]">
        <p>
          En Antojitos creemos que una buena comida es mucho más que un plato: es una excusa perfecta para reunir a quienes más quieres.
        </p>
        <p>
          Nuestra propuesta combina el sabor del pollo a la brasa, la textura crujiente del broaster y las especialidades que hacen de cada antojo un momento para disfrutar.
        </p>
      </motion.div>

      {/* Separador */}
      <motion.div variants={reduceMotion ? undefined : fadeUpVariants} className="my-7 h-px w-full bg-[#efdfd2] lg:my-8" />

      {/* Características */}
      <motion.div variants={reduceMotion ? undefined : containerVariants} className="grid grid-cols-1 gap-4 min-[390px]:grid-cols-3 min-[390px]:gap-2 sm:gap-4 lg:gap-3">
        {aboutData.benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={benefit.id}
              variants={reduceMotion ? undefined : fadeUpVariants}
              className={`flex min-w-0 items-center gap-3 min-[390px]:flex-col min-[390px]:items-start min-[390px]:gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-start ${index !== 0 ? "min-[390px]:border-l min-[390px]:border-[#efdfd2] min-[390px]:pl-3 sm:pl-4 lg:pl-4" : ""}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff3e2] text-[#f18a00] sm:h-11 sm:w-11">
                <Icon size={23} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold leading-[1.3] text-[#3b1b12] sm:text-[12px]">{benefit.title}</p>
                <p className="mt-1 text-[10px] leading-[1.4] text-[#937569] sm:text-[11px]">{benefit.description}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* CTA */}
      <motion.div variants={reduceMotion ? undefined : fadeUpVariants} className="mt-8">
        <a href="#menu" className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#edc7a4] bg-[#fff8f1] px-5 py-3 text-[12px] font-extrabold text-[#a64a1a] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#f18a00] hover:bg-[#fff0db] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f18a00] motion-reduce:transition-none">
          <Flame size={17} /> Descubre nuestros sabores
          <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
        </a>
      </motion.div>
    </motion.div>
  )
}