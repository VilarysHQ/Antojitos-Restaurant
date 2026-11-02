import { useCallback, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"

import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Menu from "./components/Menu/Menu"
import Promotions from "./components/Promotions/Promotions"
import CartDrawer from "./components/Menu/CartDrawer"
import FloatingCartButton from "./components/Cart/FloatingCartButton"

import useCart from "./hooks/Menu/useCart"

function App() {
  const reduceMotion = useReducedMotion()
  const cartTriggerRef = useRef(null)
  const [cartOpen, setCartOpen] = useState(false)

  const { cartItems, totalQuantity, total, addProduct, decreaseQuantity, removeProduct, clearCart } = useCart()

  const openCart = useCallback((event) => {
    cartTriggerRef.current = event?.currentTarget ?? document.activeElement
    setCartOpen(true)
  }, [])

  const closeCart = useCallback(() => setCartOpen(false), [])

  const restoreCartFocus = useCallback(() => {
    const trigger = cartTriggerRef.current
    if (trigger?.isConnected && typeof trigger.focus === "function") {
      trigger.focus({ preventScroll: true })
    }
  }, [])

  return (
    <>
      <Navbar />

      <main className="pt-[72px] lg:pt-[84px]">
        <Home />
        <Menu addProduct={addProduct} openCart={openCart} totalQuantity={totalQuantity} />
        <Promotions onAddToCart={addProduct} />
      </main>

      <FloatingCartButton isOpen={cartOpen} total={total} totalQuantity={totalQuantity} onClick={openCart} reduceMotion={reduceMotion} />

      <CartDrawer
        isOpen={cartOpen}
        onClose={closeCart}
        onExited={restoreCartFocus}
        items={cartItems}
        onIncrease={addProduct}
        onDecrease={decreaseQuantity}
        onRemove={removeProduct}
        onClear={clearCart}
        total={total}
        reduceMotion={reduceMotion}
      />
    </>
  )
}

export default App