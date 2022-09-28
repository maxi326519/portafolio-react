import logo from './logo.svg';
import './App.css';

// Componentes
import Nav from './components/Nav'
import Home from './components/Home'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Proyects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
