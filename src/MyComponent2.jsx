import React from 'react'
import airCleaning from './assets/aircleaning.jpg'
import Profile1 from './assets/Mine1.jpg'
import Profile2 from './assets/Mine2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';


function MyComponent2(){

    return(
        <div className='profile1' id='knowMore'>
            <img   className='img1' src={Profile2}/>
            <div className='imgText'>
                <span className='t1'>Hello I'm</span> <br />
                <span className='t2'>Godwin</span> <br />
                <span className='t3'>FullStack Developer</span> <br />
                <button className='Button1'>My Works</button>
                <button className='Button1'>Contact Me</button> <br /> <br />
                <span ><FontAwesomeIcon icon={faLinkedin} className="ic2"/></span>
                <span ><a href="mailto: abayomgodwin27@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="ic2"/></a></span>
            </div>
        </div>
    );
}
export default MyComponent2