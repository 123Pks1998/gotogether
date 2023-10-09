import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Navbottom from '@/components/Navbottom';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      < Navbar />
      <Navbottom />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}
