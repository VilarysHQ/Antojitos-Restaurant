import { ShoppingBag, ArrowUpRight } from "lucide-react"

export default function MobileMenu({ isOpen, links, cta, activeSection, onClose }) {
  return (
    <div
      id="antojitos-mobile-menu"
      aria-hidden={!isOpen}
      className={`absolute left-0 right-0 top-full overflow-hidden border-b border-[#f0e4d8] bg-white/98 shadow-[0_18px_36px_rgba(52,20,12,0.1)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 lg:hidden ${
        isOpen ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <nav
        aria-label="Navegación móvil"
        className="mx-auto flex max-h-[calc(100dvh-72px)] w-full flex-col gap-1 overflow-y-auto px-5 pb-8 pt-5 sm:px-8"
      >
        {links.map((link, index) => {
          const isActive = activeSection === link.id
          return (
            <a
              key={link.id}
              href={link.href}
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
              aria-current={isActive ? "location" : undefined}
              className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200 ${
                isActive ? "bg-[#fff2df] text-[#c82417]" : "text-[#40241b] hover:bg-[#fff7eb]"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 35}ms` : "0ms" }}
            >
              {link.label}
              <ArrowUpRight size={17} className={isActive ? "text-[#e76f00]" : "text-[#a68d7c]"} />
            </a>
          )
        })}

        <a
          href={cta.href}
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="mt-4 flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ffb400] to-[#ff8800] px-6 py-3 text-sm font-bold text-[#30170c] transition-transform duration-300 active:scale-[0.98] motion-reduce:transition-none"
        >
          <ShoppingBag size={18} />
          {cta.label}
          <ArrowUpRight size={17} />
        </a>

        <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-[#a08a7b]">
          El sabor que te provoca volver
        </p>
      </nav>
    </div>
  )
}