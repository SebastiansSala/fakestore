import Image from "next/image"
import { AiOutlineSearch } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import NavLink from "./NavLInk"
import CartDrawer from "./CartDrawer"

export default function Header() {
  return (
    <>
      <section className='bg-black text-white text-center py-2'>
        <p className='uppercase text-xs font-bold italic'>
          free shipping on u.s orders over $100{" "}
        </p>
      </section>
      <header className='flex justify-between items-center sticky px-10 top-0 bg-[#f2f2f3] z-50 py-2'>
        <Image src='/../public/logo.jpg' width={50} height={50} alt='logo' />
        <nav className='h-full'>
          <ul className='flex h-full items-center gap-8'>
            <NavLink href='/shop?page1' text='COLLECTIONS' />
            <NavLink href='/shop/arrivals' text='Electronics' />
            <NavLink href='/shop/jewerly' text='Jewerly' />
            <NavLink href='/shop/men' text="Mens's clothing" />
            <NavLink href='/shop/women' text="women's clothing" />
          </ul>
        </nav>
        <div className='flex gap-4 items-center'>
          <AiOutlineSearch className='text-2xl' />
          <CartDrawer />
          <CgProfile className='text-2xl' />
        </div>
      </header>
    </>
  )
}
