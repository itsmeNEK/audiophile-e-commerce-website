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
  if (data.bannerContentCollection.items.length === 0) return null
  const { title, bannerType, thumbnail, tag, description, emphasis, product } =
    data.bannerContentCollection.items[0]

  const ParsedThumbnail: ParsedImage = parseContentfulImage(thumbnail[0])
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
            src={ParsedThumbnail.imageUrl}
            alt={ParsedThumbnail.altText}
            width={ParsedThumbnail.width}
            height={ParsedThumbnail.height}
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
            {product && (
              <Link
                href={`/product/${product.sys.id}`}
                className={`
            ${Style[`banner__button`]}
            ${Style[`banner-${bannerType}__button`]}
            `}
              >
                See Product
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
