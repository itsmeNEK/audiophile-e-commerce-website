import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import contentfulClient from '../contentful/contentfulClient'
import { ContentfulBannerType } from '@/types/BannerType'

export async function getContentfulPromotion() {
  const response =
    await contentfulClient().client.getEntries<ContentfulBannerType>({
      content_type: 'bannerContent',
    })
  if (!response) return null

  const data = response.items.filter(
    (item) => item.fields.bannerType === 'promotion'
  )
  if (data.length === 0) return null
  const { title, thumbnail, description, emphasis, bannerType } = data[0].fields
  return {
    title: title,
    description: description,
    emphasis: emphasis,
    bannerType: bannerType,
    thumbnail: parseContentfulImage(thumbnail[0]),
  }
}
