import React from 'react'
import LogoSvgIcon from '../common/svg/LogoSvgIcon'
import Style from './Header.module.scss'
import Link from 'next/link'
import TopNav from './SubComponents/TopNav/TopNav'
import CartModal from './SubComponents/CartModal/CartModal'
import { getContentfulNavigationCategories } from '@/services/getContentfulNavigationCategories'
import NavLinks from '../NavLinks/NavLinks'

export default async function Header() {
  const { navigation, categories } = await getContentfulNavigationCategories()
  return (
    <header className={Style['header']}>
      <div className={`${Style['wrapper']} wrapper`}>
        <TopNav categories={categories} />
        <Link href='/' className={Style['header__brand']}>
          <LogoSvgIcon aria-hidden />
        </Link>
        <NavLinks
          navigation={navigation}
          className={Style['header__nav-links']}
        />
        <CartModal />
      </div>
    </header>
  )
}
