import Image from "next/image"
import Link from "next/link"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import NavLink from "./NavLInk"

export default function Header() {
  return (
    <>
      <section className='bg-black text-white text-center py-4 '>
        <p className='uppercase text-xs font-bold italic'>
          free shipping on u.s orders over $100{" "}
        </p>
      </section>
      <header className='flex justify-between items-center sticky px-10 top-0 bg-[#f2f2f3] z-50 py-5'>
        <Image src='/../public/logo.jpg' width={50} height={50} alt='logo' />
        <nav className='h-full'>
          <ul className='flex h-full items-center gap-8'>
            <NavLink href='/shop' text='Shop' />
            <NavLink href='/shop/arrivals' text='New Arrival' />
            <NavLink href='/shop/collections' text='Collections' />
          </ul>
        </nav>
        <div className='flex gap-4 items-center'>
          <AiOutlineSearch className='text-2xl' />
          <AiOutlineShoppingCart className='text-2xl' />
          <CgProfile className='text-2xl' />
        </div>
      </header>
    </>
  )
}
