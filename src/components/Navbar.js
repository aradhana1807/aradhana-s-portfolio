// import '../index.css';
import '../components/styles/Navbar.css';
import menu_logo from './images/menu.png';
import React, { useState } from 'react'
import logo_dark from './images/an-red.png';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);

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


            {/* mobile-menu */}
            <img
                className='mobile-menu-logo'
                src={menu_logo} alt='menu_log'
                onClick={() => setshowMenu(!showMenu)}
            />
            <div className='mobile-menu-list' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link
                    onClick={() => setshowMenu(false)}
                    activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500}
                    className='mobile-menu-list-item' >about</Link>
                <Link
                    onClick={() => setshowMenu(false)}
                    activeClass='active' to='experience' spy={true} smooth={true} offset={-150} duration={500}
                    className='mobile-menu-list-item'>experience</Link>
                <Link
                    onClick={() => setshowMenu(false)}
                    activeClass='active' to='' spy={true} smooth={true} offset={-100} duration={500}
                    className='mobile-menu-list-item'>contact</Link>
                <Link
                    onClick={() => setshowMenu(false)}
                    className='mobile-menu-list-item' id='mobile-resume-button'>Resume
                </Link>
            </div>
        </nav >
    )
}

export default Navbar;

// 