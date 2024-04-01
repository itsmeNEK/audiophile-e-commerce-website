import { ParsedImage, ThumbnailType } from '@/types/common/image'

export function parseContentfulImage(data: ThumbnailType): ParsedImage {
  const { secure_url, public_id, context, width, height } = data
  const imageUrl = secure_url
  const altText = context.custom.alt
  return { altText, imageUrl, public_id, width, height }
}
