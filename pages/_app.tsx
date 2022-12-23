import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { SessionProvider } from 'next-auth/react'

const Layout = ({ children }) => (
  <div className='flex flex-col justify-between h-screen'>
    <Header />
    <div className='mb-auto' data-theme="light">{children}</div>
    <Footer />
  </div>
)

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>AIDevBlog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
        <ScrollToTopButton />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp