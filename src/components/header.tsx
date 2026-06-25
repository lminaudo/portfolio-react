import {Link} from 'react-router-dom';
import LogoBig from '/assets/4.svg'

const Header = () => {
    return (
        <div className="container main-header">
            <div className="logo">
                <Link to="/" aria-label="Navigate to Home">
                    <img rel="preload" src={LogoBig} alt="Logan Minaudo Logo"/>
                </Link>
            </div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to="/" aria-label="Navigate to Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" aria-label="Learn more About me">About</Link>
                    </li>
                    <li>
                        <Link to="/experience" aria-label="Explore my Projects">Experience</Link>
                    </li>
                    <li>
                        <Link to="/contact" aria-label="Contact me">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;