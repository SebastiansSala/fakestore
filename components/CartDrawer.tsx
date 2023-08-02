"use client"

import { Drawer } from "antd"
import { AiOutlineShoppingCart } from "react-icons/ai"
import useCart from "@/hooks/useCart"
import CartProduct from "./CartProduct"

const CartDrawer = () => {
  const { cart, isOpen, showDrawer, closeDrawer } = useCart()

  const sortedCart = cart.sort((a, b) => {
    if (a.quantity && b.quantity) {
      return b.quantity - a.quantity // Corrected comparison
    } else {
      return 0
    }
  })

  return (
    <>
      <button onClick={showDrawer}>
        <AiOutlineShoppingCart className='text-2xl' />
      </button>
      <Drawer placement='right' onClose={closeDrawer} open={isOpen} width='550'>
        {cart.length === 0 ? (
          <div className='grid place-content-center place-items-center h-full w-full'>
            <svg
              width='56'
              viewBox='0 0 65 74'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g fillRule='nonzero' fill='none'>
                <path
                  d='M64.407 9.856L53.605 0H11.371L.569 9.856A1.548 1.548 0 00.1 11.603c.235.619.843 1.031 1.524 1.031h61.727a1.62 1.62 0 001.522-1.031 1.545 1.545 0 00-.467-1.747z'
                  fill='#C4C4C4'
                ></path>
                <path
                  d='M63.351 9.927H1.624C.728 9.927 0 10.644 0 11.529v59.267C0 72.566 1.454 74 3.249 74h58.478c1.795 0 3.249-1.434 3.249-3.204V11.53c0-.885-.728-1.602-1.625-1.602z'
                  fill='#E4E4E4'
                ></path>
                <path
                  d='M32.488 45.122c-7.963 0-14.44-6.447-14.44-14.37v-4.79a1.6 1.6 0 011.605-1.596 1.6 1.6 0 011.604 1.596v4.79c0 6.163 5.04 11.177 11.23 11.177 6.192 0 11.231-5.014 11.231-11.177v-4.79a1.6 1.6 0 011.604-1.596 1.6 1.6 0 011.605 1.596v4.79c0 7.923-6.477 14.37-14.44 14.37z'
                  fill='#6D6D6D'
                ></path>
              </g>
            </svg>
            <p className='text-2xl'>Your cart is empty</p>
          </div>
        ) : (
          <ul className='space-y-3'>
            {sortedCart.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}
          </ul>
        )}
      </Drawer>
    </>
  )
}

export default CartDrawer
