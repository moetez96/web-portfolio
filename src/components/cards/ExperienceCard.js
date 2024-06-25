import React, { useEffect, useState } from "react";
import { useSpring, animated, useSprings } from "react-spring";
import { useInView } from "react-intersection-observer";
import {easeCubicIn} from "d3-ease";

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

    const baseScale = 1;
    const baseOpacity = 0.2;

    const [springs] = useSprings(3, index => ({
        from: { scale: baseScale, opacity: 1 },
        to: async next => {
            while (1) {
                await next({ scale: 1.5, opacity: baseOpacity, config: { duration: 2400, easing: easeCubicIn } });
                await next({ scale: baseScale, opacity: 1, config: { duration: 0 } });
            }
        },
        delay: index * 400
    }));

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
                {springs.map((props, i) => (
                    <animated.span key={i} className={`circle ${index === 0 ? 'active' : ''}`}
                                   style={index === 0 ? { transform: props.scale.to(s => `scale(${s})`), opacity: props.opacity } : {}} />
                ))}
                <div className="tech">
                    <p>{' '} {exp.technologies}</p>
                </div>
            </div>
        </animated.div>
    );
}

export default ExperienceCard;
