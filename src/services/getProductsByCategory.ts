import { GetProductsByCategoryQuery } from '@/__generated__/graphql'
import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'

const QUERY_CAT = gql`
  query getProductsByCategory($slug: String!) {
    categoriesCollection(where: { slug: $slug }) {
      items {
        sys {
          id
        }
        linkedFrom {
          entryCollection {
            items {
              ... on Products {
                title
                thumbnail
                description
                tag
                slug
                sys {
                  publishedAt
                }
              }
            }
          }
        }
      }
    }
  }
`

async function getProductsByCategory(slug: string) {
  const queryOptions = {
    query: QUERY_CAT,
    variables: { slug: slug },
  }
  const data: GetProductsByCategoryQuery =
    await executeApolloQuery(queryOptions)

  return data?.categoriesCollection?.items[0]
}

export default getProductsByCategory
