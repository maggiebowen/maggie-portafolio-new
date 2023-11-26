import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';

function about() {
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>About Maggie</h1>
      <Navigation />
      <br />
      <div className={styles.circleContainer}>
        <div className={styles.circleWrapper}>
          <div className={styles.circle}>techology</div>
          <div className={styles.circle}>teaching</div>
          <div className={styles.circle}>design</div>
          <div className={styles.circle}>community</div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default about;
