/* eslint-disable react/prop-types */
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from './Navigation';
import Container from './components/Container';
import Layout from './components/Layout';
import { mapImageResources, search } from './lib/cloudinary';
// import images from '../data/images.json';

export default function VisualArt({ images: defaultImages, nextCursor: defaultNextCursor }) {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  console.log('images', images);
  console.log('next cursor', nextCursor);

  async function handleLoadMore(event) {
    event.preventDefault();
    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor,
      }),
    }).then((r) => r.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(updatedNextCursor);
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Visual Art</h1>
      <Navigation />
      {/* <div className={styles.imageGrid}>
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
        <button onClick={handleLoadMore} type="button" className={styles.loadMoreBtn}>
          Load More
        </button>
      </div> */}

      {/* {images.map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div className={styles.imageImage}>
                    <Image width={image.width} height={image.height} src={image.image} alt="" />
                  </div>
                  <h3 className={styles.imageTitle}>
                    { image.title }
                  </h3>
                </a>
              </li>
            )
          })} */}

      <Layout>
        <Container>
          <h2 className={styles.header}>Images</h2>

          <ul className={styles.images}>
            {images.map((image) => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <div className={styles.imageImage}>
                      <Image
                        width={image.width / 2}
                        height={image.height / 2}
                        src={image.image}
                        alt=""
                      />
                    </div>
                    <h3 className={styles.imageTitle}>{image.title}</h3>
                  </a>
                </li>
              );
            })}
          </ul>
          <button onClick={handleLoadMore} type="button" className={styles.loadMoreBtn}>
            Load More
          </button>
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor,
    },
  };
}
