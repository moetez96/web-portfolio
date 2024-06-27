import "../../styles/projects.css";
import { animated } from "react-spring";
import React from "react";
import ProjectCard from "../cards/ProjectCard";
import {useProjectsAnimations} from "../../Utils/Animations";
import resume from "../../Utils/resume.json";

function Projects() {
    const { ref, headerAnimationProps, listProjectAnimationProps } = useProjectsAnimations(resume.projects.list.length);

    return (
        <div className="projects-wrapper" id="projects">
            <div className="projects-container" ref={ref}>
                <animated.div style={headerAnimationProps} className="projects-header">
                    <h1>Featured Projects</h1>
                    <p>{resume.projects.description}</p>
                </animated.div>
                <div className="projects-list-container">
                    {listProjectAnimationProps.map((style, index) => (
                        <animated.div key={resume.projects.list[index].id} style={style}>
                            <ProjectCard project={resume.projects.list[index]} />
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
