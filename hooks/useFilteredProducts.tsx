"use client"

import { useMemo } from "react"
import { Product } from "@/lib/types"

type UseFilteredProductsProps = {
  filterActivated: string
  products: Product[]
}

const useFilteredProducts = ({
  filterActivated,
  products,
}: UseFilteredProductsProps) => {
  const filteredProducts = useMemo(() => {
    if (filterActivated === "All") {
      return products
    }
    return products.filter((product) => product.category === filterActivated)
  }, [filterActivated, products])

  return filteredProducts
}

export default useFilteredProducts
