import FilterButton from "./FilterButton"
import { Category } from "@/lib/types"

type FilterProps = {
  categories: Category[]
  filterActivated: string
  setFilterActivated: (text: string) => void
}
const Filter = ({
  categories,
  filterActivated,
  setFilterActivated,
}: FilterProps) => {
  return (
    <div className='flex items-center gap-4 pb-16'>
      <FilterButton
        text='All'
        filterActivated={filterActivated}
        setFilterActivated={setFilterActivated}
      />
      {categories.map((category, index) => (
        <FilterButton
          key={index}
          text={category}
          filterActivated={filterActivated}
          setFilterActivated={setFilterActivated}
        />
      ))}
    </div>
  )
}

export default Filter
