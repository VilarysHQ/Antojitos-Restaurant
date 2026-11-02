import { useState } from "react"
import { motion } from "motion/react"
import { Send, UserRound, Phone, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"
import { buildWhatsAppUrl } from "../../data/Contact/dataContact"

export default function ContactForm({ reduceMotion, itemVariants, whatsappConfigured, phone }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [feedback, setFeedback] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((c) => ({ ...c, [name]: value }))
    setFeedback("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.currentTarget.reportValidity()) return
    if (!whatsappConfigured) {
      setFeedback("El WhatsApp del restaurante todavía no está configurado.")
      return
    }

    const message = [
      "¡Hola, Antojitos! 🍗", "", "Quisiera realizar una consulta.", "",
      `*Nombre:* ${form.name.trim()}`, `*Teléfono:* ${form.phone.trim()}`, "",
      "*Mensaje:*", form.message.trim(), "", "Quedo atento a su respuesta."
    ].join("\n")

    const url = buildWhatsAppUrl(phone, message)
    if (url) window.location.assign(url)
  }

  const inputClass = "min-h-[50px] w-full rounded-xl border border-[#ebded4] bg-[#fffaf6] py-3 pl-11 pr-4 text-[14px] text-[#3b1b12] placeholder:text-[#b49c90] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#f0a329] focus:ring-4 focus:ring-[#ffb400]/10"

  return (
    <motion.div variants={reduceMotion ? undefined : itemVariants} className="min-w-0 rounded-[26px] border border-white/80 bg-white/95 p-5 shadow-[0_20px_55px_rgba(83,39,17,0.11)] backdrop-blur-xl sm:p-7 lg:p-8">
      <div className="mb-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0dd] text-[#ee8300]"><Send size={19} /></div>
        <h3 className="text-[22px] font-black tracking-tight text-[#3b1b12]">Envíanos un mensaje</h3>
        <p className="mt-2 text-[12px] leading-5 text-[#8c6e60]">Completa tus datos y continúa la conversación en WhatsApp.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-[12px] font-bold text-[#513329]">Tu nombre</label>
          <div className="relative">
            <UserRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b38a77]" />
            <input id="contact-name" name="name" type="text" required maxLength={80} autoComplete="name" placeholder="¿Cómo te llamas?" value={form.name} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-[12px] font-bold text-[#513329]">Número de WhatsApp</label>
          <div className="relative">
            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b38a77]" />
            <input id="contact-phone" name="phone" type="tel" required minLength={7} maxLength={20} autoComplete="tel" placeholder="Ej. 987 654 321" value={form.phone} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-[12px] font-bold text-[#513329]">¿Qué deseas pedir o consultar?</label>
          <textarea id="contact-message" name="message" required maxLength={1000} rows={4} placeholder="Cuéntanos qué se te antoja..." value={form.message} onChange={handleChange} className="min-h-[116px] w-full resize-y rounded-xl border border-[#ebded4] bg-[#fffaf6] px-4 py-3 text-[14px] leading-6 text-[#3b1b12] placeholder:text-[#b49c90] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#f0a329] focus:ring-4 focus:ring-[#ffb400]/10" />
        </div>

        <button type="submit" className="group mt-1 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#ff9700] to-[#ff7900] px-5 py-3 text-[14px] font-extrabold text-white shadow-[0_8px_22px_rgba(255,121,0,0.17)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_27px_rgba(255,121,0,0.25)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9700] motion-reduce:transition-none">
          <Send size={19} /> Preparar mensaje
          <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {feedback && (
          <div role="status" className="flex items-start gap-2 rounded-xl border border-[#f1dcc8] bg-[#fff7ed] p-3 text-[12px] leading-5 text-[#885136]">
            {whatsappConfigured ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#159947]" /> : <AlertCircle size={18} className="mt-0.5 shrink-0 text-[#db7727]" />}
            <span>{feedback}</span>
          </div>
        )}
        <p className="text-center text-[11px] leading-5 text-[#9b8073]">El mensaje se confirma directamente en WhatsApp.</p>
      </form>
    </motion.div>
  )
}