import "../../styles/cards/project-card.css";
import { ArrowOutwardOutlined, GitHub } from "@mui/icons-material";
import { animated } from "react-spring";
import React from "react";
import { useProjectCardAnimation } from "../../Utils/Animations";
import {useNavigate} from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ project }) {
    const { ref, animationProps } = useProjectCardAnimation();
    const navigate = useNavigate();

    const handleButtonClick = (link) => {
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    const handleImageClick = () => {
        navigate(`/project/${project.name}`);
    };

    const backendSource = project.sourceBackend || project.sourceBacked;

    return (
        <animated.div ref={ref} style={animationProps} className="project-card-container">
            <button
                type="button"
                className="project-card-img-container"
                onClick={handleImageClick}
                aria-label={`Open ${project.title} project details`}
            >
                <div className="project-open-button">
                    <OpenInNewIcon />
                </div>
                <div className="project-card-tag-container">
                    {project.technologies.map((tech, index) => (
                        <div key={index} className="project-card-tag">
                            {tech}
                        </div>
                    ))}
                </div>
                {project.imgPlaceholder ? (
                    <img className="project-card-img"
                         loading="lazy"
                         src={`/projects/${project.imgPlaceholder}`}
                         alt={project.title} />
                ) : (
                    <div className="project-card-img"/>
                )}
            </button>
            <div className="project-card-overview">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-card-info">
                    <h3>Features</h3>
                    <hr />
                    {project.features.map((feature, index) => (
                        <p key={index}>{feature}</p>
                    ))}
                    <hr />
                </div>
            </div>

            <div className="project-card-btns">
                {project.demo && project.demo !== "" && (
                    <button type="button" onClick={() => handleButtonClick(project.demo)}>
                        DEMO <ArrowOutwardOutlined />
                    </button>
                )}
                {project.source && project.source !== "" ? (
                    <button type="button" onClick={() => handleButtonClick(project.source)}>
                        SEE ON GITHUB <GitHub />
                    </button>
                ) : (
                    <>
                        {project.sourceFrontend && (
                        <button type="button" onClick={() => handleButtonClick(project.sourceFrontend)}>
                            FRONT-END <GitHub />
                        </button>
                        )}
                        {backendSource && (
                        <button type="button" onClick={() => handleButtonClick(backendSource)}>
                            BACK-END <GitHub />
                        </button>
                        )}
                    </>
                )}

            </div>
        </animated.div>
    );
}

export default ProjectCard;
