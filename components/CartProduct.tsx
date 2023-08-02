import { CartProduct } from "@/lib/types"
import Image from "next/image"
import CartButton from "./CartButton"
import useCart from "@/hooks/useCart"

type CartProductProps = {
  product: CartProduct
}
const CartProduct = ({ product }: CartProductProps) => {
  const { title, price, description, image, quantity } = product

  const { addToCart, decreaseProductQuantity } = useCart()

  return (
    <li className='flex gap-8'>
      <div className='flex flex-1'>
        <Image
          src={image}
          width={800}
          height={800}
          className='w-full max-h-24 object-contain object-center mx-auto'
          alt={title}
        />
      </div>
      <div className='w-4/6 space-y-4'>
        <div className='flex'>
          <div className='w-5/6 '>
            <p className='line-clamp-1'>{title}</p>
            <p className='line-clamp-3'>{description}</p>
          </div>
        </div>
        <div className='flex flex-1 justify-between items-center'>
          <p className='text-xl font-bold'>{price}</p>
          <div className='flex gap-4 items-center'>
            <CartButton
              onClick={() => decreaseProductQuantity(product)}
              disabled={false}
            >
              Remove
            </CartButton>
            <span>{quantity}</span>
            <CartButton onClick={() => addToCart(product)} disabled={false}>
              Add
            </CartButton>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartProduct
