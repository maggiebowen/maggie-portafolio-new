import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';
import YoutubeEmbed from './components/YoutubeEmbed';

function filmmaking() {
  return (
    <div className={styles.secondaryPage}>
      <div className={styles.filmmakingContainer}>
        <h1 className={styles.pageTitle}>Filmmaking</h1>
        <Navigation />
        <br />
        <h3>Youtube Channel:</h3>
        <a href="https://www.youtube.com/@CuriosityList" target="_blank" rel="noreferrer">
          {/* eslint-disable-next-line */}
          <button className={styles.btnWPadding}>Curiosity List</button>
        </a>
        <p>
          Maggie&#39;s Youtube channel was a way for her to explore emerging research which sparked
          her curiosity and practice stop motion animation.
        </p>
        <h3>Animations:</h3>
        <div>
          <YoutubeEmbed embedId="P2v3-RXtseM" />
        </div>
        <p>
          This animation is based off of the poem{' '}
          <a
            href="https://dwwproject2012.weebly.com/loose-woman.html"
            target="_blank"
            rel="noreferrer"
          >
            <q>Loose Woman</q>
          </a>{' '}
          by Sandra Cisneros. Maggie made this animation as a part of her final essay and project
          for the American Studies 448 course, Chicano and Latino Literature. This was made using
          Procreate.
        </p>
        <br />
        <div>
          <YoutubeEmbed embedId="Yx16roDuRHY" />
        </div>
        <p>This assignment was a final exam made for Maggie&#39;s After Effects class, ART 461.</p>
        <br />
        <div>
          <YoutubeEmbed embedId="EIU-GEv_428" />
        </div>
        <p>
          This assignment was made for Maggie&#39;s After Effects class in order to practice
          rotoscoping.
        </p>
        <br />
        <div>
          <YoutubeEmbed embedId="AH3tMnZOHLU" />
        </div>
        <p>
          The following is a short animation done in 3D using Maya. This was for the class ITP 215L
          3D Modeling, Animation, and Visual Effects. It is a culmination of the semester&#39;s
          work, modeling a vehicle and an object that could fit on a desk and then navigating the
          modeled car around the objects. Although it&#39;s far from perfect, Maggie was the only
          one in the class to make her car take flight off of one of the objects, rather than just
          simply navigating the table and making small turns.
        </p>
        <h3>Comedy</h3>
        <h3 className={styles.descriptionText}>
          <a
            href="https://www.instagram.com/auntskatie/reel/CeAFaJ6pyvQ/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Thesis film
          </a>
        </h3>
      </div>
    </div>
  );
}

export default filmmaking;
