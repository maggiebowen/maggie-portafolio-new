import styles from '../../styles/ResumeSection.module.css';

export default function ResumeSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Education column */}
                <div className={styles.column}>
                    <h2 className={styles.header}>Education</h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <span className={styles.date}>September 2024 – Present</span>
                            <h3 className={styles.title}>Università di Trento, Italia</h3>
                            <p className={styles.description}>
                                Master&apos;s student in Human Computer Interaction, UniTrento Scholarship.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.date}>August 2018 – May 2022</span>
                            <h3 className={styles.title}>University of Southern California, Los Angeles</h3>
                            <p className={styles.description}>
                                B.A. in Narrative Studies and Computer Programming. Thematic Options Honors student, Renaissance Scholar Distinction, Dean&apos;s List.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Experience column */}
                <div className={styles.column}>
                    <h2 className={styles.header}>Experience</h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <span className={styles.date}>June 2025 – Present</span>
                            <h3 className={styles.title}>Research Lead (Intern)</h3>
                            <p className={styles.location}>Fraunhofer Italia, Bolzano</p>
                            <p className={styles.description}>
                                Designing an experimental paradigm, collecting data, and building a data pre-processing pipeline in Python. Developing a real-time fatigue detection system using eye-tracking and physiological data to assist people with disabilities in Human-Robot Collaboration contexts as part of the Inclu5ion initiative.
                            </p>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.date}>February 2025 – June 2025</span>
                            <h3 className={styles.title}>Lab Assistant & Researcher (Intern)</h3>
                            <p className={styles.location}>Enactive Brain Group, CIMeC, Rovereto</p>
                            <p className={styles.description}>
                                Collected data, tested eye-trackers, and handled EEG data preprocessing and statistical analysis in Matlab for a Many Labs replication study on the role of alpha phase in visual perception.
                            </p>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.date}>September 2022 – July 2024</span>
                            <h3 className={styles.title}>English Teacher</h3>
                            <p className={styles.location}>Auxiliares de Conversaciónes, Madrid</p>
                            <p className={styles.description}>
                                Taught English in Spanish public schools, designing lessons and activities to support language learning and cultural exchange.
                            </p>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.date}>May 2022 – September 2022</span>
                            <h3 className={styles.title}>Social Media Manager & Digital Marketing</h3>
                            <p className={styles.location}>AmeriCorps VISTA, Exposure Skate, Encinitas</p>
                            <p className={styles.description}>
                                Managed social media and digital marketing campaigns to support a nonprofit focused on skateboarding, empowerment, and community programs.
                            </p>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.date}>February 2021 – June 2022</span>
                            <h3 className={styles.title}>Student Researcher</h3>
                            <p className={styles.location}>USC Skate Studies, Los Angeles</p>
                            <p className={styles.description}>
                                Designed the Pullias skate study website, edited final video deliverables in Adobe Premiere Pro, and coded qualitative data for research on skateboarding and education.
                            </p>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.date}>May 2021 – August 2021; May 2020 – August 2020</span>
                            <h3 className={styles.title}>Scrum Master & React Developer; iOS Developer</h3>
                            <p className={styles.location}>Synchrony Financial, Remote</p>
                            <p className={styles.description}>
                                Developed accessibility features and deep linking for Synchrony&apos;s CareCredit iOS app. Organized daily stand-up meetings as Scrum Master for the Digital Collections team. Worked as a Front-end Developer on the Digital Collections web application using React, React Hooks, and Redux.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}