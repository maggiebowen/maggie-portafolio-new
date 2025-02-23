import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';

const bgImg = '/pics/surf-background-cover-page.jpg';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maggie Bowen&#39;s Portafolio</title>
      </Head>
      <div>
        <div className={styles.bgWrap}>
          <Image
            alt="photo of Maggie surfing"
            src={bgImg}
            quality={100}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <main className={styles.homePage}>
          <h1 className={styles.title}>
            <Link href="/">Maggie Bowen</Link>
          </h1>
          <p className={styles.description}>
            <i>
              <b>Artist, Coder, Teacher</b>
            </i>
          </p>
          <Navigation />
        </main>
      </div>
    </div>
  );
}

export default Home;
