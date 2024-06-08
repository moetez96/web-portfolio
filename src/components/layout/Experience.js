import "../../styles/experience.css";

function Experience() {
    const experiences = [
        {
            title: "Job Title 1",
            date: "Jan 2020 - Present"
        },
        {
            title: "Job Title 2",
            date: "Jan 2019 - Dec 2019"
        },
        {
            title: "Job Title 3",
            date: "Jan 2018 - Dec 2018"
        }
    ];

    return (
        <div className="experience-wrapper">
            <div className="experience-container">
                <div className="experience-header">
                    <h1>Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus
                        mauris vitae</p>
                </div>

                <div className="experience-timeline-container">
                    <div className="experience-timeline">
                        <div className="experiences">
                            {experiences.map((exp, index) => (
                                <div className="experience" key={index}>
                                    <div className="experience-details">
                                        <div className="experience-title">{exp.title}</div>
                                        <div className="experience-date">{exp.date}</div>
                                    </div>
                                    <div className="experience-card"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
