import { motion } from "motion/react"
import { Flame, Globe } from "lucide-react"
import logoNavbar from "../../assets/Navbar/logoNavbar.png"

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function FooterBrand({ brand, socials, reduceMotion }) {
  const socialNetworks = [
    { id: "instagram", label: "Instagram", icon: Globe },
    { id: "facebook", label: "Facebook", icon: Globe },
    { id: "tiktok", label: "TikTok", icon: Globe },
  ]

  const availableSocials = socialNetworks.filter((social) => Boolean(socials[social.id]))

  return (
    <motion.div variants={reduceMotion ? undefined : itemVariants} className="col-span-2 min-w-0 lg:col-span-1">
      <a href="#inicio" aria-label="Antojitos, volver al inicio" className="inline-flex items-center rounded-2xl bg-white px-4 py-2 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb400] motion-reduce:transition-none">
        <img src={logoNavbar} alt={brand.name} loading="lazy" className="h-14 w-auto max-w-[160px] object-contain" />
      </a>

      <p className="mt-5 max-w-[320px] text-[13px] leading-[1.85] text-[#e1cec3]">
        {brand.description}
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#ffb400]/20 bg-[#ffb400]/10 px-3 py-2 text-[11px] font-bold text-[#ffd17b]">
        <Flame size={15} /> {brand.slogan}
      </div>

      {availableSocials.length > 0 && (
        <div className="mt-6 flex items-center gap-3">
          {availableSocials.map((social) => {
            const Icon = social.icon
            return (
              <a key={social.id} href={socials[social.id]} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${social.label}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-[background-color,color,transform] duration-200 hover:-translate-y-1 hover:bg-[#ffb400] hover:text-[#30180f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb400] motion-reduce:transition-none">
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}