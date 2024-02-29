import { CreateClientParams, createClient } from 'contentful'
const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  VERCEL_ENV,
} = process.env
export default function contentfulClient() {
  const isPreviewMode = VERCEL_ENV === 'preview'
  const space_id = CONTENTFUL_SPACE_ID ? CONTENTFUL_SPACE_ID : ''
  const token = isPreviewMode
    ? CONTENTFUL_PREVIEW_ACCESS_TOKEN!
    : CONTENTFUL_ACCESS_TOKEN ?? ''
  const contentHost = isPreviewMode
    ? 'preview.contentful.com'
    : 'cdn.contentful.com'

  const params: CreateClientParams & { accessToken: string } = {
    space: space_id,
    environment: 'master',
    accessToken: token,
    host: contentHost,
  }
  const client = createClient(params)

  return {
    client: client,
    revalidate: 60,
  }
}
