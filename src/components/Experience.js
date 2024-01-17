import React from 'react';
import './styles/Experience.css';
const Experience = () => {
    return (
        <div className="workExp-container" id='experience'>
            <h2>Work Experience</h2>

            <div className="workExp-info">

                <div className="workExp-company">
                    <h3>Machine Learning Intern @ <a class='company-links' href='https://www.highradius.com/' target='_blank' rel="noreferrer">Highradius</a> (2022-2023)</h3>
                    <p><span>▹</span> Collaborated with diverse clients, understanding nuanced requirements in Collection Management.</p>
                    <p><span>▹</span> Engineered algorithms to rank customers by importance in collections, factoring in impact variables.</p>
                    <p><span>▹</span> Actively engaged clients, providing insights into model workings, impact variables, and outcomes.</p>
                    <p><span>▹</span> Successfully deployed machine learning models to production, ensuring practical implementation and real-time impact.</p>

                </div>

                <div className="workExp-company">
                    <h3>Application Development Associate @ <a class='company-links' href='https://www.accenture.com/in-en'
                        target='_blank'
                        rel="noreferrer">Accenture</a> (Jul 2023 - Present)</h3>
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