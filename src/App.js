import './App.css';
import Navbar from "./components/layout/Navbar";
import { useState, useEffect } from "react";
import Home from "./components/layout/Home";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";
import Experience from "./components/layout/Experience";
import Footer from "./components/layout/Footer";

function App() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('isDark');
        return savedTheme !== null ? JSON.parse(savedTheme) : true;
    });

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark]);

    const handleThemeChange = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="App" data-theme={isDark ? "dark" : "light"}>
            <Navbar handleThemeChange={handleThemeChange} isDark={isDark}/>
            <Home />
            <hr />
            <About />
            <hr />
            <Experience />
            <hr />
            <Projects />
            <hr />
            <Contact />
            <Footer  />
        </div>
    );
}

export default App;
