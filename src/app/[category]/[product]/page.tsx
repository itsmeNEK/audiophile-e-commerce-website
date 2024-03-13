import BackButton from '@/components/Shared/BackButton/BackButton'
import ProductDetails from '@/components/ProductDetails/ProductDetails'
import getProductBySlug from '@/services/getProductBySlug'

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
      <BackButton />
      <ProductDetails product={product} />
    </section>
  )
}
