import { CartProduct } from "@/lib/types"
import Image from "next/image"
import CartButton from "./CartButton"
import useCart from "@/hooks/useCart"
import { IoRemove, IoAdd, IoTrashOutline } from "react-icons/io5"

type CartProductProps = {
  product: CartProduct
}
const CartProduct = ({ product }: CartProductProps) => {
  const { title, price, description, image, quantity } = product
  const { addToCart, decreaseProductQuantity, removeFromCart } = useCart()

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
          <span className='flex-1 text-xl '>
            <IoTrashOutline
              className='cursor-pointer hover:text-slate-500 text-slate-400'
              onClick={() => removeFromCart(product)}
            />
          </span>
        </div>
        <div className='flex flex-1 justify-between items-center'>
          <p className='text-xl font-bold'>{price}</p>
          <div className='flex gap-x-2 items-center'>
            <CartButton
              onClick={() => decreaseProductQuantity(product)}
              disabled={false}
            >
              <IoRemove />
            </CartButton>
            <span className='text-xl min-w-[30px] text-center'>{quantity}</span>
            <CartButton onClick={() => addToCart(product)} disabled={false}>
              <IoAdd />
            </CartButton>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartProduct
