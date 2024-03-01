import { ThumbnailType } from '@/types/categoriesType'

export function parseContentfulImage(data: ThumbnailType) {
  const altText: string = data.fields.altText || ''
  const imageUrl: string =
    'https:' + data.fields.imageFile.fields.file.url || ''

  return { altText, imageUrl }
}
