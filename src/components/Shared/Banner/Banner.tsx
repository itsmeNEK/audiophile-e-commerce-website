import Image from 'next/image'
import Style from './Banner.module.scss'
import parseTextWithEm from '@/helpers/parseTextWithEm'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import { ParsedImage } from '@/types/common/image'
import SeeProductButton from '@/components/common/SeeProductButton/SeeProductButton'
import { BannerType } from '@/types/bannerType'

type BannerPros = {
  data: BannerType
}

function Banner({ data }: BannerPros) {
  const { title, description, thumbnail, emphasis, bannerType, tag, product } =
    data
  const parsedThumbnail: ParsedImage = parseContentfulImage(thumbnail[0])

  const productLink = isProductExists()

  function isProductExists() {
    if (product?.category?.__typename !== 'Categories') return null

    const productSlug = product.slug
    const categorySlug = product?.category?.slug

    return { productSlug: productSlug, categorySlug: categorySlug }
  }
  return (
    <section
      className={`${bannerType === 'hero' ? Style['hero-wrapper'] : Style['wrapper'] + ' wrapper'} `}
    >
      <div className={`${Style['banner']} ${Style[`banner-${bannerType}`]}`}>
        <div
          className={`
            ${Style[`banner__image-container`]} ${Style[`banner-${bannerType}__image-container`]}
            `}
        >
          <Image
            priority
            className={`
            ${Style[`banner__image-container__image`]}
            ${Style[`banner-${bannerType}__image-container__image`]}
            `}
            src={parsedThumbnail.imageUrl}
            alt={parsedThumbnail.altText}
            width={parsedThumbnail.width}
            height={parsedThumbnail.height}
            quality={100}
          />
        </div>
        <div
          className={`
            ${Style[`banner__content`]}
            ${Style[`banner-${bannerType}__content`]}
            `}
        >
          <div>
            {tag && (
              <span
                className={`
            ${Style[`banner__content__tag`]}
            ${Style[`banner-${bannerType}__content__tag`]}
            `}
              >
                {tag}
              </span>
            )}
            <h2>{parseTextWithEm(title, emphasis)}</h2>
            {description && <p>{description}</p>}
            {productLink && (
              <SeeProductButton
                aria-label='See Product Details'
                productSlug={productLink.productSlug}
                categorySlug={productLink.categorySlug}
                className={`
        ${Style['banner__button']}
        ${Style[`banner-${bannerType}__button`]}
      `}
              >
                See Product
              </SeeProductButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
