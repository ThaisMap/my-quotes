import styles from '../styles/background.module.css';
import ContentContext from '../context/Content';
import { useContext } from 'react';

export default function Background() {
  const { image } = useContext(ContentContext);
  return (
    <>
      <div
        style={{ backgroundImage: 'url(' + image.filename + ')' }}
        className={styles.container}></div>
      <a className={styles.credits} href={image.link} target='_blank'>
        Photo by {image.credits}
      </a>
    </>
  );
}
