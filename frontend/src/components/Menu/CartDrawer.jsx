import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { formatPrice } from "../../data/Menu/menuData"

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ""

export default function CartDrawer({ isOpen, onClose, onExited, items, onIncrease, onDecrease, onRemove, onClear, total, reduceMotion }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [checkoutMessage, setCheckoutMessage] = useState("")

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return }
      if (event.key !== "Tab") return
      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')].filter((el) => el.getClientRects().length > 0)
      if (!focusable.length) { event.preventDefault(); dialog.focus(); return }
      const first = focusable[0], last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) { event.preventDefault(); first.focus() }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleCheckout = () => {
    if (!items.length) return
    const phone = WHATSAPP_NUMBER.replace(/\D/g, "")
    if (!phone) { setCheckoutMessage("Configura VITE_WHATSAPP_NUMBER para habilitar los pedidos."); return }

    const lines = items.map(({ product, quantity }) => `• ${quantity} x ${product.name} — ${formatPrice(product.price * quantity)}`)
    const message = ["¡Hola, Antojitos! 🍗", "", "Quisiera realizar este pedido:", "", ...lines, "", `*TOTAL ESTIMADO: ${formatPrice(total)}*`, "", "¿Me confirman disponibilidad y entrega?"].join("\n")
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  return (
    <AnimatePresence initial={false} onExitComplete={onExited}>
      {isOpen && (
        <motion.div key="cart-drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.22 }} className="fixed inset-0 z-[100]">
          <div aria-hidden="true" onClick={onClose} className="absolute inset-0 bg-[#21110c]/60 backdrop-blur-[3px]" />
          <motion.aside
            ref={dialogRef} role="dialog" aria-modal="true" aria-label="Tu pedido de Antojitos" tabIndex={-1}
            initial={reduceMotion ? false : { x: "100%" }} animate={{ x: 0 }} exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 flex h-full w-full max-w-[440px] flex-col overflow-hidden bg-[#fffaf5] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#eadbd0] px-5 py-5 sm:px-7">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e87900]">Antojitos</p>
                <h2 className="text-2xl font-black text-[#3b1b12]">Tu pedido</h2>
              </div>
              <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Cerrar carrito" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ead6c6] bg-white text-[#3b1b12] focus-visible:outline-2 focus-visible:outline-[#e87900]">
                <X size={21} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-7">
              {items.length === 0 ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0d9] text-[#ec8300]"><ShoppingBag size={36} /></div>
                  <h3 className="text-xl font-bold text-[#3b1b12]">Tu carrito está vacío</h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-6 text-[#907366]">Agrega tus platos favoritos para comenzar tu pedido.</p>
                  <button type="button" onClick={onClose} className="mt-6 rounded-full bg-[#ffb400] px-6 py-3 text-sm font-bold text-[#3b1b12]">Explorar menú</button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-start gap-3 rounded-2xl border border-[#efdfd1] bg-white p-3 sm:gap-4 sm:p-4">
                      <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-[#ffebd2] sm:h-20 sm:w-20">
                        <img src={product.image} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[13px] font-extrabold text-[#3b1b12]">{product.name}</h3>
                        <p className="mt-1 text-sm font-bold text-[#e47400] tabular-nums">{formatPrice(product.price * quantity)}</p>
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <div className="flex items-center rounded-full border border-[#ead6c6]">
                            <button type="button" onClick={() => onDecrease(product.id)} aria-label={`Reducir cantidad de ${product.name}`} className="flex h-9 w-9 items-center justify-center"><Minus size={14} /></button>
                            <span className="min-w-6 text-center text-xs font-bold tabular-nums">{quantity}</span>
                            <button type="button" onClick={() => onIncrease(product)} aria-label={`Aumentar cantidad de ${product.name}`} className="flex h-9 w-9 items-center justify-center"><Plus size={14} /></button>
                          </div>
                          <button type="button" onClick={() => onRemove(product.id)} aria-label={`Eliminar ${product.name}`} className="flex h-9 w-9 items-center justify-center rounded-full text-[#b84739] hover:bg-red-50"><Trash2 size={17} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={onClear} className="self-end text-xs font-semibold text-[#aa6254] underline underline-offset-4">Vaciar carrito</button>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#eadbd0] bg-white px-5 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-sm text-[#80675a]">Total estimado</span>
                  <span className="text-2xl font-black text-[#3b1b12] tabular-nums">{formatPrice(total)}</span>
                </div>
                <button type="button" onClick={handleCheckout} className="flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-[#159947] px-4 py-3 text-[13px] font-extrabold text-white hover:bg-[#117e39]">
                  <MessageCircle size={19} className="shrink-0" /> Preparar pedido en WhatsApp <ArrowRight size={17} className="shrink-0" />
                </button>
                {checkoutMessage && <p role="status" className="mt-3 text-center text-xs leading-5 text-[#a33927]">{checkoutMessage}</p>}
                <p className="mt-3 text-center text-[11px] leading-5 text-[#94786a]">Los precios son demostrativos. El restaurante debe confirmar disponibilidad y entrega.</p>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}