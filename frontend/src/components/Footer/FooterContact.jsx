import { motion } from "motion/react"
import { MessageCircle, MapPin, Clock3, ShoppingBag, ArrowRight } from "lucide-react"

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function FooterContact({ contact, whatsappUrl, reduceMotion }) {
  const phone = contact.phone.replace(/\D/g, "")

  return (
    <motion.div variants={reduceMotion ? undefined : itemVariants} className="col-span-2 min-w-0 sm:col-span-1 lg:col-span-1">
      <h3 className="mb-5 text-[14px] font-extrabold text-white">¿Hablamos?</h3>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <MessageCircle size={19} className="mt-0.5 shrink-0 text-[#ffb400]" />
          <div>
            <p className="text-[12px] font-bold text-white">WhatsApp / Pedidos</p>
            {whatsappUrl ? (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[12px] text-[#dfc8ba] hover:text-[#ffb400]">
                +{phone}
              </a>
            ) : (
              <p className="mt-1 text-[12px] text-[#b69a8a]">Próximamente</p>
            )}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={19} className="mt-0.5 shrink-0 text-[#ffb400]" />
          <div>
            <p className="text-[12px] font-bold text-white">Ubicación</p>
            <p className="mt-1 text-[12px] leading-5 text-[#b69a8a]">
              {contact.address ?? "Dirección por confirmar"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock3 size={19} className="mt-0.5 shrink-0 text-[#ffb400]" />
          <div>
            <p className="text-[12px] font-bold text-white">Horario de atención</p>
            <p className="mt-1 text-[12px] leading-5 text-[#b69a8a]">
              {contact.schedule ?? "Horario por confirmar"}
            </p>
          </div>
        </div>
      </div>

      <a href="#contacto" className="group mt-6 inline-flex min-h-11 items-center justify-center gap-2.5 rounded-xl bg-[#ffb400] px-5 py-3 text-[12px] font-extrabold text-[#30180f] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#ffca39] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb400] motion-reduce:transition-none">
        <ShoppingBag size={17} /> Contáctanos
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.div>
  )
}