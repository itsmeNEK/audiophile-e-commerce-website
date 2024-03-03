import { ParsedImage } from './common/image'

export type ContentfulCategoryType = {
  contentTypeId: string
  fields: parsedCategoryType
}

export type NavigationType = {
  title: string
  link: string
  category: boolean
}
export type parsedCategoryType = {
  title: string
  link: string
  category: boolean
  thumbnail: ParsedImage
}
