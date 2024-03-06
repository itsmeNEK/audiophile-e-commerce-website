/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */

export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any }
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  fileName?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Int']['output']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Int']['output']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']['input']>
  contentType_contains?: InputMaybe<Scalars['String']['input']>
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentType_not?: InputMaybe<Scalars['String']['input']>
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName?: InputMaybe<Scalars['String']['input']>
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName_not?: InputMaybe<Scalars['String']['input']>
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  height?: InputMaybe<Scalars['Int']['input']>
  height_exists?: InputMaybe<Scalars['Boolean']['input']>
  height_gt?: InputMaybe<Scalars['Int']['input']>
  height_gte?: InputMaybe<Scalars['Int']['input']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  height_lt?: InputMaybe<Scalars['Int']['input']>
  height_lte?: InputMaybe<Scalars['Int']['input']>
  height_not?: InputMaybe<Scalars['Int']['input']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size?: InputMaybe<Scalars['Int']['input']>
  size_exists?: InputMaybe<Scalars['Boolean']['input']>
  size_gt?: InputMaybe<Scalars['Int']['input']>
  size_gte?: InputMaybe<Scalars['Int']['input']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size_lt?: InputMaybe<Scalars['Int']['input']>
  size_lte?: InputMaybe<Scalars['Int']['input']>
  size_not?: InputMaybe<Scalars['Int']['input']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  width?: InputMaybe<Scalars['Int']['input']>
  width_exists?: InputMaybe<Scalars['Boolean']['input']>
  width_gt?: InputMaybe<Scalars['Int']['input']>
  width_gte?: InputMaybe<Scalars['Int']['input']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  width_lt?: InputMaybe<Scalars['Int']['input']>
  width_lte?: InputMaybe<Scalars['Int']['input']>
  width_not?: InputMaybe<Scalars['Int']['input']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContent = Entry & {
  __typename?: 'BannerContent'
  bannerType?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  emphasis?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<BannerContentLinkingCollections>
  page?: Maybe<Scalars['String']['output']>
  product?: Maybe<Entry>
  sys: Sys
  tag?: Maybe<Scalars['String']['output']>
  thumbnail?: Maybe<Scalars['JSON']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentBannerTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentEmphasisArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentProductArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentTagArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/bannerContent) */
export type BannerContentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type BannerContentCollection = {
  __typename?: 'BannerContentCollection'
  items: Array<Maybe<BannerContent>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type BannerContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<BannerContentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<BannerContentFilter>>>
  bannerType?: InputMaybe<Scalars['String']['input']>
  bannerType_contains?: InputMaybe<Scalars['String']['input']>
  bannerType_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  bannerType_not?: InputMaybe<Scalars['String']['input']>
  bannerType_not_contains?: InputMaybe<Scalars['String']['input']>
  bannerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  emphasis?: InputMaybe<Scalars['String']['input']>
  emphasis_contains?: InputMaybe<Scalars['String']['input']>
  emphasis_exists?: InputMaybe<Scalars['Boolean']['input']>
  emphasis_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  emphasis_not?: InputMaybe<Scalars['String']['input']>
  emphasis_not_contains?: InputMaybe<Scalars['String']['input']>
  emphasis_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  page?: InputMaybe<Scalars['String']['input']>
  page_contains?: InputMaybe<Scalars['String']['input']>
  page_exists?: InputMaybe<Scalars['Boolean']['input']>
  page_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  page_not?: InputMaybe<Scalars['String']['input']>
  page_not_contains?: InputMaybe<Scalars['String']['input']>
  page_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  product_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
  tag?: InputMaybe<Scalars['String']['input']>
  tag_contains?: InputMaybe<Scalars['String']['input']>
  tag_exists?: InputMaybe<Scalars['Boolean']['input']>
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  tag_not?: InputMaybe<Scalars['String']['input']>
  tag_not_contains?: InputMaybe<Scalars['String']['input']>
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BannerContentLinkingCollections = {
  __typename?: 'BannerContentLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type BannerContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum BannerContentOrder {
  BannerTypeAsc = 'bannerType_ASC',
  BannerTypeDesc = 'bannerType_DESC',
  EmphasisAsc = 'emphasis_ASC',
  EmphasisDesc = 'emphasis_DESC',
  PageAsc = 'page_ASC',
  PageDesc = 'page_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TagAsc = 'tag_ASC',
  TagDesc = 'tag_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/categories) */
export type Categories = Entry & {
  __typename?: 'Categories'
  category?: Maybe<Scalars['Boolean']['output']>
  contentfulMetadata: ContentfulMetadata
  link?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<CategoriesLinkingCollections>
  slug?: Maybe<Scalars['String']['output']>
  sys: Sys
  thumbnail?: Maybe<Scalars['JSON']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/categories) */
export type CategoriesCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/categories) */
export type CategoriesLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/categories) */
export type CategoriesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/categories) */
export type CategoriesSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/categories) */
export type CategoriesThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/categories) */
export type CategoriesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type CategoriesCollection = {
  __typename?: 'CategoriesCollection'
  items: Array<Maybe<Categories>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type CategoriesFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoriesFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CategoriesFilter>>>
  category?: InputMaybe<Scalars['Boolean']['input']>
  category_exists?: InputMaybe<Scalars['Boolean']['input']>
  category_not?: InputMaybe<Scalars['Boolean']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  link?: InputMaybe<Scalars['String']['input']>
  link_contains?: InputMaybe<Scalars['String']['input']>
  link_exists?: InputMaybe<Scalars['Boolean']['input']>
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  link_not?: InputMaybe<Scalars['String']['input']>
  link_not_contains?: InputMaybe<Scalars['String']['input']>
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Scalars['String']['input']>
  slug_contains?: InputMaybe<Scalars['String']['input']>
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug_not?: InputMaybe<Scalars['String']['input']>
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategoriesLinkingCollections = {
  __typename?: 'CategoriesLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type CategoriesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum CategoriesOrder {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/footerContent) */
export type FooterContent = Entry & {
  __typename?: 'FooterContent'
  about?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  copyright?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<FooterContentLinkingCollections>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/footerContent) */
export type FooterContentAboutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/footerContent) */
export type FooterContentCopyrightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/footerContent) */
export type FooterContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FooterContentCollection = {
  __typename?: 'FooterContentCollection'
  items: Array<Maybe<FooterContent>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type FooterContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterContentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<FooterContentFilter>>>
  about?: InputMaybe<Scalars['String']['input']>
  about_contains?: InputMaybe<Scalars['String']['input']>
  about_exists?: InputMaybe<Scalars['Boolean']['input']>
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  about_not?: InputMaybe<Scalars['String']['input']>
  about_not_contains?: InputMaybe<Scalars['String']['input']>
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  copyright?: InputMaybe<Scalars['String']['input']>
  copyright_contains?: InputMaybe<Scalars['String']['input']>
  copyright_exists?: InputMaybe<Scalars['Boolean']['input']>
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  copyright_not?: InputMaybe<Scalars['String']['input']>
  copyright_not_contains?: InputMaybe<Scalars['String']['input']>
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type FooterContentLinkingCollections = {
  __typename?: 'FooterContentLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type FooterContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum FooterContentOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type Products = Entry & {
  __typename?: 'Products'
  category?: Maybe<Entry>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  emphasisInTheBox?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  fetures?: Maybe<Scalars['String']['output']>
  gallery?: Maybe<Scalars['JSON']['output']>
  inTheBox?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  linkedFrom?: Maybe<ProductsLinkingCollections>
  price?: Maybe<Scalars['Float']['output']>
  sys: Sys
  thumbnail?: Maybe<Scalars['JSON']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsEmphasisInTheBoxArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsFeturesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsGalleryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsInTheBoxArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/029u4b3vw08t/content_types/products) */
export type ProductsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ProductsCollection = {
  __typename?: 'ProductsCollection'
  items: Array<Maybe<Products>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ProductsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductsFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProductsFilter>>>
  category_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  emphasisInTheBox_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  emphasisInTheBox_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  emphasisInTheBox_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  emphasisInTheBox_exists?: InputMaybe<Scalars['Boolean']['input']>
  fetures?: InputMaybe<Scalars['String']['input']>
  fetures_contains?: InputMaybe<Scalars['String']['input']>
  fetures_exists?: InputMaybe<Scalars['Boolean']['input']>
  fetures_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fetures_not?: InputMaybe<Scalars['String']['input']>
  fetures_not_contains?: InputMaybe<Scalars['String']['input']>
  fetures_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  gallery_exists?: InputMaybe<Scalars['Boolean']['input']>
  inTheBox_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  inTheBox_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  inTheBox_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  inTheBox_exists?: InputMaybe<Scalars['Boolean']['input']>
  price?: InputMaybe<Scalars['Float']['input']>
  price_exists?: InputMaybe<Scalars['Boolean']['input']>
  price_gt?: InputMaybe<Scalars['Float']['input']>
  price_gte?: InputMaybe<Scalars['Float']['input']>
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  price_lt?: InputMaybe<Scalars['Float']['input']>
  price_lte?: InputMaybe<Scalars['Float']['input']>
  price_not?: InputMaybe<Scalars['Float']['input']>
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  sys?: InputMaybe<SysFilter>
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProductsLinkingCollections = {
  __typename?: 'ProductsLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ProductsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ProductsOrder {
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type Query = {
  __typename?: 'Query'
  _node?: Maybe<_Node>
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  bannerContent?: Maybe<BannerContent>
  bannerContentCollection?: Maybe<BannerContentCollection>
  categories?: Maybe<Categories>
  categoriesCollection?: Maybe<CategoriesCollection>
  entryCollection?: Maybe<EntryCollection>
  footerContent?: Maybe<FooterContent>
  footerContentCollection?: Maybe<FooterContentCollection>
  products?: Maybe<Products>
  productsCollection?: Maybe<ProductsCollection>
}

export type Query_NodeArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetFilter>
}

export type QueryBannerContentArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryBannerContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<BannerContentOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BannerContentFilter>
}

export type QueryCategoriesArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryCategoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<CategoriesOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoriesFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<EntryFilter>
}

export type QueryFooterContentArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFooterContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<FooterContentOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FooterContentFilter>
}

export type QueryProductsArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ProductsOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProductsFilter>
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']['output']
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  publishedVersion?: Maybe<Scalars['Int']['output']>
  spaceId: Scalars['String']['output']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  id?: InputMaybe<Scalars['String']['input']>
  id_contains?: InputMaybe<Scalars['String']['input']>
  id_exists?: InputMaybe<Scalars['Boolean']['input']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_not?: InputMaybe<Scalars['String']['input']>
  id_not_contains?: InputMaybe<Scalars['String']['input']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedVersion?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
}

export type _Node = {
  _id: Scalars['ID']['output']
}

export type GetBannerQueryVariables = Exact<{
  pageQ: Scalars['String']['input']
  bannerTypeQ: Scalars['String']['input']
}>

export type GetBannerQuery = {
  __typename: 'Query'
  bannerContentCollection: {
    __typename: 'BannerContentCollection'
    items: Array<{
      __typename: 'BannerContent'
      title: string
      description: string | null
      thumbnail: any | null
      emphasis: string | null
      bannerType: string
      tag: string | null
      page: string | null
      product?:
        | {
            __typename: 'BannerContent'
            sys: {
              __typename: 'Sys'
              id: string
            }
          }
        | {
            __typename: 'Categories'
            sys: {
              __typename: 'Sys'
              id: string
            }
          }
        | {
            __typename: 'FooterContent'
            sys: {
              __typename: 'Sys'
              id: string
            }
          }
        | {
            __typename: 'Products'
            sys: {
              __typename: 'Sys'
              id: string
            }
          }
    }>
  }
}

export type GetCategoriesQueryVariables = Exact<{
  isCategory?: InputMaybe<Scalars['Boolean']['input']>
}>

export type GetCategoriesQuery = {
  __typename?: 'Query'
  categoriesCollection?: {
    __typename?: 'CategoriesCollection'
    items: Array<{
      __typename?: 'Categories'
      title?: string | null
      link?: string | null
      category?: boolean | null
      thumbnail?: any | null
    } | null>
  } | null
}

export type GetFooterQueryVariables = Exact<{ [key: string]: never }>

export type GetFooterQuery = {
  __typename?: 'Query'
  footerContentCollection?: {
    __typename?: 'FooterContentCollection'
    items: Array<{
      __typename?: 'FooterContent'
      about?: string | null
      copyright?: string | null
    } | null>
  } | null
}

export const GetBannerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getBanner' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageQ' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'bannerTypeQ' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bannerContentCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'page' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'pageQ' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'bannerType' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'bannerTypeQ' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnail' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emphasis' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bannerType' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'product' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sys' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBannerQuery, GetBannerQueryVariables>
export const GetCategoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCategories' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isCategory' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categoriesCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'category' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isCategory' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnail' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>
export const GetFooterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getFooter' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'footerContentCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'copyright' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFooterQuery, GetFooterQueryVariables>
