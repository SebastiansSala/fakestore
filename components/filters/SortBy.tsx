"use client"
import { useState, useCallback, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { DownOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Dropdown, Space, Typography } from "antd"
import qs from "query-string"

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Alphabetical: A-Z",
  },
  {
    key: "2",
    label: "Alphabetical: Z-A",
  },
  {
    key: "3",
    label: "Price: Low to High",
  },
  {
    key: "4",
    label: "Price: High to Low",
  },
]

const SortBy = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState("Alphabetical: A-Z")

  useEffect(() => {
    const sortByParam = searchParams.get("sortBy")
    const selectedFilter = items.find((item) => item?.key === sortByParam)
    if (selectedFilter) {
      setActiveFilter(selectedFilter.label)
    }
  }, [searchParams])

  const createQueryString = useCallback(
    (key: string) => {
      const selectedFilter = items.find((item) => item?.key === key)
      if (selectedFilter) {
        setActiveFilter(selectedFilter.label)

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
      }
    },
    [pathname, router, searchParams]
  )

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        activeKey: activeFilter,
        defaultSelectedKeys: [activeFilter],
        onSelect: ({ key }) => createQueryString(key),
      }}
      className='py-10'
    >
      <Typography.Link>
        <Space>
          Sort By {activeFilter}
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  )
}

export default SortBy
