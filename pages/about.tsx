import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';

const bgImg1 = '/pics/maggie-ordesa-national-park.jpg';

function about() {
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>
        About{' '}
        <a href='https://www.linkedin.com/in/margaret-bowen/' target='_blank' rel='noreferrer'>
          Maggie
        </a>
      </h1>
      <Navigation />

      <div className={styles.textContainer}>
        <br />
        <div className={styles.aboutImg}>
          <Image
            alt='photo of Maggie at Ordesa y Monte Perdido National Park in Spain'
            src={bgImg1}
            quality={100}
            className={styles.abtImgStyle}
            layout='responsive'
            width={2048}
            height={1536}
          />
        </div>
        <br />
        <div className={styles.center}>
          <a
            href='https://docs.google.com/document/d/1O0KJ7yNw16_6widqJZn9cHQquLL69HF-BfeX67sXfi0/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            {/* eslint-disable-next-line */}
            <button type='button' className={styles.btnWPadding}>
              Check out Maggie&apos;s resume
            </button>
          </a>
        </div>
        <p>
          Maggie is a computer programmer, visual artist, photographer, filmmaker, and teacher who
          is passionate about the intersection of psychology, neuroscience, and technology. She is
          currently pursuing a master’s degree in Human-Computer Interaction at the Università di
          Trento, where she attends on a full-ride UniTrento Scholarship. Her studies cover a range
          of emerging technologies, including neurotechnology, multisensory interactive systems, and
          computational linguistics.
        </p>
        <p>
          Before her master’s, Maggie taught English for two years at a bilingual primary school in
          Madrid, Spain, through the{' '}
          <a href='https://www.educacionyfp.gob.es/eeuu/convocatorias-programas/convocatorias-eeuu/nalcap.html'>
            NALCAP program
          </a>
          . Living in Spain helped her gain a mastery of Spanish and later inspired her to learn
          Italian. Her experience there sparked a curiosity about the inner workings of young minds,
          particularly in relation to language acquisition. Maggie graduated from the{' '}
          <a href='https://www.usc.edu/'>University of Southern California</a> with a degree in{' '}
          <a href='https://dornsife.usc.edu/engl/narrative-studies-major/'>Narrative Studies</a> and
          a minor in{' '}
          <a href='https://itp.usc.edu/academics/computer-programming/'>Computer Programming</a>,
          earning honors for maintaining a GPA above 3.5. She also received distinctions through the{' '}
          <a href='https://dornsifeadmission.usc.edu/honors-programs#:~:text=Thematic%20Option&text=Instead%20of%20selecting%20general%20education,the%20idea%20behind%20Thematic%20Option.'>
            Thematic Options Honors Program
          </a>{' '}
          and the{' '}
          <a href='https://ahf.usc.edu/commencement-honors/scholar-distinctions/renaissance/'>
            Renaissance Scholar Distinction
          </a>
          , the latter recognizing students with unique major-minor combinations.
        </p>
        <p>
          Her interdisciplinary background informs her approach to building effective technologies,
          particularly in the neurotechnology space. She is currently an intern at the{' '}
          <a href='https://www.cimec.unitn.it/en'>Centro Interdipartimentale Mente/Cervello</a>,
          analyzing EEG data to study visual perception. Her research focuses on understanding how
          visual processing is organized around eye movements, the natural rhythm of gaze behavior,
          and the timing of conscious visual experience, gaining hands-on experience in EEG, MEG,
          and eye-tracking methodologies.
        </p>
        <p>
          Maggie’s interdisciplinary approach extends beyond research and technology into the
          creative arts. She is skilled in 2D and 3D animation (Procreate, After Effects, and Maya),
          photo and video editing in the Adobe Suite, illustration, painting, songwriting, creative
          writing, and web design—including this site. In her free time, she plays guitar, shoots
          film photography, skateboards, surfs, rock climbs, writes, and illustrates.
        </p>
        <p>
          Maggie is committed to fostering inclusivity in action sports and tech. She has dedicated
          years to creating and supporting chapters of{' '}
          <a href='https://girlswhocode.com/'>Girls Who Code</a> in her hometown and even founded{' '}
          <a href='https://www.instagram.com/auntskatie/?hl=en'>Aunt Skatie</a>, a skateboarding
          community at USC where she ran clinics for female and LGBTQ+ skateboarders. Learn more
          about Aunt Skatie in this{' '}
          <a href='https://www.latimes.com/sports/story/2021-12-08/women-lgbtq-community-skateboarding-culture'>
            <i>LA Times</i> article
          </a>
          . In the past, Maggie has also volunteered with organizations such as{' '}
          <a href='https://www.comptoncowboys.com/'>Compton Cowboys</a>,{' '}
          <a href='https://www.godskitchen.org/'>God’s Kitchen</a>, and{' '}
          <a href='https://www.exposureskate.org/'>Exposure Skate</a>.
        </p>
      </div>
    </div>
  );
}

export default about;
