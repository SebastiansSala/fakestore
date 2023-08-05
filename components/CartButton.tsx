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
    <button
      onClick={onClick}
      disabled={disabled}
      className='p-1 bg-slate-300 hover:bg-slate-400 transition'
    >
      {children}
    </button>
  )
}

export default CartButton
