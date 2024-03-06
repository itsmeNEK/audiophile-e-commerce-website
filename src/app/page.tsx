import Banner from '@/components/Banner/Banner'
import Categories from '@/components/Categories/Categories'
import getBanner from '@/services/getBanner'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'

export default async function Home() {
  const hero_banner = await getBanner({
    pageQ: 'homepage',
    bannerTypeQ: 'hero',
  })
  const featured_banner = await getBanner({
    pageQ: 'homepage',
    bannerTypeQ: 'featured',
  })
  const secondary_banner = await getBanner({
    pageQ: 'homepage',
    bannerTypeQ: 'background',
  })
  const card_banner = await getBanner({
    pageQ: 'homepage',
    bannerTypeQ: 'card',
  })
  const categories = await getCategoriesNavigation({ isCategory: true })

  return (
    <main>
      {hero_banner && <Banner data={hero_banner} />}
      <div className='wrapper'>
        <Categories categories={categories} />
      </div>
      {featured_banner && <Banner data={featured_banner} />}
      {secondary_banner && <Banner data={secondary_banner} />}
      {card_banner && <Banner data={card_banner} />}
    </main>
  )
}
