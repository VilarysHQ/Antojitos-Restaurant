import { motion, useReducedMotion } from "motion/react"
import { infoCardsData } from "../../data/Home/dataInfoCards"
import InfoCardMobile from "./InfoCardMobile"
import InfoCardDesktop from "./InfoCardDesktop"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function InfoCards() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="Beneficios de Antojitos" className="relative z-10 w-full min-w-0 bg-[#fff8f1] py-5 sm:py-8 lg:py-10">
      <div className="mx-auto w-full min-w-0 max-w-[1440px] px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
        
        {/* MÓVIL Y TABLET */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid w-full min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:hidden"
        >
          {infoCardsData.benefits.map((benefit) => (
            <InfoCardMobile key={benefit.id} benefit={benefit} itemVariants={itemVariants} reduceMotion={reduceMotion} />
          ))}
        </motion.div>

        {/* DESKTOP */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden w-full min-w-0 grid-cols-4 rounded-[22px] border border-white bg-white/85 px-5 py-7 shadow-[0_12px_40px_rgba(93,44,18,0.06)] backdrop-blur-lg lg:grid"
        >
          {infoCardsData.benefits.map((benefit, index) => (
            <InfoCardDesktop key={benefit.id} benefit={benefit} index={index} itemVariants={itemVariants} reduceMotion={reduceMotion} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}