import Style from './page.module.scss'

export default async function notFound() {
  return (
    <main className={Style['container-not-found']}>
      <h1>Category does not exist.</h1>
    </main>
  )
}
