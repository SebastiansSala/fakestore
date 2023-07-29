import { Products } from '@/app/page';

export const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export const getImages = async (take: number) => {
  const products = (await getProducts()) as Products[];
  const images = products.slice(0, take).map((product) => product.image);
  return images;
};
