// import './index.css'
import '../src/styles/index.css'
import Home from './home';
import Navbar from './navbar';
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
