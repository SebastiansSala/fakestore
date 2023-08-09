import type { MenuProps } from "antd"

export const filtersSortBy: MenuProps["items"] = [
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
