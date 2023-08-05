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
        className={`flex items-center justify-center  px-4 h-10 leading-tight text-gray-500 bg-white border ${
          disabled
            ? "border-gray-300"
            : "border-gray-700 dark:border-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }`}
      >
        {text}
      </span>
    </li>
  )
}

export default PaginationButton
