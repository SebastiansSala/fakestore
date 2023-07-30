"use client"

import { useContext } from "react"
import { Drawer } from "antd"
import { AiOutlineShoppingCart } from "react-icons/ai"
import useCart from "@/hooks/useCart"
import CartProduct from "./CartProduct"
import { CartContext } from "@/lib/CartProvider"

const CartDrawer = () => {
  const { cart } = useCart()

  const { isOpen, showDrawer, closeDrawer } = useContext(CartContext)

  return (
    <>
      <button onClick={showDrawer}>
        <AiOutlineShoppingCart className='text-2xl' />
      </button>
      <Drawer placement='right' onClose={closeDrawer} open={isOpen}>
        <div className='space-y-3'>
          {cart.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
        </div>
      </Drawer>
    </>
  )
}

export default CartDrawer
