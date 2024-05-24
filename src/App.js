import './App.css';
import Navbar from "./components/layout/Navbar";
import {useState} from "react";

function App() {
    const [isDark, setIsDark] = useState(false)

    const handleThemeChange = () => {
        setIsDark(!isDark);
    }

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Navbar handleThemeChange={handleThemeChange} isDark={isDark}/>
    </div>
  );
}

export default App;
