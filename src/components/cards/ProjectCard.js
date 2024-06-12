import "../../styles/cards/project-card.css";
import { ArrowOutwardOutlined, GitHub } from "@mui/icons-material";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";

function ProjectCard() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    return (
        <animated.div ref={ref} style={animationProps} className="project-card-container">
            <div className="project-card-img-container">
                <div className="project-card-tag">
                    Conceptual Work
                </div>
                <div className="project-card-img"></div>
            </div>
            <div className="project-card-overview">
                <h2>Promotional landing page for our favorite show</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="project-card-info">
                    <h3>PROJECT INFO</h3>
                    <hr />
                    <p>Year</p>
                    <hr />
                    <p>Role</p>
                    <hr />
                </div>
                <div className="project-card-btns">
                    <button>
                        LIVE DEMO <ArrowOutwardOutlined />
                    </button>
                    <button>
                        SEE ON GITHUB <GitHub />
                    </button>
                </div>
            </div>
        </animated.div>
    );
}

export default ProjectCard;
