import { getCategories, getProducts } from "@/lib/services"
import Hero from "@/components/Hero"
import ProductsSection from "@/components/ProductsSections"
import { Category, Product } from "@/lib/types"

export default async function Home() {
  const categories = (await getCategories()) as Category[]
  const products = (await getProducts()) as Product[]

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
      <section className='flex h-[500px] gap-2 my-28'>
        <div className='w-7/12 h-full  bg-[#de6737] rounded-3xl flex flex-col'>
          <div className='h-4/6'>
            <h3 className='text-5xl uppercase p-4 w-4/6'>
              We're changing the way you shop the way things get made
            </h3>
          </div>
          <div className='h-[1px] bg-black' />
          <div className='grid grid-cols-2 flex-1 justify-center place-items-center items-center'>
            <div className='w-4/6'>
              <h6 className='font-bold text-2xl'>MISSION</h6>
              <p className='font-semibold'>
                We're on a mission to empower creative independencies in a
                commercial world and incredible
              </p>
            </div>
            <div className='w-4/6'>
              <h6 className='font-bold text-2xl'>MISSION</h6>
              <p className='font-semibold line-clamp-3'>
                We're challenging conventional retail, putting an end to dead
                stock, unconventional waste and more funtastic
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-gray-400 rounded-3xl'></div>
      </section>
      <section>
        <h2 className='uppercase font-bold text-6xl'>
          Want to design your own? calm, we can do it!
        </h2>
        <video></video>
      </section>
    </main>
  )
}
