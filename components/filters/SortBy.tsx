"use client"

import { DownOutlined } from "@ant-design/icons"
import { Dropdown, Space, Typography } from "antd"
import { filtersSortBy } from "@/consts/filter"
import { useSortBy } from "@/hooks/useSortBy"

const SortBy = () => {
  const { activeFilter, createQueryString } = useSortBy(
    "Alphabetical: A-Z",
    filtersSortBy
  )

  return (
    <div className='my-10'>
      <Dropdown
        menu={{
          items: filtersSortBy,
          selectable: true,
          activeKey: activeFilter,
          defaultSelectedKeys: [activeFilter],
          onSelect: ({ key }) => createQueryString(key),
        }}
      >
        <Typography.Link>
          <Space className='text-xl'>
            Sort By {activeFilter}
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
    </div>
  )
}

export default SortBy
