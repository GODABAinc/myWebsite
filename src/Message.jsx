import React, { useRef } from 'react';

function Message(){

    return(
        <div className="Mesme">
            <form className="form1" >
                <div className="head1">Talk to me</div>
                <div className="formInput1">
                    <label htmlFor="email"> Email: </label> <br />
                    <input type="text" name="email" placeholder="Enter your email" className="input1"/>
                </div>
                <div className="formInput1">
                    <label htmlFor="name"> Name: </label> <br />
                    <input type="text" name="name" placeholder="Enter your name" className="input1"/>
                </div>
                <div className="formInput1">
                    <label htmlFor="tel"> Phone Number: </label> <br />
                    <input type="tel" name="tel" placeholder="Enter your phone number" className="input1"/>
                </div>
                <div className="formInput1">
                    <label htmlFor="message"> Message: </label> <br />
                    <textarea name="message" id="message" rows="10" placeholder="Type your message" className='textArea1' ></textarea>
                </div>
                <div className="formInput1"> 
                    <div className="sub1">SUBMIT</div>
                </div>
            </form>

        </div>
    );
}
export default Message