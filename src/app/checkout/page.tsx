import CheckoutForm from '@/components/CheckoutForm/CheckoutForm'
import BackButton from '@/components/Shared/BackButton/BackButton'

export default function page() {
  return (
    <main className='wrapper'>
      <BackButton />
      <CheckoutForm />
    </main>
  )
}
