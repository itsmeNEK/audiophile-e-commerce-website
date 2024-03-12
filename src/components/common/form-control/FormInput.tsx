import {
  useState,
  useEffect,
  InputHTMLAttributes,
  FocusEventHandler,
} from 'react'
import Style from './FormInput.module.scss'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onBlur'> {
  label?: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  isValid?: boolean
}

export default function FormInput({
  label,
  type = 'text',
  onBlur,
  min,
  max,
  minLength,
  maxLength,
  isValid,
  ...rest
}: InputProps) {
  useEffect(() => {
    if (isValid === false) {
      setError('This field is required.')
    } else {
      setError(undefined)
    }
  }, [isValid])
  const [error, setError] = useState<string | undefined>()

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.trim()
    let errorMessage: string | undefined = undefined

    switch (true) {
      case rest.required && !value:
        errorMessage = `${label || 'This field'} cannot be empty.`
        break
      case type === 'email' && !isValidEmail(value):
        errorMessage = 'Invalid email format.'
        break
      case min !== undefined && Number(value) < min:
        errorMessage = `Minimum value allowed is ${min}.`
        break
      case max !== undefined && Number(value) > max:
        errorMessage = `Maximum value allowed is ${max}.`
        break
      case minLength !== undefined && value.length < minLength:
        errorMessage = `Minimum length allowed is ${minLength}.`
        break
      case maxLength !== undefined && value.length > maxLength:
        errorMessage = `Maximum length allowed is ${maxLength}.`
        break
      default:
        errorMessage = undefined
        break
    }

    setError(errorMessage)
    onBlur && onBlur(e)
  }

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  return (
    <div className={Style['form-input-group']}>
      <div className={Style['form-input-group__details']}>
        {label && (
          <label
            className={`${Style['form-input-group__details__label']} ${error && Style['form-input-group__details__label--error']}`}
          >
            {label}
          </label>
        )}
        {error && (
          <div className={Style['form-input-group__details__error']}>
            {error}
          </div>
        )}
      </div>
      <input
        className={`${Style['form-input-group__input']} ${error && Style['form-input-group__input--error']}`}
        type={type}
        {...rest}
        onBlur={handleBlur}
        onChange={handleBlur}
      />
    </div>
  )
}
