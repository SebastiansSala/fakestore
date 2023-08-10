import Image from "next/image"

export default function Hero() {
  return (
    <section className='grid md:grid-cols-2 gap-2 max-h-[600px] container mx-auto my-10'>
      <div className='h-full relative'>
        <Image
          src='/../public/model4_1.avif'
          alt='model4_1'
          width={800}
          height={800}
          className='h-full object-contain'
          priority
        />
      </div>
      <div className='flex flex-col relative gap-2'>
        <div className='h-4/6 relative bg-[#d4d3cf]'>
          <Image
            src='/../public/model2.avif'
            alt='model2'
            width={800}
            height={800}
            className='h-full object-contain'
          />
        </div>
        <div className='grid grid-cols-2 gap-2 flex-1'>
          <Image
            src='/../public/model3.avif'
            alt='model3'
            width={800}
            height={800}
            className='h-full object-contain'
          />
          <Image
            src='/../public/model1.avif'
            alt='model1'
            width={800}
            height={800}
            className='h-full object-contain'
          />
        </div>
      </div>
    </section>
  )
}
