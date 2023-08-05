"use client"

import { useEffect, useState } from "react"
import { Drawer } from "antd"
import { AiOutlineShoppingCart } from "react-icons/ai"
import useCart from "@/hooks/useCart"
import CartProduct from "./CartProduct"
import BagIcon from "./icons/BagIcon"
import { sortCart } from "@/utils/cartUtils"

const CartDrawer = () => {
  const [total, setTotal] = useState(0)
  const { cart, isOpen, showDrawer, closeDrawer, setCart } = useCart()

  const sortedCart = sortCart(cart)

  useEffect(() => {
    const channel = new BroadcastChannel("cart-channel")
    channel.onmessage = (event) => {
      if (event.data.type === "cart-update") {
        setCart(event.data.cart)
      }
    }
  }, [setCart])

  useEffect(() => {
    setTotal(
      cart.reduce((acc, product) => acc + product.price * product.quantity!, 0)
    )
  }, [cart, setTotal])

  return (
    <>
      <button onClick={showDrawer}>
        <AiOutlineShoppingCart className='text-2xl' />
      </button>
      <Drawer
        placement='right'
        onClose={closeDrawer}
        open={isOpen}
        width='550'
        className='relative'
      >
        {cart.length === 0 ? (
          <div className='grid place-content-center place-items-center h-full w-full'>
            <BagIcon />
            <p className='text-2xl'>Your cart is empty</p>
          </div>
        ) : (
          <ul className='space-y-8'>
            {sortedCart.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}
          </ul>
        )}
        <footer className='fixed bottom-0 py-10 w-full px-10 bg-white'>
          <div className='flex justify-between items-center'>
            <span>Subtotal:</span>
            <span>$ {total}</span>
          </div>
          <button></button>
        </footer>
      </Drawer>
    </>
  )
}

export default CartDrawer
