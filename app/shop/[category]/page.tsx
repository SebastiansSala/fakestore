import ProductsSection from "@/components/ProductsSection"
import sortBy from "@/utils/sortBy"
import { getProductsByCategory } from "@/lib/services"

type Props = {
  searchParams: Record<string, string[]>
  params: {
    category: string
  }
}

const CategoryPage = async ({ searchParams, params }: Props) => {
  const products = await getProductsByCategory(params.category)

  const sortedProducts = sortBy(products, searchParams)

  return (
    <main className='container mx-auto'>
      <ProductsSection products={sortedProducts} />
    </main>
  )
}

export default CategoryPage
