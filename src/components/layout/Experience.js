import "../../styles/experience.css";
import "../../styles/cards/experience-card.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";
import ExperienceCard from "../cards/ExperienceCard";

function Experience() {
    const experiences = [
        {
            date: 'Oct 2022 - Present',
            title: 'Senior Web Developer at Tech Solutions',
            description: 'Leading a team of developers to build scalable web applications.'
        },
        {
            date: 'Jan 2022 - Sept 2022',
            title: 'Web Developer at Creative Agency',
            description: 'Developed dynamic websites and collaborated with designers to create engaging user experiences.'
        },
        {
            date: 'Jun 2021 - Oct 2021',
            title: 'Junior Web Developer at Startup Inc.',
            description: 'Worked on various front-end and back-end tasks, gaining hands-on experience in web development.'
        },
        {
            date: 'Jun 2020 - Oct 2020',
            title: 'Intern at WebWorks',
            description: 'Assisted in developing website components and learned about web technologies.'
        }
    ];

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 }
    });

    const headerAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
        config: { duration: 500 }
    });

    return (
        <div className="experience-wrapper">
            <div className="experience-container">
                <animated.div style={headerAnimationProps} className="experience-header">
                    <h1>Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus
                        mauris vitae</p>
                </animated.div>

                <div className="experience-timeline-container" ref={ref}>
                    <animated.div style={animationProps} className="timeline">
                        {experiences.map((exp, index) => (
                            <ExperienceCard exp={exp} index={index} key={index} />
                        ))}
                        <animated.div
                            className="vertical-line"
                            style={{
                                transform: animationProps.transform.interpolate(
                                    t => `scaleY(${inView ? 1 : 0})`
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
