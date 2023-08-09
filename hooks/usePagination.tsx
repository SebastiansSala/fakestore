"use client"

import { useState, useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
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

/**
 * Custom hook for pagination.
 *
 * @param itemsPerPage - Number of items to display per page.
 * @param items - Array of items to paginate.
 * @returns PaginationResult - Object containing paginated items, current page, total pages, setCurrentPage function, handlePrevPage function, and handleNextPage function.
 */

const usePagination = ({
  itemsPerPage,
  items,
}: UsePaginationProps): PaginationResult => {
  // Get the current pathname from the router
  const pathname = usePathname()
  // Get the router instance
  const router = useRouter()
  // Get the search parameters from the URL
  const searchParams = useSearchParams()
  // Get the sort by value from the search parameters
  const sortBy = searchParams.get("sortBy")
  // Initialize the current page state
  const [currentPage, setCurrentPage] = useState(1)
  // Calculate the total number of items
  const totalItems = items?.length
  // Calculate the total number of pages
  const totalPages = useMemo(
    () => Math.ceil(totalItems || 0 / itemsPerPage),
    [totalItems, itemsPerPage]
  )
  /**
   * Handle the previous page navigation.
   * If the current page is the first page, return early.
   * Otherwise, update the URL and the current page state.
   */

  const handlePrevPage = () => {
    if (currentPage === 1) return

    const prevPage = currentPage - 1
    const queryParams = `page=${prevPage}${sortBy ? "&sortBy=" + sortBy : ""}`

    router.push(`${pathname}?${queryParams}`)
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  /**
   * Handle the next page navigation.
   * If the current page is the last page, return early.
   * Otherwise, update the URL and the current page state.
   */

  const handleNextPage = () => {
    if (currentPage === totalPages) return
    const nextPage = currentPage + 1
    const queryParams = `page=${nextPage}${sortBy ? "&sortBy=" + sortBy : ""}`
    router.push(`${pathname}?${queryParams}`)
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  /**
   * Calculate the paginated items based on the current page and items per page.
   * Return an empty array if there are no items.
   */
  const paginatedItems = useMemo(() => {
    if (!items) {
      return []
    }
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
