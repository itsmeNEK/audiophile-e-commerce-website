import { GetCategoriesQueryVariables } from '@/__generated__/graphql'
import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'

const QUERY_CAT = gql`
  query getCategories($isCategory: Boolean) {
    categoriesCollection(where: { category: $isCategory }) {
      items {
        title
        link
        category
        slug
        thumbnail
      }
    }
  }
`

async function getCategoriesNavigation(
  isCategory?: GetCategoriesQueryVariables
) {
  const queryOptions = {
    query: QUERY_CAT,
    ...(isCategory && { variables: { isCategory: true } }),
  }
  const data = await executeApolloQuery(queryOptions)

  return data?.categoriesCollection?.items
}

export default getCategoriesNavigation
