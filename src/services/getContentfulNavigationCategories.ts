import {
  ContentfulCategoryType,
  parsedCategoryType,
} from '@/types/categoriesType'
import contentfulClient from '../contentful/contentfulClient'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
export async function getContentfulNavigationCategories() {
  const categories: parsedCategoryType[] = []
  const response =
    await contentfulClient().client.getEntries<ContentfulCategoryType>({
      content_type: 'categories',
    })
  const data = response.items

  const navigation = data.map((item) => {
    const { title, link, category } = item.fields
    return {
      title,
      link,
      category,
    }
  })
  data.map((item) => {
    const { title, thumbnail, link, category } = item.fields
    if (category)
      categories.push({
        title,
        link,
        category,
        thumbnail: parseContentfulImage(thumbnail[0]),
      })
  })
  return {
    navigation: navigation,
    categories: categories,
  }
}
