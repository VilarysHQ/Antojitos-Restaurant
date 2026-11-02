import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { testimonialsData } from "../../data/Testimonials/dataTestimonials"
import TestimonialCard from "./TestimonialCard"
import TestimonialsHeader from "../Testimonials/TestimonialHeader"

export default function Testimonials() {
  const reduceMotion = useReducedMotion()
  const carouselRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    const { scrollLeft, scrollWidth, clientWidth } = carousel
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
    carousel.scrollBy({ left: distance * direction, behavior: reduceMotion ? "instant" : "smooth" })
  }

  return (
    <section id="testimonios" aria-labelledby="testimonials-heading" className="relative isolate w-full min-w-0 scroll-mt-[84px] overflow-hidden bg-[#fffaf5] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-40 h-80 w-80 rounded-full bg-[#f7bd83]/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#ffb400]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
        <TestimonialsHeader reduceMotion={reduceMotion} canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} scrollCarousel={scrollCarousel} />

        <motion.div
          ref={carouselRef}
          variants={reduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } } }}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          onScroll={updateScrollState}
          aria-label="Testimonios de ejemplo"
          className="flex w-full min-w-0 items-stretch gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0 xl:gap-6"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} reduceMotion={reduceMotion} />
          ))}
        </motion.div>

        <p className="mt-5 text-center text-[11px] leading-5 text-[#aa8a7a] lg:mt-7">
          Testimonios ficticios utilizados únicamente para demostrar el diseño.
        </p>
      </div>
    </section>
  )
}