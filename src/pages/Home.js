import About from "../components/layout/About";
import Experience from "../components/layout/Experience";
import Projects from "../components/layout/Projects";
import Contact from "../components/layout/Contact";
import Intro from "../components/layout/Intro";

function Home() {
    return (
        <>
            <Intro/>
            <hr/>
            <About/>
            <hr/>
            <Experience/>
            <hr/>
            <Projects/>
            <hr/>
            <Contact/>
        </>
    );
}

export default Home;
