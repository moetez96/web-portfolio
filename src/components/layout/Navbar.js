import '../../styles/navbar.css';
import { DarkModeOutlined, LightModeOutlined, Menu, MenuOpen } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import cv from '../../assets/Moetez_Ayari_CV.pdf';

function Navbar({ handleThemeChange, isDark }) {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navbarRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

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

    const handleHomePageScroll = (targetSection) => {
        setNavMenuOpen(false);
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: targetSection } });
        }
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
                <ScrollLink to="intro" smooth spy offset={0} onClick={() => handleHomePageScroll('intro')}>
                    M.A
                </ScrollLink>
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
                        <ScrollLink
                            to="about"
                            smooth
                            spy
                            offset={isMobile ? -80 : -108}
                            onClick={() => handleHomePageScroll('about')}
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="experience"
                            smooth
                            spy
                            offset={isMobile ? -90 : -118}
                            onClick={() => handleHomePageScroll('experience')}
                        >
                            Experience
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="projects"
                            smooth
                            spy
                            offset={isMobile ? -80 : -108}
                            onClick={() => handleHomePageScroll('projects')}
                        >
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            smooth
                            spy
                            offset={isMobile ? -80 : -108}
                            onClick={() => handleHomePageScroll('contact')}
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>

                <div className="navbar-divider"></div>

                <div className="navbar-options">
                    <div className="navbar-light-dark-mode" onClick={handleThemeClick}>
                        {isDark ? (
                            <LightModeOutlined fontSize={'large'} />
                        ) : (
                            <DarkModeOutlined fontSize={'large'} />
                        )}
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
