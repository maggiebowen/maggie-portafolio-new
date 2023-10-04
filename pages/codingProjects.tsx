import styles from '../styles/Home.module.css';
import Navigation from './Navigation';

function codingProjects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>Coding Projects</h1>
      <Navigation />
      <h2>Check out my Github accounts:</h2>
      <a href="https://github.com/maggiebowen">
        {/* eslint-disable-next-line */}
        <button className={styles.button}>Personal Github</button>
      </a>

      <a href="https://github.com/maebow">
        {/* eslint-disable-next-line */}
        <button className={styles.button}>University Github</button>
      </a>

      <h2>Assignments from React Class:</h2>
      <iframe
        src="https://codesandbox.io/embed/a6-fvb04?fontsize=14&hidenavigation=1&theme=dark"
        title="A6"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      {/* <br />
      note: doesn't work because heroku server is no longer running
      <br />
      <iframe
        src="https://codesandbox.io/embed/week-7-prep-forked-bh6pf?fontsize=14&hidenavigation=1&theme=dark"
        title="Week 7 - prep (forked)"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      /> */}
      <br />
      <iframe
        src="https://codesandbox.io/embed/fetch-and-render-an-activity-from-the-bored-api-forked-csfdk?fontsize=14&hidenavigation=1&theme=dark"
        title="fetch and render an activity from the Bored API (forked)"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <br />
      <iframe
        src="https://codesandbox.io/embed/a5-6ygkq?fontsize=14&hidenavigation=1&theme=dark"
        title="A5"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  );
}

export default codingProjects;
