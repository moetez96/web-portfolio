import '../../styles/navbar.css';
import { DarkModeOutlined, LightModeOutlined, Menu, MenuOpen } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import {downloadCV} from "../../Utils/Utils";
import { useIsMobile } from "../../Utils/hooks";

function Navbar({ handleThemeChange, isDark }) {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    const navbarRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuOpen = () => {
        setNavMenuOpen(!navMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setNavMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setNavMenuOpen(false);
        }
    }, [isMobile]);

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
        downloadCV();
    };

    return (
        <div className="navbar-wrapper" ref={navbarRef}>
            <h1 className="navbar-title">
                <ScrollLink to="intro" smooth spy offset={0} onClick={() => handleHomePageScroll('intro')}>
                    M.A
                </ScrollLink>
            </h1>
            <button
                type="button"
                className={`navbar-menu-icon ${navMenuOpen ? 'open' : ''}`}
                onClick={handleMenuOpen}
                aria-label={navMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={navMenuOpen}
            >
                {navMenuOpen ? (
                    <MenuOpen fontSize={'large'} />
                ) : (
                    <Menu fontSize={'large'} />
                )}
            </button>
            <div className={`navbar-menu-container ${isMobile ? `${navMenuOpen ? 'open' : 'closed'}` : ''}`}>
                <ul className="navbar-menu">
                    <li>
                        <ScrollLink
                            to="about"
                            smooth
                            spy
                            offset={isMobile ? -84 : -106}
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
                            offset={isMobile ? -94 : -116}
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
                            offset={isMobile ? -84 : -106}
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
                            offset={isMobile ? -84 : -106}
                            onClick={() => handleHomePageScroll('contact')}
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>

                <div className="navbar-divider"></div>

                <div className="navbar-options">
                    <button
                        type="button"
                        className="navbar-light-dark-mode"
                        onClick={handleThemeClick}
                        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                    >
                        {isDark ? (
                            <LightModeOutlined fontSize={'large'} />
                        ) : (
                            <DarkModeOutlined fontSize={'large'} />
                        )}
                    </button>

                    <button type="button" className="navbar-download-button" onClick={handleDownloadCV}>
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
