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
