
function ProjectNote({tech}) {

    return (
        <>
            {tech && (
                <div className="project-note-wrapper">
                    <div className="project-note">
                        {tech.map((t, index) => (
                            <i key={index} className={`devicon-${t}-plain`}></i>
                        ))}
                    </div>
                </div>
            ) }
        </>
    );
}

export default ProjectNote;
