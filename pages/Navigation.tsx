import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/photography">Photography </Link>
      <Link href="/visualArt">Visual Art </Link>
      <Link href="/filmmaking">Filmmaking </Link>
      <Link href="/codingProjects">Coding Projects </Link>
      <Link href="/auntSkatie">Aunt Skatie </Link>
    </div>
  );
}

export default Navbar;
