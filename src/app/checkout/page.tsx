import CheckoutForm from '@/components/CheckoutForm/CheckoutForm'
import NavigationButton from '@/components/common/NavigationButton/NavigationButton'
import { NavigationDirection } from '@/enums/DirectionEnum'

export default function page() {
  return (
    <main className='wrapper'>
      <NavigationButton
        direction={NavigationDirection.BACK}
        buttonText='Go back'
      />
      <CheckoutForm />
    </main>
  )
}
