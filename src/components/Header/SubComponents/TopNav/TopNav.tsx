'use client'
import { useRef } from 'react'
import Style from './TopNav.module.scss'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import Icon from '@mdi/react'
import { mdiClose, mdiMenu } from '@mdi/js'
import { useClickOutside } from '@/hooks/useOnClickOutside'
import Categories from '@/components/Shared/Categories/Categories'
import Overlay from '@/components/common/overlay/Overlay'
import { CategoryType } from '@/types/categoriesType'
import { useCartContext } from '@/context/CartContext'

type CategoriesProps = {
  categories: CategoryType[]
}
export default function TopNav({ categories }: CategoriesProps) {
  const { showTopNav, setShowTopNav } = useCartContext()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const topNavRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    setShowTopNav(!showTopNav)
  }
  const handleClickOutside = () => {
    setShowTopNav(false)
  }
  useClickOutside([closeButtonRef, topNavRef], handleClickOutside)
  return (
    <nav className={Style['top-nav']}>
      <PrimaryButton
        ref={closeButtonRef}
        type='button'
        onClick={handleButtonClick}
        aria-label='Menu Button'
        className={Style['top-nav__menu-button']}
      >
        <Icon
          aria-hidden
          path={!showTopNav ? mdiMenu : mdiClose}
          size={1}
          color='white'
        />
      </PrimaryButton>
      {showTopNav && <Overlay />}
      <div
        className={`${Style['top-nav__container']} ${showTopNav && Style['menu-open']}`}
        ref={topNavRef}
      >
        <Categories categories={categories} />
      </div>
    </nav>
  )
}
