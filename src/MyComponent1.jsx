import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'navbar.css'

function MyComponent1(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
            <div>
            <div className="nav-bar">
                <div className="text-logo">G-Acrypt</div>
                <div className="menu">   
                    <a href="#knowMore">Home</a>
                    <a href="#myWorks">Projects</a>
                    <a href="#experience">Experience</a>  
                </div> 
                <Link to="/Message" className='contactUs'>contactMe</Link>
            </div>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/#knowMore" onClick={toggleMenu}>Home</Link>
                    <a href="/#myWorks" onClick={toggleMenu}>Projects</a>
                    <Link to="/#experience" onClick={toggleMenu}>Experience</Link>
                </div>
            </div>
    );
}
export default MyComponent1