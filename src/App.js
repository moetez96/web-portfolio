import './App.css';
import Navbar from "./components/layout/Navbar";
import { useState, useEffect } from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

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
            <Navbar handleThemeChange={handleThemeChange} isDark={isDark} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<Project />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
