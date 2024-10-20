import "../../styles/intro.css";
import { ArrowOutward, GitHub, LinkedIn } from "@mui/icons-material";
import { animated } from "react-spring";
import React from "react";
import {useIntroAnimations} from "../../Utils/Animations";
import resume from "../../assets/resume.json";

function Intro() {
    const { ref, contactTrail, trail, profilePicSpring }
        = useIntroAnimations();

    const handleContactButtonClick = () => {
        window.location.href = `mailto:${resume.socials.email}`;
    };

    return (
        <div className="intro-wrapper" id="intro">
            <div className="intro-container" ref={ref}>
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
                                <animated.h2 style={style} key={index}>
                                    {resume.intro.description}
                                </animated.h2>
                            );
                        }
                        return null;
                    })}
                    <span className="profile-contact-btns">
                        <animated.button onClick={handleContactButtonClick} style={contactTrail[0]} className="contact-button">
                            Contact Me
                            <div className="circle">
                                <span>
                                    <ArrowOutward fontSize={'medium'} />
                                </span>
                            </div>
                        </animated.button>
                        <animated.div style={contactTrail[1]} className="contact-icons">
                            <a href={resume.socials.github} target="_blank" rel="noopener noreferrer">
                                <GitHub fontSize={'large'} />
                            </a>
                        </animated.div>
                        <animated.div style={contactTrail[2]} className="contact-icons">
                            <a href={resume.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedIn fontSize={'large'} />
                            </a>
                        </animated.div>
                    </span>
                </div>

                <animated.img style={profilePicSpring} className="profile-pic-container" src="/Photo.png">

                </animated.img>
            </div>
        </div>
    );
}

export default Intro;
