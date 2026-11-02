import { motion } from "motion/react"
import { UtensilsCrossed, MessageCircle, ArrowRight, Flame } from "lucide-react"

export default function ContactInfo({ reduceMotion, whatsappUrl, itemVariants }) {
  return (
    <motion.div variants={reduceMotion ? undefined : itemVariants} className="min-w-0 md:col-span-2 xl:col-span-1">
      <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#f2d9bc] bg-white/75 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#c96800] backdrop-blur-md">
        <UtensilsCrossed size={16} /> Hablemos de tu antojo
      </div>

      <h2 id="contact-heading" className="max-w-[510px] text-[clamp(2.3rem,5vw,3.65rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#3b1b12]">
        ¿Con antojos de <span className="text-[#c92121]">un buen pollo?</span>
      </h2>

      <p className="mt-5 max-w-[435px] text-[13px] leading-[1.85] text-[#694c3e] sm:text-[14px]">
        ¿Ya elegiste tu favorito? Explora nuestro menú, prepara tu pedido o escríbenos para resolver tus dudas. Estamos aquí para ayudarte a disfrutar de algo delicioso.
      </p>

      <div className="mt-7">
        {whatsappUrl ? (
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[15px] bg-[#159947] px-6 py-3 text-[14px] font-extrabold text-white shadow-[0_10px_25px_rgba(21,153,71,0.2)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#11803b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159947] motion-reduce:transition-none sm:w-auto">
            <MessageCircle size={22} /> Pedir por WhatsApp
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        ) : (
          <div className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[15px] border border-[#cddfce] bg-[#e4f0e5]/90 px-6 py-3 text-[13px] font-bold text-[#59745c] sm:w-auto">
            <MessageCircle size={21} /> WhatsApp próximamente
          </div>
        )}
      </div>

      <div className="mt-5 flex items-start gap-2">
        <Flame size={16} className="mt-0.5 shrink-0 text-[#ed8b00]" />
        <p className="text-[11px] leading-5 text-[#937464]">
          Selecciona tus platos favoritos desde nuestro menú digital.
        </p>
      </div>
    </motion.div>
  )
}