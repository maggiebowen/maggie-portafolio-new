import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Navigation from './Navigation';
import { getImages } from './api';

function VisualArt() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
    };

    fetchData();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
}

export default VisualArt;
