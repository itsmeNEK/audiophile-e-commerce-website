import { GetBannerQueryVariables } from '@/__generated__/graphql'
import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'
const QUERY = gql`
  query getBanner($pageQ: String!, $bannerTypeQ: String!) {
    bannerContentCollection(where: { page: $pageQ, bannerType: $bannerTypeQ }) {
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
  pageQ,
  bannerTypeQ,
}: GetBannerQueryVariables) {
  const data = await executeApolloQuery({
    query: QUERY,
    variables: { pageQ: pageQ, bannerTypeQ: bannerTypeQ },
  })

  return data
}
