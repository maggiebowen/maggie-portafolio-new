/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';

import styles from './Layout.module.scss';

function Layout({ children, className, ...rest }) {
  let layoutClassName = styles.layout;

  if (className) {
    layoutClassName = `${layoutClassName} ${className}`;
  }

  return (
    <div className={layoutClassName} {...rest}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
