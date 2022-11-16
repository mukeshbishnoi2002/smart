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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          </Head>
     <Component {...pageProps} />

  </>
  )
}

export default MyApp
