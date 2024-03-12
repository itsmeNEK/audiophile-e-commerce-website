import { GetRecommendProductsQuery } from '@/__generated__/graphql'
import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'

const QUERY_CAT = gql`
  query getRecommendProducts($slug: String!) {
    productsCollection(where: { slug_not: $slug }, limit: 3) {
      items {
        title
        slug
        thumbnail
        category {
          ... on Categories {
            slug
          }
        }
      }
    }
  }
`

async function getRecommendProducts(slug: string) {
  const queryOptions = {
    query: QUERY_CAT,
    variables: { slug: slug },
  }
  const data: GetRecommendProductsQuery = await executeApolloQuery(queryOptions)

  return data?.productsCollection?.items
}

export default getRecommendProducts
