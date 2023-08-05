import { CartProduct } from "@/lib/types"

export const sortCart = (cart: CartProduct[]): CartProduct[] => {
  return cart.toSorted((a, b) => {
    if (a.quantity && b.quantity) {
      return b.quantity - a.quantity
    } else {
      return 0
    }
  })
}
