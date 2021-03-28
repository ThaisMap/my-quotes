import { useEffect, useState } from 'react';
import GetRandomQuote from '../api/quotes';
import styles from '../styles/sentence.module.css';
import { Quote } from '../types';

export default function Sentence(props) {
  const { quote } = props;

  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <cite className={styles.text}>{quote.text}</cite>
        <sub className={styles.from}>{quote.from}</sub>
      </div>
    </div>
  );
}
