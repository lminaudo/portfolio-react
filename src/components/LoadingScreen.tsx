import Logo from '/assets/9.svg';

interface LoadingScreenProps {
    fadeOut: boolean;
}

const LoadingScreen = ({fadeOut}: LoadingScreenProps) => {
    return (
        <div className={`loading-screen${fadeOut ? ' fade-out' : ''}`}>
            <img src={Logo} alt="Loading" className="loading-logo"/>
        </div>
    );
};

export default LoadingScreen;
