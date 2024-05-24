import '../../styles/navbar.css';
import {DarkModeOutlined, LightModeOutlined, Menu, MenuOpen} from "@mui/icons-material";
import { useState, useEffect } from "react";

function Navbar({handleThemeChange, isDark}) {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleMenuOpen = () => {
        setNavMenuOpen(!navMenuOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleThemeClick = () => {
        handleThemeChange();
    }

    return (
        <div className="navbar-wrapper">
            <h1 className="navbar-title">Moetez Ayari</h1>
            <div className={`navbar-menu-icon ${navMenuOpen ? 'open' : ''}`} onClick={handleMenuOpen}>
                {navMenuOpen ? (
                    <MenuOpen fontSize={ 'large'} />
                ) : (
                    <Menu fontSize={'large'} />
                )}
            </div>
            <div className={`navbar-menu-container ${ isMobile ? `${navMenuOpen ? 'open' : 'closed'}` : ''}`}>
                <ul className="navbar-menu">
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>

                <div className="navbar-divider"></div>

                <div className="navbar-options">
                    <div className="navbar-light-dark-mode" onClick={handleThemeClick}>
                        {isDark ?
                            (<DarkModeOutlined fontSize={'large'} />)
                            :
                            (<LightModeOutlined fontSize={'large'}/>)
                        }
                    </div>
                    <button className="navbar-download-button">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
