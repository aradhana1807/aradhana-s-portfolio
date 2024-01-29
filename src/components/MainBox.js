// import React, { useEffect, useState } from 'react';
import '../index.css';
// import About from './About';
import Experience from './Experience';
// import Cover from './Cover';
import Home from './Home';
import AboutMe from './AboutMe';
import Project from './Project';

const MainBox = () => {
    return (
        <div className='main-box'>
            {/* <Cover /> */}
            <Home />
            {/* <About /> */}
            <AboutMe />
            <Experience />
            <Project />
        </div>
    );
};

export default MainBox;
