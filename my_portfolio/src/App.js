import logo from './logo.svg';
import './App.css';
import NAV from './Components/Nav/Nav'
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Certification from './Components/Certification/Certification';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NAV></NAV>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Certification></Certification>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
