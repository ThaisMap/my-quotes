import '../styles/globals.css'
import { ContentProvider } from '../context/Content'
import firebaseConfiguration from '../api/firebase/firebaseConfig'
import { getQuotes } from '../api/firebase/getQuotes';

function MyApp({ Component, pageProps }) {
  firebaseConfiguration();
  return (
    <ContentProvider>
      <Component {...pageProps} />
    </ContentProvider>)
}

export default MyApp
