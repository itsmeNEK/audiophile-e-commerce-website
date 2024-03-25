import Banner from '@/components/Shared/Banner/Banner'
import Categories from '@/components/Shared/Categories/Categories'
import getBanner from '@/services/getBanner'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'
import { BannerType } from '@/types/bannerType'

export default async function Homepage() {
  const bannerTypes = ['hero', 'featured', 'background', 'card']
  const banners = await getBanner({
    page: 'homepage',
    bannerTypes,
  })
  const categories = await getCategoriesNavigation({ isCategory: true })

  const heroBanner = banners.find(
    (item: BannerType) => item.bannerType === 'hero'
  )
  const featuredBanners = banners.filter(
    (item: BannerType) => item.bannerType !== 'hero'
  )

  return (
    <>
      <Banner data={heroBanner} />
      <Categories categories={categories} />
      {featuredBanners.map((item: BannerType, index: number) => {
        return <Banner key={index} data={item} />
      })}
    </>
  )
}
