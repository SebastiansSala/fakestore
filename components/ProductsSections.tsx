"use client"

import { useState, useEffect } from "react"
import Filter from "./Filter"
import { Category, Product } from "@/lib/types"
import Card from "./Card"
import Pagination from "./Pagination"
import usePagination from "@/hooks/usePagination"
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

  const productsPerPage = 3

  const {
    paginatedItems,
    currentPage,
    totalPages,
    setCurrentPage,
    handlePrevPage,
    handleNextPage,
  } = usePagination({ itemsPerPage: productsPerPage, items: filteredProducts })

  useEffect(() => {
    setCurrentPage(1)
  }, [filterActivated, setCurrentPage])

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

      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 gap-x-2 gap-y-14'>
        {paginatedItems.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </section>
  )
}

export default ProductsSection
