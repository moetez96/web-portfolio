import "../../styles/experience.css";
import "../../styles/cards/experience-card.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";
import ExperienceCard from "../cards/ExperienceCard";

function Experience() {
    const experiences = [
        {
            title: 'Deloitte Tunisia',
            date: 'October 2022 – Present',
            projects: [
                {
                    projectName: 'BMW Damage Management Application',
                    role: 'Full Stack Developer',
                    technologies: 'Angular, SpringBoot, Java 11, PostgreSQL, Docker, Jenkins, AWS S3',
                    description: 'I participated in developing a BMW application focused on damage management during car transportation, contributing to the migration from monolithic to microservices architecture while gaining insights into best practices. I also played a role in enhancing the user interface to improve system functionality and user experience, gaining valuable experience in both backend and frontend development within a collaborative team setting.'
                },
                {
                    projectName: 'Tunisie Telecom BSCS',
                    role: 'Software Developer',
                    technologies: 'J2EE, SpringBoot, Java 11, PostgreSQL, Docker, Jenkins',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        },
        {
            title: 'Orange Digital Center',
            date: 'February 2022- August 2022',
            projects: [
                {
                    projectName: 'Candidates Sourcing Website',
                    role: 'End of Study Internship',
                    technologies: 'Node.js, React.js, GitHub, MongoDB, Next.js, Express.js',
                    description: 'Development of a candidates sourcing website that aims to offer enterprises a more fleshed out image of their potential candidates, and open new opportunities for candidates to better reach new recruiters.'
                }
            ]
        },
        {
            title: 'ESPRIT TECH RDI',
            date: 'July 2021- August 2021',
            projects: [
                {
                    projectName: 'Personalized E-Learning Platform',
                    role: 'Summer Internship',
                    technologies: 'MongoDB, Spring Boot, Angular',
                    description: 'Development of a personalized E-Learning platform that aims to provide users with specific courses related to their fields of specialization.'
                }
            ]
        },
        {
            title: 'ISI KEF',
            date: 'January 2019 – June 2019',
            projects: [
                {
                    projectName: 'University Events Mobile Application',
                    role: 'End of Study Internship',
                    technologies: 'Android Studio, Firebase',
                    description: 'Development of a mobile application for university events, courses and forums.'
                }
            ]
        },
        {
            title: 'Cryptec',
            date: 'June 2018 – August 2018',
            projects: [
                {
                    projectName: 'Management Desktop Application',
                    role: 'Summer Internship',
                    technologies: 'VB.NET, SQL',
                    description: 'Development of a management Desktop application for employees schedules and machines dysfunctions in the workspace.'
                }
            ]
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
