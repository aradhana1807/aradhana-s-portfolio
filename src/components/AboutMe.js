import React from "react";
import portfolioImg from './images/aradhana-about.png';
import '../components/styles/AboutMe.css';


const AboutMe = () => {
    return (
        <div class="about" id="about">
            <div class="about-image">
                <img src={portfolioImg} alt='about' />
            </div>

            <div class="about-info">
                <h3>About Me</h3>
                <p>
                    Hello, Aradhana here! Computure Science and Engineering
                    undergraduate from <strong>KiiT University, Bhubaneswar</strong>.
                </p>

                <p>
                    My love for photography inspires my passion for creating visually
                    appealing applications. Similar to composing captivating frames, I
                    apply the same artistic touch to my digital projects, carefully tuning
                    colors and contrast for a vibrant user experience.
                </p>

                <p>
                    I love watching anime and listening to songs during my leisure time. I
                    also play games, currently playing Genshin Impact and Honkai Star
                    Rail. All time favourite will always be <strong>Pokémon</strong>.
                </p>
            </div>
        </div>
    )
}

export default AboutMe