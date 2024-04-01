import { ThumbnailType } from '@/types/common/image'
import Style from './ProductDetails.module.scss'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import Quantity from './Quantity/Quantity'
import FeaturesInTheBox from './FeaturesInTheBox/FeaturesInTheBox'
import Gallery from './Gallery/Gallery'
import getRecommendProducts from '@/services/getRecommendProducts'
import ProductCard from './ProductCard/ProductCard'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'
import Categories from '../Shared/Categories/Categories'
import ImageAndDetail from '../Shared/ImageAndDetail/ImageAndDetail'

type ProductDetailsProps = {
  product: {
    title?: string
    slug?: string
    description?: string
    features?: string
    price?: number
    thumbnail?: ThumbnailType[]
    tag?: string
    inTheBox?: string[]
    emphasisInTheBox?: string[]
    gallery?: ThumbnailType[]
  }
}

export default async function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) return null
  const {
    thumbnail,
    tag,
    title,
    description,
    price,
    features,
    inTheBox,
    emphasisInTheBox,
    gallery,
    slug,
  } = product
  const parsedThumbnail = thumbnail && parseContentfulImage(thumbnail[0])
  const galleryImages = gallery?.map((item: ThumbnailType) => {
    return parseContentfulImage(item)
  })
  const recommendProduct = slug && (await getRecommendProducts(slug))
  const recommendProductData = recommendProduct
    ? recommendProduct.filter((item) => item != null)
    : []
  const categories = await getCategoriesNavigation({
    isCategory: true,
  })

  return (
    <section className={Style['product']}>
      <div className={Style['product__details']}>
        <ImageAndDetail
          image={parsedThumbnail}
          title={title}
          tag={tag}
          description={description}
        >
          {price && (
            <h3 className={Style['product__details__price']}>
              $ {price.toLocaleString()}
            </h3>
          )}
          <Quantity product={product} />
        </ImageAndDetail>
      </div>
      <FeaturesInTheBox
        features={features}
        inTheBox={inTheBox}
        emphasisInTheBox={emphasisInTheBox}
      />
      <Gallery galleryImages={galleryImages} />
      <h3 className={Style['product__recommendation-title']}>
        You may also like
      </h3>
      <div className={Style['product__recommendation']}>
        {recommendProductData?.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
      <Categories categories={categories} />
    </section>
  )
}
