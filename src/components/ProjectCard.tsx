import {Project} from "../data/projects";

const ProjectCard = ({title, description, technologies}: Project) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="technologies">
                {technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;
