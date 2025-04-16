import React from 'react'
import { Link } from 'react-router-dom';
function MyComponent5(){

    return(
            <div className="nav-bar">
                <div className="text-logo">G-Ainc</div>
                <div className="menu">   
  
                </div> 
              <Link to="/Message" className='contactUs'>contactMe</Link>
            </div>
    );
}
export default MyComponent5