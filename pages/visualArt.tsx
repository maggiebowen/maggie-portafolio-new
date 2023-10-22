import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Navigation from './Navigation';
import images from './apiMock/api-mock.json';

const visualArt = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageList, setImageList] = useState(images.resources);
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Visual Art</h1>
      <Navigation />
      <div className={styles.imageGrid}>
        {imageList.map((image) => (
          <img src={image.url} alt={image.public_id} />
        ))}
      </div>
    </div>
  );
};

export default visualArt;
