import { ContentfulCategoryType } from '@/types/categoriesType'
import contentfulClient from './contentful'
import { parseThumbnail } from './helpers/parseThumbnail'

export async function parseContentfulCategories() {
  const response =
    await contentfulClient().client.getEntries<ContentfulCategoryType>({
      content_type: 'categories',
    })
  return response.items.map((item) => {
    const { title, thumbnail, slug } = item.fields
    return {
      title,
      slug,
      thumbnail: parseThumbnail(thumbnail),
    }
  })
}
