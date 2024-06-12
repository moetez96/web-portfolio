import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import {useInView} from "react-intersection-observer";

function ExperienceCard({ exp, index }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <div className="timeline-item-content">
                <span className="tag">{exp.date}</span>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <span className="circle" />
            </div>
        </motion.div>
    );
}

export default ExperienceCard;
