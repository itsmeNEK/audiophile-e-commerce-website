import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import contentfulClient from '../contentful/contentfulClient'
import { ContentfulPromotionType } from '@/types/promotionType'

export async function getContentfulPromotion() {
  const response =
    await contentfulClient().client.getEntries<ContentfulPromotionType>({
      content_type: 'promotions',
    })
  if (!response) return null
  return {
    title: response.items[0].fields.title as string,
    description: response.items[0].fields.description as string,
    thumbnail: parseContentfulImage(response.items[0].fields.thumbnail),
    thumbnailTablet: parseContentfulImage(
      response.items[0].fields.thumbnailTablet
    ),
    thumbnailDesktop: parseContentfulImage(
      response.items[0].fields.thumbnailDesktop
    ),
  }
}
