// import '../index.css';
import '../components/styles/Navbar.css'

import React from 'react'
import logo_dark from './images/an-red.png';
import { Link } from 'react-scroll';
const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className='header-logo'>
                <img
                    className='header-logo-img'
                    src={logo_dark} alt='aradhana'
                />
            </div>
            <div className='menu-list'>
                <Link
                    activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500}
                    className='menu-list-item' >about</Link>
                <Link
                    activeClass='active' to='experience' spy={true} smooth={true} offset={-150} duration={500}
                    className='menu-list-item'>experience</Link>
                <Link
                    activeClass='active' to='' spy={true} smooth={true} offset={-100} duration={500}
                    className='menu-list-item'>contact</Link>
                <Link
                    className='menu-list-item' id='resume-button'>Resume</Link>
            </div>
        </nav>
    )
}

export default Navbar;

// 