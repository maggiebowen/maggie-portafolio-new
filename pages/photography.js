/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { getPhotographyFolders, mapImageResources, search } from './api/cloudinary';
import Navigation from './components/Navigation';

export default function Photography({ images: defaultImages, folders }) {
  const [images, setImages] = useState(defaultImages);
  const [activeFolder, setActiveFolder] = useState('');

  // console.log('active folder:', activeFolder);

  // console.log('images', images);

  function handleOnFolderClick(event) {
    const { folderPath } = event.target.dataset;
    setActiveFolder(folderPath);
    setImages([]);
  }

  useEffect(() => {
    (async function run() {
      const results = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          expression: `folder="${activeFolder}"`,
        }),
      }).then((r) => r.json());

      const { resources } = results;

      const images = mapImageResources(resources);

      setImages((prev) => {
        return [...prev, ...images];
      });
    })();
  }, [activeFolder]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Photography</h1>
      <Navigation />

      <div className={styles.padding}>
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
      </div>

      <div className={styles.padding}>
        <h2 className={styles.header}>Images</h2>

        <ul className={styles.images}>
          {images.map((image) => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div className={styles.imageImage}>
                    <Image
                      width={image.width}
                      height={image.height}
                      src={image.image}
                      alt=""
                      layout="responsive"
                      className={styles.individualImage}
                    />
                  </div>
                  {/* <h3 className={styles.imageTitle}>{image.title}</h3> */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  });

  const { resources } = results;

  const images = mapImageResources(resources);

  const { folders } = await getPhotographyFolders();

  return {
    props: {
      images,
      folders,
    },
  };
}
