import { ReactNode } from 'react'

type Props = {
  type?: any
  children?: ReactNode
  onClick?: any
  className?: string
}

const Button = ({ type, children, onClick, className }: Props) => {
  return (
    <>
      <button
        className={`bg-gray-400 rounded-lg px-1 py-1 text-white mx-1 ${className}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button
