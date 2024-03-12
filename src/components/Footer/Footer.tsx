import MainFooter from './MainFooter/MainFooter'
import Banner from '../Shared/Banner/Banner'
import getBanner from '@/services/getBanner'
type FooterProps = {
  promotion?: boolean
}

export default async function Footer({ promotion }: FooterProps) {
  const promotionBanner = await getBanner({
    page: 'promotion',
    bannerType: 'promotion',
  })
  return (
    <>
      {promotionBanner && !promotion && <Banner data={promotionBanner} />}
      <MainFooter />
    </>
  )
}
