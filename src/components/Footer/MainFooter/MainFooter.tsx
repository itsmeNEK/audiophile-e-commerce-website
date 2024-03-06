import Link from 'next/link'
import Style from './MainFooter.module.scss'
import LogoSvgIcon from '@/components/common/svg/LogoSvgIcon'
import Icon from '@mdi/react'
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js'
import NavLinks from '@/components/NavLinks/NavLinks'
import getFooterContent from '@/services/getFooterContent'
import getCategoriesNavigation from '@/services/getCategoriesNavigation'
export default async function MainFooter() {
  const navigation = await getCategoriesNavigation({
    isCategory: true,
  })
  const footerContent = await getFooterContent()

  return (
    <footer className={Style['footer']}>
      <div className={`${Style['wrapper']} wrapper`}>
        <div className={Style['footer__navigation']}>
          <Link href='/' className={Style['footer__navigation__brand']}>
            <LogoSvgIcon aria-hidden />
          </Link>
          <NavLinks navigation={navigation} />
        </div>
        <div className={Style['footer__info']}>
          <p className={Style['footer__info__details']}>
            {footerContent?.about}
          </p>
          <div className={Style['footer__info__copyright']}>
            {footerContent?.copyright}
          </div>
          <div className={Style['footer__info__social']}>
            <Link href='/'>
              <Icon
                size={1.5}
                title='Facebook Link'
                path={mdiFacebook}
                color='white'
              ></Icon>
            </Link>
            <Link href='/'>
              <Icon
                size={1.5}
                title='Twitter Link'
                path={mdiTwitter}
                color='white'
              ></Icon>
            </Link>
            <Link href='/'>
              <Icon
                size={1.5}
                title='Instagram Link'
                path={mdiInstagram}
                color='white'
              ></Icon>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
