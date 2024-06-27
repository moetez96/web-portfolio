import "../../styles/contact.css";
import "../../styles/form.css";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { animated } from "react-spring";
import React from "react";
import {useContactAnimations} from "../../Utils/Animations";
import resume from "../../Utils/resume.json";

function Contact() {
    const { infoRef, infoAnimation, formRef, formAnimation } = useContactAnimations();

    return (
        <div className="contact-wrapper" id="contact">
            <div className="contact-container">
                <animated.div ref={infoRef} style={infoAnimation} className="contact-info">
                    <h1>Let’s connect</h1>
                    <span className="contact-desc">
                        <p>Say hello at <a href={`mailto:${resume.socials.email}`}>{resume.socials.email}</a></p>
                        <p>For more info, here’s my <span>resume</span></p>
                    </span>
                    <div className="contact-apps">
                        <a href={resume.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <LinkedIn />
                        </a>
                        <a href={resume.socials.github} target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </a>
                    </div>
                </animated.div>

                <animated.form ref={formRef} style={formAnimation} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </animated.form>
            </div>
        </div>
    );
}

export default Contact;
