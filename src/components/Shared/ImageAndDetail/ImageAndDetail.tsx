import Image from 'next/image'
import Style from './ImageAndDetail.module.scss'
import { ParsedImage } from '../../../types/common/image'
import { ReactNode } from 'react'

type ImageAndDetailProps = {
  children: ReactNode
  image?: ParsedImage
  tag?: string | null
  title?: string | null
  description?: string | null
}

export default function ImageAndDetail({
  children,
  image,
  tag,
  title,
  description,
}: ImageAndDetailProps) {
  return (
    <>
      {image && (
        <div className={Style['image-container']}>
          <Image
            priority
            src={image.imageUrl}
            alt={image.altText}
            width={image.width}
            height={image.height}
            quality={100}
          />
        </div>
      )}

      <div className={Style['content']}>
        <div>
          {tag && <span>{tag}</span>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          {children}
        </div>
      </div>
    </>
  )
}
