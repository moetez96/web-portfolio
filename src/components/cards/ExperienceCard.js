import React, { useEffect, useState } from "react";
import { animated } from "react-spring";
import {useExperienceCardAnimations} from "../../Utils/Animations";

function ExperienceCard({ exp, index }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { ref, animationProps, springs, handlePaginationClick, slideAnimation, selectIndex, selectIndexContent }
        = useExperienceCardAnimations(index, exp.projects.length);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <animated.div
            className={`timeline-item ${isMobile ? 'right' : index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            ref={ref}
            style={animationProps}
        >
            <div className="timeline-item-content" style={{ opacity: animationProps.opacity }}>

                {exp.projects.length > 1 && (
                    <div className="pagination-indicators">
                        {exp.projects.map((elem, idx) => (
                            <span key={idx}
                                  className={`pagination-number ${idx === selectIndex ? 'active' : ''}`}
                                  onClick={() => handlePaginationClick(idx)}
                            >
                                {idx + 1}
                            </span>
                        ))}
                    </div>
                )}
                <animated.span className="tag">{exp.date}</animated.span>
                <animated.h3>{exp.title + " - " }<animated.span style={slideAnimation}>{exp.projects[selectIndexContent].role}</animated.span></animated.h3>
                <animated.p style={slideAnimation}>{exp.projects[selectIndexContent].description}</animated.p>
                {springs.map((props, i) => (
                    <animated.span key={i} className={`circle ${index === 0 ? 'active' : ''}`}
                                   style={index === 0 ? { transform: props.scale.to(s => `scale(${s})`), opacity: props.opacity } : {}} />
                ))}
                <div className="tech">
                    <animated.p style={slideAnimation}>{exp.projects[selectIndexContent].technologies}</animated.p>
                </div>
            </div>
        </animated.div>
    );
}

export default ExperienceCard;
