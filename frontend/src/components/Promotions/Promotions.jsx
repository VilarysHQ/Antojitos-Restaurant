import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { promotionsData } from "../../data/Promotions/promotionsData"
import PromotionCard from "./PromotionCard"
import PromotionsHeader from "./PromotionsHeader"

export default function Promotions({ onAddToCart }) {
  const reduceMotion = useReducedMotion()
  const carouselRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    const { scrollLeft, clientWidth, scrollWidth } = carousel
    setCanScrollLeft(scrollLeft > 3)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 3)
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    updateScrollState()
    const observer = new ResizeObserver(updateScrollState)
    observer.observe(carousel)
    carousel.querySelectorAll("article").forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [updateScrollState])

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const firstCard = carousel.querySelector("article")
    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : carousel.clientWidth * 0.85
    carousel.scrollBy({ left: direction * distance, behavior: reduceMotion ? "instant" : "smooth" })
  }

  return (
    <section id="promociones" aria-labelledby="promotions-heading" className="relative w-full min-w-0 scroll-mt-[84px] overflow-hidden bg-[#fff8f1] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] min-w-0 px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
        <PromotionsHeader reduceMotion={reduceMotion} canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} scrollCarousel={scrollCarousel} />

        <motion.div ref={carouselRef} variants={reduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.12 }} onScroll={updateScrollState} aria-label="Promociones disponibles" className="flex w-full min-w-0 items-stretch gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:pb-0 xl:gap-8">
          {promotionsData.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} onAddToCart={onAddToCart} reduceMotion={reduceMotion} />
          ))}
        </motion.div>

        <p className="mt-4 text-center text-[11px] leading-6 text-[#9b7b6b] lg:mt-8">
          Precios demostrativos. La disponibilidad y las condiciones del pedido deben confirmarse.
        </p>
      </div>
    </section>
  )
}