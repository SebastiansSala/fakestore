import { getCategories, getProducts } from "@/lib/services"
import Hero from "@/components/Hero"
import ProductsSection from "@/components/ProductsSections"

export type Products = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"

export default async function Home() {
  const categories = (await getCategories()) as Category[]
  const products = (await getProducts()) as Products[]

  return (
    <main className='container mx-auto min-h-screen items-center justify-center flex-wrap gap-8 pb-20 pt-10 px-4'>
      <Hero />
      <section className='py-28'>
        <h2 className='text-5xl font-extrabold'>
          SOPA makes clothest to elevate everyday life through lighthreated
          escapism. While styles vary by season, all collections are guide by
          the inefflable sense of freedom that comes with travel.
        </h2>
      </section>
      <ProductsSection categories={categories} products={products} />
    </main>
  )
}
