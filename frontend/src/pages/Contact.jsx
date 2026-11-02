import { motion, useReducedMotion } from "motion/react"
import contactBackground from "../assets/Contact/aboutBackground.webp"
import { contactData, cleanPhone, buildWhatsAppUrl } from "../data/Contact/dataContact"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import ContactDetails from "../components/Contact/ContactDetails"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  const reduceMotion = useReducedMotion()
  
  const phone = cleanPhone(contactData.whatsappNumber)
  const whatsappConfigured = phone.length > 0
  const whatsappUrl = buildWhatsAppUrl(phone, contactData.initialMessage)

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="relative isolate w-full min-w-0 scroll-mt-[84px] overflow-hidden bg-[#fff8f1] py-16 sm:py-20 lg:py-24">
      
      {/* Background gastronómico */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <img src={contactBackground} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f1]/85 via-[#fff8f1]/75 to-[#fff8f1]/35 lg:from-[#fff8f1]/65 lg:via-[#fff8f1]/45 lg:to-[#fff8f1]/15" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#fff8f1]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fff8f1]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid w-full min-w-0 grid-cols-1 items-center gap-8 md:grid-cols-2 md:items-start xl:grid-cols-[0.95fr_1.05fr_0.9fr] xl:items-center xl:gap-8 2xl:gap-12"
        >
          <ContactInfo reduceMotion={reduceMotion} itemVariants={itemVariants} whatsappUrl={whatsappUrl} />
          <ContactForm reduceMotion={reduceMotion} itemVariants={itemVariants} whatsappConfigured={whatsappConfigured} phone={phone} />
          <ContactDetails reduceMotion={reduceMotion} itemVariants={itemVariants} whatsappConfigured={whatsappConfigured} whatsappUrl={whatsappUrl} phone={phone} />
        </motion.div>
      </div>
    </section>
  )
}