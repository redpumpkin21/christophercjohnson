
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Projects from './Component/Projects';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import BookNRead from './Pages/BookNRead';
import Frizzy from './Pages/Frizzy';
import VideoGame from './Pages/VideoGame';
import Todo from './Pages/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <h1>Christopher C Johnson</h1>
        <h2> Software Engineer</h2>
        
        <Routes>
          <Route path ='/' element={<Home />}/>                                  
          <Route path = '/about' element ={<About />}/>            
          <Route path ='/projects' element ={<Projects />}/> 
          <Route path = '/booknread' element ={<BookNRead/>}/>
          <Route path = '/frizzy' element ={<Frizzy/>}/>          
          <Route path = '/videogame' element ={<VideoGame/>}/>
          <Route path= '/todo' element={<Todo />} />
        </Routes>        
        <Footer />
      </header>
    </div>
  );
}

export default App;
