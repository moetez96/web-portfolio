import '../../styles/navbar.css';
import { DarkModeOutlined, LightModeOutlined, Menu, MenuOpen } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-scroll';
import cv from '../../assets/Moetez_Ayari_CV.pdf';

function Navbar({ handleThemeChange, isDark }) {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navbarRef = useRef(null);

    const handleMenuOpen = () => {
        setNavMenuOpen(!navMenuOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setNavMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleThemeClick = () => {
        handleThemeChange();
    };
    const handleHomePageScroll = () => {
        setNavMenuOpen(false);
    };

    const handleDownloadCV = () => {
        fetch(cv)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Moetez_Ayari_CV.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error downloading CV:', error));
    };

    return (
        <div className="navbar-wrapper" ref={navbarRef}>
            <h1 className="navbar-title">
                <Link smooth spy to="home" offset={0} onClick={handleHomePageScroll}>
                    M.A
                </Link>
            </h1>
            <div className={`navbar-menu-icon ${navMenuOpen ? 'open' : ''}`} onClick={handleMenuOpen}>
                {navMenuOpen ? (
                    <MenuOpen fontSize={'large'} />
                ) : (
                    <Menu fontSize={'large'} />
                )}
            </div>
            <div className={`navbar-menu-container ${isMobile ? `${navMenuOpen ? 'open' : 'closed'}` : ''}`}>
                <ul className="navbar-menu">
                    <li>
                        <Link smooth spy to="about" offset={isMobile ? -118: -148} onClick={handleMenuOpen}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link smooth spy to="experience" offset={isMobile ? -128 : -158} onClick={handleMenuOpen}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link smooth spy to="projects" offset={isMobile ? -118: -148} onClick={handleMenuOpen}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link smooth spy to="contact" offset={isMobile ? -118: -148} onClick={handleMenuOpen}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="navbar-divider"></div>

                <div className="navbar-options">
                    <div className="navbar-light-dark-mode" onClick={handleThemeClick}>
                        {isDark ?
                            (<LightModeOutlined fontSize={'large'} />)
                            :
                            (<DarkModeOutlined fontSize={'large'} />)

                        }
                    </div>

                    <button className="navbar-download-button" onClick={handleDownloadCV}>
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
