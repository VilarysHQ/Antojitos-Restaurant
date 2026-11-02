import { ShoppingCart, MessageCircle, Bike } from "lucide-react"

export const howToOrderData = {
  steps: [
    {
      id: 1,
      title: "Elige tu combo",
      description: "Explora nuestro menú y escoge tu favorito.",
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: "Haz tu pedido",
      description: "Realízalo por la web o directamente por WhatsApp.",
      icon: MessageCircle,
    },
    {
      id: 3,
      title: "Recíbelo caliente",
      description: "Disfruta de tu pedido en casa, ¡listo para compartir!",
      icon: Bike,
    },
  ],
}