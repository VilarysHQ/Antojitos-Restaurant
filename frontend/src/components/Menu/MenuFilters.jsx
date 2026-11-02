import { menuCategories } from "../../data/Menu/menuData"

export default function MenuFilters({ activeCategory, onCategoryChange }) {
  return (
    <div role="group" aria-label="Filtrar menú por categoría" className="mb-7 flex w-full min-w-0 gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
      {menuCategories.map((category) => {
        const active = activeCategory === category.id
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={active}
            className={`min-h-11 shrink-0 rounded-full px-5 py-2.5 text-[12px] font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f18c00] ${active ? "bg-[#3b1b12] text-white" : "border border-[#ecded2] bg-white text-[#715347] hover:border-[#f18c00]"}`}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}