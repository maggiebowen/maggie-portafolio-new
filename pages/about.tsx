import Image from 'next/image';
import bgImg1 from 'public/pics/maggie-w-monet.jpg';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';

const abtImgStyle = {
  borderRadius: '5%',
  width: '50%',
  height: '50%',
};

function about() {
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>
        About{' '}
        <a href="https://www.linkedin.com/in/margaret-bowen/" target="_blank" rel="noreferrer">
          Maggie
        </a>
      </h1>
      <Navigation />

      <div className={styles.textContainer}>
        <br />
        <div className={styles.aboutImg}>
          <Image
            alt="photo of Maggie at Joshua Tree National Park"
            src={bgImg1}
            quality={100}
            style={abtImgStyle}
          />
        </div>
        <br />
        <div className={styles.center}>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQDwF62w4W-OdjWYjkDpGt__1oBZEobzoQtSddFpP7wuF9EvOD-GN1dVwmt21ZUURh6VvttzemtUTRy/pub"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line */}
            <button className={styles.btnWPadding}>Check out Maggie&apos;s resume</button>
          </a>
        </div>
        <p>
          Maggie is a computer programmer, visual artist, photographer, and teacher. She currently
          works as a teacher in a bilingual primary school located in Madrid through the Spanish
          government program{' '}
          <a href="https://www.educacionyfp.gob.es/eeuu/convocatorias-programas/convocatorias-eeuu/nalcap.html">
            NALCAP
          </a>{' '}
          (aka auxiliares de conversaciones). Maggie graduated from the University of Southern
          California, as a{' '}
          <a href="https://dornsife.usc.edu/engl/narrative-studies-major/">Narrative Studies</a>{' '}
          major and{' '}
          <a href="https://itp.usc.edu/academics/computer-programming/">Computer Programming</a>{' '}
          minor, with honors for maintaining a GPA above 3.5. Additionally, she was the recipient of
          two awards through the{' '}
          <a href="https://dornsifeadmission.usc.edu/honors-programs#:~:text=Thematic%20Option&text=Instead%20of%20selecting%20general%20education,the%20idea%20behind%20Thematic%20Option.">
            Thematic Options Honors Program
          </a>{' '}
          and the{' '}
          <a href="https://ahf.usc.edu/commencement-honors/scholar-distinctions/renaissance/">
            Renaissance Scholar Distinction
          </a>
          , the latter of which recognizes students with unique major-minor degree combinations.{' '}
        </p>
        <p>
          In her free time Maggie plays the guitar and sings, takes film photos, skateboards, surfs,
          rock climbs, writes, and illustrates&#92;paints. She speaks fluent Spanish. She has
          learned Spanish in college courses, through 2.5 years of private tutoring &#40;still
          on-going&#41;, and most especially through her patient friends. Now she is studying
          Italian as well! She considers herself a jack-of-all-trades type of artist. She can
          animate in 2D and 3D &#40;in Procreate/After Effects and Maya respectively&#41;, edit
          photos and videos in the Adobe suite, design ink and watercolor illustrations, make music,
          creatively write, and even design and code websites —including this one!
        </p>
        <p>
          Maggie&apos;s underlying passion has always been to create inclusive spaces for women and
          LGBTQ+ folks in actions sports and computer programming. That&apos;s why she has dedicated
          years to creating and supporting chapters of Girls Who Code in her hometown and even
          created her own skateboarding community at USC,{' '}
          <a href="https://www.instagram.com/auntskatie/?hl=en">Aunt Skatie</a>, where she ran
          clinics for fellow female and LGBTQ+ skateboarders. See this{' '}
          <a href="https://www.latimes.com/sports/story/2021-12-08/women-lgbtq-community-skateboarding-culture">
            <i>LA Times</i> article
          </a>{' '}
          about the Aunt Skatie community to learn more. In the past, Maggie has also volunteered
          for other non-profits such as Compton Cowboys, God&apos;s Kitchen, and Exposure Skate.
        </p>
        <p>
          Inspired by her volunteer work and teaching positions, Maggie seeks a career which allows
          her to develop software that can be utilized by students to learn new languages, including
          programming languages and make computer programming welcoming to everyone.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default about;
