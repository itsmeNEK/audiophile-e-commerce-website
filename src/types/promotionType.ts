import { ThumbnailType } from './common/image'

export type ContentfulPromotionType = {
  contentTypeId: string
  fields: {
    title: string
    slug: string
    description: string
    thumbnail: ThumbnailType
    thumbnailTablet: ThumbnailType
    thumbnailDesktop: ThumbnailType
  }
}
