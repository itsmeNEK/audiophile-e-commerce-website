import ProductDetails from '@/components/ProductDetails/ProductDetails'
import getProductBySlug from '@/services/getProductBySlug'
import NavigationButton from '@/components/common/NavigationButton/NavigationButton'
import { NavigationDirection } from '@/enums/DirectionEnum'
import notFound from './not-found'

type CategoryParamsType = {
  params: {
    product: string
  }
}

export default async function page({ params }: CategoryParamsType) {
  const product = await getProductBySlug(params.product)
  if (!product) return notFound()
  return (
    <main className='wrapper'>
      <NavigationButton
        direction={NavigationDirection.BACK}
        buttonText='Go back'
      />
      <ProductDetails product={product} />
    </main>
  )
}
