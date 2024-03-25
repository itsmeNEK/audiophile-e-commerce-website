import React from 'react'
import Image from 'next/image'
import Style from './CartItem.module.scss'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import { CartItemType } from '@/types/cartType'
import QuantityButtons from '@/components/Shared/QuantityButtons/QuantityButtons'

type CartItemProps = {
  cartItem: CartItemType
  onAddQty: () => void
  onDeductQty: () => void
  onProductClick: () => void
}

export default function CartItem({
  cartItem,
  onAddQty,
  onDeductQty,
  onProductClick,
}: CartItemProps) {
  const { thumbnail, title, price } = cartItem.product
  const parsedThumbnail = thumbnail && parseContentfulImage(thumbnail[0])
  if (!parsedThumbnail) return null
  const { altText, imageUrl, width, height } = parsedThumbnail

  return (
    <div className={Style['cart-item']}>
      <PrimaryButton
        onClick={onProductClick}
        className={Style['cart-item__product']}
      >
        <Image
          className={Style['cart-item__product__image']}
          src={imageUrl}
          width={width}
          height={height}
          alt={altText}
          quality={100}
        />
        <div className={Style['cart-item__product__details']}>
          <h4>{title}</h4>
          <p>$ {price && price.toLocaleString()}</p>
        </div>
      </PrimaryButton>
      <QuantityButtons
        quantity={cartItem.quantity}
        onPlusClick={onAddQty}
        onMinusClick={onDeductQty}
        className={Style['cart-item__quantity']}
      />
    </div>
  )
}
