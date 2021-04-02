import '../styles/globals.css'
import { ContentProvider } from '../context/Content'

function MyApp({ Component, pageProps }) {

  return (
    <ContentProvider>
      <Component {...pageProps} />
    </ContentProvider>)
}

export default MyApp
