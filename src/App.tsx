import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Proyects from "./components/Proyects/Proyects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Proyects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
