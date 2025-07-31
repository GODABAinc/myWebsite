import React from 'react'
import airCleaning from './assets/aircleaning.jpg'
import Profile1 from './assets/Mine1.jpg'
import Profile2 from './assets/Mine2.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import AnimateScroll from './AnimateScroll.jsx'


function MyComponent2(){

    return(
        <div className='profile1' id='knowMore'>
            <AnimateScroll type='slide-left'>
            <img   className='img1' src={Profile2}/>
            </AnimateScroll>
            <AnimateScroll type='slide-right'>
            <div className='imgText'>
                <span className='t1'>Hello I'm</span> <br />
                <span className='t2'>Godwin</span> <br />
                <span className='t3'>FullStack Developer</span> <br /> <br />
                <Link to="/Message" className='Button1'>My Works</Link>
                <Link to="/Message" className='Button1'>Contact Me</Link> <br /> <br />
                <span ><FontAwesomeIcon icon={faLinkedin} className="ic2"/></span>
                <span ><a href="mailto: abayomgodwin27@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="ic2"/></a></span>
            </div>
            </AnimateScroll>
        </div>
    );
}
export default MyComponent2