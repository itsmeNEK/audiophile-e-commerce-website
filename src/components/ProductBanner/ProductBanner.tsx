import React from 'react'
import { ParsedImage, ThumbnailType } from '@/types/common/image'
import Style from './ProductBanner.module.scss'
import Image from 'next/image'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import Link from 'next/link'

type ProductBannerProps = {
  title?: string | null
  thumbnail: ThumbnailType[]
  tag?: string | null
  description?: string | null
  slug?: string | null
  bannerType: string | null
  category: string | null
}

export default function ProductBanner({
  title,
  thumbnail,
  tag,
  description,
  slug,
  bannerType,
  category,
}: ProductBannerProps) {
  const parsedThumbnail: ParsedImage | null = thumbnail
    ? parseContentfulImage(thumbnail[0])
    : null

  return (
    <div className={`${Style['banner']} ${Style[`banner-${bannerType}`]}`}>
      <div className={Style['banner__image-container']}>
        {parsedThumbnail && (
          <Image
            priority
            className={Style['banner__image-container__image']}
            src={parsedThumbnail.imageUrl}
            alt={parsedThumbnail.altText}
            width={parsedThumbnail.width}
            height={parsedThumbnail.height}
            quality={100}
          />
        )}
      </div>
      <div className={Style['banner__content']}>
        <div>
          {tag && <span className={Style['banner__content__tag']}>{tag}</span>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          {category && slug && (
            <Link
              href={`${category}/${slug}`}
              className={Style['banner__button']}
            >
              See Product
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
