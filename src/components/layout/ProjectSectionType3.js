import React from "react";
import {useProjectSectionAnimation} from "../../Utils/Animations";
import { animated } from "react-spring";

function ProjectSectionType3({ sectionInfo }) {
    const { ref, descriptionAnimationProps, imagesAnimationProps } = useProjectSectionAnimation();

    return (
        <div ref={ref} className="section-type3">
            <animated.div style={descriptionAnimationProps} className="section-description">
                <h2>{sectionInfo.title}</h2>
                <p>{sectionInfo.description}</p>
                {sectionInfo.points && (
                    <ul>
                        {sectionInfo.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                )}
            </animated.div>

            <animated.div style={imagesAnimationProps} className="section-images">
                {sectionInfo.images?.map((image, index) => (
                    <div key={index} className="picture-wrapper">
                        <img src={`/projects/${image.image}`} alt={image.imgDesc} loading="lazy" />
                        <div className="picture-desc">
                            <p>{image.imgDesc}</p>
                        </div>
                    </div>
                ))}
            </animated.div>
        </div>
    );
}

export default ProjectSectionType3;
