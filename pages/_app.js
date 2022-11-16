
import '../styles/globals.css'
import '../styles/media.css'
import '../styles/medium.css'
import '../styles/smallmedia.css'
import '../styles/xxsmall.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      
     <Component {...pageProps} />

  </>
  )
}

export default MyApp
