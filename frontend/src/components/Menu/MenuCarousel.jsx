import { ArrowLeft, ArrowRight } from "lucide-react"
import ProductCard from "./ProductCard"

export default function MenuCarousel({ filteredProducts, activeCategory, addProduct, reduceMotion, carouselRef, scrollCarousel }) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-3 md:hidden">
        <div className="flex flex-col gap-1">
          <p className="text-[12px] font-bold text-[#3b1b12]">Explora nuestros platos</p>
          <p className="text-[11px] text-[#9b7c6b]">Desliza para descubrir más</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => scrollCarousel(-1)} aria-label="Ver platos anteriores" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead8c8] bg-white text-[#3b1b12] active:scale-95 focus-visible:outline-2 focus-visible:outline-[#f18c00]">
            <ArrowLeft size={18} />
          </button>
          <button type="button" onClick={() => scrollCarousel(1)} aria-label="Ver siguientes platos" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb400] text-[#3b1b12] active:scale-95 focus-visible:outline-2 focus-visible:outline-[#f18c00]">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        key={activeCategory}
        aria-label="Productos del menú"
        className="flex w-full min-w-0 items-stretch gap-4 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 xl:grid-cols-3 xl:gap-6"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addProduct} reduceMotion={reduceMotion} />
        ))}
      </div>
    </>
  )
}