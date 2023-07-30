import React from "react"

type CartButtonProps = {
  onClick: () => void
  disabled: boolean
  children: React.ReactNode
}

const CartButton: React.FC<CartButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className='p-2'>
      {children}
    </button>
  )
}

export default CartButton
