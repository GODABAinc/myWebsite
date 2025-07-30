import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import  './navbar.css'

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

                </div> 
                <Link to="/Message" className='contactUs'>contactMe</Link>
            </div>
            </div>
    );
}
export default MyComponent1