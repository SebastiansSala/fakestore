"use client"
import CartProvider from "./CartProvider"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>
}

export default Providers
