import Image from "next/image"

export default function Footer() {
  const FooterTag = ({ text }: { text: string }) => {
    return <h3>{text}</h3>
  }

  const FooterTag2 = ({ text }: { text: string }) => {
    return <h4>{text}</h4>
  }

  return (
    <footer className='bg-[#161616] text-white'>
      <section className='flex justify-center items-center container mx-auto py-6'>
        <div className='w-1/3'>
          <Image src={""} width={100} height={100} alt='logo' />
          <p>
            Specializers in providing high-quality, stylish products for your
            wardrobe
          </p>
        </div>
        <div className='flex flex-1 justify-between'>
          <div>
            <FooterTag text='PRODUCT' />
            <FooterTag2 text='All Collections' />
            <FooterTag2 text='Winter Edition' />
            <FooterTag2 text='Discount' />
          </div>
          <div>
            <FooterTag text='BUYING' />
            <FooterTag2 text='About Us' />
            <FooterTag2 text='Contact' />
            <FooterTag2 text='Affilliates' />
          </div>
          <div>
            <FooterTag text='SOCIAL' />
            <FooterTag2 text='FAQs' />
            <FooterTag2 text='Cookie Policy' />
            <FooterTag2 text='Terms of Use' />
          </div>
          <div>
            <FooterTag text='JOIN OUR COMMUNITY' />
          </div>
        </div>
      </section>
      <div className='h-1 bg-gray-400' />
      <section className='py-6 text-center'>
        <p>Copyright &copy;2022Nostra. All right reserved.</p>
      </section>
    </footer>
  )
}
