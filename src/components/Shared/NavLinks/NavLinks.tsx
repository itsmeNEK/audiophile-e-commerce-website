import Link from 'next/link'
import { NavigationType } from '@/types/categoriesType'
import Style from './NavLinks.module.scss'

interface NavLinksProps {
  navigation: NavigationType[]
}

function NavLinks({ navigation }: NavLinksProps) {
  return (
    <ul className={`${Style['navigation__links']}`}>
      {navigation?.map((item, index) => (
        <Link key={index} href={item.link}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  )
}

export default NavLinks
