import "../../styles/home.css"
import {ArrowOutward, GitHub, LinkedIn} from "@mui/icons-material";
function Home() {

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="profile-desc">
                    <h1>hi, i am</h1>
                    <h1>Moetez Ayari.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </p>
                    <span className="profile-contact-btns">
                        <button>
                            Contact Me
                            <div className="circle">
                                <span><ArrowOutward /></span>
                            </div>
                        </button>
                        <div className="contact-icons">
                            <LinkedIn fontSize={'large'}/></div>
                        <div className="contact-icons">
                            <GitHub fontSize={'large'}/></div>
                    </span>
                </div>

                <div className="profile-pic-container">

                </div>
            </div>
        </div>
    );
}

export default Home;
