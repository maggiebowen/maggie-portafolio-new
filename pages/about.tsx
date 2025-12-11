import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';

const bgImg1 = '/pics/maggie-with-camera.JPG';

function about() {
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>
        About Maggie
      </h1>
      <Navigation />

      <div className={styles.textContainer}>
        <br />
        <div className={styles.aboutContentWrapper}>
          <div className={styles.aboutImgColumn}>
            <Image
              alt='photo of Maggie with a camera'
              src={bgImg1}
              quality={100}
              className={styles.abtImgStyle}
              layout='responsive'
              width={2048}
              height={1536}
            />
            <br />
            <br />
            <div className={styles.center}>
              <a
                href='https://drive.google.com/file/d/1GCHXsm2WauK2KaNRzzNqkyiO_dWfNzMk/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                {/* eslint-disable-next-line */}
                <button type='button' className={styles.btnWPadding}>
                  See Maggie&apos;s resume
                </button>
              </a>
            </div>
          </div>
          <div className={styles.aboutTextColumn}>
            <p>
              Maggie is a computer programmer, visual artist, and researcher whose work centers on
              designing systems that integrate physiological signals with usable interfaces. She is
              pursuing a master’s in Human–Computer Interaction at the Università di Trento on a
              full-ride UniTrento Scholarship, focusing on neurotechnology, multisensory interaction,
              and machine learning. Her interdisciplinary background began at the{' '}
              <a href='https://www.usc.edu/'>University of Southern California</a>, where she earned a
              degree in{' '}
              <a href='https://dornsife.usc.edu/engl/narrative-studies-major/'>Narrative Studies</a>{' '}
              with a minor in{' '}
              <a href='https://itp.usc.edu/academics/computer-programming/'>Computer Programming</a>,
              receiving honors through the{' '}
              <a href='https://dornsifeadmission.usc.edu/honors-programs#:~:text=Thematic%20Option&text=Instead%20of%20selecting%20general%20education,the%20idea%20behind%20Thematic%20Option.'>
                Thematic Options Honors Program
              </a>{' '}
              and the{' '}
              <a href='https://ahf.usc.edu/commencement-honors/scholar-distinctions/renaissance/'>
                Renaissance Scholar Distinction
              </a>
              . She now applies this “renaissance” mindset to projects such as a multisensory
              balance-board rehabilitation videogame, a multilingual hate-speech classifier, and a
              media-viewing interface sensitive to stress biomarkers, continuing to explore how
              interfaces can adapt to users’ cognitive states and rehabilitative needs.
            </p>

            <p>
              Before her master’s, Maggie taught English for two years in Madrid through the{' '}
              <a href='https://www.educacionyfp.gob.es/eeuu/convocatorias-programas/convocatorias-eeuu/nalcap.html'>
                NALCAP program
              </a>
              , working closely with students with speech delays, ADHD, and ASD—an experience that
              reshaped her approach to assistive technologies. She now brings that perspective to
              Fraunhofer Italia, where she is developing a real-time fatigue-detection system to support
              neurodivergent workers in collaborative robot contexts, managing multimodal data across
              eye-tracking, HRV, and EDA while strengthening her Python and ML skills. Outside her
              technical work, Maggie maintains a creative practice in animation, filmmaking,
              photography, illustration, and design; she has also supported inclusivity in tech and
              action sports through years of involvement with{' '}
              <a href='https://girlswhocode.com/'>Girls Who Code</a> and by founding{' '}
              <a href='https://www.instagram.com/auntskatie/?hl=en'>Aunt Skatie</a>, featured in this{' '}
              <a href='https://www.latimes.com/sports/story/2021-12-08/women-lgbtq-community-skateboarding-culture'>
                <i>LA Times</i> article
              </a>
              , with additional volunteer work at{' '}
              <a href='https://www.comptoncowboys.com/'>Compton Cowboys</a>,{' '}
              <a href='https://www.godskitchen.org/'>God’s Kitchen</a>, and{' '}
              <a href='https://www.exposureskate.org/'>Exposure Skate</a>.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default about;
