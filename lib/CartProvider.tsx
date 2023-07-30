import { useState } from "react"
import { createContext } from "react"

type CartContextType = {
  isOpen: boolean
  showDrawer: () => void
  closeDrawer: () => void
}

export const CartContext = createContext<CartContextType>({
  isOpen: false,
  showDrawer: () => {},
  closeDrawer: () => {},
})

type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const showDrawer = () => {
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <CartContext.Provider value={{ showDrawer, closeDrawer, isOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
