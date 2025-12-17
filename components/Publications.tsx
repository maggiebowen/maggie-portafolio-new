// just use same styles for now
import styles from '../styles/ResumeSection.module.css';

export default function BraggingRights() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.header}>Publications</h2>
                <div className={styles.column}>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <h2 className={styles.title}>First author, ACM publication</h2>
                            <p className={styles.description}>
                                I wrote and published my first paper on my project Equiluna, where I combined my passion for skateboarding with HCI! Check it out <a href='https://dl.acm.org/doi/10.1145/3750069.3750301'>here</a>.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h2 className={styles.title}>LA Times Article</h2>
                            <p className={styles.description}>
                                In my undergrad, I made Aunt Skatie, a club to help fellow women and LGBTQ+ skateboarders learn in a safe space. Check out my feature in the <a href='https://www.latimes.com/sports/story/2021-12-08/women-lgbtq-community-skateboarding-culture'>LA Times</a>!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}