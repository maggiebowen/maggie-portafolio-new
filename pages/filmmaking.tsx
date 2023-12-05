import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';

function filmmaking() {
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Filmmaking</h1>
      <Navigation />
      <br />
      <h3>Animation</h3>
      <h3>Comedy</h3>
      <h3>Thesis film</h3>
    </div>
  );
}

export default filmmaking;
