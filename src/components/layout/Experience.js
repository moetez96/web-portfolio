import "../../styles/experience.css";
import "../../styles/cards/experience-card.css";
import { animated } from "react-spring";
import React from "react";
import ExperienceCard from "../cards/ExperienceCard";
import {useExperienceAnimations} from "../../Utils/Animations";
import resume from "../../Utils/resume.json";

function Experience() {
    const { ref, animationProps, headerAnimationProps } = useExperienceAnimations();

    return (
        <div className="experience-wrapper" id="experience">
            <div className="experience-container">
                <animated.div style={headerAnimationProps} className="experience-header">
                    <h1>Experience</h1>
                </animated.div>

                <div className="experience-timeline-container" ref={ref}>
                    <animated.div style={animationProps} className="timeline">
                        {resume.experiences.map((exp, index) => (
                            <ExperienceCard exp={exp} index={index} key={index} />
                        ))}
                        <animated.div
                            className="vertical-line"
                            style={{
                                transform: animationProps.transform.interpolate(
                                    t => `scaleY(${animationProps.opacity.interpolate(o => o ? 1 : 0)})`
                                ),
                                transition: 'transform 0.6s 0.3s'
                            }}
                        />
                    </animated.div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
