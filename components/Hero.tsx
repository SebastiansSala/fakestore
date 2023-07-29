'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { heroImages } from '@/data';

export default function Hero() {
  const images = heroImages;
  return (
    <Swiper
      spaceBetween={50}
      pagination={true}
      modules={[Pagination]}
      className='h-96 relative w-full z-10'
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className='absolute inset-0 w-full h-full'>
          <Image
            src={image}
            alt={`Slide ${index}`}
            width={8000}
            priority
            height={8000}
            className='object-cover h-auto w-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
