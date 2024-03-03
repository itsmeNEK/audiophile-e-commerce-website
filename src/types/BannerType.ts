import { ParsedImage, ThumbnailType } from './common/image'

export type ContentfulBannerType = {
  contentTypeId: string
  fields: {
    title: string
    emphasis: string
    description: string
    thumbnail: ThumbnailType
    bannerType: string
  }
}
export type ParsedBannerType = {
  title: string
  emphasis: string
  description: string
  thumbnail: ParsedImage
  bannerType: string
  product?: string
  tag?: string
}
