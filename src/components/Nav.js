import './styles/Nav.css';
import logo_dark from './images/an-red.png';
import React, { useState } from 'react';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navClass = `nav ${isMenuOpen ? 'open' : ''}`;
    const toggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    };

    const openResume = () => {
        const resumeURL = 'https://drive.google.com/file/d/1w3cHB4EzSkMU7jNCYEFBrDzoQDcQjDJx/view?usp=drive_link';
        window.open(resumeURL, '_blank');
    }

    return (
        <nav className={navClass}>
            <div className="logo">
                <a href="#home"> <img src={logo_dark} alt="logo" /></a>
            </div>

            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#portfolio">project</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <button onClick={openResume}>Resume</button>
            <button id="menuButton" onClick={() => toggleMenu()}>
                <i class="bx bx-menu"></i>
            </button>
        </nav>
    )
}

export default Nav