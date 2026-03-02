import {Link} from "react-router-dom";

const NotFound = () => {
    return (
<>

    <section id="hero">
        <div>
            <h1>&#x1F44B;&#127995; Sorry this page is not available</h1>
            <Link to="/" className="cta">Go Home</Link>
        </div>
    </section>
    </>
    );
};

export default NotFound;