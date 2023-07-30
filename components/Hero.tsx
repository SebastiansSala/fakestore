import Image from "next/image"
import { heroImages } from "@/data"

export default function Hero() {
  const images = heroImages
  return (
    <section className='grid md:grid-cols-2 mt-10 gap-2 h-[600px]'>
      <div className='h-full relative'>
        <Image
          src={images[0]}
          alt=''
          width={800}
          height={800}
          className='h-full object-cover'
          priority
        />
      </div>
      <div className='flex flex-col relative gap-2'>
        <div className='h-4/6 relative bg-[#d4d3cf]'>
          <h1 className='font-bold uppercase'>
            REAL DESIGNS BY REAL ARTISTS FOR REAL PEOPLE
          </h1>
        </div>
        <div className='grid grid-cols-2 gap-2 flex-1'>
          <Image
            src={images[0]}
            alt=''
            width={800}
            height={800}
            className='h-full object-cover'
          />
          <Image
            src={images[0]}
            alt=''
            width={800}
            height={800}
            className='h-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}
