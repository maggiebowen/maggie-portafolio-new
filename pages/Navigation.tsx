import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contacts">Contacts</Link>
    </div>
  );
}

export default Navbar;
