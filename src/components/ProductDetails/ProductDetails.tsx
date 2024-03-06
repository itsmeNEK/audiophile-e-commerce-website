import { ThumbnailType } from '@/types/common/image'
import Style from './ProductDetails.module.scss'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import Image from 'next/image'
import Quantity from './Quantity/Quantity'
import FeaturesInTheBox from './FeaturesInTheBox/FeaturesInTheBox'
import Gallery from './Gallery/Gallery'
import getRecommendProducts from '@/services/getRecommendProducts'
import ProductCard from './ProductCard/ProductCard'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'
import Categories from '../Shared/Categories/Categories'

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

  function renderProductImage() {
    if (!parsedThumbnail) return null

    return (
      <Image
        priority
        className={Style['product__details__image-container__image']}
        src={parsedThumbnail?.imageUrl}
        alt={parsedThumbnail?.altText}
        width={parsedThumbnail?.width}
        height={parsedThumbnail?.height}
        quality={100}
      />
    )
  }

  return (
    <div className={Style['product']}>
      <div className={Style['product__details']}>
        <div className={Style['product__details__image-container']}>
          {renderProductImage()}
        </div>
        <div className={Style['product__details__content']}>
          {tag && (
            <span
              className={`
            ${Style[`product__details__content__tag`]}
            `}
            >
              {tag}
            </span>
          )}
          {title && <h2>{title}</h2>}
          {description && (
            <p className={Style['product__details__content__description']}>
              {description}
            </p>
          )}
          {price && (
            <p className={Style['product__details__content__price']}>
              $ {price.toLocaleString()}
            </p>
          )}
          <Quantity product={product} />
        </div>
      </div>
      <FeaturesInTheBox
        features={features}
        inTheBox={inTheBox}
        emphasisInTheBox={emphasisInTheBox}
      />
      <Gallery galleryImages={galleryImages} />
      <div className={Style['product__recommendation']}>
        {recommendProductData?.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
      <Categories categories={categories} />
    </div>
  )
}
