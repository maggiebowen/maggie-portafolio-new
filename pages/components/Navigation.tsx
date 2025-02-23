import Link from 'next/link';
import styles from '../../styles/Home.module.css';

function Navigation() {
  return (
    <div className={styles.navigationBar}>
      <Link href="/">Home</Link>
      <span> / </span>
      <Link href="/about">About</Link>
      <span> / </span>
      <Link href="/codingProjects">Coding Projects</Link>
      <span> / </span>
      <Link href="/photography">Photography</Link>
      <span> / </span>
      <Link href="/visualArt">Visual Art</Link>
      <span> / </span>
      <Link href="/filmmaking">Filmmaking</Link>
      <span> / </span>
      <Link href="/auntSkatie">Aunt Skatie</Link>
    </div>
  );
}

export default Navigation;
