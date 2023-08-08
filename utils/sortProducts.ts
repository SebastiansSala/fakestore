import { Product } from "@/lib/types"

const sortProducts = (filteredProducts: Product[]): Product[] =>
  filteredProducts.toSorted(() => 0.5 - Math.random())

export default sortProducts
