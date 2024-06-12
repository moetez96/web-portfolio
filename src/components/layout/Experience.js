import React, { useState, useEffect } from "react";
import "../../styles/experience.css";

function Experience() {
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

    const experiences = [
        {
            date: 'Oct 2022 - Present',
            title: 'Senior Web Developer at Tech Solutions',
            description: 'Leading a team of developers to build scalable web applications.'
        },
        {
            date: 'Jan 2022 - Sept 2022',
            title: 'Web Developer at Creative Agency',
            description: 'Developed dynamic websites and collaborated with designers to create engaging user experiences.'
        },
        {
            date: 'Jun 2021 - Oct 2021',
            title: 'Junior Web Developer at Startup Inc.',
            description: 'Worked on various front-end and back-end tasks, gaining hands-on experience in web development.'
        },
        {
            date: 'Jun 2020 - Oct 2020',
            title: 'Intern at WebWorks',
            description: 'Assisted in developing website components and learned about web technologies.'
        }
    ];

    return (
        <div className="experience-wrapper">
            <div className="experience-container">
                <div className="experience-header">
                    <h1>Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus
                        mauris vitae</p>
                </div>

                <div className="experience-timeline-container">
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div
                                className={`timeline-item ${isMobile ? 'right' : index % 2 === 0 ? 'left' : 'right'}`}
                                key={index}
                            >
                                <div className="timeline-item-content">
                                    <span className="tag">{exp.date}</span>
                                    <h3>{exp.title}</h3>
                                    <p>{exp.description}</p>
                                    <span className="circle" />
                                </div>
                            </div>
                        ))}
                        <div className="vertical-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
