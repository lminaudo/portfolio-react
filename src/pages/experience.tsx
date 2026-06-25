import ProjectCard from "../components/ProjectCard";
import ResumeDownload from "../components/ResumeDownload";
import {projects} from "../data/projects";

const Experience = () => {
    return (
        <>
            <div className="page-header">
                <h1>Projects & Experience</h1>
            </div>
            <section>
                <div className="project-header">
                    <p>
                        Explore some of my most impactful and innovative projects, showcasing my
                        skills in software development, IT solutions, and embedded systems.
                    </p>
                </div>

                <div className="project-card-list">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>
            <ResumeDownload/>
        </>
    );
};

export default Experience;