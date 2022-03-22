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
            Full-stack software engineer who has experience getting his hands messy; 
            my unique background from working with executive chefs as well as surveying 
            archeological digs has sharpened my interpersonal communication, 
            honed in my attention to detail, and kept my passion for sifting 
            through “the weeds” to realize the culmination of hard work alive and well. 
            This background paired with my training has produced a software engineer who
             enjoys the grit and grind of everyday coding, whether 
             it’s investigating source codes for the backend, 
             or styling up the front-end with a little flair (thanks plating!) 
             I am hungry for new opportunities moving forward 
            and am eager to learn more about your business and how I can help.
            </p>
        </div>
        
    )
}

export default About