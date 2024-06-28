import "../../styles/contact.css";
import "../../styles/form.css";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { animated } from "react-spring";
import React, { useState } from "react";
import { useContactAnimations } from "../../Utils/Animations";
import resume from "../../Utils/resume.json";
import emailjs from 'emailjs-com';

function Contact() {
    const { infoRef, infoAnimation, formRef, formAnimation } = useContactAnimations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            sendEmail();
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setErrors({});
            setIsSubmitted(true);
        }
    };

    const sendEmail = () => {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: `${formData.name} - ${formData.subject}`,
            message: formData.message,
            to_email: 'moetez22@gmail.com'
        };

        emailjs.send('service_ueufor5', 'template_cz51yen', templateParams, 'GmDQum_6vGEtTzTYK')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    };

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

                <animated.form ref={formRef} style={formAnimation} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        {errors.subject && <span className="error">{errors.subject}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button>
                    {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
                </animated.form>
            </div>
        </div>
    );
}

export default Contact;