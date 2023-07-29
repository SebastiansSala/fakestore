"use client"

import { useEffect, useState } from "react"
import Filter from "./Filter"
import { Category, Products } from "@/app/page"
import Card from "./Card"

type ProductsSectionProps = {
  products: Products[]
  categories: Category[]
}
const ProductsSection = ({ products, categories }: ProductsSectionProps) => {
  const [filterActivated, setFilterActivated] = useState("All")
  const [allProducts, setAllProducts] = useState(products)

  useEffect(() => {
    if (filterActivated === "All") {
      return setAllProducts(products)
    }
    const filteredProducts = products.filter((product) => {
      return product.category === filterActivated
    })
    setAllProducts(filteredProducts)
  }, [filterActivated, products])

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

      <div className='grid grid-cols-4 gap-x-2 gap-y-14'>
        {allProducts.slice(0, 8).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsSection
