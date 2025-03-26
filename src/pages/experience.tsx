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
                    <div className="project-card">
                        <h3>Software Engineer - Electric Power Conversion Control</h3>
                        <p>
                            Unified software streams, enhanced EV/PHEV algorithms, and resolved
                            software dependencies, ensuring compliance with industry standards.
                            Conducted HIL testing and developed robust unit test cases.
                        </p>
                        <ul className="technologies">
                            <li>C/C++</li>
                            <li>HIL Bench</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Software Engineer - SAP ABAP</h3>
                        <p>
                            Streamlined tax calculations and enhanced the VELO module with custom
                            tax reports and global accounting interfaces, improving documentation
                            and reporting.
                        </p>
                        <ul className="technologies">
                            <li>SQL</li>
                            <li>ABAP</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>
                            Lead Software Capstone Project - Human Exploration Rover Challenge
                            Dashboard
                        </h3>
                        <p>
                            Developed a real-time data visualization platform for NASA's Rover
                            Challenge, leveraging AWS, Raspberry Pi, and Python to monitor
                            competition metrics live.
                        </p>
                        <ul className="technologies">
                            <li>AWS</li>
                            <li>Raspberry Pi</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <div className="project-card">
                       <h3>My Portfolio Site</h3>
                       <p>
                           This site is built using React, CSS, and HTML. It's hosted on a Proxmox server running on-premises with Node.js and npm for managing dependencies and building the application. It showcases my work in web development and software engineering.
                       </p>
                       <ul className="technologies">
                           <li>React</li>
                           <li>CSS</li>
                           <li>HTML</li>
                           <li>Node.js</li>
                           <li>npm</li>
                           <li>Proxmox (on-prem server)</li>
                       </ul>
                    </div>

                </div>
            </section>
            <section className="resume-download">
                <h3>Interested in learning more about my experience?</h3>
                <p>Download my resume to see how I can contribute to your team.</p>
                <a href="/assets/LoganMinaudoResume.pdf" download className="cta">
                    <span className="cta-text">Download My Resume</span>
                    <i className="cta-icon">⬇️</i>
                </a>
            </section>
        </>
    );
};

export default Experience;