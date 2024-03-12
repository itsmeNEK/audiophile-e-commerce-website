'use client'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import Style from './Quantity.module.scss'
import Icon from '@mdi/react'
import { mdiMinus, mdiPlus } from '@mdi/js'
import { useCartContext } from '@/context/CartContext'
import { ThumbnailType } from '@/types/common/image'
import { useState } from 'react'

type QuantityProps = {
  product: {
    title?: string
    slug?: string
    price?: number
    thumbnail?: ThumbnailType[]
  }
}

export default function Quantity({ product }: QuantityProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItemToCart } = useCartContext()
  const handleAdd = () => {
    setQuantity((prevVal: number) => prevVal + 1)
  }
  const handleMinus = () => {
    if (quantity === 1) return
    setQuantity((prevVal: number) => prevVal - 1)
  }
  const handleAddCart = () => {
    addItemToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <div className={Style['quantity']}>
      <div className={Style['quantity__add-minus-count']}>
        <PrimaryButton
          type='button'
          aria-label='Minus Button'
          className={Style['quantity__add-minus-count__minus']}
          onClick={handleMinus}
        >
          <Icon path={mdiMinus} aria-hidden size={0.7}></Icon>
        </PrimaryButton>
        <span className={Style['quantity__add-minus-count__count']}>
          {quantity}
        </span>
        <PrimaryButton
          type='button'
          aria-label='Plus Button'
          className={Style['quantity__add-minus-count__plus']}
          onClick={handleAdd}
        >
          <Icon path={mdiPlus} aria-hidden size={0.7}></Icon>
        </PrimaryButton>
      </div>
      <PrimaryButton
        type='button'
        className={Style['quantity__add-button']}
        onClick={handleAddCart}
      >
        add to cart
      </PrimaryButton>
    </div>
  )
}
