export default function DesktopNav({ links, activeSection }) {
  return (
    <nav aria-label="Navegación principal" className="hidden min-w-0 items-center gap-5 lg:flex xl:gap-7">
      {links.map((link) => {
        const isActive = activeSection === link.id
        return (
          <a
            key={link.id}
            href={link.href}
            aria-current={isActive ? "location" : undefined}
            className={`group relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors duration-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9900] ${
              isActive ? "text-[#c82417]" : "text-[#40241b] hover:text-[#e76f00]"
            }`}
          >
            {link.label}
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#ff9900] transition-[width] duration-300 motion-reduce:transition-none ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}