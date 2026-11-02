
import comboFamiliar from "../../assets/Promotions/comboFamiliar.webp"
import duoCrispy from "../../assets/Promotions/duoCrispy.webp"

export const promotionsData = [
  {
    id: "promo-combo-familiar",
    name: "Combo Familiar",
    eyebrow: "PARA COMPARTIR",
    title: "El sabor se disfruta en familia",
    description:
      "Pollo a la brasa, papas doradas, ensalada, cremas y dos bebidas.",
    price: 79.9,
    image: comboFamiliar,
    imageAlt:
      "Pollo a la brasa acompañado de papas fritas, ensalada, cremas y bebidas.",
    theme: "red",
    badge: "Especial familiar",
    buttonText: "Agregar combo",
    category: "promociones",
  },
  {
    id: "promo-duo-crispy",
    name: "Dúo Crispy",
    eyebrow: "DOBLE ANTOJO",
    title: "Dos veces más crujiente",
    description:
      "Dos hamburguesas crispy de pollo, papas fritas y dos bebidas.",
    price: 39.9,
    image: duoCrispy,
    imageAlt:
      "Dos hamburguesas de pollo crujiente con papas fritas y bebidas.",
    theme: "yellow",
    badge: "Dúo especial",
    buttonText: "Agregar dúo",
    category: "promociones",
  },
]

export const formatPromotionPrice = (price) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(price)
