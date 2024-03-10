import React from 'react';
import './styles/Project.css';
import project_1 from './images/Portfolio.png';
import project_2 from './images/Project Gallery.png';
import project_3 from './images/To Do noww.png';
import project_4 from './images/daily struggle.png'
import project_5 from './images/movie-db.png'
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
                            A sleek demo portfolio created with Vanilla JS, higlighting essential skills and projects.
                        </p>
                        <a href="https://aradhananayak.netlify.app/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        ></a>
                    </div>
                </div>

                <div class="item">
                    <img src={project_2} alt='project 2' />
                    <div class="info">
                        <h4>Project Gallery</h4>
                        <p>
                            A visual gallery using Vanilla JS that showcases collection of projects I have worked on.
                        </p>
                        <a href="https://my-project-gallery.netlify.app/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        ></a>
                    </div>
                </div>

                <div class="item">
                    <img src={project_3} alt='project 3' />
                    <div class="info">
                        <h4>To Do</h4>
                        <p>
                            To-Do Now app developed with ReactJS, to increase productivity by keeping track of tasks.
                        </p>
                        <a href="https://to-dooo-now.netlify.app/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        ></a>
                    </div>
                </div>
                <div class="item">
                    <img src={project_4} alt='project 4' />
                    <div class="info">
                        <h4>MERN Blog</h4>
                        <p>
                            A responsive and authenticated fictional blog created with MERN stack.
                        </p>
                        <a href="https://daily-struggle.onrender.com/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        ></a>
                    </div>
                </div>

                <div class="item">
                    <img src={project_5} alt='project 5' />
                    <div class="info">
                        <h4>Movie DB</h4>
                        <p>
                        A visually appealing movie database created with Nextjs and TMDB API.
                        </p>
                        <a href="https://movie-db-network.vercel.app/" target="_blank" rel="noopener noreferrer"
                        >View<i class="bx bx-link-external"></i
                        > </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;