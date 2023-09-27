import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import bgImg from './images/maggie-at-joshua-tree.jpg';
import Navigation from './Navigation';

function about() {
  return (
    <div className={styles.container}>
      <div className={styles.bgWrap}>
        <Image
          alt="photo of Maggie at Joshua Tree National Park"
          src={bgImg}
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <h1 className={styles.pageTitle}>
        About <Link href="/">Maggie</Link>
      </h1>
      <Navigation />
    </div>
  );
}

export default about;
