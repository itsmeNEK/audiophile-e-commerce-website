import React from 'react'
import LogoSvgIcon from '../common/svg/LogoSvgIcon'
import Style from './Header.module.scss'
import Link from 'next/link'
import { getContentfulCategories } from '@/services/getContentfulCategories'
import { parsedCategoryType } from '@/types/categoriesType'
import TopNav from './SubComponents/TopNav/TopNav'
import CartModal from './SubComponents/CartModal/CartModal'

export default async function Header() {
  const categories = await getContentfulCategories()
  return (
    <header className={Style['header']}>
      <div className={`${Style['wrapper']} wrapper`}>
        <TopNav categories={categories} />
        <Link href='/' className={Style['header__brand']}>
          <LogoSvgIcon aria-hidden />
        </Link>
        <ul className={Style['header__links']}>
          <Link href='/'>
            <li>Home</li>
          </Link>
          {categories.map((item: parsedCategoryType, index: number) => {
            return (
              <Link key={index} href={`/categories/${item.slug}`}>
                <li>{item.title}</li>
              </Link>
            )
          })}
        </ul>
        <CartModal />
      </div>
    </header>
  )
}
