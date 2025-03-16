import React from 'react';

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
                    <p>ITL Road</p>
                    <p>Kronum-Kumasi</p>
                    <p>Ghana,West Africa</p>
                    <p>abayomgodwin27@gmail.com</p>
                    <p>+233595194441</p>
                </div>
                <div className='col'>
                    <h2>Links</h2>
                    <p><a href="">Home</a></p>
                    <p><a href="">My Work</a></p>
                    <p><a href="">Book</a></p>
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