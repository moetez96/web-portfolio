import "../../styles/home.css";
import { ArrowOutward, GitHub, LinkedIn } from "@mui/icons-material";
import { animated } from "react-spring";
import picture from '../../styles/assets/Photo.png';
import React from "react";
import {useHomeAnimations} from "../../Utils/Animations";
import resume from "../../Utils/resume.json";

function Home() {
    const { ref, contactTrail, trail, profilePicSpring }
        = useHomeAnimations();

    const handleContactButtonClick = () => {
        window.location.href = `mailto:${resume.socials.email}`;
    };

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
                                    {resume.home.introduction}
                                </animated.p>
                            );
                        }
                        return null;
                    })}
                    <span className="profile-contact-btns">
                        <button onClick={handleContactButtonClick} style={contactTrail[0]} className="contact-button">
                            Contact Me
                            <div className="circle">
                                <span>
                                    <ArrowOutward fontSize={'medium'} />
                                </span>
                            </div>
                        </button>
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

                <animated.img style={profilePicSpring} className="profile-pic-container" src={picture}>

                </animated.img>
            </div>
        </div>
    );
}

export default Home;
