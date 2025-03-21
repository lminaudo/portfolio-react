import {useRef, useEffect, ReactNode} from "react";

interface AnimationProps {
    children: ReactNode;
    animationClass: string; //new prop for animation class
}

const Animation = ({children, animationClass}: AnimationProps) => {
    const animationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.05, // Trigger when 5% of the element is visible
        };

        // Callback function for IntersectionObserver
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        // Initialize IntersectionObserver
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (animationRef.current) {
            observer.observe(animationRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, [animationClass]);
    return (
        <div ref={animationRef} className={animationClass}>
            {children}
        </div>
    );
};

export default Animation;