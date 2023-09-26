import Link from 'next/link';
import navStyles from '../styles/navStyles.css';

function Navbar() {
  return (
    <div className="sticky top-0 h-20 w-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full items-center justify-between">
          <ul className={navStyles.ul}>
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
