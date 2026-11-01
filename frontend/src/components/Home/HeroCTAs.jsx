import { motion } from "motion/react"
import { ArrowRight, UtensilsCrossed, MessageCircle } from "lucide-react"

export default function HeroCTAs({ reduceMotion, itemVariants }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : itemVariants}
      className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
    >
      {/* Botón primario */}
      <a
        href="#menu"
        className="group relative inline-flex min-h-[54px] w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#ffb400] to-[#ff9500] px-7 py-3.5 text-sm font-extrabold text-[#30170c] shadow-[0_10px_28px_rgba(255,153,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,153,0,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9900] motion-reduce:transition-none sm:w-auto"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:hidden"
        />
        <UtensilsCrossed size={19} className="relative transition-transform duration-300 group-hover:rotate-6" />
        <span className="relative">Ver menú</span>
        <ArrowRight
          size={18}
          className="relative transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </a>

      {/* Botón secundario */}
      <a
        href="#contacto"
        className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-[#179c43]/20 bg-[#179c43] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(23,156,67,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12863a] hover:shadow-[0_14px_32px_rgba(23,156,67,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#179c43] motion-reduce:transition-none sm:w-auto"
      >
        <MessageCircle
          size={19}
          className="transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
        />
        Pedir por WhatsApp
      </a>
    </motion.div>
  )
}