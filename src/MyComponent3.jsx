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
                    <p className='pp'>
                        Give your company, product or community a good brand and exposure to the world.
                    </p>
                </div>
                <div className='col'>
                    <h2>Offfice</h2>
                    <p className='pp'>Kronum-Kumasi</p>
                    <p className='pp'><a href="tel: +233595194441">+233595194441</a></p>
                    <span ><a href="mailto: abayomgodwin27@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="ic3"/></a></span>
                    <span ><a href="https://twitter.com/Godwin68238663"><FontAwesomeIcon icon={faXTwitter} className="ic3"/></a></span>
                    <span ><a href="https://instagram.com/life_of_godwin04"><FontAwesomeIcon icon={faInstagram} className="ic3"/></a></span>
                </div>
                <div className='col'>
                    <h2>Links</h2>
                    <p ><a href="#knowMore" className='pp'>Home</a></p>
                    <p ><a href="#myWorks" className='pp'>project</a></p>
                    <p ><a href="#experience" className='pp'>Experience</a></p>3l
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