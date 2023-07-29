import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import NavLink from './NavLInk';

export default function Header() {
  return (
    <header className='flex justify-between items-center sticky top-0 shadow-lg bg-white z-50'>
      <Image src={''} width={100} height={100} alt='logo' />
      <nav>
        <ul className='flex'>
          <li>
            <Link href='/shop'>Shop</Link>
          </li>
          <NavLink href='/shop/arrivals' text='New Arrival' />
          <NavLink href='/shop/collections' text='Collections' />
        </ul>
      </nav>
      <form>
        <input></input>
      </form>
      <AiOutlineShoppingCart className='text-5xl' />
      <CgProfile className='text-5xl' />
    </header>
  );
}
