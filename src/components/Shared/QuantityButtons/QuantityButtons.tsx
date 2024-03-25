import React from 'react'
import Icon from '@mdi/react'
import { mdiMinus, mdiPlus } from '@mdi/js'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import Style from './QuantityButtons.module.scss'

type QuantityButtonsProps = {
  quantity: number
  className: string
  onMinusClick: () => void
  onPlusClick: () => void
}

export default function QuantityButtons({
  quantity,
  className,
  onMinusClick,
  onPlusClick,
}: QuantityButtonsProps) {
  return (
    <div className={`${Style['quantity__add-minus-count']} ${className}`}>
      <PrimaryButton
        type='button'
        aria-label='Minus Button'
        onClick={onMinusClick}
      >
        <Icon path={mdiMinus} aria-hidden size={0.7}></Icon>
      </PrimaryButton>
      {quantity}
      <PrimaryButton
        type='button'
        aria-label='Plus Button'
        onClick={onPlusClick}
      >
        <Icon path={mdiPlus} aria-hidden size={0.7}></Icon>
      </PrimaryButton>
    </div>
  )
}
