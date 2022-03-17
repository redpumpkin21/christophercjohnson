import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className= 'nav'>
            <li>
                <Link to= '/'>
                    Home
                </Link>
            </li>
            <li><Link to='/contact'>
                    Contact Me
                </Link>
            </li>
            <li>
                resume
            </li>
        </div>
    )
}

export default Nav