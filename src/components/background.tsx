import styles from '../styles/background.module.css';
import { BackgroundImage } from '../types';

export default function Background(props: any) {
  const randomBackground: BackgroundImage = props.src; //'https://picsum.photos/1200/800/?blur';
  return (
    <>
      <div
        style={{ backgroundImage: 'url(' + randomBackground.filename + ')' }}
        className={styles.container}></div>
      <a className={styles.credits} href={randomBackground.link}>
        {randomBackground.credits}
      </a>
    </>
  );
}
