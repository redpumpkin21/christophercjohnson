import ScrollToTop from "../Component/scrollToTop"

const VideoGame = () => {
    return(
        <div>
            <ScrollToTop />
            <img className ='vgImg'src='https://res.cloudinary.com/dx3a3l6k0/image/upload/v1643240979/Screen_Shot_2022-01-26_at_6.44.44_PM_slslke.png' />
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
            <p>github frontend</p>
            
            <a href='https://github.com/redpumpkin21/vgfront'> Front-end Git </a>
            <p>github backend</p>
            <a href='https://github.com/redpumpkin21/videogameapi'> Back-end Git </a>
            <a href='https://videogames-kohl.vercel.app/'>Site </a>
        </div>
        
        
    )
}

export default VideoGame