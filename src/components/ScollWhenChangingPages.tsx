import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {animate} from "framer-motion";

const ScrollWhenChangingPages = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        animate(window.scrollY, 0, {duration: 0.5, ease: "easeOut", onUpdate: (y) => window.scrollTo(0, y)});
    }, [pathname]);

    return null;
}

export default ScrollWhenChangingPages;