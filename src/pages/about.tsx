import Animation from "../componets/Animation.tsx";
import ProfilePic from "/assets/profile.jpeg";
import SportsCar from "/assets/sport-car-svgrepo-com.svg";
import GradHat from "/assets/graduation-hat-and-diploma-svgrepo-com.svg";
import {Link} from "react-router-dom";

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
                            <li className="projects-list">
                                <strong>EPCC Projects:</strong>
                                <div>Unified software streams to ensure compliance with
                                    GM
                                    and
                                    industry standards. Enhanced EV/PHEV algorithms, conducted HIL testing, and resolved
                                    software dependencies.
                                    <br/><em>Technologies: </em> C/C++, HIL Bench
                                </div>
                            </li>
                            <li className="projects-list">
                                <strong>SAP Projects:</strong>
                                <div>Optimized tax calculations and streamlined
                                    documentation
                                    for
                                    the VELO module. Developed global accounting interfaces, custom tax reports, and
                                    extended
                                    payment letter functionalities.
                                    <br/><em>Technologies: </em> SQL, ABAP
                                </div>
                            </li>
                            <li className="projects-list">
                                <strong>NASA Rover Challenge Dashboard:</strong>
                                <div>Built a real-time data
                                    visualization
                                    and
                                    monitoring platform for NASA's Rover Challenge. Designed using AWS, Raspberry Pi,
                                    and
                                    Python
                                    to collect and display competition metrics live.
                                    <br/><em>Technologies: </em> AWS, Raspberry Pi, Python, JavaScript, HTML/CSS, SQL
                                </div>
                            </li>
                            <li className="projects-list">
                                <strong>Portflio Website: </strong>
                                <div>I created a responsive portfolio website using JavaScript, Node.js, CSS, and HTML,
                                    incorporating reusable components and smooth animations, hosted on my Proxmox
                                    server.
                                    <br/><em>Technologies: </em> Proxmox, React, JavaScript, HTML/CSS, Node.js, npm
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Education</h3>

                        <ul className="projects-list">
                            <li className="projects-list">
                                <div>
                                    <strong>Master of Business Administration</strong> - Louisiana State University -
                                    Shreveport <br/>
                                    <em>Specialization: </em>Project Management
                                </div>
                            </li>
                            <li className="projects-list">
                                <div>
                                    <strong>M.S. Computer Science and Information Systems</strong> - University of
                                    Michigan - Flint <br/>
                                    <em>Concentration: </em>Computer Science
                                </div>
                            </li>
                            <li className="projects-list">
                                <div>
                                    <strong>B.S. Computer Science</strong> - University of Michigan - Flint <br/>
                                    <em>Minor: </em>General Business
                                </div>
                            </li>
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