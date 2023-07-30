"use client"

import { useContext, useState } from "react"
import AddButton from "./AddButton"
import { Product } from "@/lib/types"
import Image from "next/image"
import useCart from "@/hooks/useCart"
import { CartContext } from "@/lib/CartProvider"

type CardProps = {
  product: Product
}

const Card = ({ product }: CardProps) => {
  const [show, setShow] = useState(false)
  const { addToCart, cart } = useCart()
  const { id, title, price, description, category, image } = product
  const { showDrawer } = useContext(CartContext)

  const handleClick = () => {
    addToCart(product)
    showDrawer()
  }

  return (
    <div
      className='w-full rounded-2xl bg-white h-96 relative'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className='absolute top-4 left-4 rounded-full px-4 py-2 bg-[#de6737] font-bold text-white'>
        {category}
      </div>
      <a href='#'>
        <Image
          className='w-full h-4/6 object-contain object-center mx-auto'
          src={image}
          width={800}
          height={800}
          alt={title}
        />
      </a>
      <div className='py-5 px-4'>
        <a href='#'>
          <h5 className='text-black text-xl font-semibold tracking-tight truncate'>
            {title}
          </h5>
        </a>
      </div>
      <div className='flex items-center justify-between text-[#de6737] px-4'>
        <span className='text-xl tracking-tighter font-bold'>${price}</span>
      </div>

      {show && (
        <div className='rounded-2xl flex justify-center items-center absolute inset-0 bg-black bg-opacity-50 h-full w-full animate-fade animate-duration-300'>
          <div className='z-50'>
            <AddButton onClick={handleClick} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
