import { Menu, X } from "lucide-react"

export default function MobileMenuButton({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
      aria-controls="antojitos-mobile-menu"
      className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-[#eeded0] bg-white text-[#40241b] transition-colors duration-300 hover:border-[#ff9900] hover:text-[#dd6500] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900] lg:hidden"
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  )
}