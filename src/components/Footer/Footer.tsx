import MainFooter from './MainFooter/MainFooter'
import Banner from '../Shared/Banner/Banner'
import getBanner from '@/services/getBanner'

export default async function Footer() {
  const promotionBanner = await getBanner({
    page: 'promotion',
    bannerTypes: ['promotion'],
  })
  return (
    <>
      {promotionBanner.length > 0 && <Banner data={promotionBanner[0]} />}
      <MainFooter />
    </>
  )
}
