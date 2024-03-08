import React from 'react'
import LogoSvgIcon from '../common/svg/LogoSvgIcon'
import Style from './Header.module.scss'
import Link from 'next/link'
import TopNav from './SubComponents/TopNav/TopNav'
import CartModal from './SubComponents/CartModal/CartModal'
import NavLinks from '../NavLinks/NavLinks'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'

export default async function Header() {
  const navigation = await getCategoriesNavigation()
  const categories = await getCategoriesNavigation({
    isCategory: true,
  })
  return (
    <header className={Style['header']}>
      <div className={`${Style['wrapper']} wrapper`}>
        <TopNav categories={categories} />
        <Link href='/' className={Style['header__brand']}>
          <LogoSvgIcon aria-hidden />
        </Link>
        <div className={Style['header__navigation']}>
          <NavLinks navigation={navigation} />
        </div>
        <CartModal />
      </div>
    </header>
  )
}
