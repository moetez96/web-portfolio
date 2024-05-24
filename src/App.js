import './App.css';
import Navbar from "./components/layout/Navbar";
import { useState, useEffect } from "react";

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
        </div>
    );
}

export default App;
