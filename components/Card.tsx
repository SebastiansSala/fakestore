"use client"

import { useState } from "react"
import AddButton from "./AddButton"
import { Products } from "@/app/page"
import Image from "next/image"

type CardProps = {
  product: Products
}

const Card = ({ product }: CardProps) => {
  const [show, setShow] = useState(false)
  const { id, title, price, description, category, image } = product

  return (
    <div
      className='w-full rounded-2xl bg-white h-96 relative'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className='absolute top-4 left-4 rounded-full px-4 py-2 bg-orange-400 font-bold text-white'>
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
        <a href='#' className='flex justify-between items-center text-black'>
          <h5 className='text-xl w-1/2 font-semibold tracking-tight truncate'>
            {title}
          </h5>
          <h5 className='truncate'>{category}</h5>
        </a>
      </div>
      <div className='flex items-center justify-between text-orange-400 px-4'>
        <span className='text-3xl font-bold'>${price}</span>
      </div>

      {show && (
        <div className='rounded-2xl flex justify-center items-center absolute inset-0 bg-black bg-opacity-50 h-full w-full animate-fade animate-duration-300'>
          <div className='z-50'>
            <AddButton />
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
