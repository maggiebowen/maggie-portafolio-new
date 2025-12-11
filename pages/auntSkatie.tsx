/* eslint-disable react/style-prop-object */
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';

function auntSkatie() {
  return (
    <div className={styles.secondaryPage}>
      <h1 className={styles.pageTitle}>Aunt Skatie</h1>
      <Navigation />
      <br />
      <div className={styles.textContainer4AS}>
        <br />
        <h1>Media</h1>
        <h3>
          <a href='https://www.latimes.com/sports/story/2021-12-08/women-lgbtq-community-skateboarding-culture'>
            LA Times
          </a>
          {'   '}
          ||{'   '}
          <a href='https://bigfootskatemag.com/cotm-your-cool-aunt-skatie/'>
            Big Foot Skate Magazine
          </a>
          {'   '}
          ||{'   '}
          <a href='https://www.losangelesblade.com/2021/12/31/no-posers-allowed-inside-a-sesh-with-aunt-skatie/'>
            Los Angeles Blade
          </a>
          {'   '}
          || <a href='https://www.instagram.com/auntskatie/?hl=en'>Aunt Skatie Instagram</a>
        </h3>
        {/* https://www.instagram.com/reel/B7Hgl5TlBjO/?hl=en */}
        {/* https://www.instagram.com/auntskatie/?hl=en */}
        <br />
        <h1>Mission</h1>
        <p>
          Aunt Skatie is a skateboarding club that&apos;s mission is to welcome more women and
          LGBTQ+ folks into the sport of skateboarding! We try to build a safe and inclusive
          environment for all skaters by running skate clinics, group meetups and excursions, and
          sometimes even parties. There&apos;s no cost to join, no limit to who can come &#40;even
          male allies can come support!&#41;, and no better time to get involved.
        </p>
        <br />
        <h1>Origins</h1>
        <p>
          Aunt Skatie was started in the fall of 2019 by{' '}
          <a href='https://www.linkedin.com/in/margaret-bowen/'>Maggie Bowen</a>, a USC
          undergraduate student. When Maggie started skating, she noticed a severe lack of women at
          the skatepark and the encouraging atmosphere that comes with their presence. Maggie
          realized the importance of female and queer-centric places in male dominated fields during
          her time as a <a href='https://girlswhocode.com/'>Girls Who Code &#40;GWC&#41;</a>{' '}
          instructor.
        </p>
        <br />
        <p>
          Around the same time she was teaching her coding students to <q>be brave, not perfect,</q>
          &nbsp;Maggie had the chance to attend a girls skate competition in Chicago run by the
          lovely Katie Korneta. Maggie felt inspired by the electric energy a skatepark full of
          women and LGBTQ+ folk could bring so she decided to make her own GWC of the skate world,
          Aunt Skatie. Maggie&apos;s cool Aunt Katie and Katie Korneta served as the inspiration for
          the name.
        </p>
      </div>
    </div>
  );
}

export default auntSkatie;
