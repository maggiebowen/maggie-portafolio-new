import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';
import ProjectGrid from './components/ProjectGrid';
import ResumeSection from './components/ResumeSection';
import SkillsCarousel from './components/SkillsCarousel';

const bgImg = '/pics/surf-background-cover-page.jpg';

function Home() {
  const projectSectionRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Maggie Bowen&#39;s Portafolio</title>
      </Head>
      <div>
        <div className={styles.bgWrap}>
          <Image
            alt='photo of Maggie surfing'
            src={bgImg}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <main className={styles.homePage}>
          <h1 className={styles.title}>
            <Link href='/'>Maggie Bowen</Link>
          </h1>
          <p className={styles.description}>
            <i>
              <b>Artist, Coder, Researcher</b>
            </i>
          </p>
          <Navigation />

          <div
            className={styles.arrowIcon}
            onClick={scrollToProjects}
            role="button"
            tabIndex={0}
            aria-label="Scroll to projects"
            onKeyDown={(e) => e.key === 'Enter' && scrollToProjects()}
          >
            <FontAwesomeIcon
              icon={faArrowDownLong}
              className={styles.scrollToProjects}
            />
          </div>
        </main>

        <div ref={projectSectionRef} className={styles.projectSection}>
          <h2 className={styles.pageTitle} style={{ marginTop: 0 }}>Recent Projects</h2>
          <ProjectGrid />
          <SkillsCarousel />
          <br />
          <ResumeSection />
          {/* <div className={styles.center}>
            <Link href='/codingProjects'>
              <button type='button' className={styles.btnWPadding}>
                See More & View Code
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
