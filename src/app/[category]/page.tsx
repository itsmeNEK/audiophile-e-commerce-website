import React from 'react'
import notFound from './not-found'
import getProductsByCategory from '@/services/getProductsByCategory'
import Style from './page.module.scss'
import ProductBanner from '@/components/ProductBanner/ProductBanner'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'
import Categories from '@/components/Categories/Categories'

type CategoryParamsType = {
  params: {
    category: string
  }
}

export default async function page({ params }: CategoryParamsType) {
  const category = params.category
  const data = await getProductsByCategory(category)
  if (!data) return notFound()

  const products = data.linkedFrom?.entryCollection?.items
  const categories = await getCategoriesNavigation({ isCategory: true })
  return (
    <main>
      <div className={Style['category-banner']}>
        <h1>{category}</h1>
      </div>
      <div className='wrapper'>
        <div className={Style['products']}>
          {products?.map((item, index) => {
            if (!item) return null
            if (item.__typename !== 'Products') return null
            const { title, thumbnail, tag, description, slug } = item
            return (
              <ProductBanner
                key={index}
                title={title}
                thumbnail={thumbnail}
                tag={tag}
                description={description}
                slug={slug}
                category={category}
                bannerType={index % 2 !== 0 ? 'left' : ''}
              />
            )
          })}
        </div>
        {categories && <Categories categories={categories} />}
      </div>
    </main>
  )
}
