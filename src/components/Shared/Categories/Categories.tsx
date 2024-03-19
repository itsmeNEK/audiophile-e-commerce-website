'use client'
import Style from './Categories.module.scss'
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js'
import { CategoryType } from '@/types/categoriesType'
import Image from 'next/image'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import { useCartContext } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

type CategoriesProps = {
  categories: CategoryType[]
}
export default function Categories({ categories }: CategoriesProps) {
  const router = useRouter()
  const { showTopNav, setShowTopNav } = useCartContext()

  const handleClick = (slug: string) => () => {
    if (showTopNav) setShowTopNav(!showTopNav)
    router.push(`/${slug}`)
  }
  return (
    <div className='wrapper'>
      <div className={Style['categories']}>
        <ul className={Style['categories__list']}>
          {categories?.map((item, index) => {
            const { thumbnail, title, slug } = item
            const parsedThumbnail = parseContentfulImage(thumbnail[0])
            return (
              <li key={index}>
                <Image
                  priority
                  className={Style['categories__image']}
                  src={parsedThumbnail.imageUrl}
                  alt={parsedThumbnail.altText}
                  width={parsedThumbnail.width}
                  height={parsedThumbnail.height}
                  quality={100}
                />
                <h2 className={Style['categories__title']}>{title}</h2>
                <div className={Style['categories__action']}>
                  <PrimaryButton
                    type='button'
                    onClick={handleClick(slug)}
                    className={Style['categories__action__link']}
                  >
                    <span>shop</span>
                    <Icon path={mdiChevronRight} size={1} />
                  </PrimaryButton>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
