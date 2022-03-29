import logo from './logo.svg';
import './App.css';
import NAV from './Components/Nav/Nav'
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <NAV></NAV>
      <Home></Home>
      <Project></Project>
    </div>
  );
}

export default App;
