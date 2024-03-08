import { ThumbnailType } from './common/image'

export type NavigationType = {
  title: string
  link: string
}

export type CategoryType = {
  title: string
  link: string
  category: boolean
  thumbnail: ThumbnailType[]
}
