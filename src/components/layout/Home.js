import "../../styles/home.css";
import { ArrowOutward, GitHub, LinkedIn } from "@mui/icons-material";
import { useSpring, animated, useTrail } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";

function Home() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const profilePicSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(20px)',
        config: { duration: 500 }
    });

    const trail = useTrail(3, {
        config: { mass: 5, tension: 2000, friction: 600 },
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 20,
        from: { opacity: 0, x: 20 },
        delay: 200,
    });

    const contactTrail = useTrail(3, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 20,
        from: { opacity: 0, x: 20 },
    });

    return (
        <div className="home-wrapper" id="home">
            <div className="home-container" ref={ref}>
                <div className="profile-desc">
                    {trail.map((style, index) => {
                        if (index === 0) {
                            return <animated.h1 style={style} key={index}>hi, i am</animated.h1>;
                        }
                        if (index === 1) {
                            return <animated.h1 style={style} key={index}>Moetez Ayari.</animated.h1>;
                        }
                        if (index === 2) {
                            return (
                                <animated.p style={style} key={index}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </animated.p>
                            );
                        }
                        return null;
                    })}
                    <span className="profile-contact-btns">
                        <animated.button style={contactTrail[0]}>
                            Contact Me
                            <div className="circle">
                                <span>
                                    <ArrowOutward fontSize={'medium'} />
                                </span>
                            </div>
                        </animated.button>
                        <animated.div style={contactTrail[1]} className="contact-icons">
                            <a href="https://github.com/moetez96" target="_blank" rel="noopener noreferrer">
                                <GitHub fontSize={'large'} />
                            </a>
                        </animated.div>
                        <animated.div style={contactTrail[2]} className="contact-icons">
                            <a href="https://www.linkedin.com/in/moetez-ayari-22b1031b2/" target="_blank" rel="noopener noreferrer">
                                <LinkedIn fontSize={'large'} />
                            </a>
                        </animated.div>
                    </span>
                </div>

                <animated.div style={profilePicSpring} className="profile-pic-container">
                    {/* Add your profile picture here */}
                </animated.div>
            </div>
        </div>
    );
}

export default Home;
