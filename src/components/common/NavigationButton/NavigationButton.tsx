'use client'

import { useRouter } from 'next/navigation'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import Style from './NavigationButton.module.scss'
import { NavigationDirection } from '@/enums/DirectionEnum'

type NavigationButtonProps = {
  direction: NavigationDirection
  buttonText?: string
  icon?: React.ReactNode
}

const NavigationButton = ({
  direction,
  buttonText,
  icon,
}: NavigationButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (direction === NavigationDirection.BACK) {
      router.back()
    }
  }

  return (
    <div className={Style['container']}>
      <PrimaryButton
        className={Style['navigation-button']}
        type='button'
        onClick={handleClick}
      >
        {icon && icon}
        {buttonText}
      </PrimaryButton>
    </div>
  )
}

export default NavigationButton
