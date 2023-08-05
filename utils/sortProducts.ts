import { Product } from "@/lib/types"

const sortProducts = (filteredProducts: Product[]) =>
  filteredProducts.toSorted(() => 0.5 - Math.random())

export default sortProducts
