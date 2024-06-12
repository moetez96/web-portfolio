import "../../styles/cards/experience-card.css";
import React, {useEffect, useState} from "react";

function ExperienceCard({exp, index}) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`timeline-item ${isMobile ? 'right' : index % 2 === 0 ? 'left' : 'right'}`}
            key={index} >
            <div className="timeline-item-content">
                <span className="tag">{exp.date}</span>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <span className="circle" />
            </div>
        </div>
    );
}

export default ExperienceCard;