
const Contact = () => {
    return (
        <>
            <div className="page-header">
                <h1>Contact</h1>
            </div>
            <section id="contact">
                <p>You can reach me through any of the following methods:</p>
                <ul className="contact-list">
                    <li>
                        <span className="contact-icon">&#x1F4DE;</span>
                        Call: <a href="tel:+18102478605">(810) 247-8605</a>
                    </li>
                    <li>
                        <span className="contact-icon">&#x1F4E7;</span>
                        Email: <a href="mailto:ljminaudo@gmail.com">ljminaudo@gmail.com</a>
                    </li>
                    <li>
                        <span className="contact-icon">&#x1F5A5;</span>
                        LinkedIn:
                        <a href="https://www.linkedin.com/in/logan-minaudo/" target="_blank">Logan Minaudo</a>
                    </li>
                </ul>
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

export default Contact;