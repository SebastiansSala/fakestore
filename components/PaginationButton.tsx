type PaginationButtonProps = {
  text: string
  onClick: () => void
  disabled: boolean
}
const PaginationButton = ({
  text,
  onClick,
  disabled = false,
}: PaginationButtonProps) => {
  return (
    <li>
      <span
        onClick={onClick}
        className={`flex items-center justify-center px-4 h-10 leading-tight text-white bg-[#de6737] border ${
          disabled
            ? "border-orange-500"
            : "border-[#de6737] dark:border-orange-500 hover:bg-gray-100 hover:text-orange-500 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-500 dark:hover:text-white"
        }`}
      >
        {text}
      </span>
    </li>
  )
}

export default PaginationButton
