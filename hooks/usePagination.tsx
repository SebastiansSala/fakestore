"use client"

import { useState, useMemo, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Product } from "@/lib/types"

type UsePaginationProps = {
  itemsPerPage: number
  items: Product[] | undefined
}

type PaginationResult = {
  paginatedItems: Product[]
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
  handlePrevPage: () => void
  handleNextPage: () => void
}

const usePagination = ({
  itemsPerPage,
  items,
}: UsePaginationProps): PaginationResult => {
  const pathname = usePathname()
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const paginatedItems = useMemo(() => {
    if (!items) {
      return []
    }
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }, [currentPage, items, itemsPerPage])

  useEffect(() => {
    router.push(`${pathname}?page=${currentPage}`)
  }, [currentPage, pathname, router])

  if (!items) {
    return {
      paginatedItems: [],
      currentPage,
      totalPages: 0,
      setCurrentPage,
      handlePrevPage,
      handleNextPage,
    }
  }

  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return {
    paginatedItems,
    currentPage,
    totalPages,
    setCurrentPage,
    handlePrevPage,
    handleNextPage,
  }
}

export default usePagination
