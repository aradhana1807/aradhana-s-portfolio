import './styles/Cover.css';
import React from 'react'

const Cover = () => {
    return (
        <div className='content-box' id='cover'>
            <div className='intro-box'>
                <div className='headers'>
                    <p>hi, my name is</p>
                    <h1>Aradhana Nayak.</h1>
                    <h3>
                        Frontend Developer, Quick Learner
                    </h3>
                </div>
                <div className='content'>
                    A curious developer on a journey to keep exploring the abundance of technology realm and developing eye-catching applications.
                </div>
                {/* <Link className='btn'>
                            <button>Hire Me</button>
                        </Link> */}
            </div>
        </div>
    )
}

export default Cover