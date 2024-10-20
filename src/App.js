import './App.css';
import Navbar from "./components/layout/Navbar";
import { useState, useEffect } from "react";
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/layout/Footer";
import { scroller } from 'react-scroll';

function ScrollToSection({ setContentLoaded }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const offset =
                location.state.scrollTo === 'experience'
                    ? (isMobile ? -128 : -158)
                    : (isMobile ? -118 : -148);

            scroller.scrollTo(location.state.scrollTo, {
                smooth: true,
                offset: offset,
                duration: 500,
            });


            setTimeout(() => {
                navigate(location.pathname, { replace: true, state: {} });
                setContentLoaded(true);
            }, 500);
        } else {
            setContentLoaded(true);
        }
    }, [location, navigate, setContentLoaded]);

    return null;
}

function App() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('isDark');
        return savedTheme !== null ? JSON.parse(savedTheme) : true;
    });

    const [contentLoaded, setContentLoaded] = useState(false);

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
                <ScrollToSection setContentLoaded={setContentLoaded} />
                {contentLoaded && (
                    <>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/project/:name" element={<Project />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
