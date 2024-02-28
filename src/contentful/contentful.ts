import { CreateClientParams, createClient } from 'contentful'
const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  VERCEL_ENV,
} = process.env
export default function contentfulClient() {
  const isPreviewMode = VERCEL_ENV === 'preview'

  const params: CreateClientParams & { accessToken: string } = {
    space: CONTENTFUL_SPACE_ID!,
    environment: 'master',
    accessToken: isPreviewMode
      ? CONTENTFUL_PREVIEW_ACCESS_TOKEN!
      : CONTENTFUL_ACCESS_TOKEN!,
    host: isPreviewMode ? 'preview.contentful.com' : 'cdn.contentful.com',
  }
  const client = createClient(params)

  return {
    client: client,
    revalidate: 60,
  }
}