import Image from "next/image"
import { BsSend } from "react-icons/bs"

export default function Footer() {
  const FooterTag = ({ text }: { text: string }) => {
    return <h5>{text}</h5>
  }

  const FooterTag2 = ({ text }: { text: string }) => {
    return <li className='text-[#909090] text-sm'>{text}</li>
  }

  return (
    <footer className='bg-[#161616] text-white py-16'>
      <section className='flex justify-center container mx-auto h-auto'>
        <div className='w-2/5 min-h-full flex flex-col justify-between'>
          <Image
            src='/../public/logo.jpg'
            width={50}
            height={50}
            alt='logo'
            className='bg-transparent'
          />
          <p className='uppercase'>
            Real designs by real artists for real people
          </p>
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='space-y-2'>
            <FooterTag text='PRODUCT' />
            <ul className='space-y-1'>
              <FooterTag2 text='Jackets' />
              <FooterTag2 text='Shirts' />
              <FooterTag2 text='Dresses' />
              <FooterTag2 text='Outwear' />
              <FooterTag2 text='Bottoms' />
            </ul>
          </div>
          <div className='space-y-2'>
            <FooterTag text='BUYING' />
            <ul className='space-y-1'>
              <FooterTag2 text='Shop' />
              <FooterTag2 text='Terms of Use' />
              <FooterTag2 text='Privacy' />
              <FooterTag2 text='How it works' />
              <FooterTag2 text='Customer Service' />
            </ul>
          </div>
          <div className='space-y-2'>
            <FooterTag text='SOCIAL' />
            <ul className='space-y-1'>
              <FooterTag2 text='Linkedin' />
              <FooterTag2 text='Github' />
            </ul>
          </div>
          <div>
            <FooterTag text='JOIN OUR COMMUNITY' />
            <form className='mt-4'>
              <div className='relative flex flex-between items-center'>
                <input
                  className='rounded-full w-full border border-[#474747] p-3 outline-none bg-black'
                  type='text'
                  placeholder='EMAIL ADDRESS'
                />
                <button
                  className='absolute right-0 rounded-full bg-[#de6737] mr-3 p-2 text-lg text-black'
                  type='button'
                >
                  <BsSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </footer>
  )
}
