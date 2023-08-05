"use client"

import { useEffect } from "react"
import usePagination from "@/hooks/usePagination"
import Pagination from "./Pagination"
import Card from "./Card"
import { Product } from "@/lib/types"
import SortBy from "./filters/SortBy"

type ProductsSectionProps = {
  products: Product[]
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  const productsPerPage = 9

  const {
    paginatedItems,
    currentPage,
    totalPages,
    setCurrentPage,
    handlePrevPage,
    handleNextPage,
  } = usePagination({ itemsPerPage: productsPerPage, items: products })

  useEffect(() => {
    setCurrentPage(1)
  }, [setCurrentPage])

  return (
    <section>
      <SortBy />
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {paginatedItems?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </section>
  )
}

export default ProductsSection
