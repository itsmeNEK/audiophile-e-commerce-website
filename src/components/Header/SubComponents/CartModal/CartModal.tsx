'use client'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import { useRef } from 'react'
import Style from './CartModal.module.scss'
import { useClickOutside } from '@/hooks/useOnClickOutside'
import { mdiCartOutline } from '@mdi/js'
import Icon from '@mdi/react'
import CartItem from '../CartItem/CartItem'
import Overlay from '@/components/common/overlay/Overlay'
import { useCartContext } from '@/context/CartContext'
import { CartItemType } from '@/types/cartType'
import { useRouter } from 'next/navigation'

export default function CartModal() {
  const {
    cartItems,
    showCart,
    setShowCart,
    handleAddQuantityProduct,
    handleDeductQuantityProduct,
  } = useCartContext()
  const cartCardRef = useRef<HTMLDivElement>(null)
  const cartButtonRef = useRef<HTMLButtonElement | null>(null)
  const { handleRemoveAllItems, totalCartPrice } = useCartContext()
  const router = useRouter()

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  const handleClickOutside = () => {
    setShowCart(false)
  }

  const handleRemoveAll = () => {
    handleRemoveAllItems()
  }
  const handleCheckout = () => {
    handleShowCart()
    router.push('/checkout')
  }
  const handleAddQty = (cartItem: CartItemType) => () => {
    handleAddQuantityProduct(cartItem.product)
  }
  const handleDeductQty = (cartItem: CartItemType) => () => {
    handleDeductQuantityProduct(cartItem.product)
  }

  const handleProductClick = (cartItem: CartItemType) => () => {
    const product = cartItem.product

    const categorySlug = product.category?.slug

    router.push(`/${categorySlug}/${product.slug}`)
    setShowCart(false)
  }

  useClickOutside([cartCardRef, cartButtonRef], handleClickOutside)
  const renderEmptyCart = (
    <div className={Style['cart-modal__container__body-empty']}>
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
        <PrimaryButton
          type='button'
          onClick={handleRemoveAll}
          className={Style['cart-header__button']}
        >
          Remove all
        </PrimaryButton>
      </div>
      {cartItems?.map((cartItem: CartItemType, index: number) => (
        <CartItem
          onAddQty={handleAddQty(cartItem)}
          onDeductQty={handleDeductQty(cartItem)}
          onProductClick={handleProductClick(cartItem)}
          key={index}
          cartItem={cartItem}
        />
      ))}
      <div className={Style['cart-total']}>
        <span>Total</span>
        <p>$ {totalCartPrice.toLocaleString()}</p>
      </div>
      <PrimaryButton
        type='button'
        onClick={handleCheckout}
        className={Style['cart-footer']}
      >
        Checkout
      </PrimaryButton>
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
