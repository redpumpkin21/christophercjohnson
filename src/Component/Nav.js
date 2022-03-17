import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className= 'nav'>
            
                <Link to= '/'>
                    Home
                </Link>
            
            <a href= 'https://christophercjohnson.vercel.app/#form'>contact me</a>
            
            <a href='https://docs.google.com/document/d/1xV9EOuQh2WKUGFKEs3CxZUZSBPQIbJV3/edit?usp=sharing&ouid=107416650229481766405&rtpof=true&sd=true'> resume</a>
        </div>

    )}

export default Nav