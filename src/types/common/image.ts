export type ThumbnailType = {
  secure_url: string
  height: number
  width: number
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
