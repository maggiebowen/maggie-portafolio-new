import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';

const csefImg = '/pics/Hand-Model-CSEF.jpg';
const pamaImg = '/pics/PAMA.png';
const equilunaImg = '/pics/equiluna.png';
const hatespeechImg = '/pics/hate-speech-twitter.png';

function CodingProjects() {
  const [showVideo, setShowVideo] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

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

      <div className={styles.codingProjectsGrid}>
        <div className={styles.codingProjectsItem}>
          <h3>CSEF REDESIGN</h3>
          <a href='https://www.collegeskateboarding.com/' target='_blank' rel='noreferrer'>
            <Image
              alt='photo provided by CSEF'
              src={csefImg}
              quality={100}
              className={styles.codingProjectsImg}
              width={2500}
              height={1667}
            />
          </a>
        </div>

        <div className={styles.codingProjectsItem}>
          <h3>PAMA UX DESIGN</h3>

          <a
            href='https://www.figma.com/proto/W4sIe1YWKUz1pFgZnoPpor/PAMA?node-id=179558-13173&t=nCfIUquirVGPA9ai-1'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              alt='photo from UX Challenge presentation'
              src={pamaImg}
              quality={100}
              className={styles.codingProjectsImg}
              width={1548}
              height={1028}
            />
          </a>
        </div>

        <div className={styles.codingProjectsItem}>
          <h3>EQUILUNA</h3>
          {showVideo ? (
            <>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/a0VEb8TLl2g?si=xw5TkaKjZ8vznHeh&autoplay=1'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
              <p className={styles.descriptionText}>
                A multimodal balance board video game exploring the impacts of haptic and auditory
                feedback on balance.
              </p>
            </>
          ) : (
            <Image
              alt='photo of Equiluna start screen'
              src={equilunaImg}
              quality={100}
              className={styles.codingProjectsImg}
              width={1548}
              height={1028}
              onClick={() => setShowVideo(true)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>

        <div className={styles.codingProjectsItem}>
          <h3>COMPUTATIONAL LINGUISTICS</h3>
          <div
            onClick={() => setShowDescription(!showDescription)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowDescription(!showDescription);
              }
            }}
            role='button'
            tabIndex={0}
            style={{ cursor: 'pointer' }}
          >
            <Image
              alt='photo of blocked hate speech'
              src={hatespeechImg}
              quality={100}
              className={styles.codingProjectsImg}
              width={1548}
              height={1028}
            />
          </div>

          {showDescription && (
            <>
              <p className={styles.descriptionText}>
                A zero-shot multi-language hate speech classification system on social media posts.
                Experiements performed in both English and Italian.
              </p>
              <a
                href='https://colab.research.google.com/drive/1OSaTAvAiFLA2lByXbD-uStAT9CymVERM?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className={styles.link}
              >
                View Code
              </a>
            </>
          )}
        </div>
      </div>

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
