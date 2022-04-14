import { Link } from "react-router-dom"

import {BsGithub, BsLinkedin, BsFillEnvelopeFill} from 'react-icons/bs'

const Nav = () => {
    
    return (
        <div className= 'nav'>
            
            <Link to= '/'>
                Home
            </Link>            
            <a href= 'https://christophercjohnson.vercel.app/#form' ><BsFillEnvelopeFill /></a>
            <a href='https://www.linkedin.com/in/christopher-code-johnson/' target='_blank' rel= 'noreferror noopener'><BsLinkedin /></a>
            <a href='https://github.com/redpumpkin21' target='_blant' rel=' noreferror noopener'><BsGithub /></a>
            <a href='https://docs.google.com/document/d/1sIk2pfu08tuvqVwy4oSTbwFLryLwjos4O61rtBuXAIs/ecport?format=pdf target='_blank' rel= 'noreferror noopener'> Resume</a>
        </div>

    )}

export default Nav