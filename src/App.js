import './App.css';

// Componentes
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
/* import About from './components/About/About'; */
import Proyects from './components/Proyects/Proyects';
import Skills from './components/Skills/Skills';
/* import Contact from './components/Contact' */
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
{/*       <About/> */}
      <Proyects/>
      <Skills/>
{/*       <Contact/> */}
    <Footer/>
    </div>
  );
}

export default App;