import styles from '../styles/Home.module.css';
import Navigation from './Navigation';

function auntSkatie() {
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Aunt Skatie</h1>
      <Navigation />
      <br />
      <p className={styles.textContainer}>
        Aunt Skatie was a LA based skate club for USC students and local female and LGBTQ+ skaters
        that Maggie started in 2019.
        <br />
        Maggies goal with the club....
        <br />
        yadayda ydada
      </p>
    </div>
  );
}

export default auntSkatie;
