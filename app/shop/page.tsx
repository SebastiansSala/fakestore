import ProductsSection from "@/components/ProductsSection"
import sortBy from "@/utils/sortBy"
import { getProducts } from "@/lib/services"

type Props = {
  searchParams: Record<string, string[]>
}

const ShopPage = async ({ searchParams }: Props) => {
  const products = await getProducts()

  const sortedProducts = sortBy(products, searchParams)

  return (
    <main className='container mx-auto min-h-screen'>
      <ProductsSection products={sortedProducts} />
    </main>
  )
}

export default ShopPage
