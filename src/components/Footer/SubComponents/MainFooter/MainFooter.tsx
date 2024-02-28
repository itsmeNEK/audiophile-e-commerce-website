import Link from 'next/link'
import Style from './MainFooter.module.scss'
import LogoSvgIcon from '@/components/common/svg/LogoSvgIcon'
import { parsedCategoryType } from '@/types/categoriesType'
import { getContentfulCategories } from '@/services/getContentfulCategories'
import Icon from '@mdi/react'
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js'
export default async function MainFooter() {
  const categories = await getContentfulCategories()
  return (
    <footer className={Style['footer']}>
      <div className={`${Style['wrapper']} wrapper`}>
        <div className={Style['footer__navigation']}>
          <Link href='/' className={Style['footer__navigation__brand']}>
            <LogoSvgIcon aria-hidden />
          </Link>
          <ul className={Style['footer__navigation__links']}>
            <Link href='/'>
              <li>Home</li>
            </Link>
            {categories.map((item: parsedCategoryType, index: number) => {
              return (
                <Link key={index} href={`/categories/${item.slug}`}>
                  <li>{item.title}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className={Style['footer__info']}>
          <p className={Style['footer__info__details']}>
            {`Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.`}
          </p>
          <div className={Style['footer__info__copyright']}>
            Copyright 2021. All Rights Reserved
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
