function ProjectSectionType1({description, image, imgDesc, onImageClick}) {

    return (
        <div className="section-type1">
            <div className="section-description">
                <h2>Overview of the Application</h2>
                <p>
                    {description}
                </p>
            </div>
            <div className="picture-wrapper">
                <img
                    src={`/projects/${image}`}
                    alt="project-pic"
                    loading="lazy"
                    className={onImageClick ? 'clickable-img' : ''}
                    onClick={onImageClick ? () => onImageClick(`/projects/${image}`, imgDesc) : undefined}
                />
                <div className="picture-desc">
                    <p>{imgDesc}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectSectionType1;
