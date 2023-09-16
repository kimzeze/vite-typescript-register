import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
}
const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input className="border p-2 rounded-md" {...props} />
    </div>
  )
}

export default Input
