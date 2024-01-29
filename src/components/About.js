import React from "react";
import portfolioImg from './images/aradhana-sqaure.jpg';
import '../components/styles/About.css';

const About = () => {
    return (
        <div className="about-me" id="about">
            <h2>About Me</h2>
            {/* about-me-container */}
            <div className="about-container">
                <div className="about-me-content">
                    <p>
                        Hello! My name is Aradhana and I enjoy building visually pleasing webpages. A Computer Science and Engineering graduate from KiiT University, Bhubaneswar who loves photography and these aethetics drive my interest in frontend development.
                    </p>

                    <p>
                        I have also gained knowledge and hands-on experience in Machine Learning for a year and currently completed technical training in Cloud Native Microservices.
                    </p>

                    <p>Here are some technolgies and programming languages I have worked with</p>

                    <ul className="skill-badges">
                        <li><span>▹</span> React.js</li>
                        <li><span>▹</span> Javascript</li>
                        <li><span>▹</span> CSS</li>
                        <li><span>▹</span> HTML</li>
                        <li><span>▹</span> SQL Basics</li>
                        <li><span>▹</span> Python</li>
                        <li><span>▹</span> Java</li>
                        <li><span>▹</span> C</li>
                        <li><span>▹</span> C++</li>
                    </ul>

                </div>

                <div className='photo-box'>
                    <img src={portfolioImg} alt='aradhana' />
                </div>
            </div>
            {/* end of about-me */}
        </div>

    );
}

export default About;

// https://www.youtube.com/watch?v=4ag1LsgIUc0&t=81s 