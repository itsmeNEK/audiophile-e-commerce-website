import Image from 'next/image'
import Style from './Banner.module.scss'
import parseTextWithSpan from '@/helpers/parseTextWithSpan'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import { ParsedBannerType } from '@/types/BannerType'

interface BannerProps {
  data: ParsedBannerType
}

function Banner({ data }: BannerProps) {
  const { bannerType, thumbnail, emphasis, product, description, tag, title } =
    data
  return (
    <section className={`${bannerType === 'hero' ? '' : 'wrapper'} `}>
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
            src={thumbnail.imageUrl}
            alt={thumbnail.altText}
            sizes='(min-width: 40rem) 700px, (min-width: 62rem) 1300px, 400px'
            width={400}
            height={300}
          />
        </div>
        <div
          className={`
            ${Style[`banner__content`]}
            ${Style[`banner-${bannerType}__content`]}
            `}
        >
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
          <p>{description}</p>
          {product && (
            <PrimaryButton
              type='button'
              className={`
            ${Style[`banner__button`]}
            ${Style[`banner-${bannerType}__button`]}
            `}
            >
              See Product
            </PrimaryButton>
          )}
        </div>
      </div>
    </section>
  )
}

export default Banner
