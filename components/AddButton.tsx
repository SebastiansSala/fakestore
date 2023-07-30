import { AiOutlineShoppingCart } from "react-icons/ai"

type AddButtonProps = {
  onClick: () => void
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button
      className='rounded-full px-4 py-2 bg-white font-bold uppercase text-base'
      onClick={onClick}
    >
      ADD TO CART
    </button>
  )
}

export default AddButton
