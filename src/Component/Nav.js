import { Link } from "react-router-dom"
import { useState } from "react"

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import {BsGithub, BsLinkedin, BsFillEnvelopeFill} from 'react-icons/bs'
import {IoHomeSharp} from 'react-icons/io5'
const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    return (
        <div className= 'nav'>
        <nav className="navBar">
            <button onClick={handleToggle}>
                {navbarOpen ? (<MdClose className='bar1' />): 
                (<FiMenu className= 'bar2' />  )}
    </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <Link to= '/'>
                <IoHomeSharp size={25}/>
            </Link>            
            <a href= 'https://christophercjohnson.vercel.app/#form' ><BsFillEnvelopeFill size={25}/></a>
            <a href='https://www.linkedin.com/in/christopher-code-johnson/' target='_blank' rel= 'noreferror noopener'><BsLinkedin size={25} /></a>
            <a href='https://github.com/redpumpkin21' target='_blank' rel=' noreferror noopener'><BsGithub  size={25}/></a>
            <a href='https://docs.google.com/document/d/1sIk2pfu08tuvqVwy4oSTbwFLryLwjos4O61rtBuXAIs/edit?usp=sharing' target='_blank' rel= 'noreferror noopener' className='Resume'> Resume</a>
            </ul>
        </nav>
            

        </div>

    )}

export default Nav