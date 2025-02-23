import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';

function codingProjects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>Coding Projects</h1>
      <Navigation />

      <br />
      <h2>Check out my Github accounts:</h2>
      <a href="https://github.com/maggiebowen" target="_blank" rel="noreferrer">
        <button className={styles.btnWPadding}>Personal Github</button>
      </a>

      <br />
      <br />
      <br />
      <h2>Human Computer Interaction Projects:</h2>
      {/* use table component so these are side by side */}

      <h3>EquiLuna: </h3>
      <p className={styles.descriptionText}>
      A multimodal balance board video game exploring the impacts of haptic and auditory feedback on balance.
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/a0VEb8TLl2g?si=xw5TkaKjZ8vznHeh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
      {/* make it open in another tab */}
      <h3 className={styles.descriptionText}><a href='https://colab.research.google.com/drive/1OSaTAvAiFLA2lByXbD-uStAT9CymVERM?usp=sharing'>Computational Linguistics:</a></h3>
      <p className={styles.descriptionText}>
      A zero-shot multi-language hate speech classification system on social media posts. Experiements performed in both English and Italian.
      </p>



      <h2>About this site:</h2>
      <p className={styles.descriptionText}>
        This website was programmed by Maggie using Typescript, a language which builds on
        Javascript, and React, a Javascript library. On the Photography and Visual Art pages you can
        see it makes use of the{' '}
        <a
          href="https://cloudinary.com/documentation/image_upload_api_reference"
          target="_blank"
          rel="noreferrer"
        >
          Cloudinary API
        </a>
      </p>
      <br />
    </div>
  );
}

export default codingProjects;
