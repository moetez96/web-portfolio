import React from "react";

function ProjectSectionType3({sectionInfo}) {

    return (
        <div className="section-type3">
            <div className="section-description">
                <h2>{sectionInfo.title}</h2>
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
            <div className="section-images">
                {sectionInfo.images?.map((image) => (
                    <div className="picture-wrapper">
                        <img src={`/projects/${image.image}`} alt={image}/>
                        <div className="picture-desc">
                            <p>{image.imgDesc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSectionType3;
