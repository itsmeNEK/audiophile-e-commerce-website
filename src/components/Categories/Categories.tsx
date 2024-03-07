import Style from './Categories.module.scss'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js'
import { CategoryType } from '@/types/categoriesType'
import Image from 'next/image'
import { parseContentfulImage } from '@/helpers/parseContentfulImage'

type CategoriesProps = {
  categories: CategoryType[]
}
export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className={Style['categories']}>
      <ul className={Style['categories__list']}>
        {categories?.map((item, index) => {
          const { thumbnail, title, link } = item
          const imageData = parseContentfulImage(thumbnail[0])
          return (
            <li key={index}>
              <Image
                priority
                className={Style['categories__image']}
                src={imageData.imageUrl}
                alt={imageData.altText}
                width={imageData.width}
                height={imageData.height}
                quality={100}
              />
              <h2 className={Style['categories__title']}>{title}</h2>
              <div className={Style['categories__action']}>
                <Link href={link} className={Style['categories__action__link']}>
                  <span>shop</span>
                  <Icon path={mdiChevronRight} size={1} />
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
