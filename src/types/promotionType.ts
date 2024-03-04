import { ThumbnailType } from './common/image'

export type ContentfulPromotionType = {
  contentTypeId: string
  fields: {
    title: string
    emphasis: string
    tag: string
    description: string
    bannerType: string
    thumbnail: ThumbnailType
  }
}
