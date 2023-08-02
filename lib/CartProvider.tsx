import useCart from "@/hooks/useCart"
import { useEffect } from "react"
import { createContext } from "react"

const CartContext = createContext({})

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { setCart } = useCart()

  useEffect(() => {
    const cart = localStorage.getItem("cart")
    const cartParsed = cart ? JSON.parse(cart) : []
    setCart(cartParsed)
  }, [setCart])

  return (
    <CartContext.Provider value={{ setCart }}>{children}</CartContext.Provider>
  )
}

export default CartProvider
