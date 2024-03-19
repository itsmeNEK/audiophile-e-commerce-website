import { ThumbnailType } from './common/image'
import { ProductType } from './productType'

export type BannerType = {
  title?: string | null
  description?: string | null
  thumbnail: ThumbnailType[]
  emphasis?: string | null
  bannerType?: string | null
  tag?: string | null
  product?: ProductType
}
