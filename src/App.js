import './App.css';

// Componentes
import Nav from './components/Nav'
import Network from './components/Network-bar'
import Home from './components/Home'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Network/>
      <Home/>
      <Proyects/>
      <Skills/>
{/*       <Contact/> */}
    </div>
  );
}

export default App;
