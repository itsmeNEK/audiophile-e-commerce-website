import SeeProductButton from '@/components/common/SeeProductButton/SeeProductButton'
import Style from './ProductCard.module.scss'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import { ThumbnailType } from '@/types/common/image'
import Image from 'next/image'

type ProductCardProps = {
  data: {
    title?: string | null
    slug?: string | null
    thumbnail?: ThumbnailType[] | null
    category?:
      | { __typename?: 'BannerContent' }
      | { __typename?: 'Categories'; slug?: string | null }
      | { __typename?: 'FooterContent' }
      | { __typename?: 'Products' }
      | null
  } | null
}

export default function ProductCard({ data }: ProductCardProps) {
  if (!data) return
  const { title, slug, thumbnail, category } = data
  const parsedThumbnail = thumbnail && parseContentfulImage(thumbnail[0])
  if (!parsedThumbnail) return null
  const { altText, imageUrl, width, height } = parsedThumbnail

  function renderSeeProduct() {
    if (category && category.__typename !== 'Categories') return

    const categorySlug = category?.slug

    return (
      <SeeProductButton categorySlug={categorySlug} productSlug={slug}>
        See Product
      </SeeProductButton>
    )
  }
  return (
    <article className={Style['product-card']}>
      <Image
        className={Style['product-card__image']}
        src={imageUrl}
        width={width}
        height={height}
        alt={altText}
        quality={100}
      />
      <h3 className={Style['product-card__title']}>{title}</h3>

      {renderSeeProduct()}
    </article>
  )
}
