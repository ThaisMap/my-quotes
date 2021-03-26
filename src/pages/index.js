import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Background from '../components/background'
import Sentence from '../components/sentence'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My quotes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Sentence />
    </div>
  )
}
