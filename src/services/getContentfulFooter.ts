import contentfulClient from '@/contentful/contentfulClient'
import { ContentfulFooterType } from '@/types/footerType'

export async function getContentfulFooter() {
  const response =
    await contentfulClient().client.getEntries<ContentfulFooterType>({
      content_type: 'footerContent',
    })
  if (!response) return null
  return {
    about: response.items[0].fields.about,
    copyright: response.items[0].fields.copyright,
  }
}
