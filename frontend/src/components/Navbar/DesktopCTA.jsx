import { ShoppingBag, ArrowUpRight } from "lucide-react"

export default function DesktopCTA({ cta }) {
  return (
    <a
      href={cta.href}
      className="group hidden min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffb400] to-[#ff8800] px-5 py-3 text-[13px] font-bold text-[#30170c] shadow-[0_5px_16px_rgba(255,153,0,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,153,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9900] lg:inline-flex"
    >
      <ShoppingBag size={17} />
      {cta.label}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </a>
  )
}