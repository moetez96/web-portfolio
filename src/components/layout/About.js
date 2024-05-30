import "../../styles/about.css";

function About() {
    return (
        <div className="about-wrapper">
            <div className="about-container">
                <h1>About Me</h1>
                <div className="about-desc">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="about-skills-container">
                <div className="about-skills">
                    SKILLS
                </div>
                <div className="about-skills-list">
                    {placeHolederSkills.map((elem, index) => (
                        <span className="skill-chip" style={{ '--i': index }} key={index}>{elem}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;

const placeHolederSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "C","C--","C++","C#","C/AL","Caché ObjectScript","C Shell","Caml","Candle","Cayenne","CDuce","Cecil","Cel","Cesil","Ceylon","CFEngine","CFML","Cg","Ch","Chapel","CHAIN","Charity","Charm","Chef","CHILL","CHIP-8","chomski","ChucK","CICS","Cilk","CL","Claire","Clarion","Clean","Clipper","Converge","Cool","Coq","Coral 66","Corn","CorVision","COWSEL","CPL","csh","CSP","Csound","CUDA","Curl","Curry","Cyclone","Cython","D","DASL","DASL","Dart","DataFlex"];