import React, { useRef, useState, useEffect } from "react";

const FadeOnScroll = ({ children }) => {
    const ref = useRef(null);
    const [opacity, setOpacity] = useState(1);
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        // Only enable fade on medium (768px) and up
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        if (!isLargeScreen) return;

        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const fadeStart = 0;
            const fadeEnd = 200;

            if (rect.top < fadeStart) {
                const fadeAmount = Math.max(0, 1 - Math.abs(rect.top) / fadeEnd);
                setOpacity(fadeAmount);
            } else {
                setOpacity(1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLargeScreen]);

    return (
        <div
            ref={ref}
            style={{
                opacity: isLargeScreen ? opacity : 1,
                transition: "opacity 0.5s",
            }}
        >
            {children}
        </div>
    );
};

export default FadeOnScroll;
