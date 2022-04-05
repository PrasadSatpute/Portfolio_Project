import logo from './logo.svg';
import './App.css';
import NAV from './Components/Nav/Nav'
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';

function App() {
  return (
    <div className="App">
      <NAV></NAV>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Project></Project>
    </div>
  );
}

export default App;
