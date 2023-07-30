"use client"

import { useState, useMemo, useEffect } from "react"

type UsePaginationProps = {
  itemsPerPage: number
  items: any[]
}

type PaginationResult = {
  paginatedItems: any[]
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
  const [currentPage, setCurrentPage] = useState(1)

  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }, [currentPage, items, itemsPerPage])

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
