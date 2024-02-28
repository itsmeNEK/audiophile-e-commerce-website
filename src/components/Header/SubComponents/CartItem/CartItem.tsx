import Image from 'next/image'
import Style from './CartItem.module.scss'
import { mdiMinus, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
type CartItemProps = {
  cartItem: {
    image: { file: string; alt: string }
    quantity: number
    price: number
    title: string
  }
}

export default function CartItem({ cartItem }: CartItemProps) {
  return (
    <div className={Style['cart-item']}>
      <div className={Style['cart-item__product']}>
        <Image
          className={Style['cart-item__product__image']}
          src={cartItem.image.file}
          alt={cartItem.image.alt}
          width={64}
          height={74}
          priority
        />
        <div className={Style['cart-item__product__details']}>
          <h4>{cartItem.title}</h4>
          <p>$ {(cartItem.price * cartItem.quantity).toLocaleString()}</p>
        </div>
      </div>
      <div className={Style['cart-item__quantity']}>
        <PrimaryButton
          type='button'
          aria-label='Plus Button'
          className={Style['cart-item__quantity__minus-plus-btn']}
        >
          <Icon aria-hidden path={mdiMinus} size={0.7} color='gray' />
        </PrimaryButton>
        <span aria-label='Quantity Count'>{cartItem.quantity}</span>
        <PrimaryButton
          type='button'
          aria-label='Minus Button'
          className={Style['cart-item__quantity__minus-plus-btn']}
        >
          <Icon aria-hidden path={mdiPlus} size={0.7} color='gray' />
        </PrimaryButton>
      </div>
    </div>
  )
}
