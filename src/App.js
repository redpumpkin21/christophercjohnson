import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Projects from './Component/Projects';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christopher C Johnson</h1>
        <h5> Software Engineer</h5>
        <About />
        <Projects />
      </header>
    </div>
  );
}

export default App;
