import React from 'react';
import AddButton from './AddButton';
import { Products } from '@/app/page';
import Image from 'next/image';

type CardProps = {
  product: Products;
};

const Card = ({ product }: CardProps) => {
  return (
    <div className='relative shadow-sm hover:shadow-xl transition'>
      <Image
        src={product.image}
        alt={product.title}
        width={800}
        height={800}
        className='object-contain h-72 object-center'
      />
      <div className='flex items-center justify-between py-4 px-2 w-full'>
        <div className='text-gray-800'>
          <p className='text-sm '>{product.title}</p>
          <span className='text-xl  font-bold'>${product.price}</span>
        </div>
        <AddButton />
      </div>
    </div>
  );
};

export default Card;
