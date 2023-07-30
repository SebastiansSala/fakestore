import Image from "next/image"
import Link from "next/link"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import NavLink from "./NavLInk"

export default function Header() {
  return (
    <header className='flex justify-between items-center sticky px-10 top-0 shadow-lg bg-[#f2f2f3] z-50'>
      <Image src='/../public/logo.jpg' width={50} height={50} alt='logo' />
      <nav className='h-full'>
        <ul className='flex h-full items-center gap-8'>
          <li className='w-full'>
            <NavLink href='/shop' text='Shop' />
          </li>
          <li>
            <NavLink href='/shop/arrivals' text='New Arrival' />
          </li>
          <li>
            <NavLink href='/shop/collections' text='Collections' />
          </li>
        </ul>
      </nav>
      <div className='flex gap-4 items-center'>
        <AiOutlineSearch className='text-2xl' />
        <AiOutlineShoppingCart className='text-2xl' />
        <CgProfile className='text-2xl' />
      </div>
    </header>
  )
}
