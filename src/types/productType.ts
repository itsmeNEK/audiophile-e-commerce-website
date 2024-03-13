import { ThumbnailType } from './common/image'

export type ProductType = {
  title?: string | null
  slug?: string | null
  description?: string | null
  features?: string | null
  price?: number | null
  thumbnail?: ThumbnailType[] | null
  gallery?: ThumbnailType[] | null
  inTheBox?: Array<string | null> | null
  emphasisInTheBox?: Array<string | null> | null
  tag?: string | null
  category?: { __typename?: string; slug?: string | null } | null
}
