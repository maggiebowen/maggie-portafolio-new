// just use same styles for now
import styles from '../styles/ResumeSection.module.css';
import Image from 'next/image';

export default function BraggingRights() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.header}>Publications</h2>
                <div className={styles.column}>
                    <div className={styles.list}>
                        <a
                            href="https://dl.acm.org/doi/10.1145/3750069.3750301"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.item}
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}
                        >
                            <div>
                                <h2 className={styles.title} style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>First author, ACM publication</h2>
                                <p className={styles.description} style={{ fontSize: '0.9rem' }}>
                                    I wrote and published my first paper on my project Equiluna, where I combined my passion for skateboarding with HCI!
                                </p>
                            </div>
                            <div style={{ width: '100%' }}>
                                <Image
                                    src="/pics/ACM-logo.jpeg"
                                    alt="ACM Publication Logo"
                                    width={500}
                                    height={300}
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }}
                                />
                            </div>
                        </a>
                        <a
                            href="https://www.latimes.com/sports/story/2021-12-08/women-lgbtq-community-skateboarding-culture"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.item}
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}
                        >
                            <div>
                                <h2 className={styles.title} style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>LA Times Article</h2>
                                <p className={styles.description} style={{ fontSize: '0.9rem' }}>
                                    In my undergrad, I made Aunt Skatie, a club to help fellow women and LGBTQ+ skateboarders learn in a safe space.
                                </p>
                            </div>
                            <div style={{ width: '100%' }}>
                                <Image
                                    src="/pics/aunt-skatie-latimes.png"
                                    alt="LA Times Article about Aunt Skatie"
                                    width={500}
                                    height={300}
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain', maxHeight: '200px' }}
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}