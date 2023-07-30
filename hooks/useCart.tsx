"use client"
import { CartProduct } from "@/lib/types"
import { create } from "zustand"

type useCartProps = {
  cart: CartProduct[]
  addToCart: (product: CartProduct) => void
  removeFromCart: (product: CartProduct) => void
}

const useCart = create<useCartProps>((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find((p) => p.id === product.id)

      if (existingProduct) {
        const updatedCart = state.cart.map((p) =>
          p.id === product.id && p.quantity
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )

        return { cart: updatedCart }
      }

      return { cart: [...state.cart, { ...product, quantity: 1 }] }
    })
  },
  removeFromCart: (product) => {
    set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) }))
  },
}))

export default useCart
