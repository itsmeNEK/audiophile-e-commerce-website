import Link from 'next/link'
import Style from './SeeProductButton.module.scss'
import { AnchorHTMLAttributes } from 'react'

type RenderSeeProductProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  productSlug?: string | null
  categorySlug?: string | null
  className?: string | null
  children: string
}
const SeeProductButton = ({
  productSlug,
  categorySlug,
  className,
  children,
  ...props
}: RenderSeeProductProps) => {
  return (
    <Link
      href={`/${categorySlug}/${productSlug}`}
      className={`${Style['button']} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default SeeProductButton
