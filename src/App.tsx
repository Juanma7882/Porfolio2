import '../src/styles/index.css'
import AboutMe from './AboutMe.tsx';
import Home from './Home.tsx';
import Navbar from './Navbar.tsx';
import Projects from './Projects.tsx';
import './assets/language/changeLanguage.ts'


function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {/* <main className='relative'> */}
                <Home />
                <AboutMe />
                <Projects />
            </main>

        </>
    );
}

export default App;
