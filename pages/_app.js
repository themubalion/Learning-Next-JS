import Head from 'next/head'
import HeadComponent from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className=' overflow-hidden min-h-screen flex flex-col justify-between'>
        <Component {...pageProps}/>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
