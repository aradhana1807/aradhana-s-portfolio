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
                    technology realm and developing eye-catching applications. Currently working at Accenture as Application Development Associate.
                </p>
                <button onClick={() => window.location.href = 'mailto:aradhana.zero@gmail.com'}>Say Hi <span className='wave'>👋🏻</span> </button>
            </div>
            <div class="cover-image">
                <img src={cover_image} alt='cover' />
            </div>
        </div>
    )
}

export default Home;

