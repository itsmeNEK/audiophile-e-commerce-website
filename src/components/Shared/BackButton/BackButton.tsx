'use client'

import { useRouter } from 'next/navigation'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import Style from './BackButton.module.scss'

export default function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }
  return (
    <div className={Style['container']}>
      <PrimaryButton
        className={Style['back-button']}
        type='button'
        onClick={handleBack}
      >
        Go Back
      </PrimaryButton>
    </div>
  )
}
