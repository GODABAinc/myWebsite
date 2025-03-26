import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';


function MyComponent3(){

    return(
       <footer>
            <div className='row' id="contactMe"> 
                <div className='col'>
                    <h2>G-Ainc</h2>
                    <p>
                        Give your company, product or community a good brand and exposure to the world.
                    </p>
                </div>
                <div className='col'>
                    <h2>Offfice & Details</h2>
                    <p>Kronum-Kumasi, Ghana</p>
                    <p>abayomgodwin27@gmail.com</p>
                    <p><a href="tel: +233595194441">+233595194441</a></p>
                    <span ><a href="mailto: abayomgodwin27@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="ic3"/></a></span>
                    <span ><a href="https://twitter.com/Godwin68238663"><FontAwesomeIcon icon={faXTwitter} className="ic3"/></a></span>
                    <span ><a href="https://instagram.com/life_of_godwin04"><FontAwesomeIcon icon={faInstagram} className="ic3"/></a></span>
                </div>
                <div className='col'>
                    <h2>Links</h2>
                    <p><a href="#knowMore">Home</a></p>
                    <p><a href="#myWorks">project</a></p>
                    <p><a href="#experience">Experience</a></p>
                </div>
                <div className='col'>
                    <h2>Contact Me</h2>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' placeholder='Type in your email' /> <br />
                    <label htmlFor="message"> Message: </label>
                    <input type="textarea" id="message" placeholder='Talk to me' className='textArea'/> <br /> <br />
                    <a href="" className='s1'>Submit</a> 
                </div>
            </div>
            <hr /> 
            <div className='ftext'>
                GODABAinc &copy; 2025 - All Rights Reserved
            </div>

       </footer>
        );
}
export default MyComponent3