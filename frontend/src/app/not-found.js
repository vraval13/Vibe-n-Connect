import styles from '@/app/styles/notFound.module.css'; 
import Link from 'next/link';

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>
        Page you are trying to access could not be found
      </p>
      <p className={styles.suggestion}>Did you mean?</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Have</button>
        <button className={styles.button}>a</button>
        <button className={styles.button}>nice</button>
        <button className={styles.button}>day</button>
      </div>
      <Link href="/" style={{
        marginTop:"10px"
      }}>Go back to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
