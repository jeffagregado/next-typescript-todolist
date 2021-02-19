import { ReactNode } from 'react'
import stylesLayout from '../styles/Layout.module.scss'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={stylesLayout.container}>
        <main className={stylesLayout['container__main']}>{children}</main>
      </div>
    </>
  )
}

export default Layout
