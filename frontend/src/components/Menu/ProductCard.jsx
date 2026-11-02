import { motion } from "motion/react"
import { Flame, ShoppingCart } from "lucide-react"
import { formatPrice } from "../../data/Menu/menuData"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProductCard({ product, onAdd, reduceMotion }) {
  return (
    <motion.article
      variants={reduceMotion ? undefined : itemVariants}
      className="group flex h-full min-w-0 w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-[#f0dfd1] bg-white shadow-[0_8px_28px_rgba(76,37,18,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#f0b985] hover:shadow-[0_14px_34px_rgba(76,37,18,0.09)] min-[440px]:w-[72%] sm:w-[55%] md:w-auto md:shrink"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#fff0df] sm:aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.055] motion-reduce:transition-none"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#c92121] px-3 py-1.5 text-[10px] font-extrabold text-white shadow-md">
            {product.badge}
          </span>
        )}
        <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#e87900] shadow-sm backdrop-blur-md">
          <Flame size={19} />
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-4 pb-4 pt-5 sm:px-5 sm:pb-5">
        <h3 className="text-[17px] font-extrabold leading-tight text-[#3b1b12] sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-3 min-h-[3.8rem] flex-1 text-[12px] leading-[1.6] text-[#80665b] sm:text-[13px]">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="whitespace-nowrap text-xl font-black tracking-tight text-[#e96d00] tabular-nums">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            aria-label={`Agregar ${product.name} al pedido`}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#c92121] px-4 py-2.5 text-[12px] font-bold text-white transition-[background-color,transform] duration-200 hover:bg-[#a91d1d] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f18c00]"
          >
            <ShoppingCart size={16} />
            Agregar
          </button>
        </div>
      </div>
    </motion.article>
  )
}