import { DownOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Dropdown, Space, Typography } from "antd"
import { useState } from "react"

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
  const [activeFilter, setActiveFilter] = useState("Alphabetical: A-Z")

  const handleSelectItem = (key: string) => {
    const label = items.find((item) => item!.key === key)?.label
    setActiveFilter(label)
  }

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        activeKey: activeFilter,
        defaultSelectedKeys: ["1"],
        onSelect: ({ key }) => handleSelectItem(key),
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
