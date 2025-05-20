import React, { useRef, useState, useEffect } from "react";

const FadeOnScroll = ({ children }) => {
    const ref = useRef(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const fadeStart = -100  ; // top of the viewport
            const fadeEnd = 300; // pixels above which fade completes

            if (rect.top < fadeStart) {
                const fadeAmount = Math.max(0, 1 - Math.abs(rect.top) / fadeEnd);
                setOpacity(fadeAmount);
            } else {
                setOpacity(1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} style={{ opacity, transition: "opacity 0.5s " }}>
            {children}
        </div>
    );
};

export default FadeOnScroll;
