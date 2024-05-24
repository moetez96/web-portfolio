import '../../styles/navbar.css';
import { DarkModeOutlined, Menu, MenuOpen } from "@mui/icons-material";
import { useState, useEffect } from "react";

function Navbar() {
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

    return (
        <div className="navbar-wrapper">
            <h1 className="navbar-title">Moetez Ayari</h1>
            <div className="navbar-menu-icon" onClick={handleMenuOpen}>
                {navMenuOpen ? (
                    <MenuOpen fontSize={'large'} />
                ) : (
                    <Menu fontSize={'large'} />
                )}
            </div>
            {(isMobile && navMenuOpen) || !isMobile ? (
                <div className="navbar-menu-container">
                    <ul className="navbar-menu">
                        <li>About</li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>

                    <div className="navbar-divider"></div>

                    <div className="navbar-options">
                        <div className="navbar-light-dark-mode">
                            <DarkModeOutlined fontSize={'large'} />
                        </div>
                        <button className="navbar-download-button">
                            Download CV
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Navbar;