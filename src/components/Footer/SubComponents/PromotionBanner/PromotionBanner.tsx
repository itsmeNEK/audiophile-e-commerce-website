import { getContentfulPromotion } from '@/services/getContentfulPromotion'
import Style from './PromotionBanner.module.scss'
import Image from 'next/image'
import parseTextWithSpan from '@/helpers/parseTextWithSpan'
export default async function PromotionBanner() {
  const promotion = await getContentfulPromotion()
  if (!promotion) return
  const { title, description, thumbnail, thumbnailTablet, thumbnailDesktop } =
    promotion
  return (
    <div className='wrapper'>
      <div className={Style['promotion']}>
        <div className={Style['promotion__image']}>
          <picture>
            <source
              media='(min-width: 40rem) and (max-width: 62rem)'
              srcSet={thumbnailTablet.imageUrl}
            />
            <source
              media='(min-width: 62rem)'
              srcSet={thumbnailDesktop.imageUrl}
            />
            <Image
              priority
              className={Style['promotion__image']}
              src={thumbnail.imageUrl}
              alt={thumbnail.altText}
              sizes='(min-width: 40rem) 700px, (min-width: 62rem) 1300px, 400px'
              width={400}
              height={300}
            />
          </picture>
        </div>
        <div className={Style['promotion__details']}>
          <h2>{parseTextWithSpan(title)}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
