import React from 'react'
import LogoSvgIcon from '../common/svg/LogoSvgIcon'
import Style from './Header.module.scss'
import Link from 'next/link'
import PrimaryButton from '../common/buttons/PrimaryButton'
import Icon from '@mdi/react'
import { mdiCartOutline, mdiMenu } from '@mdi/js'
import { getContentfulCategories } from '@/contentful/getContentfulCategories'
import { parsedThumbnailType } from '@/types/categoriesType'

export default async function Header() {
  const categories = await getContentfulCategories()
  return (
    <nav className={Style['nav']}>
      <div className={`${Style['wrapper']} wrapper`}>
        <PrimaryButton
          aria-label='Toggle Menu'
          className={Style['nav__menu-button']}
        >
          <Icon
            aria-hidden
            path={mdiMenu}
            title='Cart Icon'
            size={1}
            color='white'
          />
        </PrimaryButton>
        <Link href='/' className={Style['nav__brand']}>
          <LogoSvgIcon aria-hidden />
        </Link>
        <ul className={Style['nav__links']}>
          <Link href='/'>
            <li>Home</li>
          </Link>
          {categories.map((item: parsedThumbnailType, index: number) => {
            return (
              <Link key={index} href={`/categories/${item.slug}`}>
                <li>{item.title}</li>
              </Link>
            )
          })}
        </ul>
        <PrimaryButton
          type='button'
          aria-label='Toggle Cart'
          className={Style['nav__cart-button']}
        >
          <Icon
            aria-hidden
            path={mdiCartOutline}
            title='Cart Icon'
            size={1}
            color='white'
          />
        </PrimaryButton>
      </div>
    </nav>
  )
}
