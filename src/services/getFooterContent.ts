import executeApolloQuery from '@/apollo/ApolloClient'
import { gql } from '@apollo/client'
const QUERY = gql`
  query getFooter {
    footerContentCollection {
      items {
        about
        copyright
      }
    }
  }
`

export default async function getFooterContent() {
  const data = await executeApolloQuery({ query: QUERY })
  return data?.footerContentCollection?.items[0]
}
