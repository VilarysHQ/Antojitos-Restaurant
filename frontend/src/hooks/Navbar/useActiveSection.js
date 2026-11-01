import { useEffect, useState } from "react"

export function useActiveSection(links, { offset = 140, initial = "inicio" } = {}) {
  const [activeSection, setActiveSection] = useState(initial)

  useEffect(() => {
    const update = () => {
      let current = initial
      for (const link of links) {
        const section = document.getElementById(link.id)
        if (section && section.getBoundingClientRect().top <= offset) {
          current = link.id
        }
      }
      setActiveSection((prev) => (prev === current ? prev : current))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [links, offset, initial])

  return activeSection
}