import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { QuoteProvider } from '../store/context'

function MyApp({ Component, pageProps }) {
  return <QuoteProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </QuoteProvider>
}

export default MyApp
