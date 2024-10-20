
function ProjectSectionType4() {
    let list = ["","","",""]
    return (
        <div className="section-type4">
            <div className="section-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="section-images2">
                {list.map((elem, index) => (
                    <div className="picture-wrapper2" style={{ top: index * 150 + 'px', left: index % 2 === 0 ? '200px' : '-200px' }}>
                        <img src="" alt="project-pic"/>
                        <div className="picture-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSectionType4;
