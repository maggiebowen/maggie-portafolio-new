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
        {/* eslint-disable-next-line */}
        <button className={styles.btnWPadding}>Personal Github</button>
      </a>

      <a href="https://github.com/maebow" target="_blank" rel="noreferrer">
        {/* eslint-disable-next-line */}
        <button className={styles.btnWPadding}>University Github</button>
      </a>

      <br />
      <br />
      <br />
      <h2>Assignments from React Class:</h2>
      <p className={styles.descriptionText}>
        This project pulls from a Pokemon API to show each Pokemon&apos;s data including moves,
        height, weight, and image.
      </p>
      <iframe
        src="https://codesandbox.io/embed/a6-fvb04?fontsize=14&hidenavigation=1&theme=dark"
        title="A6"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <br />
      <p className={styles.descriptionText}>
        This project is a bored button! Click it when you want to randomly choose an activity.
      </p>
      <iframe
        src="https://codesandbox.io/embed/fetch-and-render-an-activity-from-the-bored-api-forked-csfdk?fontsize=14&hidenavigation=1&theme=dark"
        title="fetch and render an activity from the Bored API (forked)"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <br />
      <p className={styles.descriptionText}>
        This project allows you to input data to create your very own video game protagonist.
      </p>
      <iframe
        src="https://codesandbox.io/embed/a5-6ygkq?fontsize=14&hidenavigation=1&theme=dark"
        title="A5"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />

      <h2>About this site:</h2>
      <p className={styles.descriptionText}>
        This website was programmed in the Javascript framework Typescript. On the Photography and
        Visual Art pages you can see it makes use of the{' '}
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
