import { useParams } from "react-router-dom";
import '../styles/project-page.css';
import ProjectSectionType1 from "../components/layout/ProjectSectionType1";
import ProjectSectionType2 from "../components/layout/ProjectSectionType2";
import ProjectSectionType3 from "../components/layout/ProjectSectionType3";
import ProjectNote from "../components/cards/ProjectNote";
import projects from "../assets/projects.json";
import resume from "../assets/resume.json";
import React, { useEffect, useState } from "react";
import { ArrowOutwardOutlined, GitHub } from "@mui/icons-material";
import { animated } from 'react-spring';
import {useSection1Animation, useTitleAnimation} from "../Utils/Animations";

function Project() {
    const { name } = useParams();
    const [currentProject, setCurrentProject] = useState({});
    const [currentProjectInfo, setCurrentProjectInfo] = useState({});

    const titleAnimation = useTitleAnimation();
    const section1Animation = useSection1Animation();

    useEffect(() => {
        if (name) {
            const project = projects.list.find((proj) => proj.name === name);
            const projectInfo = resume.projects.list.find((proj) => proj.name === name);

            if (project) {
                setCurrentProject(project);
            }

            if (projectInfo) {
                setCurrentProjectInfo(projectInfo);
            }
        }
    }, [name]);

    const handleButtonClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <>
            <animated.div style={titleAnimation} className="title-wrapper">
                <div className="title-container">
                    <h1 className="project-title">{currentProject.title}</h1>
                    <h2 className="project-short-description">{currentProject.shdes}</h2>
                </div>
                <div className="project-card-btns">
                    {currentProjectInfo.demo && currentProjectInfo.demo !== "" && (
                        <button onClick={() => handleButtonClick(currentProjectInfo.demo)}>
                            DEMO <ArrowOutwardOutlined />
                        </button>
                    )}
                    {currentProjectInfo.source && currentProjectInfo.source !== "" ? (
                        <button onClick={() => handleButtonClick(currentProjectInfo.source)}>
                            SEE ON GITHUB <GitHub />
                        </button>
                    ) : (
                        <>
                            <button onClick={() => handleButtonClick(currentProjectInfo.sourceFrontend)}>
                                FRONT-END <GitHub />
                            </button>
                            <button onClick={() => handleButtonClick(currentProjectInfo.sourceBacked)}>
                                BACK-END <GitHub />
                            </button>
                        </>
                    )}
                </div>
            </animated.div>

            <div className="project-sections-wrapper">
                <animated.div style={section1Animation}>
                    <ProjectSectionType1
                        description={currentProject.description}
                        image={currentProject.image}
                        imgDesc={currentProject.imgDesc}
                    />
                </animated.div>

                <ProjectNote tech={currentProject.tech}/>

                {currentProject.sections?.map((section, index) => (
                    <React.Fragment key={index}>
                        {section.type === "type3" && (
                            <ProjectSectionType3 sectionInfo={section} />
                        )}

                        {section.type === "type2" && (
                            <ProjectSectionType2 direction={index % 2 === 0 ? "right" : "left"} sectionInfo={section} />
                        )}

                        {index !== (currentProject.sections.length - 1) && <hr />}
                    </React.Fragment>
                ))}
                <br />
                <br />
            </div>
        </>
    );
}

export default Project;
