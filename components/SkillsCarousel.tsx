import styles from '../styles/SkillsCarousel.module.css';

export default function SkillsCarousel() {
    const skills = [
        'Python', 'Matlab', 'EEG', 'Eye-tracking', 'Figma', 'Adobe Suite', 'Italian', 'Spanish', 'French',
        'React', 'HTML/CSS', 'Arduino C', 'C++', 'Java', 'JavaScript', 'SQL',
        'PHP', 'Swift', 'Machine Learning'
    ];

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                {/* Render skills twice for seamless loop */}
                {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className={styles.skillBadge}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}
