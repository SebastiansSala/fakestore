"use client"

import { useState } from "react"
import Filter from "./Filter"
import { Category, Product } from "@/lib/types"
import Card from "./Card"
import useFilteredProducts from "@/hooks/useFilteredProducts"

type ProductsSectionProps = {
  products: Product[]
  categories: Category[]
}
const ProductsSection = ({ products, categories }: ProductsSectionProps) => {
  const [filterActivated, setFilterActivated] = useState("All")

  const filteredProducts = useFilteredProducts({
    filterActivated,
    products,
  })

  return (
    <section>
      <h2 className='uppercase text-4xl font-extrabold pb-10'>
        SHOP BY ESSENTIALS
      </h2>
      <Filter
        categories={categories}
        filterActivated={filterActivated}
        setFilterActivated={setFilterActivated}
      />

      <ul className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 gap-x-2 gap-y-14'>
        {filteredProducts.slice(0, 6).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default ProductsSection
