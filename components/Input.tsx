import { ReactNode } from 'react'
import TextField from '@material-ui/core/TextField'

type Props = {
  type: any
  className?: string
  placeholder?: string
  value: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  // children: ReactNode
}

const Input = ({ type, className, placeholder, onChange }: Props) => {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Your Todo"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </>
  )
}

export default Input
