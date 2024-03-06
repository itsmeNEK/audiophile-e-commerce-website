import { ThumbnailType } from './common/image'

export type NavigationType = {
  title: string
  link: string
}

export type CategoryType = {
  __typename: string
  title: string
  link: string
  slug: string
  category: boolean
  thumbnail: ThumbnailType[]
}
