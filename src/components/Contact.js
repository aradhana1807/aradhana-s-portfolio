import React from 'react';
import './styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <h3>Connect</h3>
            <div className="contact-items">
                <div className="item-info">
                    <h4>Currently,</h4>
                    <p>
                        I am looking for a <span>full-time job opportunity</span> who are in the lookout for quick learner and passionate developer.
                    </p>
                    <p>
                        Feel free to drop a message. Whether it's about anime, games or project related, I am looking forward to reply!
                    </p>
                </div>

                <div className="social-links">
                    <a href="https://github.com/aradhana1807"
                    ><i class="bx bxl-github"></i
                    ></a>
                    <a href="https://www.linkedin.com/in/aradhana-nayak-607959212/"
                    ><i class="bx bxl-linkedin-square"></i
                    ></a>
                    <a href="mailto:aradhana.zero@gmail.com"
                    ><i class="bx bxl-gmail"></i
                    ></a>
                </div>
            </div>
        </div>
    )
}

export default Contact