import { getContentfulPromotion } from '@/services/getContentfulPromotion'
import MainFooter from './MainFooter/MainFooter'
import Banner from '../Banner/Banner'

export default async function Footer() {
  const promotionBanner = await getContentfulPromotion()
  return (
    <>
      {promotionBanner && <Banner data={promotionBanner} />}
      <MainFooter />
    </>
  )
}
