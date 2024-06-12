import "../../styles/about.css";
import { useSpring, useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";

const placeHolderSkills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "C", "C--", "C++", "C#", "C/AL",
    "Caché ObjectScript", "C Shell", "Caml", "Candle", "Cayenne", "CDuce", "Cecil",
    "Cel", "Cesil", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "CHAIN",
    "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk",
    "CL", "Claire", "Clarion", "Clean", "Clipper", "Converge", "Cool", "Coq", "Coral 66",
    "Corn", "CorVision", "COWSEL", "CPL", "csh", "CSP", "Csound", "CUDA", "Curl", "Curry",
    "Cyclone", "Cython", "D", "DASL", "DASL", "Dart", "DataFlex"
];

function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const headerSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(-20px)",
        config: { duration: 500 }
    });

    const descSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(-20px)",
        config: { duration: 500, delay: 200 }
    });

    const skillsTrail = useTrail(placeHolderSkills.length, {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        from: { opacity: 0, transform: "translateY(20px)" },
        config: { mass: 5, tension: 2000, friction: 100 },
        delay: 10
    });

    return (
        <div className="about-wrapper" ref={ref}>
            <div className="about-container">
                <animated.h1 style={headerSpring}>About Me</animated.h1>
                <animated.div style={descSpring} className="about-desc">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </animated.div>
            </div>
            <div className="about-skills-container">
                <div className="about-skills">
                    SKILLS
                </div>
                <div className="about-skills-list">
                    {skillsTrail.map((style, index) => (
                        <animated.span className="skill-chip" style={style} key={index}>{placeHolderSkills[index]}</animated.span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
