
import { useCallback, useMemo, useState } from "react"

import { menuProducts } from "../../data/Menu/menuData"
import { promotionsData } from "../../data/Promotions/promotionsData"

const MAX_QUANTITY = 99

const orderProducts = [
  ...menuProducts,
  ...promotionsData,
]

const productMap = new Map(
  orderProducts.map((product) => [
    product.id,
    product,
  ])
)

export default function useCart() {
  const [cart, setCart] = useState([])

  const addProduct = useCallback((product) => {
    if (!productMap.has(product?.id)) return

    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + 1,
                  MAX_QUANTITY
                ),
              }
            : item
        )
      }

      return [
        ...current,
        {
          id: product.id,
          quantity: 1,
        },
      ]
    })
  }, [])

  const decreaseQuantity = useCallback((id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }, [])

  const removeProduct = useCallback((id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    )
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const cartItems = useMemo(() => {
    return cart.flatMap(({ id, quantity }) => {
      const product = productMap.get(id)

      if (!product) return []

      return [
        {
          product,
          quantity,
        },
      ]
    })
  }, [cart])

  const totalQuantity = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    )
  }, [cartItems])

  const total = useMemo(() => {
    return cartItems.reduce(
      (sum, { product, quantity }) =>
        sum + product.price * quantity,
      0
    )
  }, [cartItems])

  return {
    cartItems,
    totalQuantity,
    total,
    addProduct,
    decreaseQuantity,
    removeProduct,
    clearCart,
  }
}
