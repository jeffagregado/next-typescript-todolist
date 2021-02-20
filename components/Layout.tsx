import { ReactNode } from 'react'
// import stylesLayout from '../styles/Layout.module.scss'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="container flex flex-col flex-start justify-start min-h-screen">
        <main className="mt-20 mx-auto mb-0">{children}</main>
      </div>
    </>
  )
}

export default Layout
