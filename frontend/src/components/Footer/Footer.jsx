import { motion, useReducedMotion } from "motion/react"
import { ArrowUp, Heart } from "lucide-react"
import { footerData } from "../../data/Footer/footerData"
import FooterBrand from "./FooterBrand"
import FooterLinks from "./FooterLinks"
import FooterContact from "./FooterContact"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

export default function Footer() {
  const reduceMotion = useReducedMotion()
  const { brand, navigation, information, contact, socials, copyright, isDemo } = footerData

  const phone = contact.phone.replace(/\D/g, "")
  const whatsappUrl = phone ? `https://wa.me/${phone}?text=${encodeURIComponent("¡Hola, Antojitos! Quisiera realizar una consulta.")}` : null
  const currentYear = new Date().getFullYear()

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })
  }

  return (
    <footer className="relative isolate w-full min-w-0 overflow-hidden bg-[#30180f] text-white">
      {/* Decoraciones */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#f18a00]/[0.08] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#c92121]/[0.08] blur-3xl" />
      <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-[#c92121] via-[#ffb400] to-[#f18100]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
        
        {/* Contenido principal */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid min-w-0 grid-cols-2 gap-x-5 gap-y-10 border-b border-white/10 py-12 sm:gap-x-8 sm:py-14 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.1fr] lg:gap-8 lg:py-16"
        >
          <FooterBrand brand={brand} socials={socials} reduceMotion={reduceMotion} />
          <FooterLinks title="Explorar" links={navigation} reduceMotion={reduceMotion} />
          <FooterLinks title="Información" links={information} reduceMotion={reduceMotion} />
          <FooterContact contact={contact} whatsappUrl={whatsappUrl} reduceMotion={reduceMotion} />
        </motion.div>

        {/* Barra inferior */}
        <div className="flex flex-col items-center justify-between gap-5 py-6 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] leading-5 text-[#ccb7aa]">
              © {currentYear} {copyright}. Todos los derechos reservados.
            </p>
            {isDemo && (
              <p className="text-[10px] leading-5 text-[#a99081]">
                Proyecto conceptual de demostración para portafolio.
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#cbb2a1]">
              Hecho con <Heart size={13} fill="currentColor" className="text-[#e95e4d]" /> y mucho sabor
            </span>

            <button type="button" onClick={handleBackToTop} aria-label="Volver al inicio" title="Volver al inicio" className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-[background-color,transform] duration-200 hover:-translate-y-1 hover:bg-[#ffb400] hover:text-[#30180f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb400] motion-reduce:transition-none">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}