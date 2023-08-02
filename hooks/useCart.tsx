"use client"
import { useEffect } from "react"
import { create } from "zustand"
import { CartProduct } from "@/lib/types"

type useCartProps = {
  cart: CartProduct[]
  setCart: (products: CartProduct[]) => void
  isOpen: boolean
  showDrawer: () => void
  closeDrawer: () => void
  addToCart: (product: CartProduct) => void
  decreaseProductQuantity: (product: CartProduct) => void
  removeFromCart: (product: CartProduct) => void
}

const useCart = create<useCartProps>((set) => ({
  cart: [],

  setCart: (products) => set({ cart: products }),
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find((p) => p.id === product.id)

      const updatedCart = existingProduct
        ? state.cart.map((p) =>
            p.id === product.id && p.quantity
              ? { ...p, quantity: p.quantity + 1 }
              : p
          )
        : [...state.cart, { ...product, quantity: 1 }]

      localStorage.setItem("cart", JSON.stringify(updatedCart))

      return { cart: updatedCart }
    })
  },
  removeFromCart: (product) => {
    set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) }))
  },
  decreaseProductQuantity: (product) => {
    set((state) => {
      const productQuantity = state.cart.find(
        (p) => p.id === product.id
      )?.quantity

      const updatedCart =
        productQuantity === 1
          ? state.cart.filter((p) => p.id !== product.id)
          : state.cart.map((p) =>
              p.id === product.id && p.quantity
                ? { ...p, quantity: p.quantity - 1 }
                : p
            )
      return { cart: updatedCart }
    })
  },

  isOpen: false,
  showDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
}))

//get Cart Items from Local Storage and set in useCart

export default useCart
