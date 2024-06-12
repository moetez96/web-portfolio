import "../../styles/experience.css";
import "../../styles/cards/experience-card.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import ExperienceCard from "../cards/ExperienceCard";

function Experience() {
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

    const controls = useAnimation();
    const { ref, inView } = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <div className="experience-wrapper">
            <div className="experience-container">
                <div className="experience-header">
                    <h1>Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus
                        mauris vitae</p>
                </div>

                <div className="experience-timeline-container" ref={ref}>
                    <motion.div
                        className="timeline"
                        animate={controls}
                    >
                        {experiences.map((exp, index) => (
                            <ExperienceCard exp={exp} index={index} key={index} />
                        ))}
                        <motion.div
                            className="vertical-line"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
