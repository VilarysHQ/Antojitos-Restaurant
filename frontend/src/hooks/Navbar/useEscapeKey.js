import { useEffect } from "react"

export function useEscapeKey(active, onEscape) {
  useEffect(() => {
    if (!active) return
    const handle = (e) => { if (e.key === "Escape") onEscape() }
    document.addEventListener("keydown", handle)
    return () => document.removeEventListener("keydown", handle)
  }, [active, onEscape])
}