import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function ExperienceCard({ exp, index }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 600, delay: index * 200 + 800 }
    });

    return (
        <animated.div
            className={`timeline-item ${isMobile ? 'right' : index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            ref={ref}
            style={animationProps}
        >
            <div className="timeline-item-content">
                <animated.span className="tag">{exp.date}</animated.span>
                <animated.h3 style={{ opacity: animationProps.opacity }}>{exp.title}</animated.h3>
                <animated.p style={{ opacity: animationProps.opacity }}>{exp.description}</animated.p>
                <animated.span className="circle" />
            </div>
        </animated.div>
    );
}

export default ExperienceCard;
