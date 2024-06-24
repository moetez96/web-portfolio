import "../../styles/experience.css";
import "../../styles/cards/experience-card.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";
import ExperienceCard from "../cards/ExperienceCard";

function Experience() {
    const experiences = [
        {
            date: 'October 2022 – Present',
            title: 'Deloitte Tunisia - Full Stack Developer',
            description: 'I participated in developing a BMW application focused on damage management during car transportation, contributing to the migration from monolithic to microservices architecture while gaining insights into best practices. I also played a role in enhancing the user interface to improve system functionality and user experience, gaining valuable experience in both backend and frontend development within a collaborative team setting.',
            technologies: ' Angular, SpringBoot, Java 11, PostgreSQL, Docker, Jenkins, AWS S3.'
        },
        {
            date: ' February 2022- August 2022',
            title: 'Orange Digital Center - End of Study Internship',
            description: 'Development of a candidates sourcing website that aims to offer enterprises a more fleshed out image of their potential candidates, and opennew opportunities for candidates to better reach new recruiters.',
            technologies: 'Node.js, React.js, GitHub, MongoDB, Next.js, Express.js.'
        },
        {
            date: 'July 2021- August 2021',
            title: 'ESPRIT TECH RDI - Summer Internship',
            description: 'Development of a personalized E-Learning platform that aims to provide users with specific courses related to their fields of specialization',
            technologies: 'MongoDB, Spring Boot, Angular.'
        },
        {
            date: 'January 2019 – June 2019',
            title: 'ISI KEF - End of Study Internship',
            description: 'Development of a mobile application for university events, courses and forums.',
            technologies: 'Android Studio, Firebase.'
        },
        {
            date: 'June 2018 – August 2018',
            title: 'Cryptec - Summer Internship',
            description: 'Development of a management Desktop application for employees schedules and machines dysfunctions in the workspace.',
            technologies: 'VB.NET, SQL.'
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
        <div className="experience-wrapper" id="experience">
            <div className="experience-container">
                <animated.div style={headerAnimationProps} className="experience-header">
                    <h1>Experience</h1>
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
