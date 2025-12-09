import Image from 'next/image';
import styles from '../../styles/ProjectDetail.module.css';
import Navigation from './Navigation';

interface ProjectDetailProps {
    title: string;
    image: string;
    description: string;
    skills: string[];
}

export default function ProjectDetail({ title, image, description, skills }: ProjectDetailProps) {
    return (
        <div className={styles.container}>
            <Navigation />

            {/* Full Screen Hero Image */}
            <div className={styles.heroImageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            <div className={styles.contentSection}>
                <h1 className={styles.heroTitle}>{title}</h1>
                <p className={styles.description}>{description}</p>

                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsHeading}>Skills Used:</h3>
                    <div className={styles.skillsList}>
                        {skills.map((skill, index) => (
                            <span key={index} className={styles.skillBadge}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
