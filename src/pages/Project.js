import { useParams } from "react-router-dom";
import '../styles/project-page.css'
import ProjectSectionType1 from "../components/layout/ProjectSectionType1";
import ProjectSectionType2 from "../components/layout/ProjectSectionType2";
import ProjectSectionType3 from "../components/layout/ProjectSectionType3";
import ProjectNote from "../components/cards/ProjectNote";
import projects from "../assets/projects.json";
import {useEffect, useState} from "react";

function Project() {
    const { name } = useParams();
    const [currentProject, setCurrentProject] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (name) {
            const project = projects.list.find((proj) => proj.name === name);
            if (project) {
                setCurrentProject(project);
            }
        }
    }, [name]);

    return (
        <>
            <div className="title-wrapper">
                <div className="title-container">
                    <h1 className="project-title">{currentProject.title}</h1>
                    <h2 className="project-short-description">{currentProject.shdes}</h2>
                </div>
            </div>
            <div className="project-sections-wrapper">
                <ProjectSectionType1 description={currentProject.description} image={currentProject.image} imgDesc={currentProject.imgDesc}/>
                <ProjectNote />
                {currentProject.sections?.map((section, index) => (
                    <>
                        {section.type === "type3" && (
                            <ProjectSectionType3 sectionInfo={section}/>
                        )}

                        {section.type === "type2" && (
                            <ProjectSectionType2 direction={index%2 === 0 ? "right" : "left"} sectionInfo={section}/>
                        )}

                        {index !== (currentProject.sections.length - 1) && (<hr />)}
                    </>
                ))}
                <br/>
                <br/>
            </div>
        </>
    );
}

export default Project;
