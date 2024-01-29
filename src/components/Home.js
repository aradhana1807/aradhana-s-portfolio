import './styles/Home.css';
import React from 'react';
import cover_image from './images/aradhana.png';

const Home = () => {
    return (
        <div class="home" id="home">
            <div class="cover">
                <h5>hi, my name is</h5>
                <h2>Aradhana Nayak.</h2>
                <h3>I <span>code</span> and <span>build</span> stuffs.</h3>
                <p>
                    A curious developer on a journey to keep exploring the abundance of
                    technology realm and developing eye-catching applications.
                </p>
                <button>Say Hi!</button>
            </div>
            <div class="cover-image">
                <img src={cover_image} alt='cover' />
            </div>
        </div>
    )
}

export default Home