import CarouselComponent from "../utils/CarouselComponent";
import React from "react";
import {useProjectSectionAnimation} from "../../Utils/Animations";
import { animated } from "react-spring";

function ProjectSectionType2({ direction, sectionInfo }) {
    const { ref, containerAnimationProps, descriptionAnimationProps, imagesAnimationProps } = useProjectSectionAnimation();

    return (
        <div className="section-type2" ref={ref}>
            <animated.div className="section-type2-container" style={{ display: 'flex', flexDirection: direction === 'left' ? 'row-reverse' : 'row', ...containerAnimationProps }}>
                <animated.div className="section-description" style={descriptionAnimationProps}>
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
                <animated.div className="picture-wrapper" style={imagesAnimationProps}>
                    {sectionInfo.images ? (
                        <CarouselComponent images={sectionInfo.images} />
                    ) : (
                        <>
                            <img src={`/projects/${sectionInfo.image}`} alt="project-pic" loading="lazy" />
                            <div className="picture-desc">
                                <p>{sectionInfo.imgDesc}</p>
                            </div>
                        </>
                    )}
                </animated.div>
            </animated.div>
        </div>
    );
}

export default ProjectSectionType2;
