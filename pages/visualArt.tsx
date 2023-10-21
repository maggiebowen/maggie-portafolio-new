import styles from '../styles/Home.module.css';
import Navigation from './Navigation';
import images from './api/api-mock.json';

function visualArt() {
  console.log(images);
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Visual Art</h1>
      <Navigation />
      <p>haven&#39;t made about page yet</p>
    </div>
  );
}

export default visualArt;
