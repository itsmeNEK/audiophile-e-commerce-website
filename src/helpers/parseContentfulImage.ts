import { ThumbnailType } from '@/types/common/image'

export function parseContentfulImage(data: ThumbnailType) {
  const imageUrl: string = data.secure_url
  const imagePublicId: string = data.public_id
  const altText: string = data.context.custom.alt
  return { altText, imageUrl, imagePublicId }
}
