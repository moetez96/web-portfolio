import "../../styles/cards/project-card.css";
import {ArrowOutwardOutlined, GitHub} from "@mui/icons-material";

function ProjectCard() {

    return (
        <div className="project-card-container">
            <div className="project-card-img-container">
                <div className="project-card-tag">
                    Conceptual Work
                </div>
                <div className="project-card-img">

                </div>
            </div>
            <div className="project-card-overview">
                <h1>Promotional landing page for our favorite show</h1>
                <p  >Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                <div className="project-card-info">
                    <h2>Project Info</h2>
                    <hr/>
                    <p>Year</p>
                    <hr/>
                    <p>Role</p>
                    <hr/>
                </div>
                <div className="project-card-btns">
                    <button>LIVE DEMO <ArrowOutwardOutlined/> </button>
                    <button>SEE ON GITHUB <GitHub /> </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;