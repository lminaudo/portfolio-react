import Header from "./header";
import Footer from "./footer";
import Home from "../pages/home"
import About from "../pages/about";
import Contact from "../pages/contact";
import Experience from "../pages/experience";
import {Route, Routes} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main className="main-body">
                <Routes>
                    <Route path="/"  element={<Home/>} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                </Routes>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};
export default Layout;