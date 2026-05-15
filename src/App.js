import './App.css';
import Navbar from "./components/layout/Navbar";
import { Suspense, lazy, useState, useEffect } from "react";
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Footer from "./components/layout/Footer";
import { scroller } from 'react-scroll';
import { useIsMobile } from "./Utils/hooks";

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));

function ScrollToSection({ setContentLoaded }) {
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const offset =
                location.state.scrollTo === 'experience'
                    ? (isMobile ? -94 : -116)
                    : (isMobile ? -84 : -106);

            scroller.scrollTo(location.state.scrollTo, {
                smooth: true,
                offset: offset,
                duration: 500,
            });


            const timeoutId = setTimeout(() => {
                navigate(location.pathname, { replace: true, state: {} });
                setContentLoaded(true);
            }, 500);

            return () => clearTimeout(timeoutId);
        } else {
            setContentLoaded(true);
        }
    }, [isMobile, location, navigate, setContentLoaded]);

    return null;
}

function App() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") {
            return true;
        }

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
                        <Suspense fallback={null}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/project/:name" element={<Project />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </Suspense>
                        <Footer />
                    </>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
