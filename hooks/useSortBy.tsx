import { useState, useCallback, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"
import { filtersSortBy } from "@/consts/filter"

export const useSortBy = (
  defaultFilter: string,
  filters: typeof filtersSortBy
) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState(defaultFilter)

  useEffect(() => {
    const sortByParam = searchParams.get("sortBy")
    const selectedFilter = filters?.find((item) => item?.key === sortByParam)
    if (selectedFilter) {
      setActiveFilter(selectedFilter.label)
    }
  }, [searchParams, filters])

  const updateQueryParam = useCallback(
    (key: string) => {
      const currentUrl = qs.parse(searchParams.toString())
      const query = {
        ...currentUrl,
        sortBy: key,
      }

      const url = qs.stringifyUrl({
        url: pathname,
        query,
      })

      router.push(url)
    },
    [pathname, router, searchParams]
  )

  const createQueryString = useCallback(
    (key: string) => {
      const selectedFilter = filters?.find((item) => item.key === key)
      if (selectedFilter) {
        setActiveFilter(selectedFilter.label)
        updateQueryParam(key)
      }
    },
    [updateQueryParam, filters]
  )

  return { activeFilter, createQueryString }
}
