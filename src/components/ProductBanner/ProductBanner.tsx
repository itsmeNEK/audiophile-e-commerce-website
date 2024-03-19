import { ParsedImage, ThumbnailType } from '@/types/common/image'
import Style from './ProductBanner.module.scss'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import SeeProductButton from '../common/SeeProductButton/SeeProductButton'
import ImageAndDetail from '../Shared/ImageAndDetail/ImageAndDetail'

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
  const parsedThumbnail: ParsedImage = parseContentfulImage(thumbnail[0])

  return (
    <div className={`${Style['banner']} ${Style[`banner--${bannerType}`]}`}>
      <ImageAndDetail
        image={parsedThumbnail}
        tag={tag}
        title={title}
        description={description}
      >
        {category && slug && (
          <SeeProductButton
            aria-label='See Product Details'
            productSlug={slug}
            categorySlug={category}
            className={Style['banner__button']}
          >
            See Product
          </SeeProductButton>
        )}
      </ImageAndDetail>
    </div>
  )
}
