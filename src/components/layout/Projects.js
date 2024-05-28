import "../../styles/projects.css"
import ProjectCard from "../cards/ProjectCard";
function Projects() {

    return (
        <div className="projects-wrapper">
            <div className="projects-container">
                <div className="projects-header">
                    <h1>Featured Projects</h1>
                    <p>Here are some of the selected projects that showcase
                        my passion for front-end development.</p>
                </div>
                <div className="projects-list-container">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}

export default Projects;
