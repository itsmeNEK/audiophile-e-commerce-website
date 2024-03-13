import Style from './FormRadio.module.scss'

type FormRadioProps = {
  label: string
  choice: string
  onChange: (value: string) => void
}

export default function FormRadio({ label, choice, onChange }: FormRadioProps) {
  const handleChange = () => {
    onChange(label)
  }

  return (
    <div className={Style['container']}>
      <label className={Style['radio']}>
        <input
          type='radio'
          value={label}
          checked={choice === label}
          onChange={handleChange}
          className={Style['radio__input']}
        />
        <span className={Style['radio__indicator']}>
          <span className={Style['radio__indicator__check-mark']}></span>
        </span>
        {label}
      </label>
    </div>
  )
}
