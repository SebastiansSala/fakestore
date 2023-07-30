import { CartProduct } from "@/lib/types"
import Image from "next/image"
import CartButton from "./CartButton"
import useCart from "@/hooks/useCart"

type CartProductProps = {
  product: CartProduct
}
const CartProduct = ({ product }: CartProductProps) => {
  const { title, price, description, image, quantity } = product

  const { addToCart } = useCart()

  return (
    <div className='flex gap-8'>
      <div className='flex flex-1'>
        <Image
          src={image}
          width={800}
          height={800}
          className='w-full h-auto object-contain object-center mx-auto'
          alt={title}
        />
      </div>
      <div className='w-4/6 space-y-4'>
        <div className='flex'>
          <div className='w-5/6 '>
            <p className='line-clamp-1'>{title}</p>
            <p className='line-clamp-3'>{description}</p>
          </div>
          <div className='flex flex-1 justify-between items-center'>
            <p>{price}</p>
            <div className='flex gap-4'>
              <CartButton onClick={() => addToCart(product)} disabled={false}>
                Add
              </CartButton>
              <span>{quantity}</span>
              <CartButton onClick={() => addToCart(product)} disabled={false}>
                Add
              </CartButton>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default CartProduct
