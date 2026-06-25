import {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout';
import ScrollWhenChangingPages from "./components/ScollWhenChangingPages.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";

function App() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

        const removeTimer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (loading) {
        return <LoadingScreen fadeOut={fadeOut}/>;
    }

    return (
        <Router>
            <ScrollWhenChangingPages/>
            <Layout/>
        </Router>
    );
}

export default App
