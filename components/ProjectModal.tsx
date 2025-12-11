import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ProjectModal.module.css';

// Define the Project type based on data structure
interface Project {
    id: string;
    title: string;
    modalDescription?: string;
    description?: string;
    mediaType?: string; // Relaxed to string to handle JS data import
    mediaSrc?: string;
    iframeCode?: string;
    video?: string;
    skills?: string[];
    link?: string;
    projectLink?: string;
    paperLink?: string;
    linkText?: string;
    width?: number;
    height?: number;
    alt?: string;
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside the modal content
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Helper to parse links in description
    const parseDescription = (text?: string) => {
        if (!text) return null;

        // Simple URL regex to linkify text
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = text.split(urlRegex);

        return parts.map((part, i) => {
            if (part.match(urlRegex)) {
                // Remove trailing punctuation from URL if needed
                const cleanUrl = part.replace(/[.,!?;:]$/, '');
                const suffix = part.slice(cleanUrl.length);
                return (
                    <span key={i}>
                        <a href={cleanUrl} target="_blank" rel="noreferrer">{cleanUrl}</a>
                        {suffix}
                    </span>
                );
            }
            return part;
        });
    };

    // Determine which description to use
    const descriptionText = project.modalDescription || project.description;

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} ref={modalRef}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className={styles.content}>
                    <div className={styles.mediaContainer}>
                        {project.mediaType === 'image' && project.mediaSrc && (
                            <Image
                                src={project.mediaSrc}
                                alt={project.alt || project.title}
                                width={project.width || 1200}
                                height={project.height || 800}
                                className={styles.imageMedia}
                                style={{ objectFit: 'contain' }}
                            />
                        )}

                        {(project.mediaType === 'iframe' || project.mediaType === 'youtube') && (project.iframeCode || project.video || project.mediaSrc) && (
                            <div
                                className={styles.videoFrame}
                                dangerouslySetInnerHTML={{
                                    __html: project.iframeCode ||
                                        `<iframe width="100%" height="100%" src="${project.mediaSrc || project.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                                }}
                            />
                        )}
                    </div>

                    <div className={styles.details}>
                        <h2 className={styles.title}>{project.title}</h2>

                        <p
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: descriptionText || '' }}
                        />

                        <div className={styles.linkContainer}>
                            {project.projectLink && (
                                <a href={project.projectLink} target="_blank" rel="noreferrer" className={styles.externalLink}>
                                    View Project
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" className={styles.externalLink}>
                                    {project.linkText || 'Visit Website'}
                                </a>
                            )}
                            {project.paperLink && (
                                <a href={project.paperLink} target="_blank" rel="noreferrer" className={styles.externalLink}>
                                    Read Paper
                                </a>
                            )}
                        </div>

                        {project.skills && project.skills.length > 0 && (
                            <div className={styles.skillsContainer}>
                                <h3 className={styles.skillsHeading}>Skills Used:</h3>
                                <div className={styles.skillsList}>
                                    {project.skills.map(skill => (
                                        <span key={skill} className={styles.skillBadge}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
