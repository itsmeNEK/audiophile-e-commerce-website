import Link from 'next/link'
import { NavigationType } from '@/types/categoriesType'
import Style from './NavLinks.module.scss'

interface NavLinksProps {
  navigation: NavigationType[]
  className?: string
}

function NavLinks({ navigation, className }: NavLinksProps) {
  return (
    <ul className={`${Style['navigation__links']} ${className}`}>
      {navigation?.map((item, index) => (
        <Link key={index} href={item.link}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  )
}

export default NavLinks
