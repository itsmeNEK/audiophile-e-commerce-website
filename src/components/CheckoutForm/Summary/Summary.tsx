import { useCartContext } from '@/context/CartContext'
import Style from './Summary.module.scss'
import { CartItemType } from '@/types/cartType'
import Image from 'next/image'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import PrimaryButton from '../../common/buttons/PrimaryButton'

type Computation = {
  label: string
  value: number
}

const SHIPPING = 50
export default function Summary() {
  const { cartItems, totalCartPrice, formValid } = useCartContext()
  function getVatIncluded(total: number) {
    return total * 0.2
  }
  function renderGrandTotal(total: number) {
    const vat = getVatIncluded(total)
    return total + vat + SHIPPING
  }
  const computations: Computation[] = [
    { label: 'total', value: totalCartPrice },
    { label: 'shipping', value: 50 },
    { label: 'vat (included)', value: getVatIncluded(totalCartPrice) },
    { label: 'Grand total', value: renderGrandTotal(totalCartPrice) },
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
    <div className={Style['summary']}>
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
    </div>
  )
}
