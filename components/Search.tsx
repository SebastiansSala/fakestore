"use client"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Card,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react"
import { useMemo, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { useQuery } from "react-query"
import { getProducts } from "@/lib/services"
import { Product } from "@/lib/types"

const Search = () => {
  const { data: products } = useQuery<Product[]>("products", getProducts)
  const [search, setSearch] = useState("")

  const productsFounded = useMemo(() => {
    if (search.length === 0) return
    return products?.filter((product) => {
      const newSearch = search.trim().replace(/\s\s+/g, " ")
      return product.title.toLowerCase().includes(newSearch.toLowerCase())
    })
  }, [search, products])

  return (
    <Popover placement='left' backdrop='blur'>
      <PopoverTrigger>
        <Button className='text-2xl cursor-pointer'>
          <AiOutlineSearch />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <input
          type='text'
          placeholder='Search'
          className='px-2 py-3 w-full outline-none'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {productsFounded && (
          <ul className='max-h-96 overflow-y-auto space-y-6 px-6 py-4'>
            {productsFounded.map(({ id, title, image, description, price }) => (
              <li key={id}>
                <Card
                  isBlurred
                  className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
                  shadow='sm'
                >
                  <CardBody>
                    <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-8 items-center justify-center max-w-lg'>
                      <div className='relative col-span-6 md:col-span-4'>
                        <Image
                          alt={title}
                          className='object-cover'
                          height={200}
                          shadow='md'
                          src={image}
                          width='100%'
                        />
                      </div>
                      <div className='col-span-8'>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <h4>${price}</h4>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default Search
