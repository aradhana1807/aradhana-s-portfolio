import React from 'react';
import './styles/Project.css';
import project_1 from './images/Portfolio.png';
import project_2 from './images/Motivation Guru.png';
import project_3 from './images/To Do noww.png';

const Project = () => {
    return (
        <div class="portfolio" id="portfolio">
            <div class="header">
                <div class="info">
                    <h3>Projects</h3>
                </div>
                <button>
                    <i class="bx bxl-github"></i>
                    <a href="https://github.com/aradhana1807" target="_blank" rel="noopener noreferrer"
                    >Visit Github</a
                    >
                </button>
            </div>

            <div class="portfolio-items">
                <div class="item">
                    <img src={project_1} alt='portfolio-project' />
                    <div class="info">
                        <h4>Portfolio</h4>
                        <p>
                            A sleek portfolio created with JavaScript, HTML, and CSS. It's
                            visually appealing, user-friendly, and features smooth transitions
                            and dynamic content for an interactive experience.
                        </p>
                        <a href="https://aradhananayak.netlify.app/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        ></a>
                    </div>
                </div>

                <div class="item">
                    <img src={project_2} alt='project 3' />
                    <div class="info">
                        <h4>Motivation Guru</h4>
                        <p>
                            Motivational quote generator site, crafted with ReactJS,
                            seamlessly combines dynamic quotes with a user-friendly interface
                            for an engaging and efficient experience.
                        </p>
                        <a href="https://sh-motivation-guru.netlify.app/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        ></a>
                    </div>
                </div>

                <div class="item">
                    <img src={project_3} alt='project 3' />
                    <div class="info">
                        <h4>To Do</h4>
                        <p>
                            To-Do Now app developed with ReactJS. Enables easy task management
                            with dynamic updates. Leverages React's state management for a
                            seamless and efficient user experience in organizing tasks.
                        </p>
                        <a href="https://to-dooo-now.netlify.app/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;