const ResumeDownload = () => {
    return (
        <section className="resume-download">
            <h3>Interested in learning more about my experience?</h3>
            <p>Download my resume to see how I can contribute to your team.</p>
            <a href="/assets/LoganMinaudoResume.pdf" download className="cta">
                <span className="cta-text">Download My Resume</span>
                <i className="cta-icon">⬇️</i>
            </a>
        </section>
    );
};

export default ResumeDownload;
