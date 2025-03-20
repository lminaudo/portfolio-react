import CodeImg from '/assets/code.svg';
import DatabaseImg from '/assets/database.svg';
import CloudsImg from '/assets/clouds.svg';
import CheckImg from '/assets/check.svg';
import Animation from "../componets/Animation";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <section id="hero">
                <div>
                    <h1>&#x1F44B;&#127995; Hello, I'm Logan Minaudo
                    </h1>
                    <p>Software Engineer specializing in IT solutions, embedded systems, and innovative software
                        development.</p>
                    <Link to="/experience" className="cta">View My Experience</Link>
                    <Link to="/contact" className="cta">Get in Touch</Link>
                </div>
            </section>
            <section id="skills">
                <Animation animationClass='zoomanimation'>

                    <h2>My Skills</h2>
                    <div className="skills-grid">
                        <Animation animationClass='zoomanimation'>
                            <div className="skill">
                                <img src={CodeImg} alt="Programming"/>
                                <p>C/C++, Python, ABAP, HTML/CSS, JavaScript</p>
                            </div>
                        </Animation>
                        <Animation animationClass='zoomanimation'>
                            <div className="skill">
                                <img src={DatabaseImg} alt="Database"/>
                                <p>MySQL, SAP HANA</p>
                            </div>
                        </Animation>
                        <Animation animationClass='zoomanimation'>
                            <div className="skill">
                                <img src={CloudsImg} alt="Cloud Computing"/>
                                <p>Google Cloud, AWS, Embedded Systems</p>
                            </div>
                        </Animation>
                        <Animation animationClass='zoomanimation'>
                            <div className="skill">
                                <img src={CheckImg} alt="Testing"/>
                                <p>HIL Testing, Unit Testing</p>
                            </div>
                        </Animation>
                    </div>
                </Animation>
            </section>
            <section id="hero">
                <div>

                    <h2>About Me</h2>
                    <p>I'm passionate about solving real-world problems through technology. My work spans embedded
                        systems,
                        IT
                        solutions, and building efficient, user-friendly software. Let's collaborate to make an impact!
                    </p>
                    <Link to="/about" className="cta">Learn More</Link>
                </div>

            </section>
        </div>
    );
}

export default Home;