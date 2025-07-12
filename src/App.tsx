import '../src/styles/index.css'
import AboutMe from './AboutMe.tsx';
import Home from './Home.tsx';
import Navbar from './Navbar.tsx';
import './assets/language/changeLanguage.ts'


function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='relative'>
                <Home />
                <AboutMe />
            </main>

        </>
    );
}

export default App;
