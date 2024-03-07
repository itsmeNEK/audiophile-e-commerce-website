export type ThumbnailType = {
  secure_url: string
  public_id: string
  context: {
    custom: {
      alt: string
      caption: string
    }
  }
}

export type ParsedImage = {
  altText: string
  public_id?: string
  imageUrl: string
  width: number
  height: number
}
