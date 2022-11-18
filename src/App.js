import './App.css';

// Componentes
import Nav from './components/Nav'
import Home from './components/Home'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Proyects/>
      <Skills/>
{/*       <Contact/> */}
{/*     <Footer/> */}
    </div>
  );
}

export default App;