import Animation from "../components/Animation.tsx";
import EducationItem from "../components/EducationItem.tsx";
import ProfilePic from "/assets/profile.jpeg";
import SportsCar from "/assets/sport-car-svgrepo-com.svg";
import GradHat from "/assets/graduation-hat-and-diploma-svgrepo-com.svg";
import {Link} from "react-router-dom";
import {projects} from "../data/projects";
import {education} from "../data/education";

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="page-header">
                    <h1>About Me</h1>
                </div>
                <section className="two-column">
                    <div className="main">
                        <img src={ProfilePic} alt="Logan Minaudo" className="profile-pic"/>
                    </div>
                    <div className="secondary">
                        <p className="text-column">Hello, I'm <strong>Logan Minaudo</strong>, a Software Engineer
                            specializing in IT
                            solutions,
                            embedded systems, and software development. I thrive on creating efficient, user-focused
                            solutions for complex technical challenges while continuously learning and innovating.
                        </p>
                    </div>
                </section>
                <div className="about-details">
                    <Animation animationClass="driving-left">
                        <section className="two-column">
                            <div className="main ">
                                <img src={SportsCar} alt="car"/>
                            </div>
                            <div className="secondary">
                                <h3>What Drives Me</h3>
                                <p className="text-column">I’m passionate about solving real-world problems through
                                    technology—streamlining
                                    processes,
                                    enhancing user experiences, and engineering solutions that power the future. My goal
                                    is to leave a meaningful impact with every project I undertake.</p>
                            </div>

                        </section>
                    </Animation>
                    <Animation animationClass="driving">
                        <section className="two-column">
                            <div className="main">
                                <img src={GradHat} alt="graduation hat"/>
                            </div>
                            <div className="secondary">
                                <h3>Expertise</h3>
                                <ul className="project-list">
                                    <li><strong>Embedded Systems:</strong> Seamless hardware-software integration.</li>
                                    <li><strong>IT Solutions:</strong> Building and maintaining robust, scalable
                                        infrastructures.
                                    </li>
                                    <li><strong>Software Development:</strong> Crafting maintainable, high-performance
                                        applications.
                                    </li>
                                </ul>
                            </div>


                        </section>
                    </Animation>
                    <section className="">
                        <h3>Highlighted Projects</h3>
                        <ul className="projects-list">
                            {projects.map((project) => (
                                <li key={project.title} className="projects-list">
                                    <strong>{project.title}:</strong>
                                    <div>{project.description}
                                        <br/><em>Technologies: </em> {project.technologies.join(", ")}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h3>Education</h3>
                        <ul className="projects-list">
                            {education.map((edu) => (
                                <EducationItem key={edu.degree} {...edu} />
                            ))}
                        </ul>
                    </section>
                    <Animation animationClass="driving-left">
                        <div className="explore">
                            <p>
                                Discover more about my <Link to="/experience">professional journey</Link>, and don't
                                hesitate to&nbsp;
                                <Link to="/contact">get in touch</Link> if you're interested in collaborating or
                                learning more about my work!
                            </p>
                        </div>
                    </Animation>
                </div>
            </div>
        </>
    );
}

export default About;