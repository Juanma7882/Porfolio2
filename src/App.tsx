import '../src/styles/index.css'
import AboutMe from './pages/main/AboutMe.tsx';
import Home from './pages/main/Home.tsx';
import Navbar from './Navbar.tsx';
// import Projects from './Projects.tsx';
import './assets/language/changeLanguage.ts'
import Projects from './pages/main/Projects.tsx';
import Technology from './pages/main/Technology.tsx';
import ContactMe from './pages/main/ContactMe.tsx';


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
                <Technology />
                <ContactMe/>
            </main>

        </>
    );
}

export default App;
