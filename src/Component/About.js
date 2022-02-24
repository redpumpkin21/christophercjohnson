import Carousel, {CarouselItem} from "./Carousel"
import React from "react"

const About = () => {
    return(
        <div>
            <Carousel >
                <CarouselItem>item 1</CarouselItem>
                <CarouselItem>item 2</CarouselItem>
                <CarouselItem>item 3</CarouselItem>
            </Carousel>
            <p>
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