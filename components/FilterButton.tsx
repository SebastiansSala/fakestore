import React from "react"

type FilterButtonProps = {
  text: string
  filterActivated: string
  setFilterActivated: (text: string) => void
}
const FilterButton = ({
  text,
  filterActivated,
  setFilterActivated,
}: FilterButtonProps) => {
  const handleClick = () => {
    setFilterActivated(text)
  }

  return (
    <button
      className={`px-4 py-2 whitespace-nowrap rounded-full font-black text-2xl uppercase ${
        text === filterActivated
          ? "text-white bg-black"
          : "bg-white text-black border-2 border-black"
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default FilterButton
