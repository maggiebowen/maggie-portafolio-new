import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import ProjectGrid from '../components/ProjectGrid';

function CodingProjects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>Coding Projects</h1>
      <Navigation />

      <br />
      <br />
      <a href='https://github.com/maggiebowen' target='_blank' rel='noreferrer'>
        <button type='button' className={styles.btnWPadding}>
          My Github
        </button>
      </a>
      <br />
      <br />

      <ProjectGrid />

      <h2>About this site:</h2>
      <p className={styles.descriptionText}>

        This website was programmed by Maggie using Typescript, a language which builds on
        Javascript, and React, a Javascript library. On the Photography and Visual Art pages you can
        see it makes use of the{' '}
        <a
          href='https://cloudinary.com/documentation/image_upload_api_reference'
          target='_blank'
          rel='noreferrer'
        >
          Cloudinary API
        </a>
      </p>
      <br />
    </div>
  );
}

export default CodingProjects;
