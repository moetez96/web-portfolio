import CarouselComponent from "../utils/CarouselComponent";
import React from "react";

function ProjectSectionType2({direction, sectionInfo}) {
    const flexDirection = direction === 'left' ? 'row-reverse' : 'row';

    return (
        <div className="section-type2">
            <div className="section-type2-container" style={{ display: 'flex', flexDirection }}>
                <div className="section-description">
                    <h2>
                        {sectionInfo.title}
                    </h2>
                    <p>
                        {sectionInfo.description}
                    </p>
                    {sectionInfo.points && (
                        <ul>
                            {sectionInfo.points.map((point) => (
                                <li>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="picture-wrapper">
                    {sectionInfo.images ? (
                        <CarouselComponent images={sectionInfo.images}/>
                    ) : (
                        <>
                            <img src={`/projects/${sectionInfo.image}`} alt="project-pic"/>
                            <div className="picture-desc">
                                <p>{sectionInfo.imgDesc}</p>
                            </div>
                        </>)}
                    {/*
                    <img src={`/projects/${sectionInfo.image}`} alt="project-pic"/>
                */}
                </div>
            </div>
        </div>
    );
}

export default ProjectSectionType2;
