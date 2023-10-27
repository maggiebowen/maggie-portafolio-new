import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Navigation from './Navigation';
import { getImages } from './api';

function VisualArt() {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
      setNextCursor(responseJson.next_cursor);
    };

    fetchData();
  }, []);

  const handleLoadMore = async () => {
    const responseJson = await getImages(nextCursor);
    setImageList((currentImageList) => [...currentImageList, ...responseJson.resources]);
    setNextCursor(responseJson.next_cursor);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Visual Art</h1>
      <Navigation />
      <div className={styles.imageGrid}>
        {imageList.map((image) => (
          <Image
            src={image.url}
            alt={image.public_id}
            width={image.width}
            height={image.height}
            layout="responsive"
            className={styles.apiImages}
          />
        ))}
      </div>
      <div className={styles.center}>
        {nextCursor && (
          <button onClick={handleLoadMore} type="button" className={styles.loadMoreBtn}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default VisualArt;
