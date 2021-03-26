import { useEffect, useState } from 'react';
import GetRandomQuote from '../api/quotes';
import styles from '../styles/sentence.module.css';
import { Quote } from '../types';

export default function Sentence() {
  const [quote, setQuote] = useState<Quote>({
    text: 'You have Michael Jordan level talent at something',
    from: 'Evan Carmichel',
  });

  useEffect(() => {
    const randomQuote = GetRandomQuote();
    setQuote(randomQuote);
  }, []);

  return (
    <div className={styles.container}>
      <cite className={styles.text}>{quote.text}</cite>
      <sub className={styles.from}>{quote.from}</sub>
    </div>
  );
}
