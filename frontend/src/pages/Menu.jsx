import { useCallback, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ChevronRight, ShoppingBag } from "lucide-react"
import { menuProducts, formatPrice } from "../data/Menu/menuData"
import MenuHeader from "../components/Menu/MenuHeader"
import MenuFilters from "../components/Menu/MenuFilters"
import MenuCarousel from "../components/Menu/MenuCarousel"
import CartDrawer from "../components/Menu/CartDrawer"

export default function Menu() {
  const reduceMotion = useReducedMotion()
  const carouselRef = useRef(null)
  const cartTriggerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState("todos")
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const filteredProducts = useMemo(() => activeCategory === "todos" ? menuProducts : menuProducts.filter((p) => p.category === activeCategory), [activeCategory])
  const cartItems = useMemo(() => cart.flatMap(({ id, quantity }) => { const product = menuProducts.find((item) => item.id === id); return product ? [{ product, quantity }] : [] }), [cart])
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cartItems.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)

  const changeCategory = (id) => { setActiveCategory(id); carouselRef.current?.scrollTo({ left: 0, behavior: "instant" }) }
  
  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const firstCard = carousel.querySelector("article")
    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : carousel.clientWidth * 0.8
    carousel.scrollBy({ left: direction * distance, behavior: reduceMotion ? "instant" : "smooth" })
  }

  const addProduct = useCallback((product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: Math.min(item.quantity + 1, 99) } : item)
      return [...current, { id: product.id, quantity: 1 }]
    })
  }, [])

  const decreaseQuantity = useCallback((id) => setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0)), [])
  const removeProduct = useCallback((id) => setCart((current) => current.filter((item) => item.id !== id)), [])
  const clearCart = useCallback(() => setCart([]), [])
  
  const openCart = useCallback((event) => { cartTriggerRef.current = event?.currentTarget ?? document.activeElement; setCartOpen(true) }, [])
  const closeCart = useCallback(() => setCartOpen(false), [])
  const restoreCartFocus = useCallback(() => { const trigger = cartTriggerRef.current; if (trigger?.isConnected && typeof trigger.focus === "function") trigger.focus({ preventScroll: true }) }, [])

  return (
    <>
      <section id="menu" aria-labelledby="menu-heading" className="relative w-full min-w-0 scroll-mt-[84px] bg-[#fffaf5] py-16 text-[#3b1b12] lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] min-w-0 px-5 min-[390px]:px-6 sm:px-10 lg:px-12 xl:px-16">
          <MenuHeader reduceMotion={reduceMotion} />
          <MenuFilters activeCategory={activeCategory} onCategoryChange={changeCategory} />
          <MenuCarousel filteredProducts={filteredProducts} activeCategory={activeCategory} addProduct={addProduct} reduceMotion={reduceMotion} carouselRef={carouselRef} scrollCarousel={scrollCarousel} />

          <div className="mt-10 flex flex-col items-center gap-4 border-t border-[#eadbd0] pt-7 text-center sm:flex-row sm:justify-between sm:text-left md:mt-12 md:pt-8">
            <div>
              <p className="text-sm font-extrabold text-[#3b1b12]">¿Ya elegiste tus favoritos?</p>
              <p className="mt-1 text-[12px] text-[#947768]">Revisa los platos agregados a tu pedido.</p>
            </div>
            <button type="button" onClick={openCart} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#ffb400] px-6 py-3 text-sm font-extrabold text-[#3b1b12] transition-colors hover:bg-[#ffc22c] sm:w-auto">
              <ShoppingBag size={19} /> Ver mi pedido
              {totalQuantity > 0 && <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#3b1b12] px-1.5 text-[11px] text-white">{totalQuantity}</span>}
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {!cartOpen && totalQuantity > 0 && (
          <motion.button key="floating-cart" type="button" onClick={openCart} aria-label={`Abrir carrito con ${totalQuantity} productos`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="fixed bottom-5 right-5 z-40 flex min-h-14 items-center gap-3 rounded-full bg-[#3b1b12] px-5 py-3 text-white shadow-[0_10px_35px_rgba(59,27,18,0.25)] sm:bottom-7 sm:right-7">
            <ShoppingBag size={20} />
            <span className="text-sm font-bold tabular-nums">{formatPrice(total)}</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ffb400] px-1.5 text-xs font-black text-[#3b1b12]">{totalQuantity}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={cartOpen} onClose={closeCart} onExited={restoreCartFocus} items={cartItems} onIncrease={addProduct} onDecrease={decreaseQuantity} onRemove={removeProduct} onClear={clearCart} total={total} reduceMotion={reduceMotion} />
    </>
  )
}