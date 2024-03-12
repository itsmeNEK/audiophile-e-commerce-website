import Overlay from '../../common/overlay/Overlay'
import Icon from '@mdi/react'
import { mdiCheckCircleOutline } from '@mdi/js'
import Style from './ThankyouModal.module.scss'
import Link from 'next/link'

export default function ThankyouModal() {
  return (
    <div className={Style['modal']}>
      <Overlay />
      <div className={Style['modal__content']}>
        <Icon path={mdiCheckCircleOutline} size={2} />
        <p>Thank You for purchasing here at Audiophile</p>
        <Link href={'/'} className={Style['modal__button']}>
          continue to homepage
        </Link>
      </div>
    </div>
  )
}
