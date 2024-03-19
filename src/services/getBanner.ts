import { GetBannerQueryVariables } from '@/__generated__/graphql'
import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'
const QUERY = gql`
  query getBanner($page: String!, $bannerTypes: [String!]!) {
    bannerContentCollection(
      where: { page: $page, bannerType_in: $bannerTypes }
      order: sys_firstPublishedAt_ASC
    ) {
      items {
        title
        description
        thumbnail
        emphasis
        bannerType
        tag
        page
        product {
          ... on Products {
            slug
            category {
              ... on Categories {
                slug
              }
            }
          }
        }
      }
    }
  }
`
export default async function getBanner({
  page,
  bannerTypes,
}: GetBannerQueryVariables) {
  const data = await executeApolloQuery({
    query: QUERY,
    variables: { page: page, bannerTypes: bannerTypes },
  })

  return data.bannerContentCollection.items
}
