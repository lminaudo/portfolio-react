import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './componets/Layout';
import ScrollWhenChangingPages from "./componets/ScollWhenChangingPages.tsx";

function App() {
    return (
        <Router>
            <ScrollWhenChangingPages/>
            <Layout/>
        </Router>
    );
}

export default App
