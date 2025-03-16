import React from 'react'
import airCleaning from './assets/aircleaning.jpg'
import Profile1 from './assets/Mine1.jpg'
import Profile2 from './assets/Mine2.jpg'



function MyComponent2(){

    return(
        <div className='profile1' id='knowMore'>
            <img   className='img1' src={Profile2}/>
            <div className='imgText'>
                <span className='t1'>Hello I'm</span> <br />
                <span className='t2'>Godwin</span> <br />
                <span className='t3'>FullStack Developer</span> <br />
                <button className='Button1'>My Works</button>
                <button className='Button1'>Contact Me</button>
            </div>
        </div>
    );
}
export default MyComponent2