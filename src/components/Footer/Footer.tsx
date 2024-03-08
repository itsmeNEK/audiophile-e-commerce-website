import MainFooter from './MainFooter/MainFooter'
import Banner from '../Banner/Banner'
import getBanner from '@/services/getBanner'

export default async function Footer() {
  const promotionBanner = await getBanner({
    page: 'promotion',
    bannerType: 'promotion',
  })
  return (
    <>
      {promotionBanner && <Banner data={promotionBanner} />}
      <MainFooter />
    </>
  )
}
