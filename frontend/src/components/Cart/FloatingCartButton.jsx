import { motion, AnimatePresence } from "motion/react"
import { ShoppingBag } from "lucide-react"
import { formatPrice } from "../../data/Menu/menuData"

export default function FloatingCartButton({ isOpen, total, totalQuantity, onClick, reduceMotion }) {
  return (
    <AnimatePresence>
      {!isOpen && totalQuantity > 0 && (
        <motion.button
          key="floating-cart"
          type="button"
          onClick={onClick}
          aria-label={`Abrir carrito con ${totalQuantity} productos`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          className="fixed bottom-5 right-5 z-40 flex min-h-14 items-center gap-3 rounded-full bg-[#3b1b12] px-5 py-3 text-white shadow-[0_10px_35px_rgba(59,27,18,0.25)] transition-colors hover:bg-[#572a1c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb400] sm:bottom-7 sm:right-7"
        >
          <ShoppingBag size={20} />
          <span className="text-sm font-bold tabular-nums">{formatPrice(total)}</span>
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ffb400] px-1.5 text-xs font-black text-[#3b1b12]">{totalQuantity}</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}