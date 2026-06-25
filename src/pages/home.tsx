import Animation from "../components/Animation";
import SkillCard from "../components/SkillCard";
import {skills} from "../data/skills";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <section id="hero">
                <div>
                    <h1>&#x1F44B;&#127995; Hello, I'm Logan Minaudo!
                    </h1>
                    <p>Software Engineer specializing in IT solutions, embedded systems, and innovative software
                        development.</p>
                    <Link to="/experience" className="cta">View My Experience</Link>
                    <Link to="/contact" className="cta">Get in Touch</Link>
                </div>
            </section>
            <section id="skills">
                <h2>My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <Animation key={skill.name} animationClass='zoomanimation'>
                            <SkillCard {...skill} />
                        </Animation>
                    ))}
                </div>
            </section>
            <section id="about-preview">
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
        </>
    );
}

export default Home;