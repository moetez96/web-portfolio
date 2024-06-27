import React, { useEffect, useState } from "react";
import { useSpring, animated, useSprings } from "react-spring";
import { useInView } from "react-intersection-observer";
import { easeCubicIn } from "d3-ease";

function ExperienceCard({ exp, index }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectIndexContent, setSelectIndexContent] = useState(0);
    const [isSlidingOut, setIsSlidingOut] = useState(false);

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

    const handlePaginationClick = (index) => {
        if (index !== selectIndex) {
            setIsSlidingOut(true);
            setSelectIndex(index);
            setTimeout(() => {
                setSelectIndexContent(index);
                setIsSlidingOut(false);
            }, 300);
        }
    };

    const slideAnimation = useSpring({
        opacity: isSlidingOut ? 0 : 1,
        transform: isSlidingOut ?
            selectIndex % 2 === 0 ? 'translateX(20px)': 'translateX(-20px)'  :
            selectIndex % 2 === 0 ? 'translateX(0)' : 'translateX(0)',
        config: { duration: 300 }
    });

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
                            <span
                                key={idx}
                                className={`pagination-circle ${idx === selectIndex ? 'active' : ''}`}
                                onClick={() => handlePaginationClick(idx)}
                            ></span>
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
