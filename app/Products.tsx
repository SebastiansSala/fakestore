'use client';

import { useState } from 'react';
import { Products } from './page';
import Pagination from '@/components/Pagination';
import Image from 'next/image';

type ProductsProps = {
  products: Products[];
};

export default function ProductsSection({ products }: ProductsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(products.length / 10);
  const pagesMapped = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  const prevPage = currentPage - 1;

  const paginatedProducts = products.slice(
    currentPage * 10 - 10,
    currentPage * 10
  );

  return (
    <div className='container mx-auto mt-20'>
      <section className='grid grid-cols-4 gap-8'>
        {paginatedProducts.map((product) => (
          <div
            className='px-6 py-3 text-black bg-white shadow-lg hover:shadow-xl max-w-sm max-h-96 truncate'
            key={product.id}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p className='truncate'>{product.description}</p>
            <p className='text-ellipsis'>{product.category}</p>
            <p className='text-ellipsis'>{product.id}</p>
          </div>
        ))}
      </section>
      <Pagination
        pagesMapped={pagesMapped}
        currentPage={currentPage}
        prevPage={prevPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
