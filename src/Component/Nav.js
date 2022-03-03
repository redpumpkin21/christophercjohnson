import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
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