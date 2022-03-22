import Carousel, {CarouselItem} from "./Carousel"
import React from "react"

const About = () => {
    const image = ['https://res.cloudinary.com/dx3a3l6k0/image/upload/v1641422294/6F754EF0-CFD7-47CD-A9DC-D4D968A7C229_1_102_o_crbx1p.jpg']
    return(
        <div>
            {/* <Carousel >
                <CarouselItem  id='first' src='image'><img src= {image}/></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel> */}
            <img className= 'first'src= 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1641422294/6F754EF0-CFD7-47CD-A9DC-D4D968A7C229_1_102_o_crbx1p.jpg'/>
            <p className='about'>
            Goal-oriented and tech-savvy professional with expertise in 
            software engineering and website development. Capable of designing 
            network procedures, while ensuring compliance with latest upgrades and 
            procedures. Astute at managing entire website and software development 
            lifecycle from inception till completion within defined scope, budget,
            and quality.</p>
            
            <p className='about2'>Talent for devising and implementing software solutions, 
            while automating and integrating systems to enhance productivity. 
            Skilled in performing requirement gathering and rapid prototyping to 
            reduce design and development time. Conversant communicator with 
            exceptional interpersonal, relationship-building, 
            problem-solving, and strategic / analytical thinking skills.
            </p>
            <div className='skills'>
            <h3>Skills:</h3>
            
            <p className='skill'>Frameworks & Libraries:</p>
            
            <span>Spring Framework | AngularJS | ExtJS</span>
            <p className='skill'>Design Libraries:</p>
            <span>Material Design	| Bootstrap</span>
            <p className='skill'>Development Tools:</p>
            <span>Github | VS Code | Contentful | ReactStrap | Mongoose | Mongo DB</span>
            <p className='skill'>Languages:</p>
            <span>JavaScript | CSS | JQuery | React | Angular | Express | Python | Typescript | SASS</span>
            </div>
        </div>
        
    )
}

export default About