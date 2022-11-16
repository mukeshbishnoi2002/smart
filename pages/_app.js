import Head from 'next/head'
import '../styles/globals.css'
import '../styles/media.css'
import '../styles/medium.css'
import '../styles/smallmedia.css'
import '../styles/xxsmall.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
          </Head>
     <Component {...pageProps} />

  </>
  )
}

export default MyApp
