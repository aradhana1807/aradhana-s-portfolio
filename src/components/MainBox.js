import '../index.css'

const MainBox = () => {

    return (
        <div className='main-box'>

            <div className='content-box'>
                <div className='intro-box'>
                    <h1>hi , i am aradhana nayak</h1>
                    <p>
                        Frontend Developer
                    </p>
                </div>

                <div className='photo-box'>
                    <img src={require('./images/aradhana.jpg')} alt='aradhana' />
                </div>

            </div>

        </div>
    );
}

export default MainBox;