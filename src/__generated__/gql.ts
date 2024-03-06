/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query getBanner($page: String!, $bannerType: String!) {\n    bannerContentCollection(where: { page: $page, bannerType: $bannerType }) {\n      items {\n        title\n        description\n        thumbnail\n        emphasis\n        bannerType\n        tag\n        page\n        product {\n          ... on Products {\n            slug\n            category {\n              ... on Categories {\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetBannerDocument,
  '\n  query getCategories($isCategory: Boolean) {\n    categoriesCollection(where: { category: $isCategory }) {\n      items {\n        title\n        link\n        category\n        thumbnail\n      }\n    }\n  }\n':
    types.GetCategoriesDocument,
  '\n  query getFooter {\n    footerContentCollection {\n      items {\n        about\n        copyright\n      }\n    }\n  }\n':
    types.GetFooterDocument,
  '\n  query getProductBySlug($slug: String!) {\n    productsCollection(where: { slug: $slug }) {\n      items {\n        title\n        slug\n        description\n        features\n        price\n        thumbnail\n        gallery\n        inTheBox\n        emphasisInTheBox\n        tag\n      }\n    }\n  }\n':
    types.GetProductBySlugDocument,
  '\n  query getProductsByCategory($slug: String!) {\n    categoriesCollection(where: { slug: $slug }) {\n      items {\n        sys {\n          id\n        }\n        linkedFrom {\n          entryCollection {\n            items {\n              ... on Products {\n                title\n                thumbnail\n                description\n                tag\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetProductsByCategoryDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getBanner($page: String!, $bannerType: String!) {\n    bannerContentCollection(where: { page: $page, bannerType: $bannerType }) {\n      items {\n        title\n        description\n        thumbnail\n        emphasis\n        bannerType\n        tag\n        page\n        product {\n          ... on Products {\n            slug\n            category {\n              ... on Categories {\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getBanner($page: String!, $bannerType: String!) {\n    bannerContentCollection(where: { page: $page, bannerType: $bannerType }) {\n      items {\n        title\n        description\n        thumbnail\n        emphasis\n        bannerType\n        tag\n        page\n        product {\n          ... on Products {\n            slug\n            category {\n              ... on Categories {\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getCategories($isCategory: Boolean) {\n    categoriesCollection(where: { category: $isCategory }) {\n      items {\n        title\n        link\n        category\n        thumbnail\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getCategories($isCategory: Boolean) {\n    categoriesCollection(where: { category: $isCategory }) {\n      items {\n        title\n        link\n        category\n        thumbnail\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getFooter {\n    footerContentCollection {\n      items {\n        about\n        copyright\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getFooter {\n    footerContentCollection {\n      items {\n        about\n        copyright\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getProductBySlug($slug: String!) {\n    productsCollection(where: { slug: $slug }) {\n      items {\n        title\n        slug\n        description\n        features\n        price\n        thumbnail\n        gallery\n        inTheBox\n        emphasisInTheBox\n        tag\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getProductBySlug($slug: String!) {\n    productsCollection(where: { slug: $slug }) {\n      items {\n        title\n        slug\n        description\n        features\n        price\n        thumbnail\n        gallery\n        inTheBox\n        emphasisInTheBox\n        tag\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getProductsByCategory($slug: String!) {\n    categoriesCollection(where: { slug: $slug }) {\n      items {\n        sys {\n          id\n        }\n        linkedFrom {\n          entryCollection {\n            items {\n              ... on Products {\n                title\n                thumbnail\n                description\n                tag\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getProductsByCategory($slug: String!) {\n    categoriesCollection(where: { slug: $slug }) {\n      items {\n        sys {\n          id\n        }\n        linkedFrom {\n          entryCollection {\n            items {\n              ... on Products {\n                title\n                thumbnail\n                description\n                tag\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
