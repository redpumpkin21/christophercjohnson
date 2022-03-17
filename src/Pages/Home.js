import About from "../Component/About"
import Carousel from "../Component/Carousel"
import Contact from "../Component/Contact"
import Projects from "../Component/Projects"

const Home = () => {
    return(
        <div className='home'>
            <About />
            
            <Projects />

            <Contact />
        </div>
    )
}

export default Home