import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className= 'nav'>
            
                <Link to= '/'>
                    Home
                </Link>
            
            <a href= 'https://christophercjohnson.vercel.app/#form'>contact me</a>
            
            <p>resume</p>
        </div>
    )
}

export default Nav