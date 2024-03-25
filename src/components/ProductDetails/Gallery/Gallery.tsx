import { ParsedImage } from '@/types/common/image'
import Style from './Gallery.module.scss'
import Image from 'next/image'

type GalleryProps = {
  galleryImages?: ParsedImage[]
}

export default function Gallery({ galleryImages }: GalleryProps) {
  if (!galleryImages) return null
  return (
    <section className={Style['gallery']}>
      {galleryImages.map((item, index) => (
        <Image
          key={index}
          className={Style['gallery__image']}
          src={item.imageUrl}
          width={item.width}
          height={item.height}
          alt={item.altText}
          quality={100}
        />
      ))}
    </section>
  )
}
