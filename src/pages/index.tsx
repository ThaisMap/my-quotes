import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Background from '../components/background';
import Sentence from '../components/sentence';
import { useEffect, useState } from 'react';
import GetRandomQuote from '../api/quotes';
import { Quote } from '../types';
import background from '../components/background';
import GetRandomImage from '../api/images';

export default function Home() {
  const [quote, setQuote] = useState<Quote>({
    text: 'You have Michael Jordan level talent at something',
    from: 'Evan Carmichel',
  });
  const [backgroundImage, setBackgroundImage] = useState<string>(
    'https://picsum.photos/1200/800/?blur'
  );

  useEffect(() => {
    handleScreenClick();
  }, []);

  function handleScreenClick() {
    const randomQuote = GetRandomQuote();
    setQuote(randomQuote);
    const randomImage = GetRandomImage();
    setBackgroundImage(randomImage);
  }

  return (
    <div className={styles.container} onClick={handleScreenClick}>
      <Head>
        <title>My quotes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Background src={backgroundImage} />
      <Sentence quote={quote} />
    </div>
  );
}
