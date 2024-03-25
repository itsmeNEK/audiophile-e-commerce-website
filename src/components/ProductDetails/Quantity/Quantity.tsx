'use client'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import Style from './Quantity.module.scss'
import { useCartContext } from '@/context/CartContext'
import { ThumbnailType } from '@/types/common/image'
import { useState } from 'react'
import QuantityButtons from '@/components/Shared/QuantityButtons/QuantityButtons'

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
      <QuantityButtons
        quantity={quantity}
        className={Style['quantity__add-minus-count']}
        onMinusClick={handleMinus}
        onPlusClick={handleAdd}
      />
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
