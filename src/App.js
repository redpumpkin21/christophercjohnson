
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Component/About';
import Projects from './Component/Projects';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Carousel, {CarouselItem} from './Component/Carousel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christopher C Johnson</h1>
        <h5> Software Engineer</h5>
        <Carousel >
                <CarouselItem>item 1</CarouselItem>
                <CarouselItem>item 2</CarouselItem>
                <CarouselItem>item 3</CarouselItem>
            </Carousel>
        <Nav />
        <About />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
