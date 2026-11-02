import { motion, useReducedMotion } from "motion/react"
import { Sparkles } from "lucide-react"
import { howToOrderData } from "../../data/HowToOrder/HowToOrder"
import HowToOrderCard from "./HowToOrderCard"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
}

export default function HowToOrder() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="como-pedir" aria-labelledby="how-to-order-heading" className="relative isolate w-full min-w-0 scroll-mt-[84px] overflow-hidden bg-[#fff8f1] pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      
      {/* Decoración de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-36 h-72 w-72 rounded-full bg-[#ffcf8a]/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#f99800]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
        
        {/* Encabezado */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-[760px] text-center lg:mb-12"
        >
          <div className="mb-3 inline-flex items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#d97600]">
            <Sparkles size={16} /> Así de sencillo
          </div>
          <h2 id="how-to-order-heading" className="font-black text-[clamp(2rem,6vw,3.4rem)] leading-[1.1] tracking-[-0.045em] text-[#3b1b12]">
            Pide tu <span className="text-[#f18a00]">Antojitos</span> en 3 simples pasos
          </h2>
          <p className="mt-4 text-[13px] leading-7 text-[#81675a] sm:text-sm">
            Fácil, rápido y sin complicaciones.
          </p>
        </motion.div>

        {/* Contenedor de pasos */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative flex w-full min-w-0 flex-col rounded-[28px] lg:flex-row lg:items-center lg:border lg:border-[#f1e1d5] lg:bg-white/85 lg:px-5 lg:py-6 lg:shadow-[0_12px_40px_rgba(83,39,16,0.055)] xl:px-8 xl:py-8"
        >
          {howToOrderData.steps.map((step, index) => (
            <HowToOrderCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === howToOrderData.steps.length - 1}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>

        {/* Nota inferior */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 0.5, duration: reduceMotion ? 0 : 0.5 }}
          className="mt-7 text-center text-[11px] leading-6 text-[#94786a]"
        >
          Explora el menú, prepara tu pedido y confirma los detalles de entrega.
        </motion.p>
      </div>
    </section>
  )
}