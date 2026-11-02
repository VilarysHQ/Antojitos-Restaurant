import { motion } from "motion/react"
import { MessageCircle, MapPin, Clock3, ArrowRight } from "lucide-react"
import ContactDetailItem from "./ContactDetailItem"
import { contactData } from "../../data/Contact/dataContact"

export default function ContactDetails({ reduceMotion, itemVariants, whatsappConfigured, whatsappUrl, phone }) {
  return (
    <motion.div variants={reduceMotion ? undefined : itemVariants} className="min-w-0 rounded-[24px] border border-white/70 bg-white/85 p-5 shadow-[0_12px_36px_rgba(83,39,17,0.06)] backdrop-blur-xl sm:p-6 lg:p-7">
      <h3 className="mb-6 text-[17px] font-black text-[#3b1b12]">Información de contacto</h3>
      
      <div className="flex flex-col gap-7">
        <ContactDetailItem icon={MessageCircle} title="WhatsApp / Pedidos">
          {whatsappConfigured ? (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-extrabold text-[#c92121] hover:underline underline-offset-4">
              +{phone}
            </a>
          ) : (
            <span>Número pendiente de configuración</span>
          )}
        </ContactDetailItem>

        <ContactDetailItem icon={MapPin} title="Dirección">
          {contactData.address}
        </ContactDetailItem>

        <ContactDetailItem icon={Clock3} title="Horario de atención">
          {contactData.schedule}
        </ContactDetailItem>
      </div>

      <div className="my-7 h-px w-full bg-[#efd9c9]" />

      <div className="rounded-[18px] border border-[#f2dfc9] bg-[#fff7ec] p-4">
        <p className="text-[13px] font-extrabold text-[#3b1b12]">¿Prefieres elegir primero?</p>
        <p className="mt-2 text-[12px] leading-6 text-[#88695b]">Explora nuestros platos, descubre las promociones y prepara tu pedido.</p>
        <a href="#menu" className="group mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#d46c00] hover:text-[#b45600]">
          Explorar el menú <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  )
}