import { ContentfulCategoryType } from '@/types/categoriesType'
import contentfulClient from '../contentful/contentfulClient'
import { parseContentfulImage } from '../helpers/parseContentfulImage'

export async function getContentfulCategories() {
  const response =
    await contentfulClient().client.getEntries<ContentfulCategoryType>({
      content_type: 'categories',
    })
  return response.items.map((item) => {
    const { title, thumbnail, slug } = item.fields
    return {
      title,
      slug,
      thumbnail: parseContentfulImage(thumbnail),
    }
  })
}
