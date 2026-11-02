
import {
  useMemo,
  useRef,
  useState,
} from "react"

import { useReducedMotion } from "motion/react"

import {
  ChevronRight,
  ShoppingBag,
} from "lucide-react"

import { menuProducts } from "../data/Menu/menuData"

import MenuHeader from "../components/Menu/MenuHeader"
import MenuFilters from "../components/Menu/MenuFilters"
import MenuCarousel from "../components/Menu/MenuCarousel"

export default function Menu({
  addProduct,
  openCart,
  totalQuantity,
}) {
  const reduceMotion = useReducedMotion()
  const carouselRef = useRef(null)

  const [activeCategory, setActiveCategory] =
    useState("todos")

  const filteredProducts = useMemo(() => {
    if (activeCategory === "todos") {
      return menuProducts
    }

    return menuProducts.filter(
      (product) => product.category === activeCategory
    )
  }, [activeCategory])

  const changeCategory = (id) => {
    setActiveCategory(id)

    carouselRef.current?.scrollTo({
      left: 0,
      behavior: "instant",
    })
  }

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current

    if (!carousel) return

    const firstCard = carousel.querySelector("article")

    const gap =
      parseFloat(getComputedStyle(carousel).columnGap) || 0

    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : carousel.clientWidth * 0.8

    carousel.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "instant" : "smooth",
    })
  }

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="
        relative w-full min-w-0
        scroll-mt-[84px]
        bg-[#fffaf5]
        pt-16 pb-8
        text-[#3b1b12]
        sm:pt-20 sm:pb-10
        lg:pt-24 lg:pb-12
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          min-w-0 px-5
          min-[390px]:px-6
          sm:px-10
          lg:px-12
          xl:px-16
        "
      >
        <MenuHeader reduceMotion={reduceMotion} />

        <MenuFilters
          activeCategory={activeCategory}
          onCategoryChange={changeCategory}
        />

        <MenuCarousel
          filteredProducts={filteredProducts}
          activeCategory={activeCategory}
          addProduct={addProduct}
          reduceMotion={reduceMotion}
          carouselRef={carouselRef}
          scrollCarousel={scrollCarousel}
        />

        {/* Cierre de sección */}
        <div
          className="
            mt-8 flex flex-col
            items-center gap-4

            border-t border-[#eadbd0]
            pt-6 text-center

            sm:flex-row
            sm:justify-between
            sm:text-left

            md:mt-10
            md:pt-7
          "
        >
          <div>
            <p
              className="
                text-sm font-extrabold
                text-[#3b1b12]
              "
            >
              ¿Ya elegiste tus favoritos?
            </p>

            <p
              className="
                mt-1 text-[12px]
                text-[#947768]
              "
            >
              Revisa los platos agregados a tu pedido.
            </p>
          </div>

          <button
            type="button"
            onClick={openCart}
            className="
              flex min-h-12
              w-full items-center
              justify-center gap-3

              rounded-xl
              bg-[#ffb400]
              px-6 py-3

              text-sm font-extrabold
              text-[#3b1b12]

              transition-colors
              hover:bg-[#ffc22c]

              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#f18c00]

              sm:w-auto
            "
          >
            <ShoppingBag size={19} />

            Ver mi pedido

            {totalQuantity > 0 && (
              <span
                className="
                  flex h-6 min-w-6
                  items-center justify-center
                  rounded-full

                  bg-[#3b1b12]
                  px-1.5
                  text-[11px] text-white
                "
              >
                {totalQuantity}
              </span>
            )}

            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}
