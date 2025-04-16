import React from 'react'
import { Link } from 'react-router-dom';

function MyComponent1(){

    return(
            <div className="nav-bar">
                <div className="text-logo">G-Ainc</div>
                <div className="menu">   
                    <a href="#knowMore">Home</a>
                    <a href="#myWorks">Projects</a>
                    <a href="#experience">Experience</a>  
                </div> 
                <Link to="/Message" className='contactUs'>contactMe</Link>
            </div>
    );
}
export default MyComponent1