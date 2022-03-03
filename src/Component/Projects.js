const Projects = () => {
    return (
        <div className = 'Projects'>
            <article className= 'BookNRead'>
                <h5>Book N Read</h5>
                <img src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166749/Screen_Shot_2021-09-27_at_5.37.55_PM_epjm8z_Small_cdvxea.jpg'/>
                <p>
                This project came from working in GA’s bootcamp. 
                The project was made with React and Reactstap as 
                my front end. I used Contentful as a way to hold 
                my images so that I could populate them in my 
                project. Contentful was tricky to implement in the 
                front end due to the images being in a  separate part of 
                the JSON in which I had to map in my api call to get all 
                information in one place.
                </p>
            </article>

            <article className = 'Frizzy'>
                <h5>Frizzy</h5>
                <img src ='https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166714/Screen_Shot_2021-09-27_at_5.44.27_PM_cnvup1_Small_ebjh13.jpg'/>
                <p>
                Frizzy is a project application in which you can find ice cream near you. 
                Group project with three others where I was mainly
                responsible for putting all the pieces together 
                for everything to work and be viewable. 
                Reactstrap was only used to create a modal in the 
                checkout page.
                </p>
            </article>
        
            <article className= 'KDrama'>
                <h5>K-Drama Love</h5>
                <img src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166726/Screen_Shot_2021-09-27_at_6.09.45_PM_rmasxb_Small_ivofnq.jpg'/>
                <p>
                Group projects with one other person where 
                I tackled the front end with Angular and SASS.
                I used typescript as the javascript language and 
                set it up the front so that it auto-populates
                whenever more Kdramas are added to the back end. 
                MDBootstrap and NGBootstrap were used to implement 
                the carousel and the navbar.
                </p>
            </article>
                
            <article className= 'VideoGame'>
                <h5>VideoGame</h5>
                <img src= 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166738/Screen_Shot_2022-01-26_at_6.44.44_PM_slslke_Small_dr7vua.jpg'/>
                <p>
                Project where I utilized fullstack knowledge. 
                The backend was made with Django python and data 
                was created using postman. The front end was used 
                with React and React Router v6 to learn what new 
                things have been implemented and what has been 
                taking away dealing with the routes. I created a 
                usable search bar that only searches what video 
                game is in the backend.
                </p>           
            </article>
        
            
        </div>
    )
}

export default Projects