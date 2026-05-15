import { Navigate, useParams } from "react-router-dom";
import '../styles/project-page.css';
import '../styles/cards/project-card.css';
import ProjectSectionType1 from "../components/layout/ProjectSectionType1";
import ProjectSectionType2 from "../components/layout/ProjectSectionType2";
import ProjectSectionType3 from "../components/layout/ProjectSectionType3";
import ProjectNote from "../components/cards/ProjectNote";
import projects from "../assets/projects.json";
import resume from "../assets/resume.json";
import React, { useEffect, useState } from "react";
import { ArrowOutwardOutlined, GitHub } from "@mui/icons-material";
import { animated } from 'react-spring';
import { Carousel } from 'react-responsive-carousel';
import {useSection1Animation, useTitleAnimation} from "../Utils/Animations";

function Project() {
    const { name } = useParams();
    const [currentProject, setCurrentProject] = useState({});
    const [currentProjectInfo, setCurrentProjectInfo] = useState({});

    const titleAnimation = useTitleAnimation();
    const section1Animation = useSection1Animation();
    const [selectedImage, setSelectedImage] = useState(null);

    // openImage can be called as: openImage(src, desc) OR openImage(imagesArray, index)
    const openImage = (srcOrImages, descOrIndex) => {
        if (Array.isArray(srcOrImages)) {
            setSelectedImage({ images: srcOrImages, index: descOrIndex || 0 });
        } else {
            setSelectedImage({ src: srcOrImages, desc: descOrIndex });
        }
    };
    const closeImage = () => setSelectedImage(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') closeImage();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        // prevent background scrolling when modal is open
        document.body.style.overflow = selectedImage ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [selectedImage]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    const backendSource = currentProjectInfo.sourceBackend || currentProjectInfo.sourceBacked;

    if (name && !projects.list.some((proj) => proj.name === name)) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <animated.div style={titleAnimation} className="title-wrapper">
                <div className="title-container">
                    <h1 className="project-title">{currentProject.title}</h1>
                    <h2 className="project-short-description">{currentProject.shdes}</h2>
                </div>
                <div className="project-card-btns">
                    {currentProjectInfo.demo && currentProjectInfo.demo !== "" && (
                            <button type="button" onClick={() => handleButtonClick(currentProjectInfo.demo)}>
                                DEMO <ArrowOutwardOutlined />
                            </button>
                        )}
                    {currentProjectInfo.source && currentProjectInfo.source !== "" ? (
                        <button type="button" onClick={() => handleButtonClick(currentProjectInfo.source)}>
                            SEE ON GITHUB <GitHub />
                        </button>
                    ) : (
                        <>
                            {currentProjectInfo.sourceFrontend && (
                            <button type="button" onClick={() => handleButtonClick(currentProjectInfo.sourceFrontend)}>
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

            {selectedImage && (
                <div className="image-modal-overlay" onClick={closeImage}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="image-modal-close" onClick={closeImage}>✕</button>
                        {selectedImage.images ? (
                            <Carousel
                                showArrows={true}
                                showThumbs={false}
                                showStatus={false}
                                selectedItem={selectedImage.index}
                                onChange={(i) => setSelectedImage((s) => ({ ...s, index: i }))}
                                swipeable={true}
                                emulateTouch={true}
                            >
                                {selectedImage.images.map((elem, i) => (
                                    <img key={i} src={`/projects/${elem.image}`} alt={elem.imgDesc || `Slide ${i+1}`} />
                                ))}
                            </Carousel>
                        ) : (
                            <img src={selectedImage.src} alt={selectedImage.desc || 'expanded'} />
                        )}
                    </div>
                </div>
            )}

            <div className="project-sections-wrapper">
                <animated.div style={section1Animation}>
                    <ProjectSectionType1
                        description={currentProject.description}
                        image={currentProject.image}
                        imgDesc={currentProject.imgDesc}
                        onImageClick={openImage}
                    />
                </animated.div>

                <ProjectNote tech={currentProject.tech}/>

                {currentProject.sections?.map((section, index) => (
                    <React.Fragment key={index}>
                        {section.type === "type3" && (
                            <ProjectSectionType3 sectionInfo={section} onImageClick={openImage} />
                        )}

                        {section.type === "type2" && (
                            <ProjectSectionType2 direction={index % 2 === 0 ? "right" : "left"} sectionInfo={section} onImageClick={openImage} />
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
