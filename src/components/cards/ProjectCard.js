import "../../styles/cards/project-card.css";
import { ArrowOutwardOutlined, GitHub } from "@mui/icons-material";
import { animated } from "react-spring";
import React from "react";
import {useProjectCardAnimation} from "../../Utils/Animations";

function ProjectCard({project}) {
    const { ref, animationProps } = useProjectCardAnimation();

    const handleButtonClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <animated.div ref={ref} style={animationProps} className="project-card-container">
            <div className="project-card-img-container">
                <div className="project-card-tag-container">
                    {project.technologies.map((tech) => (
                        <div className="project-card-tag">
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="project-card-img"></div>
            </div>
            <div className="project-card-overview">
                <h2>{project.title}</h2>
                <p>
                    {project.description}
                </p>
                <div className="project-card-info">
                    <h3>Features</h3>
                    <hr />
                    {project.features.map((feature) => (
                        <p>{feature}</p>
                    ))}
                    <hr />
                </div>
                <div className="project-card-btns">
                    {(project.demo != null && project.demo !== "") && (
                        <button onClick={() => handleButtonClick(project.demo)}>
                            LIVE DEMO <ArrowOutwardOutlined />
                        </button>
                    )}
                    <button onClick={() => handleButtonClick(project.source)}>
                        SEE ON GITHUB <GitHub />
                    </button>
                </div>
            </div>
        </animated.div>
    );
}

export default ProjectCard;
