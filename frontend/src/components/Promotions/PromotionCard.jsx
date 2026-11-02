import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { ArrowRight, Check, Flame, ShoppingBag, Sparkles } from "lucide-react"
import { formatPromotionPrice } from "../../data/Promotions/promotionsData"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const promotionThemes = {
  red: {
    card: "bg-[#b91c1c]", eyebrow: "text-[#ffe49c]", title: "text-white", description: "text-white/85", badge: "bg-white/15 text-white border-white/25", button: "bg-[#ffb400] text-[#3b1b12] hover:bg-[#ffc740]", decoration: "bg-[#ff872d]/30", price: "text-[#ffdf83]", icon: "text-[#ffd26a]", counter: "bg-white/15 text-white", imgFade: "from-[#b91c1c]",
  },
  yellow: {
    card: "bg-[#ffb600]", eyebrow: "text-[#803b04]", title: "text-[#421c10]", description: "text-[#6a3d1b]", badge: "bg-white/45 text-[#5a2e13] border-white/60", button: "bg-[#3b1b12] text-white hover:bg-[#5d2b1a]", decoration: "bg-[#fff2a1]/45", price: "text-[#a82617]", icon: "text-[#a9490d]", counter: "bg-[#3b1b12]/10 text-[#421c10]", imgFade: "from-[#ffb600]",
  },
}

export default function PromotionCard({ promotion, onAddToCart, reduceMotion }) {
  const [added, setAdded] = useState(false)
  const resetRef = useRef(null)
  const theme = promotionThemes[promotion.theme] ?? promotionThemes.red

  useEffect(() => {
    return () => { if (resetRef.current) clearTimeout(resetRef.current) }
  }, [])

  const handleAdd = () => {
    if (typeof onAddToCart !== "function") return
    onAddToCart(promotion)
    setAdded(true)
    if (resetRef.current) clearTimeout(resetRef.current)
    resetRef.current = setTimeout(() => setAdded(false), 1400)
  }

  return (
    <motion.article variants={reduceMotion ? undefined : cardVariants} className={`group relative isolate flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] ${theme.card} shadow-[0_14px_38px_rgba(96,42,18,0.11)] min-[440px]:w-[78%] sm:w-[65%] lg:w-auto lg:shrink lg:rounded-[30px]`}>
      <div aria-hidden="true" className={`pointer-events-none absolute -right-20 -top-24 z-0 h-72 w-72 rounded-full blur-3xl ${theme.decoration}`} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-24 z-0 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

      <div className="relative z-10 h-[220px] w-full overflow-hidden min-[390px]:h-[245px] sm:h-[275px] lg:order-2 lg:h-[290px] xl:h-[315px]">
        <img src={promotion.image} alt={promotion.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.045] motion-reduce:transition-none" />
        <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${theme.imgFade} to-transparent`} />
        
        <div className={`absolute right-4 top-4 flex items-center gap-1.5 rounded-full border px-3 py-2 text-[10px] font-extrabold backdrop-blur-md ${theme.badge}`}>
          <Flame size={14} /> {promotion.badge}
        </div>
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col px-5 pb-6 pt-3 min-[390px]:px-6 sm:px-7 lg:order-1 lg:min-h-[270px] lg:px-8 lg:pb-5 lg:pt-8 xl:px-9">
        <div className={`mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] ${theme.eyebrow}`}>
          <Sparkles size={15} className={theme.icon} /> {promotion.eyebrow}
        </div>

        <h3 className={`max-w-[470px] text-[clamp(1.65rem,5.8vw,2.35rem)] font-black leading-[1.07] tracking-[-0.04em] lg:text-[clamp(1.8rem,2.5vw,2.55rem)] ${theme.title}`}>
          {promotion.title}
        </h3>

        <p className={`mt-3 max-w-[430px] text-[12px] leading-[1.7] sm:text-[13px] lg:text-sm ${theme.description}`}>
          {promotion.description}
        </p>

        <div className="mt-auto pt-6">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className={`mb-1 text-[10px] font-semibold ${theme.description}`}>Precio del combo</p>
              <p className={`whitespace-nowrap text-[28px] font-black leading-none tracking-tight tabular-nums sm:text-[32px] ${theme.price}`}>
                {formatPromotionPrice(promotion.price)}
              </p>
            </div>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${theme.counter}`}>
              <ShoppingBag size={19} />
            </div>
          </div>

          <button type="button" onClick={handleAdd} disabled={typeof onAddToCart !== "function"} aria-label={`Agregar ${promotion.name} al carrito`} className={`flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[14px] px-5 py-3 text-[13px] font-extrabold transition-[background-color,transform] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none ${theme.button}`}>
            {added ? (
              <><Check size={19} /> Agregado al pedido</>
            ) : (
              <><ShoppingBag size={19} /> {promotion.buttonText} <ArrowRight size={18} /></>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  )
}