import './App.css';

// Componentes
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
/* import Contact from './components/Contact' */
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Proyects/>
      <Skills/>
{/*       <Contact/> */}
    <Footer/>
    </div>
  );
}

export default App;