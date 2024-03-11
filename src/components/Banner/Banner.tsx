import Image from 'next/image'
import Style from './Banner.module.scss'
import parseTextWithSpan from '@/helpers/parseTextWithSpan'
import Link from 'next/link'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import { ParsedImage } from '@/types/common/image'
import { GetBannerQuery } from '@/__generated__/graphql'

type BannerPros = {
  data: GetBannerQuery
}

function Banner({ data }: BannerPros) {
  const item = data?.bannerContentCollection?.items[0]

  if (!item) {
    return null
  }
  const { title, description, thumbnail, emphasis, bannerType, tag, product } =
    item

  const parsedThumbnail: ParsedImage = parseContentfulImage(thumbnail[0])
  function renderSeeProduct() {
    if (
      (product && product.__typename !== 'Products') ||
      product?.category?.__typename !== 'Categories'
    )
      return

    const productSlug = product.slug
    const categorySlug = product?.category?.slug

    return (
      <Link
        href={`${categorySlug}/${productSlug}`}
        className={`
        ${Style['banner__button']}
        ${Style[`banner-${bannerType}__button`]}
      `}
      >
        See Product
      </Link>
    )
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
            <h2>{parseTextWithSpan(title, emphasis)}</h2>
            {description && <p>{description}</p>}
            {renderSeeProduct()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
