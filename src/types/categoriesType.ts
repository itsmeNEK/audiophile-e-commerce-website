export type ImageFileType = {
  fields: {
    title: string
    file: {
      url: string
    }
  }
}
export type ThumbnailType = {
  fields: {
    altText: string
    imageFile: ImageFileType
  }
}
export type CategoryType = {
  title: string
  slug: string
  thumbnail: ThumbnailType
}
export type ContentfulCategoryType = {
  contentTypeId: string
  fields: {
    title: string
    slug: string
    thumbnail: CategoryType
  }
}

export type parsedThumbnailType = {
  title: string
  slug: string
  thumbnail: {
    altText: string
    imageUrl: string
  }
}
