import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';

function Navigation() {
  const router = useRouter();
  const [pathname, setPathname] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router.isReady, router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/photography', label: 'Photography' },
    { href: '/visualArt', label: 'Visual Art' },
    { href: '/filmmaking', label: 'Filmmaking' },
    { href: '/auntSkatie', label: 'Aunt Skatie' },
  ];

  return (
    <div className={styles.navContainer}>
      {/* Desktop Navigation */}
      <div className={styles.navigationBar}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? styles.activeLink : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Hamburger Button (Mobile) */}
      <button type='button' className={styles.hamburgerBtn} onClick={toggleMenu} aria-label='Toggle menu'>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.activeLink : ''}
              onClick={toggleMenu} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navigation;

