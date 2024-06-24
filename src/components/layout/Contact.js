import "../../styles/contact.css";
import "../../styles/form.css";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import React from "react";

function Contact() {
    const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const infoAnimation = useSpring({
        opacity: infoInView ? 1 : 0,
        transform: infoInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    const formAnimation = useSpring({
        opacity: formInView ? 1 : 0,
        transform: formInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    return (
        <div className="contact-wrapper" id="contact">
            <div className="contact-container">
                <animated.div ref={infoRef} style={infoAnimation} className="contact-info">
                    <h1>Let’s connect</h1>
                    <span className="contact-desc">
                        <p>Say hello at <span>moetez22@gmail.com</span></p>
                        <p>For more info, here’s my <span>resume</span></p>
                    </span>
                    <div className="contact-apps">
                        <LinkedIn />
                        <GitHub />
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
