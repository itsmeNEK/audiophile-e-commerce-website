import Image from 'next/image'
import Style from './Categories.module.scss'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js'
import { parsedThumbnailType } from '@/types/categoriesType'
type CategoriesProps = {
  categories: parsedThumbnailType[]
}
export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className={Style['categories']}>
      <ul className={Style['categories__list']}>
        {categories.map((item: parsedThumbnailType, index: number) => {
          return (
            <li key={index}>
              <Image
                priority
                className={Style['categories__image']}
                src={item.thumbnail.imageUrl}
                alt={item.thumbnail.altText}
                width={200}
                height={170}
              />
              <h2 className={Style['categories__title']}>{item.title}</h2>
              <div className={Style['categories__action']}>
                <Link
                  href={`/categories/${item.slug}`}
                  className={Style['categories__action__link']}
                >
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