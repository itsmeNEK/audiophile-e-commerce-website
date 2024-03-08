import Banner from '@/components/Banner/Banner'
import Categories from '@/components/Categories/Categories'
import getBanner from '@/services/getBanner'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'

export default async function Home() {
  const heroBanner = await getBanner({
    page: 'homepage',
    bannerType: 'hero',
  })
  const featuredBanner = await getBanner({
    page: 'homepage',
    bannerType: 'featured',
  })
  const backgroundBanner = await getBanner({
    page: 'homepage',
    bannerType: 'background',
  })
  const cardBanner = await getBanner({
    page: 'homepage',
    bannerType: 'card',
  })
  const categories = await getCategoriesNavigation({ isCategory: true })

  return (
    <main>
      {heroBanner && <Banner data={heroBanner} />}
      <div className='wrapper'>
        <Categories categories={categories} />
      </div>
      {featuredBanner && <Banner data={featuredBanner} />}
      {backgroundBanner && <Banner data={backgroundBanner} />}
      {cardBanner && <Banner data={cardBanner} />}
    </main>
  )
}
