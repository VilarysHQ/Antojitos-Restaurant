import logoNavbar from "../../assets/Navbar/logoNavbar.png"

export default function NavbarLogo({ brand, onClick }) {
  return (
    <a
      href={brand.href}
      onClick={onClick}
      aria-label="Antojitos — Ir al inicio"
      className="relative z-[60] flex min-w-0 shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9900]"
    >
      <img
        src={logoNavbar}
        alt={brand.alt}
        className="h-[54px] w-auto max-w-[156px] object-contain sm:h-[60px] sm:max-w-[180px] lg:h-[70px] lg:max-w-[205px]"
      />
    </a>
  )
}