import Card from '@/components/Card';
import CardWithTag from '@/components/CartWithTag';
import Hero from '@/components/Hero';
import { getCategories, getImages, getProducts } from '@/lib/services';

export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type Category =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";

export default async function Home() {
  const categories = (await getCategories()) as Category[];
  const products = (await getProducts()) as Products[];
  const images = await getImages(4);

  return (
    <main className='container mx-auto min-h-screen items-center justify-center flex-wrap gap-8 pb-20 pt-10 px-4'>
      <Hero />
      <section className='mt-10'>
        <h2>Currated Picks</h2>
        <div className='grid grid-cols-4 gap-8 h-56 relative'>
          {categories.map((category, index) => (
            <CardWithTag
              key={category}
              category={category}
              image={images[index]}
            />
          ))}
        </div>
      </section>
      <section className='mt-10'>
        <h2>Featured Products</h2>
        <div className='grid grid-cols-3 gap-8'>
          {products.slice(0, 3).map((product, index) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
