'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import FormInput from '../common/form-control/FormInput'
import FormRadio from '../common/form-control/FormRadio'
import Style from './CheckoutForm.module.scss'
import CashOnDelivery from '../common/svg/CashOnDelivery'
import Summary from './Summary/Summary'
import { useCartContext } from '@/context/CartContext'
import ThankyouModal from './ThankyouModal/ThankyouModal'

export default function CheckoutForm() {
  const [showModal, setShowModal] = useState(false)
  const { setFormValid, handleRemoveAllItems } = useCartContext()
  const [choice, setChoice] = useState('e-Money')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    zip_code: '',
    city: '',
    country: '',
    e_money_number: '',
    e_money_pin: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  useEffect(() => {
    const allValid = Object.entries(formData).every(([key, value]) => {
      if (
        choice !== 'e-Money' &&
        (key === 'e_money_number' || key === 'e_money_pin')
      ) {
        return true
      }
      return value !== ''
    })
    setFormValid(allValid)
  }, [formData, choice, setFormValid])

  const handleChoiceChange = (value: string) => {
    setChoice(value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleRemoveAllItems()
    setShowModal(true)
  }
  useEffect(() => {
    const allFieldsNotEmpty = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setFormValid(allFieldsNotEmpty)
  }, [formData, setFormValid])
  return (
    <form onSubmit={handleSubmit} className={Style['container']}>
      <div className={Style['checkout-form']}>
        <h2>Checkout</h2>
        <h4>billing details</h4>
        <div className={Style['checkout-form__billing-details']}>
          <FormInput
            type='text'
            name='name'
            placeholder='John Doe'
            label='Name'
            required
            minLength={5}
            maxLength={50}
            onBlur={handleInputChange}
          />
          <FormInput
            type='email'
            name='email'
            placeholder='johndoe@email.com'
            label='Email Address'
            required
            minLength={15}
            maxLength={50}
            onBlur={handleInputChange}
          />
          <FormInput
            type='text'
            name='phone_number'
            placeholder='+1202-555-0136'
            label='Phone Number'
            required
            minLength={14}
            maxLength={14}
            onBlur={handleInputChange}
          />
        </div>
        <h4>Shipping Info</h4>
        <div className={Style['checkout-form__shipping-info']}>
          <FormInput
            type='text'
            name='address'
            placeholder='Your Address'
            label='Your Address'
            required
            minLength={5}
            maxLength={100}
            onBlur={handleInputChange}
          />
          <FormInput
            type='text'
            name='zip_code'
            placeholder='10001'
            label='ZIP Code'
            required
            minLength={5}
            maxLength={5}
            onBlur={handleInputChange}
          />
          <FormInput
            type='text'
            name='city'
            placeholder='Paris'
            label='City'
            required
            minLength={5}
            maxLength={50}
            onBlur={handleInputChange}
          />
          <FormInput
            type='text'
            name='country'
            placeholder='France'
            label='Country'
            required
            minLength={5}
            maxLength={50}
            onBlur={handleInputChange}
          />
        </div>
        <h4>Payment details</h4>
        <div className={Style['checkout-form__payment-details']}>
          <p>Payment Method</p>
          <div className={Style['checkout-form__payment-details__radios']}>
            <FormRadio
              choice={choice}
              onChange={handleChoiceChange}
              label='e-Money'
            />
            <FormRadio
              choice={choice}
              onChange={handleChoiceChange}
              label='Cash on Delivery'
            />
          </div>
        </div>
        {choice === 'e-Money' ? (
          <div className={Style['checkout-form__payment-details__e-money']}>
            <FormInput
              type='number'
              name='e_money_number'
              placeholder='238521993'
              label='e-Money Number'
              required
              minLength={9}
              maxLength={9}
              onBlur={handleInputChange}
            />
            <FormInput
              type='password'
              name='e_money_pin'
              placeholder='****'
              label='e-Money Pin'
              required
              minLength={4}
              maxLength={4}
              onBlur={handleInputChange}
            />
          </div>
        ) : (
          <div
            className={
              Style['checkout-form__payment-details__cash-on-delivery']
            }
          >
            <CashOnDelivery />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
      <div className={Style['summary-container']}>
        <Summary />
      </div>
      {showModal && <ThankyouModal />}
    </form>
  )
}
