/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';
import { getFolders, mapImageResources, search } from './lib/cloudinary';
// import images from '../data/images.json';

export default function Photography({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}) {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const [activeFolder, setActiveFolder] = useState('');

  console.log('active folder:', activeFolder);

  // console.log('images', images);
  // console.log('next cursor', nextCursor);

  async function handleLoadMore(event) {
    event.preventDefault();
    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor,
        expression: `folder="${activeFolder}"`,
      }),
    }).then((r) => r.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(updatedNextCursor);
  }

  function handleOnFolderClick() {
    const { folderPath } = event.target.dataset;
    setActiveFolder(folderPath);
    setNextCursor(undefined);
    setImages([]);
  }

  useEffect(() => {
    (async function run() {
      const results = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          nextCursor,
          expression: `folder="${activeFolder}"`,
        }),
      }).then((r) => r.json());

      const { resources, next_cursor: updatedNextCursor } = results;

      const images = mapImageResources(resources);

      setImages((prev) => {
        return [...prev, ...images];
      });

      setNextCursor(updatedNextCursor);
    })();
  }, [activeFolder]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Photography</h1>
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

      <h2 className={styles.header}>Folders</h2>

      <ul className={styles.folders} onClick={handleOnFolderClick}>
        {folders.map((folder) => {
          return (
            <li key={folder.path}>
              <button data-folder-path={folder.path}>{folder.name}</button>
            </li>
          );
        })}
      </ul>

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
    </div>
  );
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  });

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  const { folders } = await getFolders();

  console.log('folders:', folders);

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      folders,
    },
  };
}
