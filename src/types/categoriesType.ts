import { ThumbnailType } from './common/image'

export type CategoryType = {
  title: string
  slug: string
  thumbnail: ThumbnailType
}
export type ContentfulCategoryType = {
  contentTypeId: string
  fields: {
    title: string
    slug: string
    thumbnail: CategoryType
  }
}

export type parsedCategoryType = {
  title: string
  slug: string
  thumbnail: {
    altText: string
    imageUrl: string
  }
}
