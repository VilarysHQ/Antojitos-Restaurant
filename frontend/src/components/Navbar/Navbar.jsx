import { useState } from "react"
import { navbarData } from "../../data/Navbar/dataNavbar"

import NavbarLogo from "./NavbarLogo"
import DesktopNav from "./DesktopNav"
import DesktopCTA from "./DesktopCTA"
import MobileMenuButton from "./MobileMenuButton"
import MobileMenu from "./MobileMenu"

// Ruta corregida: sales de components, entras a hooks
import { useScrolled } from "../../hooks/Navbar/useScrolled"
import { useActiveSection } from "../../hooks/Navbar/useActiveSection"
import { useBodyScrollLock } from "../../hooks/Navbar/useBodyScrollLock"
import { useEscapeKey } from "../../hooks/Navbar/useEscapeKey"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isScrolled = useScrolled(20)
  const activeSection = useActiveSection(navbarData.links)

  useBodyScrollLock(isMenuOpen)
  useEscapeKey(isMenuOpen, () => setIsMenuOpen(false))

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled || isMenuOpen
          ? "border-[#f0e4d8] bg-white/95 shadow-[0_8px_30px_rgba(52,20,12,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[84px] lg:px-12 xl:px-16">
        <NavbarLogo brand={navbarData.brand} onClick={closeMenu} />
        <DesktopNav links={navbarData.links} activeSection={activeSection} />
        <div className="flex shrink-0 items-center gap-3">
          <DesktopCTA cta={navbarData.cta} />
          <MobileMenuButton isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((p) => !p)} />
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        links={navbarData.links}
        cta={navbarData.cta}
        activeSection={activeSection}
        onClose={closeMenu}
      />
    </header>
  )
}