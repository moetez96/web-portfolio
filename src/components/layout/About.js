import "../../styles/about.css";
import { useSpring, useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";

const placeHolderSkills = [
    "JavaScript", "Java", "Python", "TypeScript", "Node.js", "HTML", "CSS", "ReactJS", "ExpressJS", "SpringBoot",
    "Angular", "MySQL", "MongoDB", "PostgreSQL"
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
        <div className="about-wrapper" ref={ref} id="about">
            <div className="about-container">
                <animated.h1 style={headerSpring}>About Me</animated.h1>
                <animated.div style={descSpring} className="about-desc">
                    <h2>Full-Stack Developer | Passionate About Software Development</h2>
                    <p>
                        I am Full-Stack Developer from Tunisia, with a strong foundation in computer science and engineering from ESPRIT.
                        My journey in software development began with a fascination for coding languages like JavaScript, Java, and Python, which I've refined alongside frameworks such as ReactJS, Angular, and SpringBoot.
                        I thrive on crafting intuitive user experiences and exploring the latest in frontend and backend technologies.
                        Always eager to learn and grow, I am constantly seeking new skills and exploring diverse aspects of design and development.                    *
                    </p>
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
