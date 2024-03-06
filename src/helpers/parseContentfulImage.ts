import { ThumbnailType } from '@/types/common/image'

export function parseContentfulImage(data: ThumbnailType) {
  const { secure_url, public_id, context, width, height } = data
  const imageUrl = secure_url
  const imagePublicId = public_id
  const altText = context.custom.alt
  return { altText, imageUrl, imagePublicId, width, height }
}
