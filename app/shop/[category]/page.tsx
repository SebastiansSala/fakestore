import React from "react"

type Props = {
  params: {
    category: string
  }
}
const page = ({ params }: Props) => {
  return <div>{params.category}</div>
}

export default page
