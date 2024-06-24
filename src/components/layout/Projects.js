import "../../styles/projects.css";
import {useSpring, animated, useTrail} from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";
import ProjectCard from "../cards/ProjectCard";

function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const headerAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 600 }
    });

    const projects = [
        { id: 1, title: "Project 1" },
        { id: 2, title: "Project 2" },
        { id: 3, title: "Project 3" },
        { id: 4, title: "Project 4" }
    ];

    const listprojectAnimationProps = useTrail(projects.length, {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 600, delay: 200 }
    });

    return (
        <div className="projects-wrapper" id="projects">
            <div className="projects-container" ref={ref}>
                <animated.div style={headerAnimationProps} className="projects-header">
                    <h1>Featured Projects</h1>
                    <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
                </animated.div>
                <div className="projects-list-container">
                    {listprojectAnimationProps.map((style, index) => (
                        <animated.div key={projects[index].id} style={style}>
                            <ProjectCard title={projects[index].title} />
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
