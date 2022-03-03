
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Projects from './Component/Projects';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christopher C Johnson</h1>
        <h5> Software Engineer</h5>
        <Nav />
        <Routes>
          <Route path ='/' element={<Home />}/>                                  
          <Route path = '/about' element ={<About />}/>            
          <Route path ='/projects' element ={<Projects />}/>      
        </Routes>        
        <Footer />
      </header>
    </div>
  );
}

export default App;
