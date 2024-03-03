import Image from 'next/image'
import Style from './Banner.module.scss'
import parseTextWithSpan from '@/helpers/parseTextWithSpan'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import { ParsedBannerType } from '@/types/BannerType'

interface BannerProps {
  data: ParsedBannerType
}

function Banner({ data }: BannerProps) {
  return (
    <section className={`${data.bannerType === 'hero' ? '' : 'wrapper'} `}>
      <div
        className={`${Style['banner']} ${Style[`banner-${data.bannerType}`]}`}
      >
        <div
          className={`
            ${Style[`banner__image-container`]} ${Style[`banner-${data.bannerType}__image-container`]}
            `}
        >
          <Image
            priority
            className={`
            ${Style[`banner__image-container__image`]}
            ${Style[`banner-${data.bannerType}__image-container__image`]}
            `}
            src={data.thumbnail.imageUrl}
            alt={data.thumbnail.altText}
            sizes='(min-width: 40rem) 700px, (min-width: 62rem) 1300px, 400px'
            width={400}
            height={300}
          />
        </div>
        <div
          className={`
            ${Style[`banner__content`]}
            ${Style[`banner-${data.bannerType}__content`]}
            `}
        >
          {data.tag && (
            <span
              className={`
            ${Style[`banner__content__tag`]}
            ${Style[`banner-${data.bannerType}__content__tag`]}
            `}
            >
              {data.tag}
            </span>
          )}
          <h2>{parseTextWithSpan(data.title, data.emphasis)}</h2>
          <p>{data.description}</p>
          {data.product && (
            <PrimaryButton
              type='button'
              className={`
            ${Style[`banner__button`]}
            ${Style[`banner-${data.bannerType}__button`]}
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
