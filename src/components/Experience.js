import React from 'react';
import './styles/Experience.css';
const Experience = () => {
    return (
        <div className="experience" id='experience'>
            <h3>Work Experience</h3>
            <div className="experience-items">
                <div className="item">
                    <div class="icon"><i class='bx bx-briefcase'></i></div>
                    <h4>Machine Learning Intern @ <a class='company-links' href='https://www.highradius.com/' target='_blank' rel="noreferrer">Highradius</a> (2022-2023)</h4>
                    <p><span>▹</span> Collaborated with diverse clients, understanding nuanced requirements in Collection Management.</p>

                    <p><span>▹</span> Actively engaged clients, providing insights into model workings, impact variables, and outcomes.</p>

                    <p><span>▹</span> Successfully deployed machine learning models to production, ensuring practical implementation and real-time impact.</p>
                </div>

                <div className="item">
                    <div class="icon"><i class='bx bx-briefcase'></i></div>
                    <h4>Application Development Associate @ <a class='company-links' href='https://www.accenture.com/in-en'
                        target='_blank'
                        rel="noreferrer">Accenture</a> (Jul 2023 - Present)</h4>
                    <p><span>▹</span> Successfully completed 1 month stream training in Cloud Native Microservices
                    </p>

                    <p><span>▹</span> Successfully completed a project utilizing Node.js and Express.js, showcasing practical application of the learned concepts.
                    </p>

                    <p><span>▹</span> Developed skills in building scalable and efficient server-side applications using Node.js and Express.js.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Experience