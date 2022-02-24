
import './css/App.css';

import About from './Component/About';
import Projects from './Component/Projects';
import Nav from './Component/Nav';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christopher C Johnson</h1>
        <h5> Software Engineer</h5>
       
        <Nav />
        <About />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
