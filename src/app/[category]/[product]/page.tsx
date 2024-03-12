import BackButton from '@/components/Shared/BackButton/BackButton'
import ProductDetails from '@/components/ProductDetails/ProductDetails'
import getProductBySlug from '@/services/getProductBySlug'
import Style from './page.module.scss'

type CategoryParamsType = {
  params: {
    product: string
  }
}

export default async function page({ params }: CategoryParamsType) {
  const productParam = params.product
  const product = await getProductBySlug(productParam)
  return (
    <section className='wrapper'>
      <div className={Style['back-button-container']}>
        <BackButton />
      </div>
      <ProductDetails product={product} />
    </section>
  )
}
