
import polloBrasa from "../../assets/Menu/polloBrasa.webp"
import alitasBroaster from "../../assets/Menu/alitasBroaster.webp"
import hamburguesaCrispy from "../../assets/Menu/hamburguesaCrispy.webp"
import parrillaFamiliar from "../../assets/Menu/parrillaFamiliar.webp"
import salchipapas from "../../assets/Menu/salchipapas.webp"
import comboAntojitos from "../../assets/Menu/comboAntojitos.webp"

// Categorías del menú
export const menuCategories = [
  {
    id: "todos",
    label: "Todos",
  },
  {
    id: "brasas",
    label: "A la brasa",
  },
  {
    id: "broaster",
    label: "Broaster",
  },
  {
    id: "hamburguesas",
    label: "Hamburguesas",
  },
  {
    id: "especiales",
    label: "Especiales",
  },
]

// Productos del menú
export const menuProducts = [
  {
    id: 1,
    name: "Pollo a la Brasa",
    description:
      "Pollo dorado y jugoso, acompañado de papas fritas, ensalada fresca y cremas.",
    price: 49.9,
    category: "brasas",
    image: polloBrasa,
    badge: "Más pedido",
    featured: true,
  },
  {
    id: 2,
    name: "Alitas Broaster",
    description:
      "Alitas crujientes por fuera, tiernas por dentro y acompañadas de una salsa especial.",
    price: 24.9,
    category: "broaster",
    image: alitasBroaster,
    badge: "Crujientes",
    featured: false,
  },
  {
    id: 3,
    name: "Hamburguesa Crispy",
    description:
      "Pechuga de pollo crocante con lechuga, tomate y salsa especial de la casa.",
    price: 18.9,
    category: "hamburguesas",
    image: hamburguesaCrispy,
    badge: "Favorito",
    featured: false,
  },
  {
    id: 4,
    name: "Parrilla Familiar",
    description:
      "Una combinación de carnes a la parrilla, papas doradas y acompañamientos.",
    price: 69.9,
    category: "especiales",
    image: parrillaFamiliar,
    badge: "Para compartir",
    featured: false,
  },
  {
    id: 5,
    name: "Salchipapas",
    description:
      "Papas fritas doradas con salchicha, cremas y el toque especial de Antojitos.",
    price: 15.9,
    category: "especiales",
    image: salchipapas,
    badge: null,
    featured: false,
  },
  {
    id: 6,
    name: "Combo Antojitos",
    description:
      "Medio pollo a la brasa con papas, ensalada y dos bebidas para compartir.",
    price: 32.9,
    category: "brasas",
    image: comboAntojitos,
    badge: "Combo especial",
    featured: false,
  },
]

// Formatear precios en soles peruanos
export const formatPrice = (value) =>
  `S/ ${value.toFixed(2)}`
