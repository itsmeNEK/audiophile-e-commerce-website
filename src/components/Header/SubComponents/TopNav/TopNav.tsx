'use client'
import React, { useRef, useState } from 'react'
import Style from './TopNav.module.scss'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import Icon from '@mdi/react'
import { mdiClose, mdiMenu } from '@mdi/js'
import { parsedThumbnailType } from '@/types/categoriesType'
import { useClickOutside } from '@/hooks/useOnClickOutside'
import Categories from '@/components/Categories/Categories'
import Overlay from '@/components/common/overlay/overlay'
type TopNavProps = {
  categories: parsedThumbnailType[]
}
const TopNav = ({ categories }: TopNavProps) => {
  const [showTopNav, setShowTopNav] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const topNavRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    setShowTopNav((prevVal) => !prevVal)
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
          title={`${!showTopNav ? 'Menu Icon' : 'Close Icon'}`}
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

export default TopNav
