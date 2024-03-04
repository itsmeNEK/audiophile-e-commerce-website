'use client'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import { useRef, useState } from 'react'
import Style from './CartModal.module.scss'
import { useClickOutside } from '@/hooks/useOnClickOutside'
import { mdiCartOutline } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import CartItem from '../CartItem/CartItem'
import { ProductType } from '@/types/productType'
import Overlay from '@/components/common/overlay/Overlay'

const mocCartData = [
  {
    image: {
      file: '/image-yx1-earphones.jpg',
      alt: 'A Black Earphones',
    },
    id: 1,
    price: 599,
    quantity: 4,
    title: 'YX1',
  },
  {
    image: {
      file: '/image-yx1-earphones.jpg',
      alt: 'A Black Earphones',
    },
    id: 2,
    price: 599,
    quantity: 2,
    title: 'YX1',
  },
]
export default function CartModal() {
  const [showCart, setShowCart] = useState(false)
  const [cartItems] = useState(mocCartData)
  const cartCardRef = useRef<HTMLDivElement>(null)
  const cartButtonRef = useRef<HTMLButtonElement | null>(null)

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  const handleClickOutside = () => {
    setShowCart(false)
  }
  useClickOutside([cartCardRef, cartButtonRef], handleClickOutside)
  const renderEmptyCart = (
    <div className={Style['cart-modal__container__body']}>
      <span>Your cart is empty.</span>
      <p>
        <Icon aria-hidden path={mdiCartOutline} size={5} color='black' />
      </p>
    </div>
  )
  const renderCartItems = (
    <div>
      <div className={Style['cart-header']}>
        <h3>Cart ({cartItems.length})</h3>
        <PrimaryButton type='button' className={Style['cart-header__button']}>
          Remove all
        </PrimaryButton>
      </div>
      {cartItems.map((cartItem: ProductType, index: number) => (
        <CartItem key={index} cartItem={cartItem} />
      ))}
      <Link href='checkout' className={Style['cart-footer']}>
        Checkout
      </Link>
    </div>
  )
  return (
    <>
      <PrimaryButton
        ref={cartButtonRef}
        type='button'
        className={Style['cart-button']}
        aria-label='Cart Button'
        onClick={handleShowCart}
      >
        {cartItems.length > 0 && (
          <span className={Style['cart-button__count']}>
            {cartItems.length}
          </span>
        )}
        <Icon aria-hidden path={mdiCartOutline} size={1} color='white' />
      </PrimaryButton>
      {showCart && (
        <>
          <Overlay />
          <div ref={cartCardRef} className={Style['cart-modal']}>
            <div className={Style['cart-modal__container']}>
              {cartItems.length > 0 ? renderCartItems : renderEmptyCart}
            </div>
          </div>
        </>
      )}
    </>
  )
}
