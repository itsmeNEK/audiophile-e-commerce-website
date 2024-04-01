import { useCartContext } from '@/context/CartContext'
import Style from './Summary.module.scss'
import { CartItemType } from '@/types/cartType'
import Image from 'next/image'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import PrimaryButton from '../../common/buttons/PrimaryButton'
import { getVatIncluded, getGrandTotal } from '@/utils/summaryComputation'

type Computation = {
  label: string
  value: number
}

const SHIPPING = 50
export default function Summary() {
  const { cartItems, totalCartPrice, formValid } = useCartContext()
  const shippingFee = cartItems.length > 0 ? SHIPPING : 0
  const computations: Computation[] = [
    { label: 'total', value: totalCartPrice },
    { label: 'shipping', value: shippingFee },
    { label: 'vat (included)', value: getVatIncluded(totalCartPrice) },
    { label: 'Grand total', value: getGrandTotal(totalCartPrice, shippingFee) },
  ]
  const renderComputations = (
    <div className={Style['computations']}>
      {computations.map(({ label, value }) => (
        <div key={label} className={Style['computation']}>
          <p className={Style['computation__label']}>{label}</p>
          <p className={Style['computation__value']}>
            $ {value.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )

  return (
    <article className={Style['summary']}>
      <h2>Summary</h2>
      <div className={Style['cart-items']}>
        {cartItems.map((item: CartItemType, index: number) => {
          const { thumbnail, title, price } = item.product
          const parsedThumbnail =
            thumbnail && parseContentfulImage(thumbnail[0])
          if (!parsedThumbnail) return null
          const { altText, imageUrl, width, height } = parsedThumbnail
          return (
            <div key={index} className={Style['cart-items__product']}>
              <div className={Style['cart-items__product__details']}>
                <Image
                  className={Style['cart-items__product__details__image']}
                  src={imageUrl}
                  width={width}
                  height={height}
                  alt={altText}
                  quality={100}
                />
                <div>
                  <h4>{title}</h4>
                  <p>$ {price && price.toLocaleString()}</p>
                </div>
              </div>
              <p className={Style['cart-items__product__quantity']}>
                x{item.quantity}
              </p>
            </div>
          )
        })}
      </div>
      {renderComputations}

      <PrimaryButton
        type='submit'
        className={Style['pay-button']}
        disabled={!formValid}
      >
        Continue & pay
      </PrimaryButton>
    </article>
  )
}
