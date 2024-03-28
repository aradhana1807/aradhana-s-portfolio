import MainBox from './components/MainBox';
import Nav from './components/Nav';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
const App = () => {
    const lenis = useLenis(({ scroll }) => {
    })

    return (
        <ReactLenis root>
            <>
                <Nav />
                <MainBox />
            </>
        </ReactLenis>
    )
}

export default App;
