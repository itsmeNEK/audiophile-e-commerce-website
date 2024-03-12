import Image from 'next/image'
import Style from './CartItem.module.scss'
import { mdiMinus, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import { CartItemType } from '@/types/cartType'
import { useCartContext } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
type CartItemProps = {
  cartItem: CartItemType
}

export default function CartItem({ cartItem }: CartItemProps) {
  const router = useRouter()
  const { handleAddQuantityProduct, handleDeductQuantityProduct, setShowCart } =
    useCartContext()
  if (!cartItem) return null
  const { thumbnail, title, price } = cartItem.product
  const parsedThumbnail = thumbnail && parseContentfulImage(thumbnail[0])
  if (!parsedThumbnail) return null
  const { altText, imageUrl, width, height } = parsedThumbnail

  const handleAddQty = () => {
    handleAddQuantityProduct(cartItem.product)
  }
  const handleDeductQty = () => {
    handleDeductQuantityProduct(cartItem.product)
  }

  function handleProductClick() {
    const product = cartItem.product
    if (product.category && product.category.__typename !== 'Categories') return

    const categorySlug = product.category?.slug

    router.push(`/${categorySlug}/${product.slug}`)
    setShowCart(false)
  }

  return (
    <div className={Style['cart-item']}>
      <PrimaryButton
        onClick={handleProductClick}
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
      <div className={Style['cart-item__quantity']}>
        <PrimaryButton
          type='button'
          onClick={handleDeductQty}
          aria-label='Plus Button'
          className={Style['cart-item__quantity__minus-plus-btn']}
        >
          <Icon aria-hidden path={mdiMinus} size={0.7} color='gray' />
        </PrimaryButton>
        <span aria-label='Quantity Count'>{cartItem.quantity}</span>
        <PrimaryButton
          onClick={handleAddQty}
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
