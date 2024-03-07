import { GetBannerQueryVariables } from '@/__generated__/graphql'
import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'
const QUERY = gql`
  query getBanner($page: String!, $bannerType: String!) {
    bannerContentCollection(where: { page: $page, bannerType: $bannerType }) {
      items {
        title
        description
        thumbnail
        emphasis
        bannerType
        tag
        product {
          sys {
            id
          }
        }
        page
      }
    }
  }
`
export default async function getBanner({
  page,
  bannerType,
}: GetBannerQueryVariables) {
  const data = await executeApolloQuery({
    query: QUERY,
    variables: { page: page, bannerType: bannerType },
  })

  return data
}
