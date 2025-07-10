import '../src/styles/index.css'
import Home from './Home.tsx';
import Navbar from './Navbar.tsx';
import './assets/language/changeLanguage.ts'


function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Home />
            </main>

        </>
    );
}

export default App;
