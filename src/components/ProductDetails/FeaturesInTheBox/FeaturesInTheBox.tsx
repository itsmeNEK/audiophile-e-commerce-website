import Style from './FeaturesInTheBox.module.scss'
import parseTextWithSpan from '@/helpers/parseTextWithSpan'
type FeaturesInTheBoxProps = {
  features: string | null | undefined
  inTheBox: string[] | null | undefined
  emphasisInTheBox: string[] | null | undefined
}

export default function FeaturesInTheBox({
  features,
  inTheBox,
  emphasisInTheBox,
}: FeaturesInTheBoxProps) {
  return (
    <div className={Style['product-info']}>
      <div className={Style['product-info__features']}>
        <h2>Features</h2>
        <p>{features}</p>
      </div>
      <ul className={Style['product-info__in-the-box']}>
        <h2>in the box</h2>
        {inTheBox?.map((item, index) => (
          <li key={index}>{parseTextWithSpan(item, emphasisInTheBox)}</li>
        ))}
      </ul>
    </div>
  )
}
