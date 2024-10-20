import './App.css';
import Navbar from "./components/layout/Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/layout/Footer";
import { scroller } from 'react-scroll';

function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                smooth: true,
                offset: -148,
                duration: 500,
            });
        }
    }, [location]);

    return null;
}

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
            <BrowserRouter>
                <Navbar handleThemeChange={handleThemeChange} isDark={isDark} />
                <ScrollToSection />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:name" element={<Project />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
