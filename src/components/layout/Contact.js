import "../../styles/contact.css";
import "../../styles/form.css";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Let’s connect</h1>
                    <span className="contact-desc">
                        <p>Say hello at <span>moetez22@gmail.com</span></p>
                        <p>For more info, here’s my <span>resume</span></p>
                    </span>
                    <div className="contact-apps">
                        <LinkedIn />
                        <GitHub />
                    </div>
                </div>

                <form className="contact-form">
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
                </form>
            </div>
        </div>
    );
}

export default Contact;
