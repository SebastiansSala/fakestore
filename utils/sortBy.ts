import { Product } from "@/lib/types"

type SortingFunction = (a: Product, b: Product) => number

const SortObject: Record<string, SortingFunction> = {
  "1": (a, b) => a.title.localeCompare(b.title),
  "2": (a, b) => b.title.localeCompare(a.title),
  "3": (a, b) => a.price - b.price,
  "4": (a, b) => b.price - a.price,
}

const sortBy = (
  products: Product[],
  sortKey: Record<string, string[]>
): Product[] => {
  const sortByValue = sortKey["sortBy"]?.[0]
  if (sortByValue && SortObject[sortByValue]) {
    const sortingFunction = SortObject[sortByValue]
    const sortedProducts = products.sort(sortingFunction)
    return sortedProducts
  }

  return products
}

export default sortBy
