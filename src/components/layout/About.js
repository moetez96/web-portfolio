import "../../styles/about.css";
import { animated } from "react-spring";
import React from "react";
import { useAboutAnimations } from "../../Utils/Animations";
import resume from "../../assets/resume.json";

function About() {
    const { ref, headerSpring, descSpring, skillsTrail }
        = useAboutAnimations(resume.skills.length);

    return (
        <div className="about-wrapper" ref={ref} id="about">
            <div className="about-container">
                <animated.h1 style={headerSpring}>About Me</animated.h1>
                <animated.div style={descSpring} className="about-desc">
                    <p>{resume.about.description}</p>
                </animated.div>
            </div>
            <div className="about-skills-container">
                <div className="about-skills">
                    SKILLS
                </div>
                <div className="about-skills-list">
                    {skillsTrail.map((style, index) => (
                        <animated.span className="skill-chip" style={style} key={index}>{resume.skills[index]}</animated.span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
