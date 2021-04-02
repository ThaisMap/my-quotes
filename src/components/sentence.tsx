import { useContext } from 'react';
import ContentContext from '../context/Content';
import styles from '../styles/sentence.module.css';

export default function Sentence() {
  const { quote, getRandom } = useContext(ContentContext);

  return (
    <div className={styles.container} onClick={getRandom}>
      <div className={styles.quote}>
        <cite className={styles.text}>{quote.text}</cite>
        <sub className={styles.from}>{quote.from}</sub>
      </div>
    </div>
  );
}
