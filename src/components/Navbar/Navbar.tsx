import { Link, NavLink, redirect } from 'react-router-dom';
import './Navbar.scss';
import logo from "../../assets/logo.png"
import { Fragment, useState } from 'react'
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)


    return (
        <header className="navbar-container">
            <div className='navbar-logo'>
                <img src={logo} className='navbar-logo-image'/>
            </div>
            <div className='navbar-links'>
                <NavLink to="/" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>Home</NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>Projects</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>Contact</NavLink>
            </div>
            <div className='navbar-socials' onClick={() => window.open("https://instagram.com/oda.knits_/", "_blank")}>
                <FaInstagram style={{fontSize:'1.2rem'}}></FaInstagram>
            </div>
        </header>
    )
}

export default Navbar;