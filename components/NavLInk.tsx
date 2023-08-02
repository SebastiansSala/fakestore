import Link from "next/link"

type NavLinkProps = {
  text: string
  href: string
}
const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <li>
      <Link href={href} className='hidden xl:block uppercase'>
        {text}
      </Link>
    </li>
  )
}

export default NavLink
