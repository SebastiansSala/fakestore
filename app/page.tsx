import { getCategories, getProducts } from "@/lib/services"
import Hero from "@/components/Hero"
import ProductsSection from "@/components/ProductsSections"
import Video from "@/components/Video"
import sortProducts from "@/utils/sortProducts"

export default async function Home() {
  const categories = await getCategories()
  const products = await getProducts()
  const sortedProducts = sortProducts(products)

  return (
    <main className='container mx-auto min-h-screen items-center justify-center flex-wrap gap-8 px-4'>
      <Hero />
      <section className='py-28'>
        <h2 className='text-5xl font-extrabold'>
          SOPA makes clothest to elevate everyday life through lighthreated
          escapism. While styles vary by season, all collections are guide by
          the inefflable sense of freedom that comes with travel.
        </h2>
      </section>
      <ProductsSection categories={categories} products={sortedProducts} />
      <section className='flex flex-col md:flex-row h-[500px] gap-2 my-28'>
        <div className='md:w-7/12 h-3/5 md:h-full bg-[#de6737] rounded-3xl flex flex-col'>
          <div className='h-4/6'>
            <h3 className='md:text-3xl text-xl sm:text-3xl lg:text-5xl xl:text-6xl uppercase p-10 font-black'>
              We're changing the way you shop the way things get made
            </h3>
          </div>
          <div className='h-[1px] bg-black' />
          <div className='grid grid-cols-2 flex-1 justify-center place-items-center items-center'>
            <div className='w-4/6'>
              <h6 className='font-bold text-xl md:text-xl xl:text-xl uppercase'>
                MISSION
              </h6>
              <p className='font-semibold line-clamp-3 text-sm md:text-base'>
                We're on a mission to empower creative independencies in a
                commercial world and incredible
              </p>
            </div>
            <div className='w-full sm:w-4/6'>
              <h6 className='font-bold text-xl md:text-xl xl:text-xl uppercase'>
                SUSTAINABILITY
              </h6>
              <p className='font-semibold line-clamp-3 text-sm md:text-base'>
                We're challenging conventional retail, putting an end to dead
                stock, unconventional waste and more funtastic
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-gray-400 rounded-3xl'></div>
      </section>
      <section className='mb-10'>
        <h2 className='uppercase font-black xl:text-6xl lg:text-4xl md:text-[1.7rem] text-center'>
          Want to design your own? calm, we can do it!
        </h2>
        <Video />
      </section>
    </main>
  )
}
