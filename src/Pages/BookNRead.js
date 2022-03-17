const BookNRead = () => {
    return(
        <div>
            <img className ='bookImg' src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166749/Screen_Shot_2021-09-27_at_5.37.55_PM_epjm8z_Small_cdvxea.jpg'/>
            <p>This project came from working in GA’s bootcamp. The project was made with React and Reactstap as my front end. I used Contentful as a way to hold my images so that I could populate them in my project. Contentful was tricky to implement in the front end due to the images being in a  separate part of the JSON in which I had to map in my api call to get all information in one place. </p>
            <p>github frontend</p>
            <a href='https://github.com/redpumpkin21/BookNRead'> Front-end Git </a>
            <p>github backend</p>
            <p>link to site</p>
            <a href='https://booknread.vercel.app/'>Site</a>
        </div>
        
        
    )
}

export default BookNRead