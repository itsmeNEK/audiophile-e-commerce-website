import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'

const QUERY_CAT = gql`
  query getProductBySlug($slug: String!) {
    productsCollection(where: { slug: $slug }) {
      items {
        title
        slug
        description
        features
        price
        thumbnail
        gallery
        inTheBox
        emphasisInTheBox
        tag
      }
    }
  }
`

async function getProductBySlug(slug: string) {
  const queryOptions = {
    query: QUERY_CAT,
    variables: { slug: slug },
  }
  const data = await executeApolloQuery(queryOptions)

  return data?.productsCollection?.items[0]
}

export default getProductBySlug
