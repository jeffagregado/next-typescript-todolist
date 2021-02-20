import { AppProps } from 'next/dist/next-server/lib/router/router'
import Layout from '../components/Layout'
import '../styles/tailwind.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <body className="debug-screens">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </body>
  )
}

export default MyApp
