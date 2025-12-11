import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { PROJECTS, CATEGORIES } from '../data/projects';

export default function ProjectGrid() {
    const [activeFilter, setActiveFilter] = useState(CATEGORIES.ALL);
    const router = useRouter();

    // Group categories for rendering buttons
    const filterList = Object.values(CATEGORIES);

    const filteredProjects = PROJECTS.filter((project) => {
        if (activeFilter === CATEGORIES.ALL) return true;
        return project.categories.includes(activeFilter);
    });

    const handleProjectClick = (projectId: string) => {
        const project = PROJECTS.find(p => p.id === projectId);

        // If project has an internal link (starts with /), use that instead of detail page
        if (project?.link && !project.isExternal) {
            router.push(project.link);
        } else {
            router.push(`/projects/${projectId}`);
        }
    };

    return (
        <>
            {/* Filter Buttons */}
            <div className={styles.filterContainer}>
                {filterList.map((filter) => (
                    <button
                        key={filter}
                        className={`${styles.filterBtn} ${activeFilter === filter ? styles.activeFilter : ''}`}
                        onClick={() => setActiveFilter(filter)}
                        type="button"
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className={styles.codingProjectsGrid}>
                {filteredProjects.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className={styles.codingProjectsItem}
                            onClick={() => handleProjectClick(project.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={styles.projectImageWrapper}>
                                <Image
                                    alt={project.alt || project.title}
                                    src={project.image}
                                    quality={100}
                                    className={styles.codingProjectsImg}
                                    width={project.width}
                                    height={project.height}
                                />
                                <div className={styles.projectOverlay}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    {project.description && (
                                        <p className={styles.projectDescription}>
                                            {project.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
