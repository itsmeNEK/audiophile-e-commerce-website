import {
  ApolloClient,
  DocumentNode,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  CONTENTFUL_ENVIRONMENT,
  VERCEL_ENV,
} = process.env

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`,
})

const authLink = setContext((_, { headers }) => {
  const TOKEN =
    VERCEL_ENV === 'preview'
      ? CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : CONTENTFUL_ACCESS_TOKEN
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${TOKEN}`,
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

type QueryOptions = {
  query: DocumentNode
  variables?: Record<string, string | boolean | number>
}
async function executeApolloQuery(queryOptions: QueryOptions) {
  try {
    const { data } = await apolloClient.query(queryOptions)

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Error fetching data')
  }
}
export default executeApolloQuery
