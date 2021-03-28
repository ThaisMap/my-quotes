import styles from '../styles/background.module.css';

export default function Background(props: any) {
  const randomBackground = props.src; //'https://picsum.photos/1200/800/?blur';
  return (
    <div
      style={{ backgroundImage: 'url(' + randomBackground + ')' }}
      className={styles.container}></div>
  );
}
