import { useRouter } from 'next/router';
import ProjectDetail from '../../components/ProjectDetail';
import { PROJECTS } from '../../data/projects';

export default function ProjectPage() {
    const router = useRouter();
    const { id } = router.query;

    // Find the project data matching the ID in the URL
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        // Optionally render a loading state or custom 404 if needed, 
        // but locally Next.js might just show nothing while router hydrates.
        // Good for UX to show something.
        return <div style={{ color: 'white', backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading project...</div>;
    }

    // Ensure skills is defined (ProjectDetail expects string[], my data has it now)
    const skills = project.skills || [];

    return (
        <ProjectDetail
            title={project.title}
            image={project.image}
            description={project.description || ''}
            skills={skills}
        />
    );
}
