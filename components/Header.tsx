import Image from "next/image"
import { CgProfile } from "react-icons/cg"
import NavLink from "./NavLInk"
import CartDrawer from "./CartDrawer"
import Link from "next/link"
import Search from "./Search"

export default function Header() {
  return (
    <>
      <section className='bg-black text-white text-center py-2'>
        <p className='uppercase text-xs font-bold italic'>
          free shipping on u.s orders over $100{" "}
        </p>
      </section>
      <header className='flex justify-between items-center sticky px-10 top-0 bg-[#f2f2f3] z-50 py-2'>
        <Link href='/'>
          <Image
            src='/../public/newLogo.jpg'
            width={100}
            height={100}
            alt='logo'
          />
        </Link>
        <nav className='h-full'>
          <ul className='flex h-full items-center gap-8'>
            <NavLink href='/shop?page1' text='COLLECTIONS' />
            <NavLink href='/shop/electronics' text='Electronics' />
            <NavLink href='/shop/jewelery' text='Jewerly' />
            <NavLink href="/shop/men's clothing" text="Mens's clothing" />
            <NavLink href="/shop/women's clothing" text="women's clothing" />
          </ul>
        </nav>
        <div className='flex gap-4 items-center'>
          <Search />
          <CartDrawer />
          <CgProfile className='text-2xl' />
        </div>
      </header>
    </>
  )
}
