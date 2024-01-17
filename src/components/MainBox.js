// import React, { useEffect, useState } from 'react';
import '../index.css';
import About from './About';
import Experience from './Experience';
import Cover from './Cover';

const MainBox = () => {
    return (
        <div className='main-box'>
            <Cover />
            <About />
            <Experience />
        </div>
    );
};

export default MainBox;
