import '../index.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
const MainBox = () => {
    return (
        <div className='main-box'>
            <Home />
            <AboutMe />
            <Experience />
            <Project />
            <Contact />
        </div>
    );
};

export default MainBox;

