import ProductsSection from "@/components/ProductsSection"
import sortProducts from "@/utils/sortProducts"
import { getProducts } from "@/lib/services"

const ShopPage = async () => {
  const products = await getProducts()
  const sortedProducts = sortProducts(products)

  return (
    <main className='container mx-auto min-h-screen'>
      <ProductsSection products={sortedProducts} />
    </main>
  )
}

export default ShopPage
