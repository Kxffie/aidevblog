import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Layout = ({ children }) => (
  <div className='flex flex-col justify-between h-screen'>
    <Header />
    <div className='mb-auto '>{children}</div>
    <Footer />
  </div>
)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>AIDevBlog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </Layout>
  )
}

export default MyApp